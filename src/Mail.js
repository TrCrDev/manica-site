import React from 'react';
import './Mail.css';

const Mail = ({ showMail, setShowMail }) => {
  if (!showMail) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="close-button" onClick={() => setShowMail(false)}>X</div>
        <h3 className='header-modal'>MANICA COUTURE</h3>
        <form>
          <input type="text" name="nom" placeholder="Nom-Prénom:" />
          <input type="text" name="mail" placeholder="Mail:" />
          <input type="text" name="telephone" placeholder="Téléphone:" />
          <textarea name="message" placeholder="Votre message:"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
