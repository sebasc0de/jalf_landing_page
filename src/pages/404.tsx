import Link from "next/link";
import { Public } from "../layouts/Public";

const Error = () => {
  return (
    <Public>
      <div className="error">
        <h4>Esta pagina no existe todavia</h4>
        <p>Haz click en el boton volver para regresar donde estabas. </p>
        <Link href="/">
          <button>Regresar</button>
        </Link>
      </div>
    </Public>
  );
};

export default Error;
