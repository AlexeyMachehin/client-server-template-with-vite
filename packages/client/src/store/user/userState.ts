import { UserDto } from './userDto';

export const userState: {
  user: UserDto | null;
  error: string | null;
  isLoaderOn: boolean;
} = {
  user: null,
  error: null,
  isLoaderOn: false,
};
