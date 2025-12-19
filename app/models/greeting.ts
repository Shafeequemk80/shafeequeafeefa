import { Schema, model, models } from "mongoose";

export interface IGreeting {
  name: string;
  message: string;
  createdAt: Date;
}

const greetingSchema = new Schema<IGreeting>(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Greeting || model<IGreeting>("Greeting", greetingSchema);
