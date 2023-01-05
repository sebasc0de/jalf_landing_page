import validation from "validator";
import { RegisterProps } from "../interfaces/Auth";

export default class validator {
  registerFormValidator(data: RegisterProps) {
    if (validation.isEmpty(data.username))
      return "Debes introducir un usuario valido";

    if (!validation.isEmail(data.email) || validation.isEmpty(data.email))
      return "El email es invalido";

    if (!validation.equals(data.password, data.password_check as string))
      return "Las contraseñas son diferentes";

    return true;
  }
}
