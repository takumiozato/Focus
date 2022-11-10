import Link from 'next/link'
import Image from 'next/image'
import TimerIcon from '../../../assets/timer_icon.svg'
import ReportIcon from '../../../assets/report_icon.svg'
import styles from './style.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_logo}>Focus Time</h1>
      <h2>SVGの型が見つからないエラーはどうする？</h2>
      <nav>
        <ul className={styles.header_nav_list}>
          <li>
            <Link href="#" passHref className={styles.header_nav_link}>
              <a>
                <Image src={TimerIcon} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" passHref className={styles.header_nav_link}>
              <a>
                <Image src={ReportIcon} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
