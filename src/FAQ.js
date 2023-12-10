import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div>
      <div className="space-200px"></div>
      <div className="space-50px"></div>
      <div className="space-50px"></div>
      <h1>FAQ</h1>
      

      <div className="faq-content">
        <h2>Est-il possible de créer une robe de mariée si je n’habite pas à Lyon ?</h2>
        <p>Oui, nous pouvons travailler à distance et vous pourrez en direct suivre visuellement la création étape par étape.</p>

        <h2>Combien de temps à l’avance dois-je vous contacter ?</h2>
        <p>Entre 3 et 6 mois. Pour une confection en urgence, contacter la créatrice.</p>

        <h2>Avez-vous des modèles de robes de mariée à essayer ?</h2>
        <p>Nous avons une diversité de modèles pour vous inspirer. Nous créeons exclusivement du sur mesure, façonnons chaque pièce selon les idées uniques de nos clientes.</p>
      </div>
    </div>
  );
}

export default FAQ;
