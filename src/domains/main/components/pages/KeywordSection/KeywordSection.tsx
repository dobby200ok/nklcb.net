'use client';

import s from './KeywordSection.module.scss';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import SectionTitle from "@/domains/main/components/atoms/SectionTitle";
import TabList from '@/domains/main/components/molecules/TabList';
import TabPanel from '@/domains/main/components/atoms/TabPanel';

import { useKeywordList } from '@/domains/main/api/queries';
import KeywordJobSwiper from '@/domains/main/components/molecules/KeywordJobSwiper';

import Icon from '@/components/atoms/Assets/Icon';

const KeywordSection = () => {

  const [ tabActive, setTabActive ] = useState<string>(''),
        { data: keywordList, isLoading } = useKeywordList(),
        tabItem = keywordList?.data.map((k:string) => ({
          text: `# ${k}`,
          value: k
        })) ?? [];

  useEffect(() => {

    if(keywordList) {
      setTabActive(keywordList.data[0]);
    }

  }, [keywordList]);

  return (
    <section className={ s['section-keyword'] }>
      <div className={ s['area-tit'] }>
        <SectionTitle id="sectionKeywordTitle"
                      align='center'>지금 가장 핫한 키워드</SectionTitle>
        {/* 탭 메뉴 */}
        <div className={ s['area-tab'] }>
          <TabList item={ tabItem }
                   active={ tabActive }
                   setActive={ setTabActive }
                   aria-labelledby="sectionKeywordTitle" />
        </div>
      </div>
      {/* 탭 패널 */}
      <div className={ s['area-tabpanel'] }>
        {
          keywordList?.data.map((k: string, i: number) => (
            <TabPanel key={ k }
                      isActive={ k === tabActive }
                      id={`tabPanel${i}`}
                      aria-labelledby={`tabBtn${i}`}>
              <KeywordJobSwiper keyword={ k } />
            </TabPanel>
          ))
        }
      </div>
      {
        ! isLoading &&
          <div className={ s['btn-wrap'] }>
            <Link href={`/jobList?keyword=${ tabActive }`}
                  className={ s['btn-link'] }>
                  <span className={ s['txt-link'] }>
                    { tabActive } 공고 더보기
                  </span>
              <Icon.ArrowDirecton width={ 32 } height={ 32 } fill='#fff' />
            </Link>
          </div>
      }
    </section>
  )
}

export default KeywordSection;