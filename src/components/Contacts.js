import React from 'react';
import whatsappPath from '../images/whatsapp-Icon.svg';
import viberPath from '../images/viber-Icon.svg';
import telegramPath from '../images/telegram-Icon.svg';
import behancePath from '../images/icon-behance.svg';
import facebookPath from '../images/icon-facebook.svg';
import instagramPath from '../images/icon-instagram.svg';

function Contacts() {

   return (
    <div className="contacts">
      <section className="description">
        <h2 className="description__title">Контакты</h2>
        <p className="description__text">
        {'\t'}Остались вопросы?{"\n"}
          Отправьте заявку, заполнив форму.{"\n"}
          Отправьте письмо на почту:{"\n"}<a href="mailto:rubleva.ru79@gmail.com" 
          className="description__link">rubleva.ru79@gmail.com</a>{"\n"}
          Напишите мне в мессенджерах: <span className="description__text description__text_accent"></span>{"\n"}
          <a href="https://wa.me/+79055683295"><img className="description__icon description__icon_change"alt="Иконка Whatsapp" src={whatsappPath} /></a>
          <a href="viber://chat?number=79055683295"><img className="description__icon description__icon_change"alt="Иконка Viber" src={viberPath} /></a>
          <a href="https://t.me/+79055683295"><img className="description__icon description__icon_change"alt="Иконка Telegram" src={telegramPath} /></a>{"\n"}
          Мои аккаунты в социальных сетях:
        </p>
        <ul className="description__cocial-icons">
            <li className="description__cell">
              <a href="https://www.behance.net/svetlanaiurlova"><img className="description__icon description__icon_change"alt="Иконка Behance" src={behancePath} /></a>
            </li>
            <li className="description__cell">
            <a href="https://www.facebook.com/svetlana.rubleva.71?mibextid=ZbWKwL"><img className="description__icon description__icon_change"alt="Иконка Facebook" src={facebookPath} /></a>
            </li>
            <li className="description__cell">
            <a href="https://instagram.com/svet_design_777?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><img className="description__icon description__icon_change"alt="Иконка Instagram" src={instagramPath} /></a>
            </li>
          </ul>
      </section>
    </div>
  )
}

export default Contacts;