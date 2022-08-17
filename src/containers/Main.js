import React from 'react';
import { Switch, Route} from "react-router-dom";
import Home from '../components/public/Home';
import Wiki from '../components/wiki/Wiki';
import Repo from '../components/public/Repo';
import Blog from '../components/blog/Blog';
import Contact from '../components/public/Contact';
import { withContext } from '../components/login/Context';
import Login from "../components/login/Login";
const LoginWithContext = withContext(Login);


const Main = () => (
    <Switch>
        <Route path='/Home' component={Home} element={<Home />} />
        <Route path='/Wiki' component={Wiki} element={<Wiki />}/>
        <Route path='/Repo' component={Repo} element={<Repo />}/>
        <Route path='/Blog' component={Blog} element={<Blog />}/>
        <Route path='/Contact' component={Contact} element={<Contact />}/>
        <Route path='/Login' component={Login} element={<Login />}/>
    </Switch>

)


export default Main;