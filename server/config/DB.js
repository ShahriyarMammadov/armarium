import { connect, set } from "mongoose";

set("strictQuery", true);

export const connectionDB = async (req, res) => {
  try {
    await connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successfully ....");
  } catch (error) {
    console.log(error);
  }
};
