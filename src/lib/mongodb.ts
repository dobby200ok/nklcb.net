
// @ name : mongodb
// @ description : API 라우트에서 사용할 DB를 연동합니다.

import mongoose from "mongoose";

const connectDatabase = async () => {

  if(! process.env.MONGO_DB_URI) {
    throw new Error ('E00001 : 환경 변수 세팅이 올바르지 않습니다.')
  }

  if(mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: process.env.MONGO_DB_NAME
    });

    return true;
  } catch (error) {

    console.log(error)
  }
}

export default connectDatabase;