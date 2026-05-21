import styles from '../header/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>ANUU</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
