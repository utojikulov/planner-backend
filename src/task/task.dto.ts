import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'
import { Priority } from 'prisma/generated/prisma'
import { Transform } from 'class-transformer'

export class TaskDto {
	@IsString()
	@IsOptional()
	name: string

	@IsBoolean()
	@IsOptional()
	isCompleted?: false

	@IsString()
	@IsOptional()
	createdAt?: string

	@IsEnum(Priority)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	priority?: Priority
}
