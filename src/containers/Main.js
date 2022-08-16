import React from 'react';
import { Switch, Route} from "react-router-dom";
import Home from '../components/public/Home.js';
import Wiki from '../components/wiki/Wiki.js';
import Repo from '../components/public/Repo.js';
import Blog from '../components/blog/Blog.js';
import Contact from '../components/public/Contact.js';
import Login from '../components/login/Login.js';
import { withContext } from '../components/login/Context';
const UserSignInWithContext = withContext(Login);


const Main = () => (
    <Switch>
        <Route path='/Home' component={Home} element={<Home />} />
        <Route path='/Wiki' component={Wiki} element={<Wiki />}/>
        <Route path='/Repo' component={Repo} element={<Repo />}/>
        <Route path='/Blog' component={Blog} element={<Blog />}/>
        <Route path='/Contact' component={Contact} element={<Contact />}/>
        <Route path='/Login' component={UserSignInWithContext} />}/>
    </Switch>

)


export default Main;