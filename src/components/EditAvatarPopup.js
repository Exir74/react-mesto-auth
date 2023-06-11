import React from "react";
import PopupWithForm from "./PopupWithForm";
import {useForm} from "react-hook-form";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, buttonText, isRequestSent}) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const urlAvatarRef = React.useRef()

  // function handleSubmit() {
  //   // e.preventDefault();
  //   // onUpdateAvatar({
  //   //   avatar: urlAvatarRef.current.value,
  //   // });
  //   console.log('err')
  //
  // }

  const test = () =>{
    console.log('123')
    handleSubmit(onSubmit)
  }

  const onSubmit = (data) => console.log(data);

  React.useEffect(() => {
    // urlAvatarRef.current.value = ''
  }, [isOpen, isRequestSent])


  return (
    <PopupWithForm title={"Обновить аватар"} name={"avatar-form"} buttonText={buttonText}
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={onSubmit}
    handleSubmit ={test}>

      <input
        ref={urlAvatarRef}
        className="popup__input popup__input_type_avatar-url"
        placeholder="Ссылка на аватар"
        name="popup-avatar-url"
        id="avatar-url-input"
        // type="url"
        defaultValue=""
        {...register("avatar-url-input", { required: "This input is required." })}
        // required
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="popup__error-wrapper">

        <label
          htmlFor="avatar-url-input"
          className="popup__error-message"
          id="avatar-url-input-error"
        />
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup