import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema({
    collection: 'product',
    versionKey: false
})
export class Product extends Document {

    @Prop({
        type: String,
        unique: true
    })
    name: string;

    @Prop({
        type: Number
    })
    price: number;

    @Prop({
        type: Number
    })
    quantity: number;

    @Prop({
        type: Boolean
    })
    status: boolean;

    @Prop({
        type: Date
    })
    createdAt: Date

    @Prop({
        type: [String]
    })
    colors: string[];

    @Prop({
        type: {
            name: String,
            country: String
        }
    })
    brand: any;

    @Prop({
        type: mongoose.Schema.Types.ObjectId
    })
    categoryId: mongoose.Types.ObjectId;

    @Prop({
        type: String
    })
    photo: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);