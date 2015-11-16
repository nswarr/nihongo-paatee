import React from 'react'

const LessonPage = React.createClass({
  getInitialState() {
    return {
      selectedPracticeIndex: 0
    };
  },

  render () {
    let links = [];

    this.props.lessons.forEach((lesson, i) =>{
      var clicky = (e) => {
        e.preventDefault()
        this.setState({currentPractice: i})
      }

      links.push(<a href="" onClick={clicky}>{lesson.name}</a>)
      links.push(<br />)
    });

    var Practice = this.props.lessons[this.state.selectedPracticeIndex].component;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 practice-menu">
            <h4>Practice</h4>
            {links}
          </div>
          <div className="col-md-offset-1 col-md-9">
            <Practice />
          </div>
        </div>
      </div>
    )
  }
})

export default LessonPage
