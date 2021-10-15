import { IsString, IsNotEmpty } from 'class-validator';

export class CreateNewLocationDto {
    @IsString()
    @IsNotEmpty()
    location_name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    latitude: string;

    @IsString()
    @IsNotEmpty()
    longitude: string;
}