
// @ name : model
// @ description : 연동되는 DB 도큐먼트의 스키마를 관리합니다.

import { Schema, model, models } from 'mongoose';

const RecruitSchema = new Schema({
  company: {
    kr: { type: String },
    en: { type: String },
    code: { type: String }
  },

  companyDetail: { type: String },

  origin: {
    company: { type: String },
    id: { type: Number },
    url: { type: String }
  },

  entryLevel: {
    name: { type: String },
    code: { type: String }
  },

  employmentType: { type: String },

  title: {
    type: String,
    required: true
  },

  content: [
    {
      title: { type: String },
      content: { type: Schema.Types.Mixed }
    }
  ],

  position: {
    kr: { type: String },
    en: { type: String },
    code: { type: String }
  },

  positionDetail: {
    name: { type: String },
    code: { type: String }
  },

  summaryAI: { type: String },

  date: {
    start: {
      ymd: { type: String },
      time: { type: String }
    },
    end: {
      ymd: { type: String },
      time: { type: String }
    },
    infinity: { type: Boolean },
    create: { type: String }
  },

  startDt: { type: Date },
  endDt: { type: Date },
  createDt: { type: Date }

}, {
  collection: 'post',
  timestamps: true
});


const RecruitModel = models.recruit || model('recruit', RecruitSchema);

export default RecruitModel;