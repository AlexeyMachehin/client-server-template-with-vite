/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserTheme } from '../models/UserTheme';
import { SiteTheme } from '../models/SiteTheme';
import type { BaseRESTService } from './BaseRESTService';

interface FindRequest {
  id?: number; // ID темы в таблице
  title?: string; // Поиск по частичному совпадению в таблице
}

interface CreateRequest {
  title: string;
  description: string;
}

class ThemeService implements BaseRESTService {
  public find = ({ id, title }: FindRequest) => {
    if (id) {
      return SiteTheme.findByPk(id);
    }
    return SiteTheme.findOne({
      where: {
        theme: `%${title}%`, // Защита от SQL Injection присутствует
      },
    });
  };

  public create = (data: CreateRequest) => {
    return SiteTheme.create({ ...data });
  };

  public findUserTheme = async (userId: number) => {
    const userTheme = await UserTheme.findOne({
      where: {
        ownerId: userId,
      },
    });
    return userTheme;
  };

  public saveUserTheme = async (userId: number, newTheme: string) => {
    const oldTheme = await this.findUserTheme(userId);
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
