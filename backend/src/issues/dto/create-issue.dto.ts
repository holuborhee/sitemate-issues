import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateIssueDto {
    @IsString()
    @IsNotEmpty()
	title: string;


    @IsOptional()
    description: string;
}
