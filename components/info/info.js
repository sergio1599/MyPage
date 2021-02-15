import styles from './info.module.css';
import Icon from '@mdi/react';
import {mdiFacebookGaming, mdiGithub} from "@mdi/js";
import React from 'react';
import TypeWriter from 'react-typewriter';


const Info = ({}) => {
    return (<div className={styles.rate}>
        <div className={styles.info}>
            <p></p>
            <TypeWriter typing={1}>Soy Sergio Alejandro Quintana vargas, tengo 21 años, actualmente soy estudiante de Ingeniería de Sistemas Y Computación
                en la Universidad Pedagógica y Tecnológica De Colombia (UPTC), vivo en Duitama, Boyacá - Colombia.
            </TypeWriter>
            <p></p>
        </div>

    </div>);
};


export default Info;