import { Menu } from "../Menu/Menu"
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header} >
        <Menu />
    </header>
  )
}
