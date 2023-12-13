import React from 'react';
import { useForm } from 'react-hook-form';
import PopupWithForm from './PopupWithForm';

function SendRequestPopup(props) {

  const { register, formState: {errors, isValid}, handleSubmit, watch, reset } = useForm({
    mode: 'onChange'
  });
  const onSubmit = data => {
    console.log(data);
    props.onSendRequest(data);
    reset();
  };
  const message = watch('text') || "";
  const messageCounter = 500 - message.length;

  return (
    <PopupWithForm
      name = {'request'}
      title = {'Отправить заявку'}
      saveButtonText = {!props.isLoading ? 'Отправить заявку' : 'Отправление...'}
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      isValid = {isValid}
      onSubmit = {handleSubmit(onSubmit)}
    >
      <input 
        className="popup__input"
        type="text"
        placeholder="Ваше имя" 
        {...register('name', {
          required: 'Поле обязательное для заполнения',
          minLength: {
            value: 2,
            message: 'Поле - минимум 2 символа'
          }, 
          maxLength: {
            value: 30,
            message: 'Поле - максимум 30 символов'
          }
        })}
      />
      <span className={`popup__input-error popup__input-error_type_hidden ${errors?.name && "popup__input-error_type_visible"}`}>
        {errors?.name?.message || "Error"}
      </span>
      <input 
        className="popup__input"
        type="email" 
        placeholder="Ваш электронный адрес"
        {...register('email', {
          required: 'Поле обязательное для заполнения',
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Неправильный формат электронной почты'
          } 
        })} 
      />
      <span className={`popup__input-error popup__input-error_type_hidden ${errors?.email && "popup__input-error_type_visible"}`}>
        {errors?.email?.message || "Error"}
      </span>
      <textarea
        className="popup__input_text"
        placeholder="Текст заявки"
        {...register('text', {
          required: 'Поле обязательное для заполнения',
          minLength: {
            value: 2,
            message: 'Поле - минимум 2 символа'
          }, 
          maxLength: {
            value: 500,
            message: 'Поле - максимум 500 символов'
          }
        })} {...register('text', {
          required: 'Поле обязательное для заполнения',
        })}
      />
      <span className={`popup__input-error popup__input-error_type_hidden ${errors?.text && "popup__input-error_type_visible"}`}>
        {errors?.text?.message || "Error"}
      </span>
      <span className="popup__input-counter">{messageCounter}</span>
    </PopupWithForm>
  )
}

export default SendRequestPopup;