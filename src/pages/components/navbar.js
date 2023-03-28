import styles from '@/app/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

function Navbar(){
    const router = useRouter();
    const path = router.pathname;
    return(
        <div class="bg-gray-700">
            <nav className={styles.contanier}>
                <Link className={styles.evia} href='/'>
                    Evia<span className={styles.dt}>Dt</span>
                </Link>  
                <ul className={styles.navbtn}>
                    <li>
                        <Link href='/'  legacyBehavior>
                            <a className={path === '/' ? styles.active : styles.link}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'  legacyBehavior>
                            <a className={path === '/about' ? styles.active : styles.link}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog'  legacyBehavior>
                            <a className={path === '/blog' ? styles.active : styles.link}>Blogs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact' legacyBehavior>
                            <a className={path === '/contact' ? styles.active : styles.link}>Contact</a>
                        </Link>
                    </li>
                </ul>
                <Link href='/login' className={styles.search}>
                </Link>
            </nav>
        </div>
    )
}
export default Navbar;