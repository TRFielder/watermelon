import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "All users must have a name"],
	},
	email: {
		type: String,
		required: [true, "All users must have an email"],
	},
	checkIns: [
		{
			submitted: {
				type: Date,
				default: Date.now,
			},
			weight: {
				type: Number,
				required: true,
				min: [0, "Mass cannot be less than zero."],
			},
		},
	],
});

export interface IUser {
	name: string;
	email: string;
	checkIns: Array<ICheckIn>;
}

export interface ICheckIn {
	submitted: Date;
	weight: number;
}

export default mongoose.models.user || mongoose.model("user", userSchema);
