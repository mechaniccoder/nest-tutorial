import { IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  breed: string;
}

export class UpdateCatDto {
  name?: string;
  age?: number;
  breed?: string;
}

export class ListAllCats {
  limit?: string;
}
