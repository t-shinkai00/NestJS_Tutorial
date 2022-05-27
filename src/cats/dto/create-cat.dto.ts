import { IsNumberString, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  name: string;
  @IsNumberString()
  age: number;
  @IsNotEmpty()
  breed: string;
}
