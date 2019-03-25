import React, { Component } from 'react'
import { Deck } from 'spectacle'
import Slide1 from './slide1'
import Slide2 from './slide2'
import Slide3 from './slide3'
import theme from '../utils/theme'
const configs = {
  transition: ['zoom', 'slide'],
  transitionDuration: 500,
  theme
}

export default class Presentation extends Component {
  render () {
    return (
      <Deck {...configs}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </Deck>
    )
  }
}
