import React, { useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
import style from './Table.module.scss'

export const UserTable = () => {
    const context = useContext(UserContext)
  return (
    <>
    <h1 className='text-center m-5'>Users List</h1>
    <table className={`table table-striped table-hover table-bordered table-responsive table-sm table-light m-5 ${style.container}`}> 
        <caption className="text-center">Users List</caption>
        <thead className="thead-inverse table-primary text-center table-sm table-bordered table-striped table-hover table-responsive table-light">
            <tr>
                <th>#ID</th>
                <th>Full Name</th>
                <th>Country</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {(context.users?.length > 0) ? context.users.map((user,key) => (
                <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.fullName}</td>
                    <td>{user.country}</td>
                    <td>
                        <Link to={`/user/update/${user.id}`} className='btn btn-primary mx-1'>Update</Link>
                        <Link to={`/user/delete/${user.id}`} className='btn btn-danger mx-1'>Delete</Link>
                    </td>
                </tr>
            )) : (
                <tr>
                    <td colSpan="4" className="text-center">No users found</td>
                </tr>
            )}
        </tbody>
    </table>
    <div className='text-center my-5'>
            <p>Copyright &copy; 2025 Badr Moutaouakil</p>
    </div>
    </>

  )
}




