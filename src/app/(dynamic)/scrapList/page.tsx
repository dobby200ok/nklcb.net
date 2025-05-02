import type { Metadata } from 'next';

import s from '../jobList/page.module.scss';

import classNames from 'classnames';

import ScrapList from '@/domains/scrapList/components/ScrapList';
import ScrapListPagination from '@/domains/scrapList/components/ScrapListPagination';

export const metadata: Metadata = {
    title: '스크랩 공고 | 네카라쿠배'
}

interface JobListPageProps {
    page?: string;
  }
  
  const ScrapListPage = async({ searchParams }: { searchParams: Promise<JobListPageProps> }) => {

    const { page } = await searchParams,
          pageNumber = Number(page) || 1;
    
    return (
        <>
            <section className={ classNames( s['job-content'] ) }>
                <div className={ classNames( s['job-content__inner'] ) }>
                    <div className={ classNames( s['tit-wrap'] ) }>
                        <h3 className={ classNames( s['page-tit'] ) }>
                            스크랩 공고
                        </h3>
                    </div>
                    <div className={ classNames( s['list-wrap'] ) }>
                        <div className={ s['job-list'] }>
                            <ScrapList page={ pageNumber } />
                        </div>
                        <ScrapListPagination page={ pageNumber } />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ScrapListPage;