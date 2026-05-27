import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
  collection: 'student',
  versionKey: false
})

export class Student extends Document {
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  name: string;

  @Prop({
    type: Number,
  })
  age: number;

  @Prop({
    type: Number,
  })
  score: number;

  @Prop({
    type: String
  })
  gender: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
