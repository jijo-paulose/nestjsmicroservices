import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

export class LoginUserDto {
  readonly email: string;
  readonly password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.validateUserByPassword(loginUserDto);
  }
}
