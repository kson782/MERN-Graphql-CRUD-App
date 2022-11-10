import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AnimeList from './components/AnimeList';
import AnimeItem from './components/AnimeItem';
import NewAnime  from './components/NewAnime';
import EditAnime from './components/EditAnime';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animes' element={<AnimeList />} />
          <Route path='/animes/:id' element={<AnimeItem />} />
          <Route path='/animes/new' element={<NewAnime />} />
          <Route path='/animes/edit/:id' element={<EditAnime />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
