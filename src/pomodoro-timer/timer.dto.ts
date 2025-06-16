import { IsBoolean, IsNumber, IsOptional } from 'class-validator'

export class PomodoroSessionDto {
	@IsOptional()
	@IsBoolean()
	isComleted: boolean
}

export class PomodoroRoundDto {
	@IsNumber()
	totalSeconds: number

	@IsOptional()
	@IsBoolean()
	isComleted: boolean
}
