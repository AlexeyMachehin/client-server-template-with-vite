import { AxiosService, IBasePayload } from './AxiosService';
import { ISignupRequestDto } from './types/Signup/request/ISignupRequestDto';
import { ILoginRequestDto } from './types/Login/request/ILoginRequestDto';
import { ApiEndpoint } from './types/api/enums/ApiEndpoint';

class AuthService extends AxiosService {
  public constructor() {
    super();
  }

  public async login(dto: ILoginRequestDto) {
    return this.post(ApiEndpoint.SIGN_IN, dto)
      .then(() => {
        return this.fetchUser();
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  public signup(dto: ISignupRequestDto): Promise<IBasePayload> {
    return this.post(ApiEndpoint.SIGN_UP, dto)
      .then(() => {
        return this.fetchUser();
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  public logout(): Promise<IBasePayload> {
    return this.post(ApiEndpoint.LOGOUT);
  }

  public fetchUser(): Promise<IBasePayload> {
    return this.get(ApiEndpoint.FETCH_USER)
      .then(data => {
        return JSON.parse(`${data}`);
      })
      .catch(error => {
        throw new Error(error);
      }) as Promise<ISignupRequestDto>;
  }
}

export const authService = new AuthService();
