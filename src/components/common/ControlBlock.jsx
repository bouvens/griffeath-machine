import React from 'react'
import PropTypes from 'prop-types'
import { Check, Connector, Input } from 'state-control'
import { IDS, STATUSES } from '../constants'
import style from './GriffeathMachine.css'

export default function ControlBlock({ state, onChange, onReset, onPlayPause, onNextStep }) {
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
      <p><em>Press Space or click field for play / pause</em></p>
      <button type="button" className={style.bigButton} onClick={onReset}>
        New
      </button>
      <button type="button" className={style.bigButton} onClick={onPlayPause}>
        {state.status === STATUSES.play ? STATUSES.pause : STATUSES.play}
      </button>
      {state.status === STATUSES.pause && (
        <button type="button" className={style.bigButton} onClick={onNextStep}>
          Next step
        </button>
      )}
    </>
  )
}

ControlBlock.propTypes = {
  state: PropTypes.exact({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    states: PropTypes.number.isRequired,
    shuffle: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
}
