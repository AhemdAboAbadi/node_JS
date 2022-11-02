import { AuthService } from './auth.service';
import { AuthController } from './auth.controler';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
