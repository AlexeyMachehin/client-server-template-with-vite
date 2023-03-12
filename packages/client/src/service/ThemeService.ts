import Axios, { AxiosInstance } from 'axios';

const apiAxiosInstance = Axios.create({
  // withCredentials: true,
  baseURL: 'http://localhost:3001/bomberapi',
});

class ThemeService {
  private readonly axios: AxiosInstance = apiAxiosInstance;

  public async saveTheme(theme: string) {
    const response = await this.axios.post('/theme', theme);
    return response.data;
  }
}

export const themeService = new ThemeService();
