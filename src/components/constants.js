export const IDS = {
  width: 'width',
  height: 'height',
  states: 'states',
  shuffle: 'shuffle',
}

export const DEFAULT = {
  [IDS.width]: 1200,
  [IDS.height]: 700,
  [IDS.states]: 18,
  [IDS.shuffle]: false,
}

export const STATUSES = {
  play: 'Play',
  pause: 'Pause',
}

// NB event.preventDefault() for Space rewrites normal behavior of checkboxes
export const KEY_FOR_PAUSE = ' '
export const KEY_FOR_RESET = 'Enter'
