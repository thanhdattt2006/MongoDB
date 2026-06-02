import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema({
    collection: 'TransactionDetails',
    versionKey: false
})
export class TransactionDetails extends Document {

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    })
    AccID: string;

    @Prop({
        type: Number
    })
    TransMoney: number;

    @Prop({
        type: Number // 1: Tiền gửi, 2: Tiền rút
    })
    TransType: number;

    @Prop({
        type: Date,
        default: Date.now
    })
    DateOfTrans: Date;

}

export const TransactionDetailsSchema = SchemaFactory.createForClass(TransactionDetails);
