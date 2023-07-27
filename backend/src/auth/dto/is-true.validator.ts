import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsTrueConstraint implements ValidatorConstraintInterface {
	validate(value: any) {
		return value === true; // Replace this condition if needed
	}
}

export function IsTrue(validationOptions?: ValidationOptions) {
	return function (object: Record<string, any>, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: IsTrueConstraint,
		});
	};
}