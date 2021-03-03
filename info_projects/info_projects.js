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



const InfoProjects = ({}) => {
    return (<>
        <div className={styles.info_projects}>
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