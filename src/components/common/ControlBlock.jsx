// we can disable particular accessibility because we give global keyboard control
/* eslint-disable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */

import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import { Check, Connector, Input } from 'state-control'
import { IDS, KEY_FOR_PAUSE, KEY_FOR_RESET, MODIFIER_FOR_STEP, STATUSES } from '../constants'
import style from './GriffeathMachine.css'

let previousOnChange = null

function ControlBlock({ state, status, onChange, onReset, onPlayPause, onNextStep }) {
  // if (previousOnChange === state) {
  //   console.log('rerender CB with no change of state'.toUpperCase())
  // } else {
  //   console.log('update state'.toUpperCase())
  //   previousOnChange = state
  // }

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case KEY_FOR_PAUSE:
          event.preventDefault()
          if (event.getModifierState(MODIFIER_FOR_STEP)) {
            onNextStep()
          } else {
            onPlayPause()
          }
          break
        case KEY_FOR_RESET:
          event.preventDefault()
          onReset()
          break
        default:
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <Connector
        state={state}
        onChange={onChange}
      >
        <Input
          id={IDS.width}
          label="Field width"
          defaultNum={1}
        />
        <Input
          id={IDS.height}
          label="Field height"
          defaultNum={1}
        />
        <Input
          id={IDS.states}
          label="Number of states"
          defaultNum={1}
        />
        <Check
          id={IDS.shuffle}
          label="Shuffle colors"
        />
      </Connector>
      <p>
        <span onClick={onReset} role="button">
          <span className={style.key}>Enter</span>
          <span className={style.activeDescription}>New (Reset)</span>
        </span>
      </p>
      <p>
        <span onClick={onPlayPause} role="button">
          <span className={style.key}>Space</span>
          <span className={style.activeDescription}>Play / Pause</span>
        </span>
      </p>
      <p className={status !== STATUSES.pause ? style.hidden : undefined}>
        <span onClick={onNextStep} role="button">
          <span className={style.key}>Shift</span>
          {' + '}
          <span className={style.key}>Space</span>
          <span className={style.activeDescription}>One step forward</span>
        </span>
      </p>
    </>
  )
}

ControlBlock.propTypes = {
  state: PropTypes.exact({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    states: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
  }).isRequired,
  status: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
}

export default memo(ControlBlock)
