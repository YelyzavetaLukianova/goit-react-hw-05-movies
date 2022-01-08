import './App.css';
import Nav from './components/Nav/Nav';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import CastPage from './pages/MovieDetailsPage/CastPage/CastPage.jsx';
// import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage.jsx';
// import HomePage from './pages/HomePage/HomePage.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage.jsx'),
);

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Suspense fallback="Loading...">
          <Switch>
            <Route exact path="/movies">
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </>
    </BrowserRouter>
  );
}

export default App;
