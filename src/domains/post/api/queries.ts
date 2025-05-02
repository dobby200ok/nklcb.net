
// @ name : usePost
// @ description : 리액트 쿼리를 이용하여 공고를 조회합니다.
//                 반나절마다 공고가 갱신되므로 staleTime은 반나절로 고정합니다.

import { useQuery } from "@tanstack/react-query";
import postKeys from "@/domains/post/api/keys";
import { getPost } from "@/domains/post/api/server-action";
import reactQuery from "@/constants/reactQuery";

const usePost = (id: string) => {

  return useQuery({
    queryKey: postKeys.post(id),
    queryFn: () => getPost(id),
    staleTime: reactQuery.staleTime,
    gcTime: reactQuery.gcTime
  })
}

export default usePost