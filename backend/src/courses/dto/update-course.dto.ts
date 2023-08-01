import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';
import { ObjectId } from 'mongoose';
import { ArrayMaxSize, IsArray, IsNotEmpty, IsMongoId } from 'class-validator';

export class UpdateCourseDto {
	@ApiProperty({ example: '6590640b558ac28e56d30993' })
	@IsMongoId()
	@IsNotEmpty()
		_id: ObjectId;

	@ApiProperty({ example: 'The best course of web development' })
	@IsNotEmpty()
		name: string;

	@ApiProperty({ example: 'Web development' })
	@IsNotEmpty()
		topic: string;

	@ApiProperty({ example: 'Hard' })
	@IsNotEmpty()
		difficulty: string;

	@ApiProperty({ example: [ '#dev', '#frontend', '#web' ] })
	@IsArray()
	@ArrayMaxSize(3)
		tags: [string, string, string];

	@ApiProperty({ example: 'This course will immerse you in the fascinating realm of cybersecurity, offering a practical and detailed approach to securing your data and valuable information.' })
	@IsNotEmpty()
		description: string;
	
	@ApiProperty({ example: 'https://www.youtube.com/watch?v=SqcY0GlETPk' })
	@IsNotEmpty()
		videoURL: string;
	
	@ApiProperty({ example: 'What is Scala for Spark?' })
	@IsNotEmpty()
		videoTitle: string;

	@ApiProperty({ example: '20' })
	@IsNotEmpty()
		videoDuration: number;
	
}
