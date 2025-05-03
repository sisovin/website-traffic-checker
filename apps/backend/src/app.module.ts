import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TrafficModule } from './traffic/traffic.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, TrafficModule, UsersModule],
})
export class AppModule {}
