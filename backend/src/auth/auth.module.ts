import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { JwtStrategy } from './guards/jwt.strategy';

@Module({
	imports: [ UsersModule, 
		// JwtModule.registerAsync({
		// 	imports: [ ConfigModule ],
		// 	useFactory: async (configService: ConfigService) => ({
		// 		global: true,
		// 		secret: configService.get<string>('SECRET')
		// 	}),
		// 	inject: [ ConfigService ],
		// }),
		MongooseModule.forFeature([
			{
				name: User.name,
				schema: UserSchema
			}
		]),
		JwtModule.register({
			secret: 'SECRET',
			signOptions: { expiresIn: '1d' }
		})
	],
	controllers: [ AuthController ],
	providers: [ AuthService, JwtStrategy ],
	exports: [ AuthModule ]
})
export class AuthModule {}
