import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import Jumbo from './Components/Jumbo/Jumbo'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import './App.css'
import ClassCards from './Components/ClassCards/ClassCards';
import VestibularFreePlay from './Pages/Classes/VestibularFreePlay';
import StoryTime from './Pages/Classes/StoryTime'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Jumbo/>
    <NavBar/>

    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/sensoryPlayGroup'>
        <ClassCards/>
      </Route>
      <Route exact path='/vestibularFreePlay'>
        <VestibularFreePlay/>
      </Route>
      <Route exact path='/storyTime'>
        <StoryTime />
      </Route>

    </Switch>

    <Footer/>
    </BrowserRouter>
  );
}

export default App;