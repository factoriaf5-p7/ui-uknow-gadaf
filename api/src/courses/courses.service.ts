import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Course } from './schemas/course.schema';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async findAll() {
    try {
      const allCourses = await this.courseModel.find();

      return {
        message: 'All courses retrieved successfully.',
        status: HttpStatus.OK,
        data: allCourses,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: ObjectId) {
    try {
      const course = await this.courseModel.findById(id);
      return {
        message: 'Course retrieved successfully',
        status: HttpStatus.OK,
        data: course,
      };
    } catch (error) {
      throw error;
    }
  }

  async findAllByRating() {
    try {
      const allCourses = await this.courseModel.find().sort({ rating: 'desc' });

      return {
        message: 'All courses retrieved successfully by rating.',
        status: HttpStatus.OK,
        data: allCourses,
      };
    } catch (error) {
      throw error;
    }
  }
}
