'use client'

import s from './ScrapList.module.scss';

import { useEffect, useState } from 'react';
import classNames from 'classnames';

import JobCardItem from '@/components/molecules/JobCardItem';

import useScrapList from '@/domains/scrapList/api/queries';

import { JobListItemProps } from '@/types/JobItemProps';
import SkeletonJobList from '@/domains/jobList/components/JobList/SkeletonJobList';

import EmptyScrapList from '@/domains/scrapList/components/ScrapList/EmptyScrapList';


interface ScrapListProps {
    page : number;
}

const ScrapList:React.FC<ScrapListProps> = ({ page }) => {

    const [id, setId] = useState<string[]>([]),
          { mutate, data: scrapList, isPending } = useScrapList();

    useEffect(() => {

        const store = localStorage.getItem('bookmark');

        if(store) {
            setId(JSON.parse(store));
        }

    }, []);

    useEffect(() => {

        mutate({ page: page, id: id });

    }, [id, page, mutate]);

    if (isPending ) return <SkeletonJobList />

    if (! scrapList || scrapList.data.length === 0) {
        return <EmptyScrapList />
    }

    return (
        <ul className={ classNames(s['list-result']) }>
            {
                scrapList?.data?.map((e: JobListItemProps) => {
                    return (
                        <JobCardItem key={ e._id }
                                    _id={ e._id }
                                    company={ e.company }
                                    title={ e.title }
                                    position={ e.position }
                                    positionDetail={ e.positionDetail }
                                    entryLevel={ e.entryLevel }
                                    date={ e.date }
                                    employmentType={ e.employmentType } />
                    )
                })
            }
        </ul>
    )
}

export default ScrapList;