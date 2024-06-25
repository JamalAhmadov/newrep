import React from 'react'
import styles from './JoinBot.module.css'
const JoinBot = () => {
    return (
        <div className={styles.joinbot}>
            <div className='container'>
                <div className={styles.content}>
                    <div className={styles.customtitle}>
                        <h2 className={styles.title}>İş axtarışlarına vaxt itirmə!</h2>
                    </div>
                    <h3 className={styles.subtitle}>Telegram bot-a abunə ol, həyatını asanlaşdır!</h3>
                    <div className={styles.btnBox}>
                        <button className={styles.joinbtn}>Abunə ol</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinBot
