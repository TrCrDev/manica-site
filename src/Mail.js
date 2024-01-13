import React from 'react';
import './Mail.css';

const Mail = ({ showMail, setShowMail }) => {
  if (!showMail) return null;
  const handleSubmit = (event) => {
    event.preventDefault();
    window.open('https://ig.me/m/___manica___');
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="close-button" onClick={() => setShowMail(false)}>X</div>
        <h3 className='header-modal'>MANICA COUTURE</h3>
        <form onSubmit={handleSubmit}>
          <p>Envoyer moi un message sur Instagram avec les informations suivantes : prénom, date du mariage ainsi que votre ville</p>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
