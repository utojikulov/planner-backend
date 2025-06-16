import { PrismaService } from 'src/prisma.service'
import { PomodoroService } from './timer.service'
import { PomodoroController } from './timer.controller'
import { Module } from '@nestjs/common'

@Module({
	controllers: [PomodoroController],
	providers: [PomodoroService, PrismaService],
	exports: [PomodoroService]
})
export class PomodoroModule {}
