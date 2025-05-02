import type { Metadata } from 'next';
import s from './page.module.scss';
import classNames from 'classnames';

import FilterButton from '@/components/atoms/Buttons/FilterButton';
import JobList from '@/domains/jobList/components/JobList';
import Pagination from '@/components/molecules/Pagination';

import SearchButton from '@/components/atoms/Buttons/SearchButton';

export const metadata: Metadata = {
  title: '채용 공고 | 네카라쿠배'
}

interface JobListPageProps {
  page?: string;
  keyword?: string;
  sort?: string;
  company?: string;
  entryLevel?: string;
  position?: string;
  positionDetail?: string;
}

const JobListPage = async({ searchParams }: { searchParams: Promise<JobListPageProps> }) => {

  const params = await searchParams,
        page = Number(params.page) || 1,
        keyword = params.keyword || '',
        filter = keyword ? {} : {
          sort: params.sort || '' ,
          company: params.company || '' ,
          entryLevel: params.entryLevel || '' ,
          position: params.position || '' ,
          positionDetail: params.positionDetail || '' ,
        };

  return (
    <>
        <section className={ classNames( s['job-content'] ) }>
          <div className={ classNames( s['job-content__inner'] ) }>
            <div className={ classNames(s['tit-wrap']) }>
              <h3 className={ classNames(s['page-tit']) }>
                열린 공고
              </h3>
            </div>
            <div className={ classNames( s['util-wrap'] ) }>
              <SearchButton />
              <FilterButton />
            </div>
            <div className="list-wrap">
              <div className={ classNames( s['job-list'] ) }>
                <JobList page={ page }
                         keyword={ keyword }
                         filter={ filter } />
              </div>
                <Pagination page={ page }
                            keyword={ keyword }
                            filter={ filter } />
            </div>
          </div>
        </section>
    </>
  )
}

export default JobListPage;