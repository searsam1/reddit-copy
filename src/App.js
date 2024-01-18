import './App.css';
import { ReactComponent as MyIcon } from './reddit.svg';
import RedditPopular from './components/RedditPopular';
import HelloWorld from './components/HelloWorld'; // Import HelloWorld component
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CommentsPage from './components/CommentsPage'; // Import the CommentsPage component


function App() {
  return (
    <Router>
      <div className="App">
        <header className='top-header'>
          <MyIcon className="myIconSize" /> Simple Reddit
        </header>
        <nav>
          <Link className='btn btn-dark me-2' to="/">Popular Posts</Link>
          <Link className='btn btn-dark me-2' to="/hello-world">Hello World</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RedditPopular />} />
          <Route path="/hello-world" element={<HelloWorld />} />
          <Route path="/comments/:postId" element={<CommentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
