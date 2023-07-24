import { AuthResetDTO } from '../auth/dto/auth.reset.dto';
import { resetToken } from './reset-token.mock';

export const authresetDTO: AuthResetDTO = {
  password: '12345679',
  token: resetToken,
};
