import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {


  return (
    <div className={styles.registrar}>
      <h1 className={styles.text}>Cadastre-se para postar</h1>
      <p className={styles.text}>Crie seu usuário e compartilhe suas histórias</p>
      <form className={styles.formBox}>
        <label className={styles.formLabel}>
          <span className={styles.text}>Nome:</span>
          <input className={styles.userInput} type="text" name="displayName" required placeholder='Nome de usuário' />
          <span className={styles.text}>E-mail:</span>
          <input className={styles.userInput} type="email" name='userEmail' required placeholder='E-mail' />
          <span className={styles.text}>Senha:</span>
          <input className={styles.userInput} type="password" name='userPassword' required placeholder='Senha' />
          <span className={styles.text}>Confirme sua senha:</span>
          <input className={styles.userInput} type="password" name='confirmPassword' required placeholder='Confirme sua Senha' />
        </label>
        <button className={styles.submitButton}>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register