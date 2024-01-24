import { IsNotEmpty, IsString, Length, IsDecimal, IsUUID, IsInt } from 'class-validator';
  
  export class CreateProductDTO {
  
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
    @IsDecimal()
    alcohol: number;

    @IsNotEmpty()
    @IsInt()
    content: number;
  
    @IsNotEmpty()
    @IsString()
    photo: string;
  
    @IsNotEmpty()
    @Length(1, 10)
    @IsDecimal()
    price: number;
  
    @IsNotEmpty()
    @IsString()
    @Length(10, 1000)
    description: string;
  }
