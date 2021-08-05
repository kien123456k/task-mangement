import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Body, Controller, Post, ValidationPipe, Logger } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');

  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    this.logger.verbose(
      `Someone is signing up with data: ${JSON.stringify(authCredentialsDto)}`,
    );
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    this.logger.verbose(
      `Someone is signing in with data: ${JSON.stringify(authCredentialsDto)}`,
    );
    return this.authService.signIn(authCredentialsDto);
  }
}
