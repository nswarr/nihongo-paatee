import React from 'react'

const LessonIndex = React.createClass({
  getInitialState() {
    return {
      selectedPracticeIndex: 0
    };
  },

  render () {
    let links = [];
    let lessons = this.props.children;

    // If there's only one child, there's no array.  It's a react thing.
    if(!lessons.length) {
      lessons = [lessons]
    }

    lessons.forEach((lesson, i) => {
      var clicky = (e) => {
        e.preventDefault()
        this.setState({selectedPracticeIndex: i})
      }

      links.push(<a key={lesson.props.name} href="" onClick={clicky}>{lesson.props.name}</a>)
    });

    var Practice = lessons[this.state.selectedPracticeIndex].props.component;

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

export default LessonIndex
