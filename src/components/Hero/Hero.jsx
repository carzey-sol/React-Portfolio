import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';


export const Hero = () => {
    return ( <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Mukesh</h1>
            <p className={styles.description}>I'm a Computer Science Student. 
            <span>Wanna collab and develop something together?</span>
            </p>
            <a href="mailto:123@gmail.com" className={styles.contactBtn}>Contact me</a>  </div>
            <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="hero image" 
            className={styles.heroImg}/>

            <div className={styles.topBlur} />
             <div className={styles.bottomBlur} />
      
    </section>
    );
};