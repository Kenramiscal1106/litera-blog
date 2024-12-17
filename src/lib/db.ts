import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';
// import type { BoxOptions } from './stores';

mongoose.connect(MONGO_URL)

export type Feedback = {
	firstName: string;
  lastName: string;
  satisfaction:number;
  message:string;
}

const feedback = new mongoose.Schema<Feedback>({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	satisfaction: {
		type: Number,
		required: true
	},
	message: {
		type: String,
    required:true
	}
});

export const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", feedback);