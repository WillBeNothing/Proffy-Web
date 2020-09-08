import React from 'react'
import {  BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/landing'
import TeacherList from './pages/TeacherLIst'
import TeacherForm from './pages/TeacherForm'
import Login from './pages/login'
import ForgotPassword from './pages/Forgot-Password'
import Register from './pages/Register'


function Routes() {
    return(
        <BrowserRouter> 
        
        <Route path="/auth"  component={Login} />
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/teach" component={TeacherForm} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/register" component={Register} />

        
        </BrowserRouter>
    )
}

export default Routes