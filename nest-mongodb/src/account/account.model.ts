import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    collection: 'account',
    versionKey: false
})
export class Account extends Document {

    @Prop({
        type: String,
        unique: true
    })
    username: string;

    @Prop({
        type: String
    })
    password: string;

    @Prop({
        type: String
    })
    fullName: string;

    @Prop({
        type: Boolean
    })
    status: boolean;

}

export const AccountSchema = SchemaFactory.createForClass(Account);