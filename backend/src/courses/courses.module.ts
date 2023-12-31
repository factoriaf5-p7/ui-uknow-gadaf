import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './schemas/course.schema';
import { UsersModule } from 'src/users/users.module';
import { User, UserSchema } from 'src/users/schemas/user.schema';

@Module({
	imports: [
		UsersModule,
		MongooseModule.forFeature([
			{
				name:Course.name,
				schema: CourseSchema
			},
			{
				name: User.name,
				schema: UserSchema
			}
		])
	],
	controllers: [ CoursesController ],
	providers: [ CoursesService ]
})
export class CoursesModule {}
