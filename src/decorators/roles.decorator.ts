import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';

export const ROLES_KAY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KAY, roles);
