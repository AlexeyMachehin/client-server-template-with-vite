import Axios, { AxiosInstance } from 'axios'

const SERVER_API = 'https://ya-praktikum.tech/api/v2'

const apiAxiosInstance = Axios.create({
  withCredentials: true,
  baseURL: SERVER_API,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  }
})
import { AnyObject, AnyArray } from 'immer/dist/types/types-internal';

export type IBasePayload = AnyObject | AnyArray;

export abstract class AxiosService {
  private readonly axios: AxiosInstance = apiAxiosInstance

  public async get<T>(url: string): Promise<T> {
    const result = await this.axios.get<T>(url);
    return result.data;
  }

  public async post<Request, Payload extends IBasePayload>(url: string, payload?: Request): Promise<Payload> {
    return this.axios.post(url,payload)
  }
}
