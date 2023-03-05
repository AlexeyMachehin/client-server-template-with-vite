import { UserDto } from './userDto';

export const userState: { user: UserDto | null; isLoaded: boolean } = {
  user: null,
  isLoaded: false,
};
