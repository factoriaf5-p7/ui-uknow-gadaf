
/* eslint-disable no-mixed-spaces-and-tabs */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectId } from 'mongoose';
import { RegisterUserDto } from '../auth/dto/register-user.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UpdateUserByAdminDto } from './dto/update-user-byadmin.dto ';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { JwtStrategy } from 'src/auth/guards/jwt.strategy';
import { Request } from 'express';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	// @UseGuards(AuthGuard) // admin
	create(@Body() registerUserDto: RegisterUserDto) {
		return this.usersService.create(registerUserDto);
	}

	@Get('admin')
	// @UseGuards(AuthGuard) //admin
  	findAllAdmin() {
  		return this.usersService.findAllAdmin();
  	}

	@Get('verify/:userId/:courseId')
	verifyBoughtCourses(@Param('userId') userId: any, @Param('courseId') courseId: any) {
		return this.usersService.verifyBoughtCourses(userId, courseId);
	}

	  // @UseGuards(JwtStrategy)
	  @UseGuards(AuthGuard)
	@Get('profile')
  	getProfile(@Req() request: Request) {
		return this.usersService.getProfile(request['user']);
  	}

	@UseGuards(AuthGuard)
	@Get('created-courses')
  	getCreatedCourses(@Req() request: Request) {
	  	return this.usersService.getCreatedCourses(request['user']);
  	}

  	// @Get(':id')
	  //     // @UseGuards(AuthGuard) //admin
  	// findOne(@Param('id') id: ObjectId) {
  	// 	return this.usersService.findOne(id);
  	// }

	  // @UseGuards(AuthGuard) //admin
	// @UseGuards(JwtAuthGuard)
	@Get()
  	findAll() {
  		return this.usersService.findAll();
  	}

  	@Patch()
  	// @UseGuards(AuthGuard)
  	update(@Body() updateUserDto: UpdateUserDto) {
  		return this.usersService.update(updateUserDto);
	}

	@Patch('admin')
	// @UseGuards(AuthGuard)
  	updateUserByAdmin(@Body() updateUserByAdminDto: UpdateUserByAdminDto) {
  		return this.usersService.updateUserByAdmin(updateUserByAdminDto);
  	}

	@Delete('admin/delete')
  	// @UseGuards(AuthGuard) //admin
  	deleteUserByAdmin(@Query('id') id: ObjectId) {
  		return this.usersService.deleteUserByAdmin(id);
  	}

}