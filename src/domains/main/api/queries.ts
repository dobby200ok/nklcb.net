
// @ description : index에서 사용하는 리액트 쿼리를 관리합니다.

import { useQuery } from "@tanstack/react-query";

import { dateUtils } from "@/utils/utils";
import reactQuery from "@/constants/reactQuery";

import { keywordKeys } from "@/domains/main/api/keys";
import { getKeywordList } from "@/domains/main/api/server-action";


// @ name : useKeywordList
// @ description : 인기 검색어에 대한 리액트 쿼리를 관리합니다.

export const useKeywordList = () => {
  return useQuery({
    queryKey: keywordKeys.keyword(dateUtils.dateToStr(new Date())),
    queryFn: () => getKeywordList(),
    staleTime: reactQuery.staleTime,
    gcTime: reactQuery.gcTime
  })
}
