import React from 'react';
import { useState } from "react";

import './Modal.css';



const Modal = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({prenom: "",ville: "",date:"",message: ""});

  if (!showModal) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open('https://wa.me/33623555334?text='+encodeURI(`Bonjour je m'appelle ${formData.prenom}.\nj'habite à ${formData.ville}.\n je me marie le ${formData.date}.\n voici mon message ${formData.message}`));
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="close-button" onClick={() => setShowModal(false)}>X</div>
        <h3 className='header-modal'>MANICA COUTURE</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="prenom" onChange={handleChange} value={formData.prenom} placeholder="Prénom:" />
          <input type="text" name="ville" onChange={handleChange} value={formData.ville} placeholder="Ville:" />
          <input type="date" name="date" onChange={handleChange} value={formData.date} placeholder="Date de l’évènement:" />
          <input type="file" name="inspirations" placeholder="Photos ou vidéos de vos inspirations, idées..." multiple />
          <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Votre message:"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
