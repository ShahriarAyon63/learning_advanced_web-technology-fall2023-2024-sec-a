
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LoginDto } from './dto/login.dto';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { User } from './entities/user.entity'; // Add this import statement

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() signUpDto: SignUpDto): Promise<User> {
    return this.authService.signUp(signUpDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<User> {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Post('forget-password')
  async forgetPassword(
    @Body() forgetPasswordDto: ForgetPasswordDto,
  ): Promise<void> {
    return this.authService.forgetPassword(
      forgetPasswordDto.email,
      forgetPasswordDto.code,
      forgetPasswordDto.password,
      forgetPasswordDto.rePassword,
    );
  }
}
