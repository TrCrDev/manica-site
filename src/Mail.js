import React from 'react';
import './Mail.css';

const Mail = ({ showMail, setShowMail }) => {
    if (!showMail) return null;
  
    return (
      <div className="modal-backdrop">
        <div className="modal">
        <div className="close-button" onClick={() => setShowMail(false)}>X</div>
          <h2>Bienvenue chez MANICA COUTURE</h2>
          <p>“Un savoir faire d’exception, pour de sublimes créations ! “</p>
  
          <form>
            <label>
              Nom-Prénom:
              <br></br>
              <input type="text" name="nom" />
            </label>
            <label>
              Mail
              <br></br>
              <input type="text" name="mail" />
            </label>
            <label>
              Téléphone
              <br></br>
              <input type="text" name="telephone" />
            </label>
            <label>
              Votre message:
              <br></br>
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Envoyer</button>
          </form>
          <br></br>
        </div>
      </div>
    );
  };
  
export default Mail;
