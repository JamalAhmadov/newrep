import React from 'react'
import styles from './VacanciesCard.module.css'
import { MdBusiness } from "react-icons/md";
import { GoClock } from "react-icons/go";
const VacanciesCard = () => {
    return (
        <div className={styles.card}>
            <div  className={styles.cardleft}>
                <h4 className={styles.jobtitle}>
                    Qida üzrə Stok kontrol mütəxəssisi
                </h4>
                <div className={styles.spns}>
                    <span className={styles.spn}><MdBusiness /> Ayta Market</span> <span className={styles.spn}><GoClock /> bugün</span>
                </div>
            </div>
            <div className={styles.cardright}>
                <button className={styles.premiumbtn}>Premium</button> <button  className={styles.detailbtn}>Ətraflı</button>
            </div>
        </div>
    )   
}

export default VacanciesCard
