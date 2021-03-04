import styles from './footer.module.css';
import Icon from '@mdi/react';
import {mdiFacebook, mdiGithub, mdiInstagram, mdiLinkedin, mdiTwitter} from "@mdi/js";
import Link from "next/link";

const FooterCards = (props) => {
    return (<Icon path={props.path}
                  size={props.size}
                  color={props.color}
    />);
}

const Footer = ({}) => {
    let gitHub = <FooterCards path={mdiGithub} size={2} color={"#ffff"}/>
    let facebook = <FooterCards path={mdiFacebook} size={2} color={"#ffff"}/>
    let instagram = <FooterCards path={mdiInstagram} size={2} color={"#ffff"}/>
    let linkedin = <FooterCards path={mdiLinkedin} size={2} color={"#ffff"}/>
    let twitter = <FooterCards path={mdiTwitter} size={2} color={"#ffff"}/>


    return (<div className={styles.footer}>
        <footer>
            <div className={styles.rate}>
                <div className={styles.elements}>
                    <div className={styles.git}>
                        <Link href={"https://github.com/sergio1599"}><a title={'GitHub'}>{gitHub}</a></Link>
                    </div>
                    <div className={styles.instagram}>
                        <Link href={"https://www.instagram.com/s_alejandro_15/"}><a title={'Instagram'}>{instagram}</a></Link>
                    </div>
                    <div  className={styles.linkedin}>
                        <Link href={"https://www.linkedin.com/in/sergio-quintana-926566207/"}><a title={'LinkedIn'}>{linkedin}</a></Link>
                    </div>
                    <div className={styles.twitter}>
                        <Link href={"https://twitter.com/AlejoQ_15"}><a title={'Twitter'}>{twitter}</a></Link>
                    </div>
                    <div  className={styles.facebook}>
                        <Link href={"https://www.facebook.com/SergioAlejandro1599/"}><a title={'Facebook'}>{facebook}</a></Link>
                    </div>
                </div>


                <div>
                    <p className={styles.text}>Made with ❤ by me</p>
                    <p className={styles.text}>Copyright © 2021 | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>);
};

export default Footer;