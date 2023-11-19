import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignUpDto } from './dto/sign-up.dto';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    signUp(signUpDto: SignUpDto): Promise<User>;
    login(email: string, password: string): Promise<User>;
    forgetPassword(email: string, code: string, password: string, rePassword: string): Promise<void>;
}
