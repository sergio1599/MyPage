import styles from './info.module.css';
import Icon from '@mdi/react';
import {mdiLanguageCpp, mdiLanguageJava, mdiLanguageJavascript, mdiBash, mdiReact, mdiGit} from "@mdi/js";
import React from 'react';
import TypeWriter from 'react-typewriter';

const InfoCards = (props) => {
    return (<Icon path={props.path}
                  size={props.size}
                  color={props.color}
    />);
}

const Info = ({}) => {
    let java = <InfoCards path={mdiLanguageJava} size={2} color={"#000000"}/>
    let javascript = <InfoCards path={mdiLanguageJavascript} size={2} color={"#000000"}/>
    let cpp = <InfoCards path={mdiLanguageCpp} size={2} color={"#000000"}/>
    let bash= <InfoCards path={mdiBash} size={2} color={"#000000"}/>
    let react= <InfoCards path={mdiReact} size={2} color={"#000000"}/>
    let git= <InfoCards path={mdiGit} size={2} color={"#000000"}/>

    return (<div className={styles.rate}>
        <div className={styles.info}>
            <div>
                <TypeWriter typing={0.5}><h1>HELLO WORLD</h1></TypeWriter>
                <h1 className={styles.font_title}>ABOUT ME</h1>
                <p className={styles.font_paragraph}>I'm currently studying Computer Science at the
                    <a href={"http://www.uptc.edu.co/"}> UPTC </a>, I actually living in <a
                        href={"https://www.google.com/maps/p" +
                        "lace/Duitama,+Boyac%C3%A1/@5.8259915,-73.0301255,14z/data=!3m1!4b1!4m5!3m4!1s0x8e6a3f0ca12f6173:0x" +
                        "6a043a55d2f7de6e!8m2!3d5.8268951!4d-73.0329273?hl=es-419"}> Duitama </a>, in my free time I play
                        video games, whatch series, and codify, I try to lear something new every day</p>
                <p className={styles.font_paragraph}>You can follow me and view my work in
                    <a href={"https://github.com/sergio1599"}> GitHub </a> and I have open my <a> Telegram </a>
                    for any questions.</p>
            </div>

            <div className={styles.down}>
                <p>I'm Sergio Quintana </p>
                <img className={styles.picture} src={"/images/profile_picture(2).jpg"}/>
            </div>

        </div>
        <div className={styles.skills}>
            <div></div>
            <div>
                <h1 className={styles.font_title}>SKILLS  🚀</h1>
                <div className={styles.skills_elements}>
                    {java}
                    {javascript}
                    {cpp}
                    {bash}
                    {react}
                    {git}
                </div>

            </div>
        </div>
    </div>)
        ;
};


export default Info;