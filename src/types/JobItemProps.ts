export interface JobListItemProps {
  _id: string;
  company: {
    kr: string;
    en: string;
    code: string;
  };
  companyDetail?: string;
  entryLevel: {
    name: string;
    code: string;
  };
  origin?: {
    id: number;
    url: string;
  };
  position: {
    kr: string;
    en: string;
    code: string;
  };
  positionDetail: {
    name: string;
    code: string;
  };
  content?: { 
    title: string,
    content: string | string[]
   }[];
  employmentType: string;
  title: string;
  date: {
    start: {
      ymd: string | null;
      time: string | null;
    };
    end: {
      ymd: string | null;
      time: string | null;
    };
    infinity: boolean;
    create: string;
    createTime: string;
  };
  summaryAI?: string | null;
}