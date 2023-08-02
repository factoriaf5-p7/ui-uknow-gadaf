import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
	@ApiProperty({ example: 'How to validate dtos properties' })
	@IsString()
	@IsNotEmpty()
		title: string;
	
	@ApiProperty({ example: '423un4v89423' })
	@IsString()
		userId: string;

	@ApiProperty({ example: 'How to validate dtos properties' })
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

	@ApiProperty({ example: 'img.png', default: 'https://images.vexels.com/media/users/3/224169/isolated/preview/dbfe1f493ad01117fa4ec5ba10150e4d-computer-programming-logo.png' })
	@IsString()
		image: string;

	@ApiProperty({ example: 'This course will immerse you in the fascinating realm of cybersecurity, offering a practical and detailed approach to securing your data and valuable information.' })
	@IsString()
	@IsNotEmpty()
		description: string;

	@ApiProperty({ example: 'https://www.youtube.com/watch?v=SqcY0GlETPk' })
	@IsString()
	@IsNotEmpty()
		videoURL: string;
	
	@ApiProperty({ example: 'What is Scala for Spark?' })
	@IsString()
	@IsNotEmpty()
		videoTitle: string;
}
