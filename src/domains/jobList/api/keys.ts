// @ name : jobListKeys
// @ description : /jobList에서 조회하는 공고에 대한 리액트 쿼리 키를 관리합니다.

import { filterProps } from '@/domains/jobList/types/filterProps';

const jobListKeys = {
  all: ['jobList'] as const,
  list: (
    page : number = 1,
    keyword : string = '',
    filter : filterProps = {}
  ) => [ ...jobListKeys.all, page, keyword, filter ] as const
};

export default jobListKeys
