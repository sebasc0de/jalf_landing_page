import { useField } from "../hooks/useField";
import service from "../services/Auth";
import Link from "next/link";
import styles from "../styles/modules/Auth.module.scss";
import { SyntheticEvent, useState } from "react";
import { Alert } from "../components/Alert";

const Register = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Form />
        <LoginMessage />
      </div>
    </section>
  );
};

const Form = () => {
  // Hook for update form fields
  const { values, onChangeHandler } = useField({
    username: "",
    email: "",
    password: "",
    password_check: "",
  });

  // Error message state
  const [message, setMessage] = useState("");

  // OnSubmit form handler
  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    await service
      .registerWithEmailAndPassword(values)
      .then(console.log)
      .catch(setMessage);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Alert msg={message} />
      <label>Usuario:</label>
      <input onChange={onChangeHandler} name="username" type="text" />
      <label>Correo electronico:</label>
      <input onChange={onChangeHandler} name="email" type="email" />
      <label>Contraseña:</label>
      <input onChange={onChangeHandler} name="password" type="password" />
      <label>Repite la contraseña:</label>
      <input onChange={onChangeHandler} name="password_check" type="password" />
      <button>Iniciar sesion</button>
    </form>
  );
};

const LoginMessage = () => {
  return (
    <small>
      ¿Ya tienes cuenta?
      <Link href="/login">
        <a>Inicia sesion</a>
      </Link>
    </small>
  );
};

export default Register;
