import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    collection: 'Account',
    versionKey: false
})
export class Account extends Document {

    @Prop({
        type: String,
        unique: true
    })
    Username: string;

    @Prop({
        type: String
    })
    Password: string;

    @Prop({
        type: String
    })
    Phone: string;

    @Prop({
        type: Number,
        default: 0
    })
    Balance: number;

}

export const AccountSchema = SchemaFactory.createForClass(Account);