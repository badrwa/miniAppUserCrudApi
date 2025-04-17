import { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../App'
export const UserUpdate = () => {
    const context = useContext(UserContext)
    const [currentUser, setCurrentUser] = useState({})
    const [errorMessage, setErrorMessage] = useState('');
    const params = useParams()
    const fullName = useRef()
    const country = useRef()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error message
        if (!fullName.current.value || !country.current.value) {
            setErrorMessage('Please fill in all fields.');
            return;
        } 

        context.actions.updateUser({
            payload: {
                fullName: fullName.current.value,
                country: country.current.value,
                id: currentUser.id,
            },
        });
    };

        useEffect(() => {
            const user = context.users.find(user => user.id === parseInt(params.id))
            if (user) {
                setCurrentUser(user)
                fullName.current.value = user.fullName
                country.current.value = user.country
            }
        }, [params.id, context.users])
  

  return (
    <>
        <h1 className='my-3 text-center'>Update User</h1>
        {errorMessage && <div className="alert alert-danger mx-5 " role="alert">{errorMessage}</div>}
        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
            <label  className="visually-hidden">ID</label>
            <input type="text" readOnly className="form-control-plaintext" id="currentId"  defaultValue={currentUser?.id} />
        </div>
        <div className="col-auto">
            <label  className="visually-hidden">Full Name</label>
            <input type="text" name="fullName" id="fullName" className="form-control" placeholder="Enter your name" ref={fullName} defaultValue={currentUser?.fullName} />
        </div>
        <div className="col-auto">
                <select name="country" id="country" className="form-control" ref={country} defaultValue={currentUser?.country} key={currentUser?.country}>
                    <option value=''>Select your country</option>
                    <option value="MA" >Morocco</option>
                    <option value="USA" >USA</option>
                    <option value="Canada" >Canada</option>
                    <option value="UK">UK</option>
                </select>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">UPDATE</button>
        </div>
        </form>
        <div className='text-center my-5'>
            <p>Copyright &copy; 2025 Badr Moutaouakil</p>
        </div>
</>
  )

}





