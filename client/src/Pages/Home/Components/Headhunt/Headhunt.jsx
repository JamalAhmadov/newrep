import React from 'react'
import styles from './Headhunt.module.css'
import scope from '../../../../assets/lupa.png'
const Headhunt = () => {
    return (
        <>
        <div className={styles.content}>
        <div className={styles.headhunt}>
                <div className='container  flex justify-between items-center'>
                    <div>
                        <h2 className={styles.title}>Headhunt xidmətləri</h2>
                        <h4 className={styles.subtitle}>Şirkətlərə "çətin" namizədləri
                            tapmaqda kömək edirik.</h4>
                        <button className={styles.btn}>MARAQLIDIR</button>
                    </div>

                </div>
            </div>
            <div className={styles.imgBox}>
                <img src={scope} alt="jjqjs" />
            </div>
        </div>
          
        </>


    )
}

export default Headhunt
