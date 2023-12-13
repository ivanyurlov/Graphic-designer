import React from 'react';
import { useLocation } from 'react-router-dom';
import userPhotoPath from '../images/user-foto.jpg';
import illustratorPath from '../images/illustrator-Icon.png';
import photoshopPath from '../images/photoshop-Icon.png';
import inDesignPath from '../images/indesign-Icon.png';


function Main(props) {
  const location = useLocation();

  return (
    <main className="content">
      <section className="profile">
        {location.pathname === "/" && <div className="profile__info">
          <div className="profile__avatar-overlay">
            <img src={userPhotoPath} alt="Фото владельца" className="profile__avatar" />
          </div>
          <div className="profile__form">
            <div className="profile__text">
              <h1 className="profile__user-name">Светлана Юрлова</h1>
              <p className="profile__activity">Графический дизайнер</p>
            </div>
          </div>
        </div>}
      </section>
      <section className="description">
        <h2 className="description__title">Обо мне</h2>
        <p className="description__text">
        {'\t'}Привет! Я графический дизайнер. Создам для Вас яркий и уникальный дизайн, который привлечет больше клиентов и увеличит узнаваемость бренда.{"\n"}
          Владею программами:</p>{"\n"} 
          <ul className="description__skills">
            <li className="description__cell">
              <img className="description__icon"alt="Иконка Illustrator" src={illustratorPath} />
              <span className="description__text description__text_accent">Adobe Illustrator</span>{"\n"}
            </li>
            <li className="description__cell">
              <img className="description__icon"alt="Иконка Photoshop" src={photoshopPath} />
              <span className="description__text description__text_accent">Photoshop</span>{"\n"}
            </li>
            <li className="description__cell">
              <img className="description__icon"alt="Иконка InDesign" src={inDesignPath} />
              <span className="description__text description__text_accent">InDesign</span>{"\n"}
            </li>
          </ul>
          <p className="description__text"> Люблю получать новые знания и видеть результат своего труда.{"\n"}
          Ответственна и нацелена на результат.{"\n"}
          {'\t'} Могу предложить Вам свои навыки по созданию:{"\n"}
          •	Афиши{"\n"}
          •	Логотипа{"\n"}
          •	Постера{"\n"}
          •	Иллюстрации{"\n"}
          •	Листовки{"\n"}
          •	Пригласительного{"\n"}
          •	Открытки{"\n"}
          •	Прайса{"\n"}
          •	Презентации{"\n"}
          •	Сертификата{"\n"}
          •	Карточки товара на маркетплейс{"\n"}
          Мое портфолио на Behance: <a href="https://www.behance.net/svetlanaiurlova" 
          className="description__link">https://www.behance.net/svetlanaiurlova</a>{"\n"}
          Буду рада нашему сотрудничеству!
        </p>
      </section>
    </main>
  );
}

export default Main;