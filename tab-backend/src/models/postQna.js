import mongoose from 'mongoose';

const { Schema } = mongoose;

const QnaSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본값으로 지정
  },
});

const Qna = mongoose.model('Qna', QnaSchema);
export default Qna;
