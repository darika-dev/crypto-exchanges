import { ReactNode, FC } from 'react'

import styles from './Wrapper.module.css'

type WrapperProps = {
  children?: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ children }) => (
  <main className={styles.wrapper}>{children}</main>
)
