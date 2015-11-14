import React, { PropTypes } from 'react'

const LessonPage = React.createClass({
  getInitialState() {
    return {
      content: <span>Pick something to practice</span>
    };
  },

  render () {
    let links = [];

    this.props.lessons.forEach((lesson) =>{
      var clicky = (e) => {
        e.preventDefault()
        this.setState({content: <lesson.component />})
      }

      links.push(<a href="" onClick={clicky}>{lesson.name}</a>)
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 practice-menu">
            <h4>Practice</h4>
            {links}
          </div>
          <div className="col-md-offset-1 col-md-9">
            {this.state.content}
          </div>
        </div>
      </div>
    )
  }
})

export default LessonPage
