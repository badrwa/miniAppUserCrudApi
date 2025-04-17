import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../App'

export const UserAdd = () => {
    const context = useContext(UserContext)

    const fullName = useRef(null)
    const country = useRef(null)
    const reset = () => {
        fullName.current.value = ''
        country.current.value = ''
    }

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => { 
        e.preventDefault();
        setErrorMessage(''); // Reset error message

        if (!fullName.current.value || !country.current.value) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        context.actions.AddUser({
            payload: {
                fullName: fullName.current.value,
                country: country.current.value,
                id: context.lastId + 1
            }  
        })
        reset()
    }



    return (
        <>
            <h1 className='my-3 text-center'>Add User</h1>
            {errorMessage && <div className="alert alert-danger mx-5 " role="alert">{errorMessage}</div>}
            <form className="row g-3 col-12" onSubmit={handleSubmit}>
                <div className="col-md-6 row mx-auto g-3">
                <div className="col-auto mx-auto">
                    <label className="visually-hidden">ID</label>
                    <input type="text" readOnly className="form-control-plaintext" id="currentId" value={context.lastId + 1} />
                </div>
                <div className="col-auto mx-auto">
                    <label className="visually-hidden">Full Name</label>
                    <input type="text" name="fullName" id="fullName" className="form-control" placeholder="Enter your name" ref={fullName} />
                </div>
                <div className="col-auto mx-auto">
                    <label className="visually-hidden">Country</label>
                    <select name="country" id="country" className="form-control" ref={country}>
                        <option value=''>Select your country</option>
                        <option value="MA">Morocco</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select>
                </div>
                <div className="col-auto mx-auto">
                    <button type="submit" className="btn btn-primary mb-3">ADD</button>
                </div>

                </div>
                
        </form>

        <div className='text-center my-5'>
            <p>Copyright &copy; 2025 Badr Moutaouakil</p>
        </div>
        
    </>
  )

}


