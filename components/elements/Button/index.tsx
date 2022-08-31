import { ReactNode } from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  onClick: () => void
  color: 'primary' | 'secondary' | 'skeleton'
}
const Button: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(styles.button, {
        [styles.button_primary]: props.color === 'primary',
        [styles.button_secondary]: props.color === 'secondary',
        [styles.button_skeleton]: props.color === 'skeleton',
      })}>
      {props.children}
    </button>
  )
}

export default Button
