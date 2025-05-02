
// @ name : getJobList
// @ description : 채용 공고 리스트 조회에 대한 서버 액션을 관리합니다.

'use server';

import { filterProps } from "@/domains/jobList/types/filterProps";

const getJobList = async(page: number = 1, keyword: string = '', filter: filterProps = {}) => {

  const params = new URLSearchParams();

  if (page) params.set('page', page.toString());
  if (keyword) params.set('keyword', keyword);

  Object.entries(filter).forEach(([key, value]) => {
    if (value) {
      params.set(key, value)
    }
  })

  const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/list?${ params.toString() }`);

  if( !res.ok) {
    throw new Error('/api/jobs/list server-action Error');
  }

  const data = await res.json();

  return data;
}

export { getJobList };