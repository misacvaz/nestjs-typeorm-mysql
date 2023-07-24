import { Role } from '../enums/role.enum';
import { UpdatePutUserDto } from '../user/dto/update-put-user.dto';

export const updatePutUserDto: UpdatePutUserDto = {
  birthAt: '2023-01-03',
  email: 'cabo@gmail.com',
  name: 'cabo verde',
  password: '1234567',
  role: Role.User,
};
