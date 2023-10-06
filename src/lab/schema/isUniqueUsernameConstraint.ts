import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'isUnique', async: true })
  export class IsUniqueUsernameConstraint implements ValidatorConstraintInterface {
    validate(username: string, args: ValidationArguments) {
     
      const userService = args.object['userService']; 
  
      return userService.isUsernameUnique(username);
    }
  
    defaultMessage(args: ValidationArguments) {
      return 'Username must be unique.';
    }
  }
  