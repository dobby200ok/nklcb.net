
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import reactQuery from '@/constants/reactQuery';
import KeywordSection from '@/domains/main/components/pages/KeywordSection';

import jobListKeys from "@/domains/jobList/api/keys";
import { getJobList } from "@/domains/jobList/api/server-action";
import { getKeywordList } from '@/domains/main/api/server-action';
import MainBannerSection from '@/domains/main/components/pages/MainBannerSection';

const MainPage = async() => {

  const { data } = await getKeywordList();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: reactQuery.staleTime
      }
    }
  })

  await Promise.all([
    data?.map((k: string) => 
      queryClient.prefetchQuery({
        queryKey: jobListKeys.list(1, k, {}),
        queryFn: () => getJobList(1, k, {})
      })
    )
  ])

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <MainBannerSection />
      <KeywordSection />
    </HydrationBoundary>
  )
}

export default MainPage;