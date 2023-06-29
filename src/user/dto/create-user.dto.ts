import { IsDate, IsEmail, IsEnum, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { Role } from "src/enums/role.enum";

export class CreateUserDto{

    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsStrongPassword({
        minLength:6,
        minLowercase:0,
        minNumbers:0,
        minSymbols:0,
        minUppercase:0
      
    })
    password:string;

    @IsOptional()
    @IsDate()
    birthAt:string;

    @IsOptional()
    @IsEnum(Role)
    role:number;
}