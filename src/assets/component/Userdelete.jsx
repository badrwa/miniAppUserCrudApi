import React, { useContext } from 'react'
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom'

export const UserDelete = () => {
    const context = useContext(UserContext)
    const params = useParams() 
    const handleDelete = (e) => {
        e.preventDefault()
        context.actions.deleteUser({
            payload: {
                id: params.id
            }
        })
    }




  return (
    <>
    <h1>Do want to delete this user ?</h1>
    <div className="alert alert-danger mx-5 " role="alert">
      <h3><strong>Danger</strong>Delelition is irreversibale</h3>
    </div>
    <button className='btn btn-danger' type='submit' onClick={handleDelete}>DLELETE</button>
    
    </>
  )
}
