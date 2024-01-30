import './App.css';
import { ReactComponent as MyIcon } from './reddit.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CommentsPage from './components/CommentsPage'; // Import the CommentsPage component
import AskReddit from "./components/AskReddit"
import Popular from "./components/Popular"
import ProgrammerHumor from './components/ProgrammerHumor';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='top-header'>
          <h1 className='display-6'>Simple <MyIcon className="myIconSize" /> Reddit</h1>
          <nav>
            <Link className='btn btn-dark me-2' to="/popular">Popular Posts</Link>
            <Link className='btn btn-dark me-2' to="/AskReddit">Ask Reddit</Link>
            <Link className='btn btn-dark me-2' to="/ProgrammerHumor">Programmer Humor</Link>

          </nav>
        </header>

        <Routes>
          <Route path="/Popular" element={<Popular />} />
          <Route path="/AskReddit" element={<AskReddit />} />
          <Route path="/comments/:postId" element={<CommentsPage />} />
          <Route path="/ProgrammerHumor" element={<ProgrammerHumor />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
