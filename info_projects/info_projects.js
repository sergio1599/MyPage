import styles from './info_projects.module.css';
import Icon from '@mdi/react';
import {
    mdiLanguageCpp,
    mdiLanguageJava,
    mdiLanguageJavascript,
    mdiReact,
    mdiGit,
    mdiLanguageCss3, mdiLanguageHtml5
} from "@mdi/js";
import React from 'react';
import Cards from "../components/cards/cards";




const InfoProjects = ({}) => {
    return (<>
        <div className={styles.info_projects}>
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <p>work in progress 🔨</p>
            </div>
            <div>
                <p>work in progress 🔨</p>
            </div>
            <div>
                <p>work in progress 🔨</p>
            </div>
            <div>
                <p>work in progress 🔨</p>
            </div>
        </div>
        </>)
};

export default InfoProjects;