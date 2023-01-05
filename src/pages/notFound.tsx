import { useRouter } from "next/router";
import { Topbar } from "../components/Topbar";
import styles from "../styles/Error.module.scss";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <h4>Pagina no encontrada!</h4>
        <p className="mt-1">
          Todavia no hemos construido esta pagina, por favor regresa a la pagina
          anterior haciendo click en el siguiente boton.
        </p>
        <button onClick={() => router.back()} className="mt-2">
          <b>Volver</b>
        </button>
      </div>
    </>
  );
};

export default NotFound;
