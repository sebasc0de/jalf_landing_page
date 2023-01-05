import { LoginProps, RegisterProps } from "../interfaces/Auth";
import axios from "axios";
import config from "../config/backend";

class AuthRepository<T> implements Repository<T> {
  async registerWithEmailAndPassword(data: RegisterProps): Promise<T> {
    return await axios.post(config.AUTH.REGISTER_URL, data);
  }

  async loginWithEmailAndPassword(data: LoginProps): Promise<any> {
    return await axios.post(config.AUTH.LOGIN_URL, data);
  }
}

export default AuthRepository;

// Interfaces #######################

interface RegisterActions<T> {
  registerWithEmailAndPassword(data: RegisterProps): Promise<T>;
}

interface LoginActions<T> {
  loginWithEmailAndPassword(data: LoginProps): Promise<any>;
}

interface Repository<T> extends RegisterActions<T>, LoginActions<T> {}
