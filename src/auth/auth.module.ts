import { Module, forwardRef } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { userModule } from "src/user/user.module";
import { PrismaModule } from "src/user/prisma/prisma.module";
import { AuthService } from "./auth.service";
import { FileModule } from "src/file/file.module";

@Module({
    imports:[JwtModule.register({
        secret: process.env.JWT_SECRET,
    }),
    forwardRef(()=> userModule),
     PrismaModule,
     FileModule
],
    controllers:[AuthController],
    providers:[AuthService],
    exports:[AuthService]

})
export class AuthModule{}