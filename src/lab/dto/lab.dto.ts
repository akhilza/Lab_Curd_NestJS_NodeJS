import { IsNotEmpty, Validate } from 'class-validator';
import { IsUniqueUsernameConstraint } from '../schema/isUniqueUsernameConstraint';

export class LabDto {

  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  @Validate(IsUniqueUsernameConstraint,{
    message: 'Username must be unique.'
  })
  username: string;

  @IsNotEmpty()
  image:string[]

  @IsNotEmpty()
  address:string

}
