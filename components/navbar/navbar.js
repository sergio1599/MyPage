import styles from './navbar.module.css';
import Link from 'next/link'
import Icon from "@mdi/react";
import {mdiDeveloperBoard, mdiGithub} from "@mdi/js";

const NavBarIcons = (props) => {
    return (<Icon path={props.path}
                  size={props.size}
                  color={props.color}
    />);
}
const NavBar = () => {
    let me = <NavBarIcons path={mdiDeveloperBoard} size={2} color={"#333"}/>
    return (<div className={styles.navbar}>
        <div className={styles.name}>
            <Link href={'/'}>
                <a>
                    {me}
                    👨🏻‍💻 Sergio Quintana
                </a>
            </Link>
        </div>
        <div className={styles.name}>
            <Link href={'/'}>
                <a>
                    📩 Contacto
                </a>
            </Link>
        </div>

        <div className={styles.name}>
            <Link href={'/'}>
                <a>
                    💻 Projects
                </a>
            </Link>
        </div>


    </div>);
}

export default NavBar;