import React, { Component } from 'react'
import styled from 'styled-components'
import { Slide, Heading, Text } from 'spectacle'

const Button = styled.div`
  width: fit-content;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 0 auto;
  color: white;
  &:hover,
  &:active {
    border: 1px solid #ed254e;
    background-color: #ed254e;
  }
`

export default class Slide3 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'contrast',
      text: 'Reveal'
    }
  }

  handleCLick = () => {
    if (this.state.text === 'Reveal') {
      // todo send fetch request to activate switch
      postSwitch(
        'https://polar-eyrie-68563.herokuapp.com/switch/5c992a487dae01d2108fe22d'
      )
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
      this.setState({
        color: 'primary',
        text: 'Hide'
      })
    } else {
      this.setState({
        color: 'contrast',
        text: 'Reveal'
      })
    }
  }

  render () {
    return (
      <Slide transition={['fade']} bgColor='contrast'>
        <Heading textColor='main'>Go To</Heading>
        <Button onClick={this.handleCLick}>{this.state.text}</Button>
        <Text textColor={this.state.color}>
          p-hugo.github.io/censorship-presentation/
        </Text>
      </Slide>
    )
  }
}

function postSwitch (url, data = 'hello') {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
