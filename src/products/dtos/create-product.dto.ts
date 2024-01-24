import { Decimal } from '@prisma/client/runtime';
import { IsNotEmpty, IsString, Length, IsDecimal, IsUUID, IsInt } from 'class-validator';
  
  export class CreateProductDTO {

    @IsUUID()
    id: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(2, 50)
    title: string;

    @IsNotEmpty()
    @IsString()
    origin: string;

    @IsNotEmpty()
    @IsString()
    color: string;

    @IsNotEmpty()
    @IsInt()
    vintage: number;

    @IsNotEmpty()
    @IsString()
    @Length(2, 50) 
    varietal: string;

    @IsNotEmpty()
    @IsString()
    @IsDecimal()
    alcohol: string;

    @IsNotEmpty()
    @IsInt()
    content: number;
  
    @IsNotEmpty()
    @IsString()
    photo: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(1, 10)
    @IsDecimal()
    price: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(10, 1000)
    description: string;
  }
