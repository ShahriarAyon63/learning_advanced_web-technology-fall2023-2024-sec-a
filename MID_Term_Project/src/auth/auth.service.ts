
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignUpDto } from './dto/sign-up.dto';
import { LoginDto } from './dto/login.dto';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<User> {
    const { email, password, rePassword } = signUpDto;

    // Check if the passwords match
    if (password !== rePassword) {
      throw new ConflictException('Passwords do not match');
    }

    // Check if the user with the provided email already exists
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = this.userRepository.create({
      ...signUpDto,
      password: hashedPassword,
    });

    // Save the user to the database
    return this.userRepository.save(newUser);
  }

  async login(email: string, password: string): Promise<User> {
    // Find the user with the provided email
    const user = await this.userRepository.findOne({ where: { email } });

    // Check if the user exists
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Check if the provided password matches the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords do not match, throw an error
    if (!passwordMatch) {
      throw new NotFoundException('Invalid credentials');
    }

    // Return the authenticated user
    return user;
  }

  async forgetPassword(
    email: string,
    code: string,
    password: string,
    rePassword: string,
  ): Promise<void> {
    // Check if the passwords match
    if (password !== rePassword) {
      throw new ConflictException('Passwords do not match');
    }

    // Find the user with the provided email
    const user = await this.userRepository.findOne({ where: { email } });

    // Check if the user exists
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Implement your logic for handling password recovery code verification
    // Update the user's password with the new one after successful verification
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    // Save the updated user to the database
    await this.userRepository.save(user);
  }
}
