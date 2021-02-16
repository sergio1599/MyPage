import styles from './info.module.css';
import Icon from '@mdi/react';
import {mdiFacebookGaming, mdiGithub} from "@mdi/js";
import React from 'react';
import TypeWriter from 'react-typewriter';


const Info = ({}) => {
    return (<div className={styles.rate}>
        <div className={styles.info}>
            <p></p>
            <TypeWriter typing={0.5}>HOLA MUNDO
            </TypeWriter>
            <img className={styles.picture} src={"/images/profile_picture(2).jpg"}/>
        </div>

    </div>);
};


export default Info;