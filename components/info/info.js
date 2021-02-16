import styles from './info.module.css';
import Icon from '@mdi/react';
import {mdiFacebookGaming, mdiGithub} from "@mdi/js";
import React from 'react';
import TypeWriter from 'react-typewriter';


const Info = ({}) => {
    return (<div className={styles.rate}>
        <div className={styles.info}>
            <div>
                <TypeWriter typing={0.5}><h2>HELLO WORLD</h2></TypeWriter>
            </div>

            <div>
                <p>I'm Sergio Quintana </p>
                <img className={styles.picture} src={"/images/profile_picture(2).jpg"}/>
            </div>

        </div>
    </div>)
        ;
};


export default Info;