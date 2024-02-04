import React, {useEffect, useState} from 'react';
import './App.css';
import VideoComponent from './Video';
import VideoComponentPearl from './VideoPearl';
import VideoComponentDressFinal from './VideoDressFinal';
import VideoComponentDressPearlage from './VideoDressPearlage'
import VideoComponentMarie from './VideoDressMarie'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import FAQ from './FAQ';
import AVIS from './AVIS';
import Histoire from './Histoire';
import Modal from './Modal';
import Mail from './Mail';




function App() {



  const [showModal, setShowModal] = useState(false);
  const [showMail, setShowMail] = useState(false);

  const [currentPage, setCurrentPage] = useState('accueil');


  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : totalSlides - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide + 1 < totalSlides ? currentSlide + 1 : 0);
  };

  return (
    <div className="App">
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Mail showMail={showMail} setShowMail={setShowMail} />




    <div className="site-header">
        <div className="header">
          <h1 className="title-header" >MANICA COUTURE <br></br> <h1 className="subtitle-header">-LYON-</h1></h1>
        

          
          <div className="menu-icon-container" onClick={toggleMenu}>
            <img src="menu.svg" alt="Menu" className="menu-icon" />
          </div>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => navigateTo('accueil')}>Accueil</li>
            <li onClick={() => navigateTo('mon-histoire')}>Mon Histoire</li>
            <li onClick={() => navigateTo('avis')}>Avis</li>
            <li onClick={() => navigateTo('faq')}>FAQ</li>
          </ul>
        </nav>
    </div>


      {currentPage === 'mon-histoire' ? (
  <Histoire />
) : currentPage === 'faq' ? (
  <FAQ />
) : currentPage === 'avis' ? (
    <AVIS />
) : (
  <>
      <div className="space-100px"></div>
      <div data-aos="fade-up" data-aos-duration="2000">
      <VideoComponent></VideoComponent>
      </div>

      <div className="main-content">
        <img src="intro.svg" alt="Creatrice de robe de mariee sur mesure" className="title-image" data-aos="zoom-in" data-aos-duration="700"/>
      </div>
      <div className="space-50px"></div>
      <div className="line-container" data-aos="zoom-in" data-aos-duration="700" >
        <div className="right-line"></div>
      </div>

      <div className="concept-section">
      <h1 className="title" data-aos="zoom-in" data-aos-duration="700" >NOTRE CONCEPT</h1>
      <h1 className="subtitle" data-aos="zoom-in" data-aos-duration="700" >“Un savoir faire sur mesure”</h1>
        <img src="1st.svg" alt="separateur de ligne" className="title-trait" data-aos="zoom-in" data-aos-duration="700" />
        <div className="description">
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="200" >
            MANICA vous propose des créations de robes de mariée haut de gamme, à l’imaginaire infini.
          </div>
          <div className='space-30px'></div>
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400" >
            Nous transformons vos idées, vos rêves et inspirations en des styles uniques qui reflètent votre personnalité.
          </div>
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600"  >
            Votre robe de mariée devient une réalité sur mesure, conçue spécialement pour vous.
          </div>
          
        </div>
        <img src="1_1.png" alt="Atelier creation robe de mariee sur mesure" className="centered-image" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="800" />
      </div>


      <div className="concept-section">
      <h1 className="title" data-aos="zoom-in" data-aos-duration="700" >UN SERVICE HAUT DE GAMME</h1>
      <h1 className="subtitle" data-aos="zoom-in" data-aos-duration="700" >“Une étroite collaboration”...</h1>
        <img src="1st.svg" alt="separateur de ligne" className="title-trait" data-aos="zoom-in" data-aos-duration="700" />
        <div className="description">
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400" >
          Au delà de la couture, c’est une vraie relation que nous partageons avec nos futures mariées, 
          </div>
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600" >
          guidées par l'engagement et le désir de créer la robe parfaite pour votre mariage.
          </div>

        </div>
        <img src="2.png" alt="presentation creation d'une robe de mariee" className="centered-image" data-aos="zoom-in" data-aos-duration="700" />
      </div>












      

      <div className="concept-section1">
        <img src="rdv-title.svg" alt="etape rendez vous pour definir le besoin de creation de la robe" className="rdv-image" data-aos="fade-right" data-aos-duration="700" />
        <div className="description">
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400" >
            Notre premier rendez-vous téléphonique nous permettra grâce à un échange intense de vous proposer <br></br>
          </div>
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600" >
          les premières bases de la conception de votre robe et de programmer une rencontre au show room.
          </div>
        </div>
      </div>


      <div className="concept-section">
      <img src="showroom-title.svg" alt="etape rendez vous pour au showroom pour voir les modeles de robe" className="showroom-image" data-aos="fade-right" data-aos-duration="700" />
        <div className="description">
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400" >
          Ensemble, nous sélectionnerons les matières et prendrons vos mesures. <br></br><br></br>
          </div>
          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600" >
          Il est essentiel pour nous d'accorder du temps et de l'importance aux moindres détails, créant ainsi une pièce d'exception.
          </div>

        </div>
        <img src="3.png" alt="Design de la robe de mariee sur un patron" className="centered-image" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600"  />
      </div>















           
      <div className="concept-section1">
      <h1 className="title" data-aos="zoom-in" data-aos-duration="700" >AU SERVICE DE LA MARIÉE</h1>
      <h1 className="subtitle" data-aos="zoom-in" data-aos-duration="700" >“Une rencontre qui crée du lien”</h1>
        <img src="1st.svg" alt="separateur de ligne" className="title-trait" data-aos="zoom-in" data-aos-duration="700" />
        
        <div className="description">

        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400"  >
        Tout au long du processus de la création de votre robe, 
        nous vous tiendrons informé à chaque étape, et vous offrons la possibilité de la suivre visuellement en temps réel, 
        garantissant ainsi une expérience transparente et personnalisée. 
          </div>

          <div className="space-30px"></div>

        </div>
        <img src="4_1.png" alt="fabrication de la robe de mariee sur manequin vue de profil" className="centered-image"  />
        <div className="space-30px"></div>
        <img src="4_2.png" alt="fabrication de la robe de mariee sur manequin vue de face" className="centered-image1" />
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400" className="video1"  >
          <VideoComponentDressFinal></VideoComponentDressFinal>
          </div>
      </div>

      <div className="concept-section">
      <h1 className="title" data-aos="zoom-in" data-aos-duration="700" >DE LA QUALITÉ</h1>
      <h1 className="subtitle" data-aos="zoom-in" data-aos-duration="700" >“Détails, excellence , haute couture” </h1>
        <img src="1st.svg" alt="separateur de ligne" className="title-trait" data-aos="zoom-in" data-aos-duration="700" />
        <div className="description">
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="400"  >
        l’Excellence que nous mettons à votre service se manifeste à travers 
     la sélection minutieuse et soignée de nos tissus, dentelles, perles et ornements. <br></br><br></br>
          </div>

          <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600"  >
          Chaque robe, une oeuvre perlée à la main, pour une élégance unique et artisanale.  
          </div>


        
        </div>
        <div data-aos="zoom-in" className="nobottom" >
        <VideoComponentPearl></VideoComponentPearl>
          </div>
        <div data-aos="zoom-in" className="video" >
        <VideoComponentDressPearlage></VideoComponentDressPearlage>
          </div>
      </div>

      <div className="carousel-wrapper">
  <button onClick={goToPrevSlide} className="arrow-prev">
    <img src="left.png" alt="bouton de navigation gauche" />
  </button>

  <div className="carousel-container">
    <Carousel
      selectedItem={currentSlide}
      onChange={(index) => setCurrentSlide(index)}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      centerMode={true}
      interval = {1800}
      autoPlay = {true}
      centerSlidePercentage={100}
      className="my-carousel"
    >
      <div><img src="slider_1.png" alt="" className="centered-image-carousel" /></div>
      <div><img src="slider_2.png" alt="" className="centered-image-carousel" /></div>
      <div><img src="slider_3.png" alt="" className="centered-image-carousel" /></div>
    </Carousel>
  </div>

  <button onClick={goToNextSlide} className="arrow-next">
    <img src="right.png" alt="bouton de navigation droit"  />
  </button>
</div>


<div className="space-100px"></div>
      
      <div className="concept-section">
        <h1 className="manica-title" data-aos="zoom-in" data-aos-duration="700">MANICA</h1>
        <img src="7.png" alt="la creatrice de robe de mariee sur mesure a Lyon" className="centered-image" data-aos="zoom-in" data-aos-duration="700"  />
        <div className="description-creatrice">


        Après plusieurs années dédiées à sublimer la mariée, et animée par ma passion pour les robes parées de pierres et de lumières, 
        j'ai développé un savoir-faire et une expérience qui me permet de satisfaire nos clientes et de contribuer au plus beau jour de leur vie.<br></br>

          On prend vos idées, vos rêves et vos inspirations, et je donnerai vie à votre robe pour qu’elle soit le reflet de votre personnalité.<br></br><br></br>

          Située sur la région Lyonnaise, je vous accueille dans un cadre chaleureux et convivial où mon soucis du détail 
        et mon professionnalisme nous permettrons de concrétiser votre projet. <br></br><br></br> 
        Votre satisfaction est ma plus grande récompense, laissez moi vous accompagnez dans cette aventure.
        </div>


        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="800"  >
        <div className='description-creatrice-signature '>
       Votre amour est unique, votre robe le sera aussi. <br></br><br></br> 
       <dd> <dd> <dd> <dd> <dd>  Manica</dd></dd></dd></dd></dd>
       </div>
               </div>

      </div>


      <div className="concept-section1" data-aos="zoom-in" data-aos-duration="700" >
      <h1 className="RDVtitle" data-aos="zoom-in" data-aos-duration="700" >PRENDRE RENDEZ-VOUS</h1>
        <img src="1st.svg" alt="" className="title-trait" data-aos="zoom-in" data-aos-duration="700" />
        <div className="description-rdv">
          Nous mettons tout en oeuvre pour répondre rapidement à votre demande.<br></br><br></br>Chaque demande est importante pour nous. 
        </div>
        <div className="contact-icons">
        <div className="icon" onClick={() => setShowModal(true)}>
          <img src="whatsapp.png" alt="Whatsapp" />
          <p><strong>Whatsapp</strong></p>
        </div>
          <div className="icon" onClick={() => setShowMail(true)}>
            <img src="instacolor.png" alt="instragram" />
            <p><strong>Instagram</strong></p>
          </div>
        </div>
        <div className='space-30px'></div>
        <div className="description-rdv">
          Vous pouvez contactez directement Manica au <b>06.23.55.53.34</b>
        </div>
      </div>

      <div className="line-container" data-aos="zoom-in" data-aos-duration="700" >
        <div className="left-line"></div>
      </div>
      <div className="concept-section">
        <img src="7th.svg" alt="section pour les mariee" className="title-image3"  />
        <div   >
        <VideoComponentMarie></VideoComponentMarie>
        </div>

        <div className="space-30px"></div>
        <div className="line-container" data-aos="zoom-in" data-aos-duration="700" >
        <div className="right-line"></div>
      </div>

        <div className="concept-section" data-aos="zoom-in" data-aos-duration="700" >
      <img src="follow.png" alt="lien instagram" className="title-image4" />
        <div className="space-50px"></div>
        <div className="contact-icons">
          <div className="icon">
            <a href='https://www.instagram.com/___manica___/?hl=fr'>
            <img src="instagram.png" alt="Instagram" />
            </a>
          </div>
          <div className="icon">
            <a href='https://www.facebook.com/manica.lyon/?locale=fr_FR'>
            <img src="facebook.png" alt="lien facebook" />
            </a>
          </div>
        </div>
      </div>

        <div className="space-30px"></div>
        <div className="concept-section" data-aos="zoom-in" data-aos-duration="700" >
      <img src="parledenous.png" alt="lien mariage.netz" className="title-image4" />
        <div className="space-50px"></div>
        <div className="contact-icons">
          <div className="icon">
            <a href='https://www.mariages.net/robe-de-mariee/manica--e263031'>
            <img src="recommariagenet.png" />
            </a>
          </div>
        </div>
      </div> 
      </div>

      <footer className="footer">
  <div className="space-30px"></div>
  <p className='description-copyright'>
    COPYRIGHT 2023 - MANICA COUTURE &copy;
  </p>
</footer>

      </>
      )}
    </div>
  );
}

export default App;