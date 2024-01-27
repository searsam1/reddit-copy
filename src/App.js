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
           <h1 className='display-6'>Simple <MyIcon className="myIconSize" /> Reddit</h1>
          <nav>
            <Link className='btn btn-dark me-2' to="/">Popular Posts</Link>
            <Link className='btn btn-dark me-2' to="/hello-world">Hello World</Link>
          </nav>
        </header>

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
