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
                <Cards alt={"Word Search and CrossWord"} image={'./images/word_search_and_crossword.png'}
                       title={'Word Search and CrossWord'} textTitle={'Word Search and CrossWord'}
                       paragraph={'This project  has two interfaces, one for wordsearch, and the other for crossword.'}/>
            </div>
            <div>
                <Cards alt={"Craps Game"} image={'./images/craps_game.png'}
                       title={'Craps Game'} textTitle={'Craps Game'}
                       paragraph={'This project was made to simulate the table game of craps .'}/>
            </div>
            <div>
                <Cards alt={"Craps Game"} image={'./images/craps_game.png'}
                       title={'Craps Game'} textTitle={'Craps Game'}
                       paragraph={'This project was made to simulate the table game of craps.'}/>
            </div>
            <div>
                <Cards alt={"Word Search and CrossWord"} image={'./images/word_search_and_crossword.png'}
                       title={'Word Search and CrossWord'} textTitle={'Word Search and CrossWord'}
                       paragraph={'This was a project made for a subject called TGS in which it has two interfaces, one' +
                       ' for wordsearch, and the other for crossword.'}/>
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