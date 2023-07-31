import React, { useState } from 'react'
import styles from './Auth.module.css'
import Logo from '../../assets/LOGO.png'
import { LogInForm } from '../../components/LogInForm/LogInForm'
import { SignUpForm } from '../../components/SignUpForm/SignUpForm'

export const Auth = () => {
  const [activeTab, setActiveTab] = useState('logIn')

  return (
    <div className={styles.content}>
      <div className={styles.header}>

        <h2 id={styles.welcome}>Welcome to</h2>
        <div className={styles.logo}>
          <a href='/home'><img src={Logo} alt='U-know logo' /></a>
        </div>
        <p>Please enter your details</p>
      </div>

      <div className={styles.body}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              activeTab === 'logIn' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('logIn')}
          >
            <p>Log In</p>
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === 'signUp' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('signUp')}
          >
            <p>Sign Up</p>
          </div>
        </div>

        {activeTab === 'logIn'
          ? (
            <LogInForm />
            )
          : (
            <SignUpForm />
            )}
      </div>
    </div>
  )
}
