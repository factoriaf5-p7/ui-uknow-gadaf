import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';

enum Difficulty {
	Begginer = 'Begginer',
	Medium = 'Medium',
	Advanced = 'Advanced'
}

export class CreateCourseDto {
	@ApiProperty({ example: 'How to validate dtos properties' })
	@IsString()
	@IsNotEmpty()
		name: string;

	@ApiProperty({ example: 'How to validate dtos properties' })
	@IsString()
	@IsNotEmpty()
		price: string;

	@ApiProperty({ example: 'Web development | Backend | Frontend ' })
	@IsString()
	@IsNotEmpty()
		topic: string;

		@ApiProperty({ example: 'Big Data ' })
	@IsString()
	@IsNotEmpty()
			category: string;

	@ApiProperty({ example: 'Easy, Intermediate, Hard, Advanced' })
	@IsString()
	@IsNotEmpty()
		difficulty: string;
	
	@ApiProperty({ example: '#webdevolopment, #javascript, #css' })
	@IsString()
	@IsNotEmpty()
		tags: string;

	@ApiProperty({ example: 'img.png' })
	@IsString()
	@IsNotEmpty()
		image: string;
	
	@ApiProperty({ example: '### How to validate dtos properties<br>## Class-validator<br>To validate install the package as follow: nmp i class-validator.' })
	@IsString()
	@IsNotEmpty()
		content: string;
}
