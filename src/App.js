import {BrowserRouter,Routes,Route} from "react-router-dom";
import Slider from "./pr/Slider";
import Atr from "./pr/Atr";
import Error from "./pr/Error";
import Prac from "./pr/Prac";
import Cprop from "./pr/Cprop";
import React, { useState } from 'react';
import Lost from './components/Lost.js'
import Playing from './components/Playing.js'
import Start from './components/Start.js'
import Won from './components/Won.js'
import Book from './pr/Book';
import Person from "./pr/Person";
import Aobj from "./pr/Aobj";
import ParentComponent from "./pr/ParentComponent";
function App() {  /* const arr = [1, 2, 3, 4, 5];*/
const aobj=[ {id: 1, ntitle: 'Hello World1', ncontent: 'Welcome to learning React!1'},
{id: 2, ntitle: 'Hello World2', ncontent: 'Welcome to learning React!2'},
{id: 3, ntitle: 'Hello World3', ncontent: 'Welcome to learning React!3'},
{id: 4, ntitle: 'Hello World4', ncontent: 'Welcome to learning React!4'}]
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ]; 
  const obj = {name: 'Alice', age: 29, country: 'Austria'}
  const [game, setGame] = useState('start')  // setup useState
  // create a handleClick function
  const handleClick = (gameState) => {
    setGame(gameState)
  }
  const x=100;
  return (
    <>
    <ParentComponent/>
    <Aobj aobj={aobj}/>
     <Person {...obj} />
    <Book posts={posts} />
    {/*<Book arr={arr} />*/}
      <h1>Switch Case</h1>
{(() => {
  switch (1) {
    case 1:
      return <Start  />
     
    case 2:
      return <Playing />
      break;
    case 3:
      return <Won/>
      break;
    case 4:
      return <Lost/>
      break;
    default:
      return null;
  }
})()}
    <h4>{(x)<150?"greater" :"smaller"}</h4>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Slider/>}>
        <Route path="atr" element ={<Atr/>}/>
        </Route>       
        <Route path="/div/" element={<div>This is a div</div>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    <div>
      <Prac name= "siya"/> 
      <Prac name= "siya1"/> 
      <Prac name= "siya2"/> 
    </div>
    <div>
      <Cprop text={{name:'class prop1'}}/> 
      <Cprop text={{name:'class prop2'}}/>
    </div>
    </>
  );
}
export default App;
