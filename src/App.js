import React, {useEffect, useState} from 'react';
import './App.css';
import VideoComponent from './Video';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import FAQ from './FAQ';
import Histoire from './Histoire';




function App() {





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




<div className="site-header">
        <div className="header">
          <img src="title.svg" alt="Title" className="header-title-image" />
          <div className="menu-icon-container" onClick={toggleMenu}>
            <img src="menu.svg" alt="Menu" className="menu-icon" />
          </div>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => navigateTo('accueil')}>Accueil</li>
            <li onClick={() => navigateTo('mon-histoire')}>Mon Histoire</li>
            <li onClick={() => navigateTo('faq')}>FAQ</li>
          </ul>
        </nav>
        <div className="space-30px"></div>
      </div>


      {currentPage === 'mon-histoire' ? (
  <Histoire />
) : currentPage === 'faq' ? (
  <FAQ />
) : (
  <>
      <div className="space-200px"></div>
      <div className="space-50px"></div>
      <div data-aos="fade-up" data-aos-duration="2000">
      <VideoComponent></VideoComponent>
      </div>










      <div className="space-100px"></div>

      <div className="main-content">
        <img src="intro.svg" alt="" className="title-image" data-aos="zoom-in" data-aos-duration="1000"/>
      </div>
      <div className="space-50px"></div>
      <div className="line-container" data-aos="zoom-in" data-aos-duration="1000" >
        <div className="right-line"></div>
      </div>

      <div className="space-100px"></div>

      



      <div className="concept-section">
        <img src="1st.svg" alt="" className="title-image" data-aos="zoom-in" data-aos-duration="1000" />
        <div className="description">
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
            MANICA vous propose des créations de robes de mariée haut de gamme, à l’imaginaire infini.
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" >
            Nous transformons vos idées, vos rêves et inspirations en des styles uniques qui reflètent votre personnalité.
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600"  >
            Votre robe de mariée devient une réalité sur mesure, conçue spécialement pour vous.
          </div>
        </div>


        <img src="1.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800" />
      </div>



      <div className="space-100px"></div>




      <div className="concept-section">
        <img src="2nd.svg" alt="" className="title-image2" data-aos="zoom-in" data-aos-duration="1000" />
        <div className="description">
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" >
          Au delà de la couture, c’est une vraie relation que nous partageons avec nos futures mariées, 
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >
          guidées par l'engagement et le désir de créer la robe parfaite pour votre mariage.
          </div>

        </div>
        <img src="2.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000" />
      </div>

      <div className="space-100px"></div>




      <div className="rdv-section">
        <img src="rdv-title.svg" alt="" className="rdv-image" data-aos="fade-right" data-aos-duration="1000" />
        <div className="description">
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" >
            Notre premier rendez-vous téléphonique nous permettra grâce à un échange intense de vous proposer <br></br>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >
          les premières bases de la conception de votre robe et de programmer une rencontre au show room.
          </div>
        
        </div>
      </div>


      <div className="showroom-section">
        <img src="showroom-title.svg" alt="" className="showroom-image"data-aos="fade-left" data-aos-duration="1000" />
        <div className="description">
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" >
          Ensemble, nous sélectionnerons les matières et prendrons vos mesures. <br></br>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >
          Il est essentiel pour nous d'accorder du temps et de l'importance aux moindres détails, créant ainsi une pièce d'exception.
          </div>
          
        
        
        </div>
      </div>

      <div className="space-100px"></div>

      <div className="img-section">
        <img src="3.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600"  />
      </div>

      
      <div className="space-100px"></div>
     
      <div className="concept-section">
        <img src="3rd.svg" alt="" className="title-image2" data-aos="zoom-in" data-aos-duration="1000"  />
        <div className="description">

        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"  >
        Tout au long du processus de la création de votre robe, 
        nous vous tiendrons informé à chaque étape, 
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600"  >
          et vous offrons la possibilité de la suivre visuellement en temps réel, 
        garantissant ainsi une expérience transparente et personnalisée. 
          </div>

          <div className="space-100px"></div>
          <div className="carousel-container">
        <Carousel
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={80}
          className="my-carousel"
        >
          <div><img src="5.png" alt="" className="centered-image-carousel" /></div>
          <div><img src="3.png" alt="" className="centered-image-carousel" /></div>
          <div><img src="4.png" alt="" className="centered-image-carousel" /></div>
        </Carousel>
        <button onClick={goToPrevSlide} className="arrow-prev">
          <img src="left.png" alt="Prev" />
        </button>
        <button onClick={goToNextSlide} className="arrow-next">
          <img src="right.png" alt="Next" />
        </button>
      </div>

        </div>
        <img src="4.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000" />
      </div>



      <div className="space-250px"></div>


      <div className="concept-section">
        <img src="4th.svg" alt="" className="title-image2" data-aos="zoom-in" data-aos-duration="1000"  />
        <div className="description">
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"  >
        l’Excellence que nous mettons à votre service se manifeste à travers 
     la sélection minutieuse et soignée de nos tissus, dentelles, perles et ornements. <br></br><br></br>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600"  >
          Chaque robe, une oeuvre perlée à la main, pour une élégance unique et artisanale.  
          </div>


        
        </div>
        <img src="5.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000" />
        <br></br><br></br>
        <img src="6.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000" />
      </div>



      <div className="space-100px"></div>

      <div className="concept-section">
        <img src="5th.svg" alt="" className="title-image3" data-aos="zoom-in" data-aos-duration="1000"  />
        <div className="space-50px"></div>
        <img src="7.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000"  />
        <div className="description">


        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"  >
        Après plusieurs années dédiées à sublimer la mariée, et animée par ma passion pour les robes parées de pierres et de lumières, 
        j'ai développé un savoir-faire et une expérience qui me permet de satisfaire nos clientes et de contribuer au plus beau jour de leur vie.<br></br>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600"  >
          On prend vos idées, vos rêves et vos inspirations, et je donnerai vie à votre robe pour qu’elle soit le reflet de votre personnalité.<br></br><br></br>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800"  >
          Située sur la région Lyonnaise, je vous accueille dans un cadre chaleureux et convivial où mon soucis du détail 
        et mon professionnalisme nous permettrons de concrétiser votre projet. <br></br><br></br> </div>




        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800"  >
        Votre satisfaction est ma plus grande récompense, laissez moi vous accompagnez dans cette aventure.
          </div>


       
        </div>

        <img src="6th.svg" alt="" className="title-image2" data-aos="zoom-in" data-aos-duration="1000"  />
       
      </div>

      <div className="space-100px"></div>




      <div className="concept-section">
        <img src="7th.svg" alt="" className="title-image3" data-aos="zoom-in" data-aos-duration="1000"  />
        <div className="space-100px"></div>
        <img src="8.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000"  />


        <img src="ny.svg" alt="" className="small-centered-image" data-aos="zoom-in" data-aos-duration="1000"  />
        <p className="description" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        MANICA c’est avant tout une très belle rencontre...
        Passionnée par son métier et ultra douée pour donner vie à la robe que j’avais imaginé.<br></br>
        Des échanges et conseils sur la création, en passant par la prise de mesures, le suivi de la fabrication à l’atelier, jusqu’à l’essayage, tout à été parfait !<br></br>
        Osez franchir le pas de la création et personnalisation, votre robe sera unique comme cette journée que vous apprêtez à vivre !
        Je la recommande les yeux fermés ! 
        </p>
        <img src="9.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000"  />


        <img src="yv.svg" alt="" className="small-centered-image" data-aos="zoom-in" data-aos-duration="1000"  />
        <p className="description" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        Un grand MERCI à MANICA d’avoir réalisé ma magnifique robe de mariée sur mesure et personnalisée.<br></br>
        Un accompagnement au top, de la confection de la robe, du choix du tissu jusqu’au jour du mariage, j’ai eu de la chance de l’avoir à mes côtés.<br></br>
        Ma robe a fait son effet et j’en suis encore très reconnaissante.
        Un énorme MERCI MANICA ! 
        </p>
        <img src="10.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000"  />


        <img src="my.svg" alt="" className="small-centered-image" data-aos="zoom-in" data-aos-duration="1000"  />
        <p className="description" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        Un grand MERCI à MANICA d’avoir réalisé ma magnifique robe de mariée sur mesure et personnalisée.<br></br>
        Un accompagnement au top, de la confection de la robe, du choix du tissu jusqu’au jour du mariage, j’ai eu de la chance de l’avoir à mes côtés.<br></br>
        Ma robe a fait son effet et j’en suis encore très reconnaissante.
        Un énorme MERCI MANICA ! 
        </p>
        <img src="11.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000"  />



        <img src="la.svg" alt="" className="small-centered-image" data-aos="zoom-in" data-aos-duration="1000"  />
        <p className="description" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        MANICA c’est avant tout une très belle rencontre...
        Passionnée par son métier et ultra douée pour donner vie à la robe que j’avais imaginé.<br></br>
        Des échanges et conseils sur la création, en passant par la prise de mesures, le suivi de la fabrication à l’atelier, jusqu’à l’essayage, tout à été parfait !<br></br>
        Osez franchir le pas de la création et personnalisation, votre robe sera unique comme cette journée que vous apprêtez à vivre !
        Je la recommande les yeux fermés ! 
        </p>
        <img src="12.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000" />



        <img src="lo.svg" alt="" className="small-centered-image" data-aos="zoom-in" data-aos-duration="1000"  />
        <p className="description" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        Pas de mots, simplementt et clairement incroyable !!
        Je n’ai pas hésité à faire confectionner ma robe de mariée sirène sur mesure par MANICA.<br></br>
        Son service irréprochable, sa bienveillance très appréciée et ses rassurants conseils m’ont permis de voir venir le jour J arriver avec plus de confiance !<br></br>
        Merci pour tout, je recommande ses services.<br></br>
        Je suis venue de LAUSANNE sans regret !
        </p>
        <img src="13.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000"  />




        <img src="ju.svg" alt="" className="small-centered-image" data-aos="zoom-in" data-aos-duration="1000"  />
        <p className="description" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        Je recommande MANICA à 1000% la meilleure créatrice de robes de mariée.<br></br>
        Les matières et les détails de ma robe sont exceptionnels !<br></br>
        Merci pour tout ! 
        </p>
        <img src="14.png" alt="" className="centered-image" data-aos="zoom-in" data-aos-duration="1000"  />




        <img src="el.svg" alt="" className="small-centered-image" data-aos="zoom-in" data-aos-duration="1000" />
        <p className="description" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
        J’ai  fais appel aux services de MANICA pour ma robe de mariée sur mesure.<br></br>
        J’ai été très satisfaite. <br></br>
        J’ai eu la robe de princesse que je voulais tant.<br></br>
        MANICA est très professionnelle et à l’écoute, elle saura satisfaire vos exigences.<br></br>
        Je la recommande ! 
        </p>


      </div>

      <div className="concept-section" data-aos="zoom-in" data-aos-duration="1000" >
        <img src="8th.svg" alt="" className="title-image3" />
        <div className="space-50px"></div>
        <img src="help.svg" alt="" className="desc-image" data-aos="zoom-in" data-aos-duration="1000"/>
        <div className="contact-icons">
          <div className="icon">
            <img src="whatsapp.png" alt="Whatsapp" />
            <p><strong>Whatsapp</strong></p>
          </div>
          <div className="icon">
            <img src="mail.png" alt="Email" />
            <p><strong>Email</strong></p>
          </div>
        </div>
      </div>





      <div className="concept-section" data-aos="zoom-in" data-aos-duration="1000" >
      <img src="9th.svg" alt="" className="title-image4" />
        <div className="space-50px"></div>
        <div className="contact-icons">
          <div className="icon">
            <img src="instagram.png" alt="Instagram" />
          </div>
          <div className="icon">
            <img src="facebook.png" alt="Facebook" />
          </div>
        </div>
      </div>





      </>
      )}
    </div>
  );
}

export default App;