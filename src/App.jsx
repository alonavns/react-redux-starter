import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import {
  Route,
  Switch
} from 'react-router-dom'

import { Header } from 'components'

import './App.scss'

class App extends Component {
  render() {
    return (
      <FadeIn>
        <div className={`AppWrapper`}>
          <Header />
          {
            <Switch>
              <Route exact path='/'
                render={() => <div>Hello</div>}
              />
            </Switch>
          }
        </div>
      </FadeIn >
    )
  }
}

export default App
