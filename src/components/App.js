import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { send } from 'emailjs-com';
import Header from './Header';
import Footer from './Footer';
import BurgerNavBar from './BurgerNavBar';
import NavBarMenu from './NavBarMenu';
import ImagePopup from './ImagePopup';
import SendRequestPopup from './SendRequestPopup';
import Main from './Main';
import Contacts from './Contacts';
import Portfolio from './Portfolio';
import Logos from './Logos';
import Identity from './Identity';
import BusinessCards from './BusinessCards';
import Banners from './Banners';
import Illustrations from './Illustrations';
import Invitations from './Invitations';
import Patterns from './Patterns';
import Presentations from './Presentations';
import MarketplaceCards from './MarketplaceCards';
import PageNotFound from './PageNotFound';


function App() {
  const [isBurgerNavBarOpen, setIsBurgerNavBarOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isSendRequestPopupOpen, setIsSendRequestPopupOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);


  function closeAllPopups() {
    setIsBurgerNavBarOpen(false);
    setIsSendRequestPopupOpen(false); 
    setSelectedCard({});
  }

  React.useEffect(() => {
    if (isSendRequestPopupOpen || selectedCard) {
      function handleEscClose(event) {
        if(event.code === 'Escape') { 
          closeAllPopups();
        }
      }
      document.addEventListener('keydown', handleEscClose);
      return () => {
        document.removeEventListener('keydown', handleEscClose);
      }
    }
  }, [isSendRequestPopupOpen, selectedCard]);


  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleAddPlaceClick() {
    setIsSendRequestPopupOpen(true);
  }

  function handleBurgerButtonClick() {
    setIsBurgerNavBarOpen(true);
  }

  function sendRequestSubmit({name, email, text}) {
    setIsLoading(true);
    send(
      'service_mfl1k28',
      'template_vh4i329',
      {
        name: name,
        email: email,
        text: text
      },
      'p8oFn1sfxFCbADmft'
    )
    .then((res) => {
      closeAllPopups();
      console.log('Форма отправлена успешно!', res.status, res.text);
    })
    .catch((error) => {
      console.log('Ошибка при отправке формы', error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <div className="root">
      <div className="page">
        <Header 
          onBurgerNavBar = {handleBurgerButtonClick}
          isOpen = {isBurgerNavBarOpen}
        />
        <NavBarMenu 
          onAddPlaceClick = {handleAddPlaceClick}
        />
        <BurgerNavBar 
          isOpen = {isBurgerNavBarOpen}
          onClose = {closeAllPopups}
          onAddPlaceClick = {handleAddPlaceClick}
        />
        <Routes>
          <Route path="/" element={
              <Main />
          } />
          <Route path="/portfolio" element={<Portfolio
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/logos" element={<Logos
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/identity" element={<Identity
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/cards" element={<BusinessCards
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/banners" element={<Banners
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/illustrations" element={<Illustrations
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/invitations" element={<Invitations
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/patterns" element={<Patterns
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/presentations" element={<Presentations
            onCardClick = {handleCardClick}
          />} />
          <Route path="/portfolio/marketplace-cards" element={<MarketplaceCards
            onCardClick = {handleCardClick}
          />} />
          <Route path="/contacts" element={<Contacts 
          />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}
        />
        <SendRequestPopup
            isOpen = {isSendRequestPopupOpen}
            isLoading = {isLoading}
            onClose = {closeAllPopups}
            onSendRequest = {sendRequestSubmit} 
          />
      </div>
    </div>
  );
}

export default App;