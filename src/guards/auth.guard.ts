import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const token = (authorization ?? '').split(' ')[1];
      const data = await this.authService.checkToken(token);

      if (data) {
        request.tokenPayload = data;
        request.user = await this.userService.show(data.id);

        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
}
