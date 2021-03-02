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
    /*let me = <NavBarIcons path={mdiDeveloperBoard} size={2} color={"#333"}/>*/
    return (<>
            <div className={styles.navbar}>

                <div className={styles.rate}>
                    <div className={styles.elements}>
                        <div className={styles.name}>
                            <Link href={"/"}><a>Sergio Quintana</a></Link>
                        </div>
                        <div className={styles.contact}>
                            <Link href={"/"}><a>📩 Contact</a></Link>
                        </div>
                        <div className={styles.projects}>
                            <Link href={"/"}><a>💻 Projects</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;