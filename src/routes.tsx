import React from 'react'
import {  BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/landing'
import TeacherList from './pages/TeacherLIst'
import TeacherForm from './pages/TeacherForm'


function Routes() {
    return(
        <BrowserRouter> 
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/teach" component={TeacherForm} />

        
        </BrowserRouter>
    )
}

export default Routes