import { CanActivate, ExecutionContext, Inject, Injectable, forwardRef } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
      
      private readonly authService: AuthService,
      private readonly userService: UserService,
      ){}

   async canActivate(context: ExecutionContext) {

        const request =  context.switchToHttp().getRequest();
        const {authorization}= request.headers

    
  try{

      
        const token =(authorization ?? '').split(' ')[1];
        const data = await  this.authService.checkToken(token)
        
        if(data){
        request.tokenPayload = data;
        request.user = await this.userService.show(data.id)

        return true
        }
        return false
        
  }catch(e){
    return false
  }
}

}