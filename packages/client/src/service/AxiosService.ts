import axios from 'axios';

export default class AxiosService {
  public async get<T>(url: string): Promise<T> {
    const result = await axios.get<T>(url);
    return result.data;
  }
}

export const axiosService = new AxiosService();
