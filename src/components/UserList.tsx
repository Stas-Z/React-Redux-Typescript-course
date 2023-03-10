import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

const UserList:React.FC = () => {
    const { error, loading, users } = useTypedSelector(state => state.user)
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
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