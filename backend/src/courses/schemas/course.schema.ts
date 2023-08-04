
/* eslint-disable no-mixed-spaces-and-tabs */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CoursesDocument = Course & Document;

@Schema({ timestamps: true })
export class Course {
  @ApiProperty({ example: 'Introduction to Web Development' })
  @Prop({ required: true })
  	title: string;
  
  @ApiProperty({ example: '32u4h91v23um4' })
  @Prop()
  	userId: string;

    @ApiProperty({ example: '32u4h91v23um4' })
    @Prop()
    	rating: number;

  @ApiProperty({ example: 59.99 })
  @Prop({ default: 100 })
  	price: number;

  @ApiProperty({ example: 'Web Development' })
  @Prop({ required: true })
  	topic: string;

  @ApiProperty({ example: 'image.png' })
  @Prop({ default: 'https://images.vexels.com/media/users/3/224169/isolated/preview/dbfe1f493ad01117fa4ec5ba10150e4d-computer-programming-logo.png' })
  	image: string;

  @ApiProperty({ example: 'image.png' })
  @Prop({ required: true })
  	category: string;

  @ApiProperty({ example: 'Beginner' })
  @Prop({ required: true })
  	difficulty: string;

    @ApiProperty({ example: 'This course will immerse you in the fascinating realm of cybersecurity, offering a practical and detailed approach to securing your data and valuable information.' })
  @Prop( { required: true })
  	description: string;

  @ApiProperty({ example: true })
  @Prop({ default: false })
  	bought: boolean;

  @ApiProperty({ example: 'https://www.youtube.com/watch?v=SqcY0GlETPk' })
  @Prop( { required: true })
  	videoURL: string;
      
  @ApiProperty({ example: 'What is Scala for Spark?' })
  @Prop( { required: true })
  	videoTitle: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
