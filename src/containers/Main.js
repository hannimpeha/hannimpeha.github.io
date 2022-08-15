import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../components/Home.js';
import Wiki from '../components/Wiki.js';
import Repo from '../components/Repo.js';
import Blog from '../components/Blog.js';
import Contact from '../components/Contact.js';
import Login from '../components/Login.js';


const Main = () => (
        <Routes>
            <Route path='/Home' component={Home} element={<Home />} />
            <Route path='/Wiki' component={Wiki} element={<Wiki />}/>
            <Route path='/Repo' component={Repo} element={<Repo />}/>
            <Route path='/Blog' component={Blog} element={<Blog />}/>
            <Route path='/Contact' component={Contact} element={<Contact />}/>
            <Route path='/Login' component={Login} element={<Login/>}/>
        </Routes>
)



export default Main;