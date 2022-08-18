import React from 'react';
import { Switch, Route} from "react-router-dom";
import Home from '../components/public/Home';
import Wiki from '../components/wiki/Wiki';
import Repo from '../components/public/Repo';
import Blog from '../components/blog/Blog';
import Contact from '../components/public/Contact';
import {Context, withContext } from '../Context';
import Login from "../components/login/Login";
import Signin from '../components/login/Signin';
import PrivateRoute from "../components/login/PrivateRoute"
import Authen from "../components/login/Authenticated";
import Signup from "../components/login/Signup";
const LoginWithContext = withContext(Login);
const SigninWithContext = withContext(Signin);
const AuthWithContext = withContext(Authen)


const Main = () => (
    <Switch>
        <Route path='/Home' component={Home} element={<Home />} />
        <Route path='/Wiki' component={Wiki} element={<Wiki />}/>
        <Route path='/Repo' component={Repo} element={<Repo />}/>
        <Route path='/Blog' component={Blog} element={<Blog />}/>
        <Route path='/Contact' component={Contact} element={<Contact />}/>
        <Route path='/Login' component={LoginWithContext}/>
        <Route path='/Signup' component={Signup}/>
        <PrivateRoute path='/Signin' component={SigninWithContext} />
    </Switch>
)


export default Main;