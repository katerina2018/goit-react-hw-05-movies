import {lazy, Suspense} from 'react'
import { Route, Routes } from "react-router-dom";
import{Navigation} from "./Navigation"
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
import { Container, Header } from "./App.styled";

const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const MovieDetaies = lazy(() => import('../pages/MovieDetaies'))

export const App = () => {
  return (
    <Container>
      <Header>
        <Navigation/>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetaies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
         </Route> 
      </Routes>
      </Suspense>
    </Container>
  );
};
