import React from 'react'
import './login.css'
import { Button } from '@material-ui/core'
import {auth ,provider} from './firebase';
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'



function Login() {
    const [ state  ,dispatch ] = useStateValue();
    const signIn = () => {
       auth.signInWithPopup(provider)
       .then(result => {
     
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        })
        
        })
       .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login-logo">
                <img src={require('./images/facebook.png')} alt="..."/>

                <h1>Facebook</h1>
            </div>
            <Button type="submit" onClick={signIn}>  Sign In</Button>   
        </div>
    )
}

export default Login
