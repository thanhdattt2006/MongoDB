import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    collection: 'category',
    versionKey: false
})
export class Category extends Document {

    @Prop({
        type: String,
        unique: true
    })
    name: string;

}

export const CategorySchema = SchemaFactory.createForClass(Category);