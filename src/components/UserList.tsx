import {  useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList:React.FC = () => {
    const { error, loading, users } = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])
   
    if (loading){
        return (<div className="lds-default">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>)
    }
    if (error){
        return <h1>{error}</h1>
    }
    
  return (
    <div>{users.map(user => <div key={user.id}>{user.name}</div>)}</div>
  )
}

export default UserList