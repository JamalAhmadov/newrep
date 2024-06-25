import React, { useState } from 'react';
import styles from './Faq.module.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={toggleFAQ}>
                <h3 className={styles.question}>{question}</h3>
                <button className={styles.btn}>{isOpen ? '-' : '+'}</button>
            </div>
            {isOpen && <div className={styles.faqAnswer}><p className={styles.answer}>{answer}</p></div>}
        </div>
    );
};

const FAQfunc = () => {
    const faqList = [
        {
            question: 'Keçmiş vakansiyanı silmək istəyirəm. Nə edim?',
            answer: 'Əgər siz ödənişi etmisinizsə və balansınızda 1 AZN də olsa məbləğ varsa, istənilən zaman sizin şirkətə aid keçmiş vakansiyanı silə bilərsiniz.'
        },
        {
            question: 'Vakansiyanı yerləşdirmək üçün bütün xanaları doldurmalıyam?',
            answer: 'Xeyr. Yalnız hansı sahələri doldurmaq üçün məlumatınız varsa, onları doldurun.Lakin iş elanında nə qədər çox sahəni ətraflı şəkildə doldursanız, sizin iş elanınız o qədər çox görünə bilər. Çalışın maaş, iş tipi, təhsil səviyyəsi, yaş və s. ilə bağlı bütün detalları qeyd edəsiniz ki, həm iş axtaranlara, həm də gələcəkdə sizə faydalı olsun'
        },
        {
            question: 'Paketlərlə bağlı suallarım var, nə edim?',
            answer: 'Ən yaxşısı dərhal bizə zəng etməkdir. +994553103300 nömrəsinə zəng etməklə yaxud support@busy.az ünvanına yazmaqla tez bir zamanda suallarınıza cavab tapacaqsınız.'
        }
    ];

    return (
        <div className={styles.faq}>
            <h2 className={styles.faqtitle}>Çox verilən suallar</h2>
            {faqList.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

function Faq() {
    return (
      <div className='flex justify-center'>
        <div className="container">
            <FAQfunc />
        </div>
      </div>

        
    );
}

export default Faq;
