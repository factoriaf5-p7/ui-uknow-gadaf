import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateCourseDto {
	@ApiProperty({ example: 'How to validate dtos properties' })
	@IsString()
	@IsNotEmpty()
		name: string;
	
	@ApiProperty({ example: '423un4v89423' })
	@IsString()
		userId: ObjectId;

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

	@ApiProperty({ example: 'img.png', default: 'https://images.vexels.com/media/users/3/224169/isolated/preview/dbfe1f493ad01117fa4ec5ba10150e4d-computer-programming-logo.png' })
		image: string;
	
	@ApiProperty({ example: '### How to validate dtos properties<br>## Class-validator<br>To validate install the package as follow: nmp i class-validator.' })
	@IsString()
	@IsNotEmpty()
		content: string;
}
