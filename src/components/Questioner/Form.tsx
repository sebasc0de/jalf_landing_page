import { SyntheticEvent } from "react";
import { useField } from "../../hooks/useField";
import styles from "../../styles/modules/Home/Questioner.module.scss";

export const Form = () => {
  const { values, onChangeHandler } = useField({
    name: "",
    question: "",
  });

  const onSubmitHandler = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=+5491130963298&text=${values.question}. ${values.name}`,
      "_blank"
    );
  };

  return (
    <div className={styles.menu}>
      <Title />
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <label>Ingresa tu nombre:</label>
        <input
          autoComplete="off"
          onChange={onChangeHandler}
          name="name"
          type="text"
        />
        <label>Escribe tu pregunta:</label>
        <input
          autoComplete="off"
          onChange={onChangeHandler}
          name="question"
          type="text"
        />
        <button className="secondary">Preguntar</button>
        <span>Antes de hacer una pregunta, puedes buscarla en el chat🤓</span>
      </form>
    </div>
  );
};

const Title = () => {
  return (
    <div>
      <h3>Resolve tus dudas</h3>
      <p>
        Completa el formulario con tu pregunta o busca la respuesta directamente
        en el chat.
      </p>
    </div>
  );
};
