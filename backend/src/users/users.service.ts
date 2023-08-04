import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from  'mongoose';
import { User } from './schemas/user.schema';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';
import { RecoverUserDto } from 'src/auth/dto/recover-user.dto';
import { RecoverRequestDto } from 'src/auth/dto/recover-request.dto';
import { RatedCourseDto } from '../courses/dto/rate-course.dto';
import { Course } from 'src/courses/schemas/course.schema';

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private userModel: Model<User>,
		@InjectModel(Course.name) private courseModel: Model<Course>,
	) { }

	async create(user: RegisterUserDto) {
		try{
			const result = await this.userModel.find({ email: user.email });
			if (result.length === 1) {
				throw new HttpException('USER_ALREADY_EXIST', 403);
			} else {
				await this.userModel.create( user );
				return { 
					message: 'User created succesfully',
					status: HttpStatus.OK,
				};
			}
		}catch(error){
			throw error;
		}
	}

	async findAll() {
		try{
			const users = await this.userModel.find().select('-password').lean().exec();
			return {
				message: 'All users retrieved succesfully',
				status: HttpStatus.OK,
				users: users
			};
		}catch(error){
			throw error;
		}
	}

	async getProfile(user: any) {
		const profileArray = await this.userModel.find({ _id: user.sub }).select('-password');
		const profileObject = profileArray.length > 0 ? profileArray[0] : null;
		return profileObject;
	}

	async getCreatedCourses(user: any) {
		const profileArray = await this.userModel.find({ _id: user.sub });
		const profileObject = profileArray.length > 0 ? profileArray[0] : null;
		return profileObject.created_courses;
	}

	async findAllAdmin() {
		try {
			const users = await this.userModel.find();
			return {
				message: 'All users retrieved succesfully',
				status: HttpStatus.OK,
				data: users
			};
			
		} catch (error) {
			throw error;
			
		}
	}

	async findOneLogin(email:string) {
		return await this.userModel.findOne({ email });
	}

	async findOne(id : ObjectId) {
		try {
			const user = await this.userModel.findOne({ _id: id }).select('-password -recovery_token');
			return {
				message: 'User retrived successfully',
				status: HttpStatus.OK,
				data: user
			};
		} catch (error) {
			throw error;
		}
	}

	async findOneWithCreatedCourses(id : ObjectId) {
		try {
			const createdCourses = await this.userModel.findOne({ _id: id }).select('created_courses').populate('created_courses');
			return {
				message: 'User with created courses retrived successfully',
				status: HttpStatus.OK,
				data: createdCourses
			};
		} catch (error) {
			throw error;
		}	
	}

	async findOneWithBoughtCourses(id: ObjectId){	
		try {
			const boughtCourses = await this.userModel.findOne({ _id: id }).select('bought_courses').populate('bought_courses');
			return {
				message: 'User with bought courses retrived successfully',
				status: HttpStatus.OK,
				data: boughtCourses
			};
			
		} catch (error) {
			throw error;
			
		}
	}

	async update(user: UpdateUserDto) {
		try {
			const updatedUser = await this.userModel.findOneAndUpdate({ _id: user._id }, {
				...user
			});
			return {
				message: 'User updated successfully',
				status: HttpStatus.OK,
				data: updatedUser
			};
		} catch (error) {
			throw error;
		}
	}
	async updateUserByAdmin(user: UpdateUserDto) {
		try {
			const updatedUser = await this.userModel.findOneAndUpdate({ _id: user._id }, {
				...user
			});
			return {
				message: 'User updated successfully',
				status: HttpStatus.OK,
				data: updatedUser
			};
		} catch (error) {
			throw error;
		}
	}

	async updatePassword(user: RecoverUserDto) {
		try {
			await this.userModel.findOneAndUpdate({ _id: user._id }, {
				...user
			}).select('-password -recovery_token');
			return {
				message: 'Password updated successfully',
				status: HttpStatus.OK,
				data: ''
			};
		} catch (error) {
			throw error;
		}
	}

	async updateRecoveryToken(user: RecoverRequestDto) {
		try {
			const userTokenCreated = await this.userModel.findOneAndUpdate({ _id: user._id }, {
				...user
			});
			return {
				message: 'Recovery token created successfully',
				status: HttpStatus.OK,
				data: userTokenCreated
			};
		} catch (error) {
			throw error;
		}
	}

	async findAllBoughtCourses( user, filter ) {
		try {
			const usersBoughtCourses = await this.userModel.find( user, filter ).lean().exec();		
			return {
				message: 'All users retrieved succesfully',
				status: HttpStatus.OK,
				data: usersBoughtCourses
			}; 	
		} catch (error) {
			throw error;
		}
	}

	async deleteUserByAdmin(id: ObjectId) {
		try {
			const findUser = await this.userModel.findByIdAndDelete( id );
			if (!findUser) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
			return {
				message: 'User deleted by Admin',
				status: HttpStatus.OK,
				data: 'Deleted.'
			};
		} catch (error) {
			throw error;
		}
	}
	
	async addRating(userId: ObjectId, ratedCourse: RatedCourseDto) {
		try {
			const updatedUser = await this.userModel.findOneAndUpdate({ 'bought_courses.course_id': ratedCourse._id, 'bought_courses.stars': { $eq: 0 } }, {
				'bought_courses.$.stars': ratedCourse.stars
			}).select('bought_courses');
			if(!updatedUser) throw new HttpException('Failed rating course', HttpStatus.BAD_REQUEST);

			return {
				message: 'Course rated successfully',
				status: HttpStatus.OK,
				data: updatedUser.bought_courses
			};
		} catch (error) {
			throw error;
		}
	}

	async updateUserBoughtCourses(userId: mongoose.Types.ObjectId , course: any) {
		const update = {
			$push: {
			  bought_courses: {
					course_id: course.id,
					stars: 0,
					commented: false,
			  },
			},
		  };

		  return this.userModel.findOneAndUpdate(userId, update);
	}

	async verifyBoughtCourses(userId: any, courseId: any) {
		const user = await this.userModel.findOne({ _id: userId }).select('bought_courses');
		const course = await this.courseModel.findOne({ _id: courseId });

		return user.bought_courses.some((item) => item.course_id === course.id);			
	}

}
