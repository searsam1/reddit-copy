import './App.css';
import { ReactComponent as MyIcon } from './reddit.svg';
import RedditPopular from './components/RedditPopular';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CommentsPage from './components/CommentsPage'; // Import the CommentsPage component


function App() {
  return (
    <Router>
      <div className="App">
        <header className='top-header'>
           <h1 className='display-6'>Simple <MyIcon className="myIconSize" /> Reddit</h1>
          <nav>
            <Link className='btn btn-dark me-2' to="/">Popular Posts</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<RedditPopular />} />
          <Route path="/comments/:postId" element={<CommentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
