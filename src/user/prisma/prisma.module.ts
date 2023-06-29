import { Module } from "@nestjs/common";
import { PrismaSercive } from "./prisma.service";

@Module({
    providers:[PrismaSercive],
    exports:[PrismaSercive]
})
export class PrismaModule{}