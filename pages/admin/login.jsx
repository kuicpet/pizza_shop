import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Login.module.css'

const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)

  const router = useRouter()
  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      })
      router.push('/admin')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Admin Login</h1>
        <input
          placeholder='username'
          type='text'
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='password'
          type='password'
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  )
}

export default Login
