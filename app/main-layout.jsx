import React from 'react'
import { Link } from 'react-router'
import LessonSelect from './components/lesson-select.jsx'

const MainLayout = React.createClass({
  render () {
    return (
      <div>
        <header className="container">
          <div className="row">
            <div className="col-md-4">
                <h2>Nihongo PaaTee</h2>
            </div>

            <div className="col-md-4">
                <LessonSelect />
            </div>
          </div>
        </header>

        {this.props.children}


      </div>
    )
  }
})

export default MainLayout
