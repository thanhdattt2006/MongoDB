import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    collection: 'sinhVien',
    versionKey: false
})
export class SinhVien extends Document {

    @Prop({
        type: String
    })
    hoTen: string;

    @Prop({
        type: String
    })
    diaChi: string;

    @Prop({
        type: Number
    })
    dtb: number;

}

export const SinhVienSchema = SchemaFactory.createForClass(SinhVien);