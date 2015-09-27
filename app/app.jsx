/*eslint-disable no-unused-vars */
import React from 'react'
import { Router } from 'react-router'
import Index from './pages/index.jsx'
import { createHistory, useBasename } from 'history'

const history = useBasename(createHistory)({
  basename: '/public'
})

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: Index,
    childRoutes: [
      route('chapter-1'),
      route('chapter-2'),
    ]
  } ]
}

function route(fileName) {
  return {
    path: fileName,
    getComponent(location, cb) {
      require.ensure([], (require) => {
        cb(null, require(`./pages/${fileName}.jsx`))
      })
    }
  }
}

React.render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('main')
)

// I've unrolled the recursive directory loop that is happening above to get a
// better idea of just what this huge-apps Router looks like
//
// import { Route } from 'react-router'

// import App from './components/App'
// import Course from './routes/Course/components/Course'
// import AnnouncementsSidebar from './routes/Course/routes/Announcements/components/Sidebar'
// import Announcements from './routes/Course/routes/Announcements/components/Announcements'
// import Announcement from './routes/Course/routes/Announcements/routes/Announcement/components/Announcement'
// import AssignmentsSidebar from './routes/Course/routes/Assignments/components/Sidebar'
// import Assignments from './routes/Course/routes/Assignments/components/Assignments'
// import Assignment from './routes/Course/routes/Assignments/routes/Assignment/components/Assignment'
// import CourseGrades from './routes/Course/routes/Grades/components/Grades'
// import Calendar from './routes/Calendar/components/Calendar'
// import Grades from './routes/Grades/components/Grades'
// import Messages from './routes/Messages/components/Messages'

// React.render(
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="calendar" component={Calendar} />
//       <Route path="course/:courseId" component={Course}>
//         <Route path="announcements" components={{
//           sidebar: AnnouncementsSidebar,
//           main: Announcements
//         }}>
//           <Route path=":announcementId" component={Announcement} />
//         </Route>
//         <Route path="assignments" components={{
//           sidebar: AssignmentsSidebar,
//           main: Assignments
//         }}>
//           <Route path=":assignmentId" component={Assignment} />
//         </Route>
//         <Route path="grades" component={CourseGrades} />
//       </Route>
//       <Route path="grades" component={Grades} />
//       <Route path="messages" component={Messages} />
//       <Route path="profile" component={Calendar} />
//     </Route>
//   </Router>,
//   document.getElementById('example')
// )
