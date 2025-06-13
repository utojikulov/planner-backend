import { PrismaService } from 'src/prisma.service'
import { TaskService } from './task.service'
import { TaskController } from './task.controller'
import { Module } from '@nestjs/common'

@Module({
	controllers: [TaskController],
	providers: [TaskService, PrismaService],
	exports: [TaskService]
})
export class TaskModule {}
