import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from '../components/public/Home';
import Wiki from '../components/wiki/Wiki';
import Blog from '../components/blog/Blog';
import Contact from '../components/public/Contact';
import Context, {withContext } from '../Context';
import Login from "../components/login/Login";
import Signin from '../components/login/Signin';
import Signup from "../components/login/Signup";
import Header from "./Header";
import NotFound from "./NotFound";
import PrivateRoute from "../PrivateRoute";
const LoginWithContext = withContext(Login);
const SigninWithContext = withContext(Signin);
const SignupwithContext = withContext(Signup);
const HeaderWithContext = withContext(Header)


const Main = () => (
    <Router>
        <div>
            <HeaderWithContext />
            <LoginWithContext />
        <Switch>
            <Route path='/Home' component={Home} element={<Home />} />
            <Route path='/Wiki' component={Wiki} element={<Wiki />}/>
            <Route path='/Blog' component={Blog} element={<Blog />}/>
            <Route path='/Contact' component={Contact} element={<Contact />}/>
            <Route path='/Signup' component={SignupwithContext}/>
            <Route path='/Signin' component={SigninWithContext} />
            <Route component={NotFound} />
        </Switch>
        </div>
    </Router>
)
export default Main;