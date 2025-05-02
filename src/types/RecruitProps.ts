
export interface RecruitProps {
  company: {
    kr: string;
    en: string;
    code: string;
  };
  startDt: Date;
  endDt: Date;
  createDt: Date;
  title: string;
  position: string;
  positionDetail: string;
  employmentType: string;
  entryLevel: string;
  companyDetail: string;
}