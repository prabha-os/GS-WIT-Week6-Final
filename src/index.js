import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
//react-router-dom was installed so that the browser doesnot refresh 
//when we wan to navigate with in the browser using navbar
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PageNotFound from './components/PageNotFound';
import Learn from './components/Learn';

//navigate is used when we wan to check if the person is eligible to go to a particular area of the webpage
//when we are using nested routes we donot need to mention / in the path as the browser adds it by itself
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='learn' element={<Learn />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter> ,
  document.getElementById('root')
);


