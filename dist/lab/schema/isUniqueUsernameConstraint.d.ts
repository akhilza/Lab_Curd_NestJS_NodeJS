import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsUniqueUsernameConstraint implements ValidatorConstraintInterface {
    validate(username: string, args: ValidationArguments): any;
    defaultMessage(args: ValidationArguments): string;
}
