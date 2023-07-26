import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { ObjectId } from 'mongoose';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get('rating')
  findAllByRating() {
    return this.coursesService.findAllByRating();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.coursesService.findOne(id);
  }
}
