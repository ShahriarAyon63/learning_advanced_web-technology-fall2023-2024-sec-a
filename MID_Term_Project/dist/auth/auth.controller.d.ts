import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LoginDto } from './dto/login.dto';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { User } from './entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<User>;
    login(loginDto: LoginDto): Promise<User>;
    forgetPassword(forgetPasswordDto: ForgetPasswordDto): Promise<void>;
}
