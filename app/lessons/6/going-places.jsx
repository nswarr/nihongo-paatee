var React = require('react');
import { pickRandomItem } from '../../lib/rando'

const GoingPlaces = React.createClass({

  again() {
    this.setState({});
  },

  render() {

    var characters = [
      'Smith',
      'Chan',
      'Lin',
      'Hoffman'
    ];

    var when = [
      'today',
      'tomorrow',
      'day after tomorrow',
      'this week',
      'next week',
      'this month',
      'next month',
      'this year',
      'next year',
      'yesterday',
      'two days ago',
      'last week',
      'last month',
      'two months ago',
      'last year'
    ];

    var didOrDidnt = [
      'did',
      "didn't"
    ]

    var direction = [
      'go to',
      'come to',
      'return'
    ];

    var places = [
      'Osaka Office',
      'Tokyo Station',
      'Narita Airport',
      'Kyoto Branch Office',
      'Ueno Park',
      "Friend's house"
    ];

    return (
      <div>
        <p>{pickRandomItem(characters)}</p>
        <p>{pickRandomItem(when)}</p>
        <p>{pickRandomItem(places)}</p>
        <p>{pickRandomItem(didOrDidnt)}</p>
        <p>{pickRandomItem(direction)}</p>
        <button onClick={this.again}>Mo Ichido</button>
      </div>
    );
  }

});

module.exports = GoingPlaces;
