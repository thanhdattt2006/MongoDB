import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    collection: 'category',
    versionKey: false
})

export class Category extends Document {
    // Prop map class String to type String in MongoDB
    @Prop({
        type: String,
        unique: true,
    })
    name: string; //string nay la string type cua TypeScript, khong phai string type cua MongoDB
}

export const CategorySchema = SchemaFactory.createForClass(Category);
