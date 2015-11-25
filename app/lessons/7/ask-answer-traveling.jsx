import React from 'react'
import {Countries} from '../../vocab/countries'
import {People} from '../../vocab/people'
import {DirectionVerbs} from '../../vocab/direction-verbs'
import randomWhen from '../../lib/random-when'
import {pickRandomItem} from '../../lib/rando'
import VocabWord from '../../components/vocab-word.jsx'

const AskAboutTravel = React.createClass({
  again() {
    this.setState({})
  },

  render () {
    let person = pickRandomItem(People)
    let direction = pickRandomItem(DirectionVerbs)
    let toCountry = pickRandomItem(Countries)
    let fromCountry = pickRandomItem(Countries)
    let when = randomWhen()

    while(fromCountry == toCountry) {
      fromCountry = pickRandomItem(Countries)
    }

    return (
      <div>
        <h2 className="practice-title">Ask when the person traveled from a given country and answer</h2>
        <div className="row">
          <div className="vocab-box">
            <h4>Person</h4>
            <VocabWord word={person} />
          </div>
          <div className="vocab-box">
            <h4>When</h4>
            <VocabWord word={when} />
          </div>
        </div>

        <div className="row">
          <div className="vocab-box">
            <h4>Direction</h4>
            <VocabWord word={direction} />
          </div>
        </div>
        
        <div className="row">
          <div className="vocab-box">
            <h4>To</h4>
            <VocabWord word={toCountry} />
          </div>
          <div className="vocab-box">
            <h4>From</h4>
            <VocabWord word={fromCountry} />
          </div>
        </div>

        <button className="btn" onClick={this.again}>もいちど</button>
      </div>
    )
  }
})

export default AskAboutTravel
