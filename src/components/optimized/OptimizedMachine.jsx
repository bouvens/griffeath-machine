import React, { useCallback, useEffect, useState } from 'react'
import { DEFAULT, IDS, STATUSES } from '../constants'
import { getRandomField, getUpdatedField } from '../common/utils'
import CanvasField from '../common/CanvasField'
import ControlBlock from '../common/ControlBlock'
import style from '../common/GriffeathMachine.css'

export default function OptimizedMachine() {
  const [configuration, setConfiguration] = useState(DEFAULT)
  const [status, setStatus] = useState(STATUSES.pause)

  const [field, setField] = useState(getRandomField({
    width: configuration.width,
    height: configuration.height,
    states: configuration.states,
  }))

  const [requestID, setRequestID] = useState()

  useEffect(() => {
    const nextStep = () => {
      cancelAnimationFrame(requestID) // Do we need it? No! Do we want it? Yeah!
      try {
        console.log('update field'.toUpperCase(), status)
        setField(getUpdatedField({ ...configuration, field }))
        if (status === STATUSES.play) {
          console.log('plan new'.toUpperCase())
          setRequestID(requestAnimationFrame(nextStep))
        }
      } catch (e) {
        console.log('error field'.toUpperCase(), e)
        setField(getRandomField(configuration))
        setStatus(STATUSES.pause)
      }
    }

    console.log('effect status'.toUpperCase(), status)
    if (status === STATUSES.play) {
      nextStep()
    }
    return () => {
      cancelAnimationFrame(requestID)
    }
  }, [status, configuration, field, requestID])

  const handleNew = useCallback(() => {
    setField(getRandomField(configuration))
  }, [configuration])

  const handleNext = useCallback(() => {
    setField(getUpdatedField({ ...configuration, field }))
  }, [configuration, field])

  const handlePlay = () => {
    switch (status) {
      case STATUSES.play:
        setStatus(STATUSES.pause)
        break
      case STATUSES.pause:
        setStatus(STATUSES.play)
        // Does it work or we should uncomment useEffect?
        // nextStep()
        break
      default:
    }
  }

  const changeHandler = (name, newValue) => {
    let value = newValue

    if (name === IDS.states && value > 255) {
      value = 255
    }

    setConfiguration({ ...configuration, [name]: value })
  }

  return (
    <>
      <ControlBlock
        state={configuration}
        status={status}
        onChange={changeHandler}
        onReset={handleNew}
        onPlayPause={handlePlay}
        onNextStep={handleNext}
      />
      <div
        onClick={handlePlay}
        className={style.field}
        role="presentation"
        title="⏯"
      >
        <CanvasField
          field={field}
          width={configuration.width}
          height={configuration.height}
          states={configuration.states}
          shuffle={configuration.shuffle}
        />
      </div>
    </>
  )
}
