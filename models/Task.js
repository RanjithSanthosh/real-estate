import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Task title
    completed: { type: Boolean, default: false }, // Status
  },
  { timestamps: true } // adds createdAt and updatedAt
);

// Prevent overwriting model during hot reload
export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
