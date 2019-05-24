module.exports = function WorkersWrapper (
  Worker,
  handleUpdate,
  handleError,
  numberOfWorkers = navigator.hardwareConcurrency,
) {
  let workers = []
  let finished
  let result

  function reinitializeResult () {
    finished = 0
    result = []
  }

  function returnUpdated () {
    let length = 0
    for (let i = 0; i < numberOfWorkers; i += 1) {
      length += result[i].length
    }

    let offset = 0
    const flattened = new Int8Array(length)

    for (let i = 0; i < numberOfWorkers; i += 1) {
      flattened.set(result[i], offset)
      offset += result[i].length
    }
    handleUpdate(flattened)
    reinitializeResult()
  }

  const catchUpdate = (i) => ({ data }) => {
    result[i] = data
    finished += 1
    if (finished === numberOfWorkers) {
      returnUpdated(handleUpdate)
    }
  }

  this.terminate = () => {
    workers.forEach((worker) => {
      worker.terminate()
    })
    workers = []
  }

  const catchError = (error) => {
    this.terminate()
    reinitializeResult()
    handleError(error)
  }

  this.initialize = () => {
    for (let i = 0; i < numberOfWorkers; i += 1) {
      workers[i] = new Worker()
      workers[i].addEventListener('message', catchUpdate(i))
      workers[i].addEventListener('error', catchError)
    }
  }

  this.initialize()

  this.start = (options, jobSize) => {
    let from = jobSize % numberOfWorkers
    const step = (jobSize - from) / numberOfWorkers

    reinitializeResult()

    for (let i = 0; i < numberOfWorkers; i += 1) {
      const to = from + step
      workers[i].postMessage({
        ...options,
        from: i === 0 ? 0 : from,
        to,
      })
      from = to
    }
  }
}
