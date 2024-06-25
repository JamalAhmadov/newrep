import React from 'react'
import styles from "./Prices.module.css"
const Prices = () => {
    return (
        <div className='flex justify-center py-16' >
            <div className='container'>
                <h2 className=' text-center text-3xl'>Qiymətlər</h2>
                <div className={styles.pricesBox}>
                    <div className={styles.pricesCard}>
                        <h2 className={styles.packname}>Busy 25</h2>
                        <h3 className={styles.packprice}><span className=' text-3xl font-semibold'>25</span> AZN</h3>

                        <ul className={styles.feature}>
                            <li><strong> Özəlliklər</strong></li>


                            <li>1 premium vakansiya (1 günlük)</li>
                            <li>"About company" bölməsinə düzəliş etmək</li>
                            <li>Şirkətin qalereyasına şəkil əlavə etmək</li>
                            <li>Dedlayn keçəndən sonra vakansiyanı silmək</li>
                        </ul>
                        <button className={styles.btn}>Sifariş et</button>
                    </div>
                    <div className={styles.pricesCard}>
                        <h2 className={styles.packname}>Busy 100</h2>
                        <h3 className={styles.packprice}><span className=' text-3xl font-semibold'>100</span> AZN</h3>

                        <ul className={styles.feature}>
                            <li><strong> Özəlliklər</strong></li>
                            <li>7 vakansiya</li>
                            <li>Vakansiyaları 3 günlük premium etmək</li>
                            <li>"About company" bölməsinə düzəliş etmək</li>
                            <li>Şirkətin qalereyasına şəkil əlavə etmək</li>
                            <li>Dedlayn keçəndən sonra vakansiyanı silmək</li>
                            <li>Video/frame əlavə etmək</li>
                            <li>Dedlayn keçəndən sonra vakansiyanı silmək</li>
                            <li>Bank köçürmə yolu ödəniş</li>
                            <li>Anonim rəyləri silmək</li>
                        </ul>
                        <button className={styles.btn}>Sifariş et</button>
                    </div>
                    <div className={styles.pricesCard}>
                        <h2 className={styles.packname}>Busy 450</h2>
                        <h3 className={styles.packprice}><span className=' text-3xl font-semibold'>450</span> AZN</h3>

                        <ul className={styles.feature}>
                            <li><strong> Özəlliklər</strong></li>
                            <li>35 vakansiya</li>
                            <li>Vakansiyaları 7 günlük premium etmək</li>
                            <li>"About company" bölməsinə düzəliş etmək</li>
                            <li>Şirkətin qalereyasına şəkil əlavə etmək</li>
                            <li>Dedlayn keçəndən sonra vakansiyanı silmək</li>
                            <li>Video/frame əlavə etmək</li>
                            <li>Dedlayn keçəndən sonra vakansiyanı silmək</li>
                            <li>Bank köçürmə yolu ödəniş</li>
                            <li>Anonim rəyləri silmək</li>
                            <li>Sosial mediada paylaşmaq</li>
                            <li> Xüsusi sosial media kontenti</li>
                        </ul>
                        <button className={styles.btn}>Sifariş et</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
