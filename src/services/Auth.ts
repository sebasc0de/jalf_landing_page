import { LoginProps, RegisterProps } from "../interfaces/Auth";
import AuthRepository from "../repositories/Auth";
import validator from "../helpers/validator";

class Auth {
  private validator;
  private repository;

  constructor() {
    this.validator = new validator();
    this.repository = new AuthRepository();
  }

  // Login action
  async loginWithEmailAndPassword(data: LoginProps) {
    try {
      return await this.repository.loginWithEmailAndPassword(data);
    } catch (e) {
      throw new Error("Algo ha salido mal, vuelve a intentarlo").message;
    }
  }

  // Register action
  async registerWithEmailAndPassword(data: RegisterProps) {
    const validation = this.validator.registerFormValidator(data);

    if (validation) {
      try {
        return await this.repository.registerWithEmailAndPassword(data);
      } catch (e) {
        throw new Error(validation as string).message;
      }
    }
  }
}

export default new Auth();
