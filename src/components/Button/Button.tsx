import React, { PropsWithChildren, FC } from 'react'

import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'default' | 'icon'
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'default',
  ...buttonProps
}) => {
  return (
    <button className={`${styles.button} ${variant === 'icon' && styles.icon}`} {...buttonProps}>
      {children && <span>{children}</span>}
    </button>
  )
}
