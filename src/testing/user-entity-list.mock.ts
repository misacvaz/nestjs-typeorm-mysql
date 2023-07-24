import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'cabo verde',
    email: 'cabo@gmail.com',
    birthAt: new Date('2023-01-03'),
    id: 1,
    password: '$2b$10$1NoC19FlnpnvE5iP9FjWfuxxQDT13IXcgknLR66FPIopQtlIxHFnW',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'cabo',
    email: 'verde@gmail.com',
    birthAt: new Date('2023-01-03'),
    id: 2,
    password: '$2b$10$1NoC19FlnpnvE5iP9FjWfuxxQDT13IXcgknLR66FPIopQtlIxHFnW',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'terra',
    email: 'terra@gmail.com',
    birthAt: new Date('2023-01-03'),
    id: 3,
    password: '$2b$10$1NoC19FlnpnvE5iP9FjWfuxxQDT13IXcgknLR66FPIopQtlIxHFnW',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
