import React, { useState } from 'react';
import './FAQ.css';
import './App.css';

const questionsAndAnswers = [
  {
    question: "Pourquoi nous choisir ?",
    answer: "Avec ma sensibilité, j’éprouve une véritable passion à vous guider dans le choix de votre robe de mariée, assurant ainsi une expérience personnalisée et mémorable avec vous."
  },
  {
    question: "Combien de temps à l’avance dois-je vous contacter ?",
    answer: "Entre 3 et 6 mois.Pour une confection en urgence, contacter la créatrice."
  },
  {
    question: "Avez-vous des modèles de robes de mariée à essayer ?",
    answer: "Nous avons une diversité de modèles qui pourront vous permettre de vous projeter sur le style et la forme de votre robe. Nous créons exclusivement du sur mesure, façonnons chaque pièce selon les idées uniques de nos clientes."
  },
  {
    question: "Est-il possible de créer une robe de mariée si je n’habite pas à Lyon ?",
    answer: "Oui, nous pouvons travailler à distance et vous pourrez en direct suivre visuellement la création étape par étape."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="concept-section">
      <div className="space-200px"></div>
      <h3 className='title-faq'>Questions réponses</h3>
      <div className="faq-content">
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className="faq-item">
          <h2 className="faq-question" onClick={() => handleToggle(index)}>
            {qa.question}
            <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`}></span>
          </h2>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            <p>{qa.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default FAQ;
