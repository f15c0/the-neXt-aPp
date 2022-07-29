import Link from "next/link";
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return ( 
        <div> 
            <nav>
                <h1 className="logo-text">the NeXt-app</h1>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <Link href="/users/"><a>Users</a></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;