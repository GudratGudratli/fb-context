import React from 'react'
import {LoginForm} from './LoginForm'
import LoginLogo from './Logo'
import "./style.scss"
export default function LoginMain() {
  return (
    <div className='mainn'>
    <LoginLogo/>
    <LoginForm/>
    </div>
  )
}