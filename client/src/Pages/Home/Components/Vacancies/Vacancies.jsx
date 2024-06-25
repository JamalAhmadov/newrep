// import React from 'react'
// import styles from './Vacancies.module.css'
// import VacanciesCard from '../../../../Components/VacanciesCard/VacanciesCard'
// const Vacancies = () => {
//   return (
//     <div className={styles.vacancies}>
//       <div className='container'>
//         <div className={styles.category}>
//           <div className={styles.radioinps}>
//             <label className={styles.radioLabel}>
//               <input type="radio" name="userrole" value="1" className={styles.radioInput} />
//               <span className={styles.radioLabel}>Son vakansiyalar</span>
//             </label>
//             <label className={styles.radioLabel}>
//               <input type="radio" name="userrole" value="2" className={styles.radioInput} />
//               <span className={styles.radioLabel}>Premium</span>
//             </label>
//             <label className={styles.radioLabel}>
//               <input type="radio" name="userrole" value="3" className={styles.radioInput} />
//               <span className={styles.radioLabel}>Yüksək maaşlı</span>
//             </label>
//             <label className={styles.radioLabel}>
//               <input type="radio" name="userrole" value="4" className={styles.radioInput} />
//               <span className={styles.radioLabel}>Könüllü (volontyor)</span>
//             </label>
//           </div>
//         </div>
//         <div className={styles.vacanciesBox}>
//             <VacanciesCard/>
//         </div>
//         <div className={styles.loadmoreBox}>
//             <button className={styles.loadmoreBtn}>Bütün vakansiyalar </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Vacancies


import React, { useState } from 'react'
import styles from './Vacancies.module.css'
import VacanciesCard from '../../../../Components/VacanciesCard/VacanciesCard'

const Vacancies = () => {
  const [selectedRole, setSelectedRole] = useState('1'); // Set default value to '1'

  const handleRadioChange = (event) => {
    setSelectedRole(event.target.value);
  }

  return (
    <div className={styles.vacancies}>
      <div className='container'>
        <div className={styles.category}>
          <div className={styles.radioinps}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="userrole"
                value="1"
                className={styles.radioInput}
                checked={selectedRole === '1'}
                onChange={handleRadioChange}
              />
              <span className={styles.radioLabel}>Son vakansiyalar</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="userrole"
                value="2"
                className={styles.radioInput}
                checked={selectedRole === '2'}
                onChange={handleRadioChange}
              />
              <span className={styles.radioLabel}>Premium</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="userrole"
                value="3"
                className={styles.radioInput}
                checked={selectedRole === '3'}
                onChange={handleRadioChange}
              />
              <span className={styles.radioLabel}>Yüksək maaşlı</span>
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="userrole"
                value="4"
                className={styles.radioInput}
                checked={selectedRole === '4'}
                onChange={handleRadioChange}
              />
              <span className={styles.radioLabel}>Könüllü (volontyor)</span>
            </label>
          </div>
        </div>
        <div className={styles.vacanciesBox}>
          <VacanciesCard />
        </div>
        <div className={styles.loadmoreBox}>
          <button className={styles.loadmoreBtn}>Bütün vakansiyalar</button>
        </div>
      </div>
    </div>
  )
}

export default Vacancies

