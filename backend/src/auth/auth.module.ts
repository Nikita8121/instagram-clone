import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountModule } from 'src/account/account.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJwtConfig } from 'src/shared/configs/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
    PassportModule,
    AccountModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
