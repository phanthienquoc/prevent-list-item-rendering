import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import LandingPage from '../components/LandingPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;