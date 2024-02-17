import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../Pages/Profile'

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;