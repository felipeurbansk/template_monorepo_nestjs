import { Module } from '@nestjs/common';
import { UserModule } from './modules/users';

@Module({
  imports: [UserModule],
})
export class AppModule {}
