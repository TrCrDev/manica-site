import React from 'react';
import './Modal.css';

const Modal = ({ showModal, setShowModal }) => {
    if (!showModal) return null;
  
    return (
      <div className="modal-backdrop">
        <div className="modal">
        <div className="close-button" onClick={() => setShowModal(false)}>X</div>
        <h3 className='header-modal'>MANICA COUTURE</h3>
          <form>
            <label>
              Prénom:
              <br></br>
              <input type="text" name="prenom" />
            </label>
            <label>
              Ville:
              <br></br>
              <input type="text" name="ville" />
            </label>
            <label>
              Date de l’évènement:
              <br></br>
              <input type="date" name="date" />
            </label>
            <label>
              Photos ou vidéos de vos inspirations, idées...
              <br></br>
              <input type="file" name="inspirations" multiple />
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
  
export default Modal;
