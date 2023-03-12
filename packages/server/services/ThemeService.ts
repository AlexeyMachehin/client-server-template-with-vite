/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserTheme } from '../models/UserTheme';

class ThemeService {
  public getUserTheme = async (payload: { userId: number }) => {
    const userTheme = await UserTheme.findOne({
      where: {
        ownerId: payload.userId,
      },
    });
    return userTheme;
  };

  public setUserTheme = async (payload: {
    userId: number;
    newTheme: string;
  }) => {
    const { userId, newTheme } = payload;

    const oldTheme = await this.getUserTheme({ userId });
    if (!oldTheme) {
      const result = await UserTheme.create({
        ownerId: userId,
        theme: newTheme,
      });
      return result;
    } else {
      const result = await UserTheme.update(
        {
          theme: newTheme,
        },
        {
          where: {
            ownerId: userId,
          },
        }
      );
      return result;
    }
  };
}

export default new ThemeService();
