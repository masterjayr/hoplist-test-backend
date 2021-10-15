import { Controller, Post, Get, Res, Body } from "@nestjs/common";
import { Response } from 'express';
import { ResponseService } from "src/modules/shared/response.service";
import { CreateNewLocationDto } from "../dto/createNewLocation.dto";
import { LocationService } from "../service/location.service";

@Controller('location')
export class LocationController {
    constructor(
        private responseService: ResponseService,
        private locationService: LocationService,
    ) {}

    @Get('/all')
    async getLocations(
        @Res() res: Response,
        
    ) {
        try {
            const response = await this.locationService.getLocations(
            );
            return this.responseService.json(
                res,
                200,
                'Successfully Processed',
                response,
            );
        } catch (error) {
            return this.responseService.json(res, error);
        }
    }

    @Post('/add')
    async addLocation(
        @Res() res: Response,
        @Body() createNewLocationDto: CreateNewLocationDto
    ) {
        try {
            const response = await this.locationService.addLocation(
                createNewLocationDto,
            );
            return this.responseService.json(
                res,
                200,
                'Successfully Added Location',
                response,
            );
        } catch (error) {
            return this.responseService.json(res, error);
        }
    }       
}