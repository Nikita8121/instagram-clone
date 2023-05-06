import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
export const getJwtConfig = async (
  configService: ConfigService,
): Promise<JwtModuleOptions> => {
  return {
    global: true,
    secret: configService.get('JWT_SECRET'),
  };
};
