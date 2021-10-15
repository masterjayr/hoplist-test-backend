import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LOCATION } from "src/modules/common/constants";
import { CreateNewLocationDto } from "../dto/createNewLocation.dto";
import { LocationDocument } from "../schema/location.schema";

@Injectable()
export class LocationService {
    constructor(
        @InjectModel(LOCATION)
        private readonly locationModel: Model<LocationDocument>,
    ) {}


    async addLocation(createNewLocationDto: CreateNewLocationDto) : Promise<LocationDocument> {
        return await this.locationModel.create(createNewLocationDto);
    }

    async getLocations() :Promise<LocationDocument[]>{
        return await this.locationModel.find();
    }
}