import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return <div>Please LogIn</div>

    return <div>Welcom{user.userName}</div>

}

export default Profile;