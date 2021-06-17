
import './App.css';
import Search from './search';

import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom"; 

const posts = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Alex' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Mark' },
];

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredPosts = filterPosts(posts, searchQuery);

  return <Router>
    <div className="App">
      <header className="App-header">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ul>
          {filteredPosts.map(post => (
            <li key={post.key}>{post.name}</li>
          ))}
        </ul>
      </header>
    </div>
  </Router>
}

export default App;
