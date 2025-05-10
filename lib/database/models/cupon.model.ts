import { Document, Schema, model, models } from "mongoose";

export interface ICupon extends Document {
  code: string;
  amount: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const CuponSchema = new Schema({
  code: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["not use", "used"], default: "not use" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Cupon = models?.Cupon || model("Cupon", CuponSchema);

export default Cupon;
