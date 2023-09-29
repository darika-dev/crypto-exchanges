import styles from './Loading.module.css'

export const Loading = () => {
  const LOADING_TEXT = 'loading'

  return (
    <p className={styles.container}>
      {LOADING_TEXT.split('').map((item, key) => (
        <span key={item + key} className={styles.letter}>
          {item}
        </span>
      ))}
    </p>
  )
}
