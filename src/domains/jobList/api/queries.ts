
// @ name : useJobList
// @ description : 리액트 쿼리를 이용하여 공고를 조회합니다.
//                 반나절마다 공고가 갱신되므로 staleTime은 반나절로 고정합니다.

import { useQuery } from "@tanstack/react-query";
import jobListKeys from "@/domains/jobList/api/keys";
import { getJobList } from "@/domains/jobList/api/server-action";
import { filterProps } from "@/domains/jobList/types/filterProps";
import reactQuery from "@/constants/reactQuery";

const useJobList = (
                    page: number = 1,
                    keyword: string = '',
                    filter: filterProps = {}
                  ) => {

  return useQuery({
    queryKey: jobListKeys.list(page, keyword, keyword ? {} : filter),
    queryFn: () => getJobList(page, keyword, keyword ? {} : filter),
    staleTime: reactQuery.staleTime,
    gcTime: reactQuery.gcTime
  })
}

export default useJobList