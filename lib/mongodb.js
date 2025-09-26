// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

/**
 * Use globalThis to cache across module reloads in dev (Next.js hot reload).
 */
let cached = globalThis._mongoose; // eslint-disable-line no-underscore-dangle

if (!cached) {
  cached = globalThis._mongoose = { conn: null, promise: null };
}

async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      // Recommended options can be placed here
      // useNewUrlParser and useUnifiedTopology are defaults in newer mongoose versions
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;
