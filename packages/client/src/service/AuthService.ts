import { AxiosService, IBasePayload } from './AxiosService'
import { ISignupRequestDto } from './types/Signup/request/ISignupRequestDto'
import { ILoginRequestDto } from './types/Login/request/ILoginRequestDto'

class AuthService extends AxiosService {
  public constructor() {
    super()
  }

  public login(dto:ILoginRequestDto) {
    return this.post('/auth/signin', dto)
  }

  public signup(dto: ISignupRequestDto): Promise<IBasePayload> {
    return this.post('/auth/signup', dto)
  }

  public logout(): Promise<IBasePayload> {
    return this.post('/auth/logout')
  }
}

export const authService = new AuthService()
