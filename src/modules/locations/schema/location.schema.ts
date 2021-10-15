import * as mongoose from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LocationDocument = Location & mongoose.Document;

@Schema({
    timestamps: true,
    collection: 'locations',
    toJSON: {
        virtuals: true,
        transform: (_doc: any, ret: any): void => {
            delete ret._id;
            delete ret.__v;
        },
    },
})
export class Location {
    id?:string;

    @Prop({
        type: String,
        required: true,
    })
    location_name: string;

    @Prop({
        type: String,
        required: true,
    })
    description: string;

    @Prop({
        type: String,
        required: true,
    })
    latitude: string;

    @Prop({
        type: String,
        required: true,
    })
    longitude: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
