import { ApiProperty } from '@nestjs/swagger';
import { IsEmail,IsString, IsNotEmpty } from 'class-validator';
import { IsTrue } from './is-true.validator';

export class RegisterUserDto {
	@ApiProperty({ example: 'Jhon' })
	@IsNotEmpty()
	@IsString()
		name: string;
  
	@ApiProperty({ example: 'Connor' })
	@IsNotEmpty()
	@IsString()
		last_name: string;
  
	@ApiProperty({ example: 'jhon.connor@judgmentday.com' })
	@IsNotEmpty()
	@IsEmail()
		email: string;
  
	@ApiProperty({ example: '12345' })
	@IsNotEmpty()
		password: string;
	
		@ApiProperty({ example: true })
		@IsNotEmpty()
		@IsTrue({ message: 'Please read and accept our Terms of service and Privacy policy.' })
			checkbox: boolean;
}

