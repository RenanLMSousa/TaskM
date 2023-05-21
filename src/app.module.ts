import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, TaskModule, PrismaModule],
})
export class AppModule {}
