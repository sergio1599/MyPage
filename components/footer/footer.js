import styles from './footer.module.css';
import Icon from '@mdi/react';
import {mdiFacebookGaming, mdiGithub} from "@mdi/js";

const FooterCards = (props) => {
    return (<Icon path={props.path}
                  size={props.size}
                  color={props.color}
    />);
}

const Footer = ({}) => {
    let gitHub = <FooterCards path={mdiGithub} size={5} color={"#333"}/>
    let facebook = <FooterCards path={mdiFacebookGaming} size={5} color={"blue"}/>
    return (<div className={styles.footer}>
        <footer className={"footer"}>
            {gitHub}
            {facebook}
        </footer>
    </div>);
};

export default Footer;