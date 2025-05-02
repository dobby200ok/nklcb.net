import type { Metadata } from 'next';

import s from './page.module.scss';

import classNames from 'classnames';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import reactQuery from '@/constants/reactQuery';
import JobPost from '@/components/molecules/JobPost/JobPost';

import postKeys from '@/domains/post/api/keys';
import { getPost } from '@/domains/post/api/server-action';

interface PostPageProps {
  postId: string;
}

export const generateMetadata = async ({ params }: { params: Promise<PostPageProps> } ): Promise<Metadata> => {

  const postId = (await params).postId,
        post = await getPost(postId);

  return {
    title : `${post.data.title} | 네카라쿠배`,
    description: `${ post.data.company.kr } 채용은 네카라쿠배!`
  }
};

const PostPage = async ({ params }: { params: Promise<PostPageProps> } ) => {

  const { postId } = await params;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: reactQuery.staleTime,
      }
    }
  })

  await queryClient.prefetchQuery({
    queryKey: postKeys.post(postId),
    queryFn: () => getPost(postId)
  })

  return (
    <section className={ classNames( s['job-content'] ) }>
      <div className={ classNames( s['job-content__inner'] ) }>
        <div className={ s['tit-wrap'] }>
          <h3 className={ s['page-tit'] }>
            공고 상세
          </h3>
        </div>
        <HydrationBoundary state={ dehydrate(queryClient) }>
          <JobPost postId={ postId } />
        </HydrationBoundary>
      </div>
    </section>
  )
}

export default PostPage;