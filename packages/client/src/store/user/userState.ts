import { UserDto } from './userDto';

export const userState: { user: UserDto | null; isLoading: boolean } = {
  user: null,
  isLoading: false,
};
