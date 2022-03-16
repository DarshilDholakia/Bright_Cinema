import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import MovieContainer from './containers/MovieContainer';
import NextButton from './components/NextButton';
// import PreviousButton from './components/PreviousButton';

function App() {


  return (
    <>
    <Title />
    <MovieContainer />
    </>
  );
}

export default App;
