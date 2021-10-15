import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LOCATION } from "../common/constants";
import { ResponseService } from "../shared/response.service";
import { LocationController } from "./controller/location.controller";
import { LocationSchema } from "./schema/location.schema";
import { LocationService } from "./service/location.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: LOCATION, schema: LocationSchema}])
    ],
    controllers: [LocationController],
    providers: [LocationService, ResponseService],
    exports: [LocationService]
})
export class LocationModule {}