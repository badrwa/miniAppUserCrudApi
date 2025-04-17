import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { UserTable } from './UserTable'
import { UserAdd } from './UserAdd'
import { UserUpdate } from './UserUpdate'
import { UserDelete } from './UserDelete'
import style from './Layout.module.scss'

export const UserLayout = () => {
  return (
    <>
        <BrowserRouter>
            <nav className={` navbar navbar-expand-lg bg-body-tertiary ${style.container}`} >
                <ul className={`nav nav-underline ` }>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link" >Users List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/user/add'} className="nav-link" >Add Users</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route index element={<UserTable />} />
                <Route path='/user/add' element={<UserAdd />} />
                <Route path='/user/update/:id' element={<UserUpdate />} />
                <Route path='/user/delete/:id' element={<UserDelete />} />
                <Route path='*' element={<h1 className='text-center alert-danger'>404 Not Found</h1>} />

            </Routes>
        </BrowserRouter>

        <Outlet />
   
    </>
  )
}
