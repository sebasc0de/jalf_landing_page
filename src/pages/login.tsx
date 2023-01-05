import { UserContext } from "../context/User";
import { LoginProps } from "../interfaces/Auth";
import { useField } from "../hooks/useField";
import Link from "next/link";
import service from "../services/Auth";
import styles from "../styles/modules/Auth.module.scss";
import { useContext, SyntheticEvent, useState } from "react";
import { Alert } from "../components/Alert";

const Login = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
        <RegisterMessage />
      </div>
    </section>
  );
};

const LoginForm = () => {
  const { values, onChangeHandler } = useField<LoginProps>({
    identifier: "",
    password: "",
  });

  // Message handler
  const [message, setMessage] = useState("");

  // User context
  const { setUser } = useContext(UserContext);

  // Login handler on submit
  const loginHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    await service
      .loginWithEmailAndPassword(values)
      .then(setUser)
      .catch(setMessage);
  };

  return (
    <form onSubmit={(e) => loginHandler(e)}>
      <Alert msg={message} />
      <label>Usuario o email:</label>
      <input onChange={onChangeHandler} name="identifier" type="text" />
      <label>Contraseña:</label>
      <input onChange={onChangeHandler} name="password" type="password" />
      <button>Iniciar sesion</button>
    </form>
  );
};

const Button = ({ name }: { name: string }) => {
  const LoginHandler = async () => {};

  return (
    <button className={`${styles.loginButton} bg-${name}`}>
      <i className={`bx bxl-${name}`}></i>
      Iniciar sesion con {name}
    </button>
  );
};

const RegisterMessage = () => {
  return (
    <small>
      ¿No tienes cuenta?
      <Link href="/register">
        <a>Registrate</a>
      </Link>
    </small>
  );
};

export default Login;
