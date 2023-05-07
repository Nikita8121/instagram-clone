import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateUserToken(id: string) {
    const payload = { id };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
