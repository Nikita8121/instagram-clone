import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateUserToken(email: string) {
    const payload = { email };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
