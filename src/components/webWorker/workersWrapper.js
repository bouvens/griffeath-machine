const NUMBER_OF_WORKERS = 4

let workers = []
let finished
let result

function initializeResult () {
  finished = 0
  result = []
}

function returnUpdated (handleUpdate) {
  let length = 0
  for (let i = 0; i < NUMBER_OF_WORKERS; i += 1) {
    length += result[i].length
  }

  let offset = 0
  const flattened = new Int8Array(length)

  for (let i = 0; i < NUMBER_OF_WORKERS; i += 1) {
    flattened.set(result[i], offset)
    offset += result[i].length
  }
  handleUpdate(flattened)
  initializeResult()
}

const catchUpdate = (i, handleUpdate) => ({ data }) => {
  result[i] = data
  finished += 1
  if (finished === NUMBER_OF_WORKERS) {
    returnUpdated(handleUpdate)
  }
}

export function terminateWorkers () {
  workers.forEach((worker) => {
    worker.terminate()
  })
  workers = []
}

const catchError = (handleError) => (error) => {
  terminateWorkers()
  initializeResult()
  handleError(error)
}

export function initializeWorkers (Worker, handleUpdate, handleError) {
  for (let i = 0; i < NUMBER_OF_WORKERS; i += 1) {
    workers[i] = new Worker()
    workers[i].addEventListener('message', catchUpdate(i, handleUpdate))
    workers[i].addEventListener('error', catchError(handleError))
  }
}

export function updateWithWorkers (options, jobSize) {
  let from = jobSize % NUMBER_OF_WORKERS
  const step = (jobSize - from) / NUMBER_OF_WORKERS

  initializeResult()

  for (let i = 0; i < NUMBER_OF_WORKERS; i += 1) {
    const to = from + step
    workers[i].postMessage({
      ...options,
      from: i === 0 ? 0 : from,
      to,
    })
    from = to
  }
}
