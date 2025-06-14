import { PrismaService } from 'src/prisma.service'
import { TimeBlockService } from './time-block.service'
import { TimeBlockController } from './time-block.controller'
import { Module } from '@nestjs/common'

@Module({
	controllers: [TimeBlockController],
	providers: [TimeBlockService, PrismaService],
	exports: [TimeBlockService]
})
export class TimeBlockModule {}
