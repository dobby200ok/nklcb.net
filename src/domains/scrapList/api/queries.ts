// @ name : useScrapList
// @ description : 리액트 쿼리를 이용하여 스크랩한 공고를 조회합니다.
//                 반나절마다 공고가 갱신되므로 staleTime은 반나절로 고정합니다.

import { useMutation, useQueryClient } from "@tanstack/react-query";
import scrapListKeys from "@/domains/scrapList/api/keys";

const useScrapList = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['scrapList'],
    mutationFn: async({ page, id }: {page: number; id: string[]}) => {
      const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/scrap`, { 
                                                                                      method: 'POST',
                                                                                      headers: { 'Content-Type' : 'application/json' },
                                                                                      body: JSON.stringify({ id, page })
                                                                                    });
      if(! res.ok) throw new Error('/api/jobs/scrapList action error');
      return res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: scrapListKeys.list(variables.page, variables.id) });
    }
  })

}

export default useScrapList;