// models/Note.js
import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // add other fields here (content, userId, etc.)
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot reload
export default mongoose.models.Note || mongoose.model("Note", NoteSchema);
