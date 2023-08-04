import { Controller, Get, Body, Post, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserLoginDto } from './dto/get-user-login.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RecoverUserDto } from './dto/recover-user.dto';
import { RecoverRequestDto } from './dto/recover-request.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { VerifyTokenDto } from './dto/verify-token.dto';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	login(@Body() user: GetUserLoginDto) {
		return this.authService.login(user);
	}

	@Post('signup')
	async signup(@Body() user: RegisterUserDto) {
		const response = await this.authService.register(user);
		return response;
	}

	@Post('verify')
	async verifyToken(@Body() token: VerifyTokenDto) {
		return this.authService.verifyToken(token);
	}

	// @Patch('recover')
	// recoverPasswordRequest (@Body() user: RecoverRequestDto){
	// 	return this.authService.recoverPasswordRequest(user);
	// }

	@Get('upassword')
	updatePassword (@Body() user: RecoverUserDto){
		return this.authService.updatePassword(user);
	}
}
