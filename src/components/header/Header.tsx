import styles from "../../components/header/Header.module.scss"
import Link from 'next/link';

const  Headers: React.FC = () => {
  return (
    <header className={styles.headers}>
      <div className="container">TaskCraft</div>
      <nav className={styles.nav}>
        <ul className={styles.listen}>
          <li className={styles.card}>
            <Link  href="/home">Home Page</Link>
          </li>
          <li className={styles.card}>
            <Link className={styles.link}  href="/main">Main Page</Link>
          </li>
          <li className={styles.card}>
            <Link  href="/profile">Profile</Link>
          </li>
          <li className={styles.card}>
          <Link  href="/instruction">Instruction</Link>
        </li>
          <li className={styles.card}>
            <Link  href="/logout">Logout</Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Headers;