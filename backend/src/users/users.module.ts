import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { Course, CourseSchema } from 'src/courses/schemas/course.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: User.name,
				schema: UserSchema
			},
			{
				name: Course.name,
				schema: CourseSchema
			}
		])
	],
	controllers: [ UsersController ],
	providers: [ UsersService, JwtService ],
	exports: [ UsersService ]
})
export class UsersModule {}
