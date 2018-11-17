import React from 'react'
import PropTypes from 'prop-types'

function reloadPage () {
  window.location.reload()
}

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch () {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return [
        <h1>{'I\'m sorry. Something went wrong.'}</h1>,
        <button onClick={reloadPage} type="button">Reload</button>,
      ]
    }
    return this.props.children
  }
}
