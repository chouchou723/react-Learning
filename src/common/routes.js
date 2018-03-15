import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from 'container'
import Login from 'pages/login'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
let a = localStorage.getItem('login');
console.log(a)
const to  = a==='1'?'/index':'/login';
const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Redirect from="/" to={to} />
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
    </div>
  </HashRouter>
)

export default routes;
