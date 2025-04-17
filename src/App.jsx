import { createContext, useState } from 'react'
import './App.css'
import { UserLayout } from './assets/component/UserLayout'


export const UserContext = createContext({
  users: [],
  lastId:0,
  AddUser: () => null,
  updateUser: () => null,
  deleteUser: () => null
})

function App() {
  const [users, setUsers] = useState([])
  const [lastId,setLastId] = useState(0)

  const AddUser = (data) => {
    setUsers((prevState) => [...prevState,data.payload])
    setLastId(prevState => prevState + 1)
    window.history.back()
  }
  const deleteUser = (data) => {
    setUsers((prevState) => prevState.filter(user => user.id !== parseInt(data.payload.id)))
    window.history.back()
  }
  const updateUser = (data) => {
    const {id,...rest}= data.payload
    setUsers((prevState) => prevState.map(user => {
      if(user.id === id){
        return {id: user.id, ...rest}
      }else{
        return user
      }}
    ))
    window.history.back()
  }

  return (
    <>
    <UserContext.Provider value={
      {users:users,
      lastId:lastId,
      actions:{
        AddUser,
        updateUser,
        deleteUser
      }
      }}>
       <UserLayout />
    </UserContext.Provider>
    </>
  )
}

export default App
