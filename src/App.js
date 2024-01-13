import './App.css';
import { ReactComponent as MyIcon } from './reddit.svg';
import { PostPreview } from './components/PostPreview';
import RedditPopular from './components/RedditPopular';
function App() {
  return (
    <div className="App">
      <header className='top-header'>
        <MyIcon className="myIconSize" /> Simple Reddit
      </header>
      <RedditPopular />
    </div>
  );
}

export default App;
