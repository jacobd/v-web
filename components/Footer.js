import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        First observed 2021, &copy;{new Date().getFullYear()}
      </footer>
    </>
  )
}
