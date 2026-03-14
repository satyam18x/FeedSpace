import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import CreatePost from './pages/createpost'
import Feed from './pages/feed'
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<h1>Please open /createpost to create a post or /feed to see the feed</h1>} />
      <Route path='/createpost' element={<CreatePost />} />
      <Route path='/feed' element={<Feed />} />
    </Routes>
   </Router>
  )
}

export default App