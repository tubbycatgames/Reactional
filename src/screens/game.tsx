import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { ResponseType, prompt } from '../utils/prompt'
import { SchemeText, SchemePrimaryButton } from '../components/schemed'
import { SwipeBoard } from '../components/boards'

import { ScreenView } from './view'
import { t } from 'i18n-js'

interface Props {
  goal: string
  timeout: number
}

interface State {
  resolve: Function
  time: number
  type: ResponseType
}

export default class GameScreen extends Component<Props, State> {
  static defaultProps = {
    goal: 'up',
    timeout: 10000,
  }

  state = {
    resolve: (direction: string) => {},
    time: -1,
    type: -1,
  }

  resolvePrompt = (direction: string) => () => {
    this.state.resolve(direction)
  }

  startGame = () => {
    this.setState(
      {
        time: -1,
        type: -1,
      },
      async () => {
        const testPrompt = await prompt(
          new Promise((resolve) => {
            this.setState({ resolve })
          }),
          this.props.goal,
          this.props.timeout
        )

        this.setState({
          time: testPrompt.time,
          type: testPrompt.type,
        })
      }
    )
  }

  componentDidMount() {
    this.startGame()
  }

  render() {
    return (
      <ScreenView>
        <SwipeBoard
          onDown={this.resolvePrompt('down')}
          onLeft={this.resolvePrompt('left')}
          onRight={this.resolvePrompt('right')}
          onUp={this.resolvePrompt('up')}
        >
          <View style={styles.container}>
            <SchemeText>Type: {this.state.type}</SchemeText>
            <SchemeText>Time: {this.state.time}</SchemeText>
          </View>
        </SwipeBoard>
        <SchemePrimaryButton
          accessibilityLabel={t('buttons.game.replay.label')}
          onPress={this.startGame}
          title={t('buttons.game.replay.title')}
        />
      </ScreenView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
})
