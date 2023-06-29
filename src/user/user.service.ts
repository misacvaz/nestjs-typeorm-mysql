import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdatePutUserDto } from "./dto/update-put-user.dto";
import { UpdatePatchUserDto } from "./dto/update-patch-user.dto";
import { PrismaSercive } from "./prisma/prisma.service";
import  * as bcrypt from 'bcrypt';
@Injectable()
export class UserService{
constructor(private readonly prisma: PrismaSercive){}

   async create(data:CreateUserDto){

   

    const salt = await bcrypt.genSalt()
  console.log(salt)

    data.password = await bcrypt.hash(data.password, salt)

        return await this.prisma.user.create({
          data,
        
         });

    
    }


async list(){
        return this.prisma.user.findMany()
    }

    async show(id:number){
        await this.exists(id)
        return this.prisma.user.findUnique({
            where:{
                id,
            }
            
            })
    }


    async update(id:number, {name, email, password, birthAt, role}:UpdatePutUserDto){
        await this.exists(id)



    const salt = await bcrypt.genSalt()
  

   password = await bcrypt.hash(password, salt)
        
        return this.prisma.user.update({
            data:{
                name,
                email,
                password,
                birthAt:birthAt? new Date(birthAt):null, role
        
            },
            where:{
                id
            }
        })
    }

    async updatePartial(id:number,  {name, email, password, birthAt, role}:UpdatePatchUserDto){
  
        await this.exists(id)
        const data:any ={}
        if(birthAt){
            data.birthAt= new Date(birthAt)
        }

        if(name){
            data.name = name
        }

        if(email){
            data.email = email
        }

        if(password){
          const salt = await bcrypt.genSalt()
          data.password = await bcrypt.hash(data.password, salt)
          
        }

        if(role){
            data.role = role
        }

        return this.prisma.user.update({
            data,
            where:{
                id
            }
        })
    }

    async delete(id:number){
       await this.exists(id)
        return this.prisma.user.delete({
            where:{
                id
            } 
        })

    }

    async exists(id:number){
        if(!(await this.prisma.user.count({
            where:{
                id,
            }}))){
            throw new NotFoundException(`o usuário ${id} não existe.`)
        }
    }
}
