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
          <input type="text" name="prenom" placeholder="Prénom:" />
          <input type="text" name="ville" placeholder="Ville:" />
          <input type="date" name="date" placeholder="Date de l’évènement:" />
          <input type="file" name="inspirations" placeholder="Photos ou vidéos de vos inspirations, idées..." multiple />
          <textarea name="message" placeholder="Votre message:"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
