import { Role } from '../enums/role.enum';
import { CreateUserDto } from '../user/dto/create-user.dto';

export const createUserDto: CreateUserDto = {
  birthAt: '2023-01-03',
  email: 'santiago@gmail.com',
  name: 'santiago',
  password: '1234567',
  role: Role.User,
};
