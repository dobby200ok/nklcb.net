'use client'

import s from './FilterModal.module.scss';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

import ArrowButton from '@/components/atoms/Buttons/ArrowButton';
import Icon from '@/components/atoms/Assets/Icon';

import companyOption from '@/constants/companyOption';
import jobOption from '@/constants/jobOption';

import useModal from '@/hooks/useDynamicModal';

interface FilterProps {
  sort: string;
  company: string[];
  position: string;
  positionDetail: string[];
  entryLevel: string[];
}

const FilterModal = () => {

  const initialFilter: FilterProps = {
          sort: 'startDt',
          company: ['all', ...companyOption.map(e => e.code)],
          position: '',
          positionDetail: [],
          entryLevel: ['all', 'EL10001', 'EL10002'],
        },
        [filter, setFilter] = useState<FilterProps>(initialFilter),
        positionDetail = jobOption.find(e => e.position.code === filter.position)?.detail || [],
        checkboxOption = {
          company: companyOption.map(e => e.code),
          entryLevel: ['EL10001', 'EL10002'],
          positionDetail: positionDetail.map(e => e.code)
        },
        [errorMsg, setErrorMsg] = useState<string>(''),
        [detailActive, setDetailActive] = useState<boolean>(false),
        router = useRouter(),
        { complete } = useModal();

  useEffect(() => {

    document.body.style.overflow = 'hidden';

    return(() => {

      document.body.style.overflow = '';

    });
  }, []);

  interface handleFilterChangeProps {
    type: 'radio' | 'checkbox',
    key: keyof FilterProps,
    value: string
  }

  // @name handleFilterChange : 옵션 선택 시 radio, checkbox 여하에 따라 state를 갱신합니다.

  const handleFilterChange = ( { type, key, value }: handleFilterChangeProps ) => {
    
    setFilter(prev => {
      const current = prev[key];

      if (type === 'radio') {
        return { ...prev, [key]: value };
      }
  
      if(type === 'checkbox' && Array.isArray(current) ) {
        const all = checkboxOption[key as keyof typeof checkboxOption];

        if(value === 'all') {
          return { ...prev, [key] : (current.includes('all')) ? [] : ['all', ... all]}
        } else {
          if(current.includes(value)) {
            const removeOption = current.filter(e => e !== 'all' && e !== value);

            return { ...prev, [key]: removeOption}
          } else {
            const addOption = [...current, value];
            
            return { ...prev, [key]: (addOption.length === all.length) ? [...addOption, 'all'] : addOption }
          }
        }
      }
  
      return prev;
    });

  };

  // @name isActiveOption : 옵션 선택 시 선택한 옵션이 포함되어 있는 지 여부를 boolean 형태로 리턴합니다.

  const isActiveOption = ( { type, key, value }: handleFilterChangeProps ):boolean => {

    if(type === 'radio') {
      return (filter[key] === value)
    }
    if(type === 'checkbox') {
      return (filter[key].includes(value));
    }

    return false;
  }

  // @name handleTabActive : 직군 선택 시 직군 상세 탭을 활성화합니다.

  const handleTabActive = (code: string) => {

    setDetailActive(true);

    if(code !== filter.position) {
      setFilter(prev => ({
        ...prev,
        positionDetail: []
      }))
    }

  }

  // @name handleRemoveTabActive : 뒤로 가기 선택 시, 선택한 직군 값을 초기화합니다.

  const handleRemoveTabActive = () => {

    setDetailActive(false);
    setFilter(prev => ({
      ...prev
    }))

  }

  // @ name handleFilterSubmit : 저장된 필터 값을 유효성 검증하고 라우트합니다.
  
  const handleFilterSubmit = () => {

    if(! filter.sort) {
      setErrorMsg('정렬 기준을 선택해 주세요.');

      return false;
    }

    if(! filter.company.length) {
      setErrorMsg('검색할 기업을 선택해 주세요.');

      return false;
    }

    if(! filter.position) {
      setErrorMsg('검색할 직군을 선택해 주세요.');
      setDetailActive(false);

      return false;
    }

    if(! filter.positionDetail.length) {
      setErrorMsg('상세 직군을 선택해 주세요.');
      setDetailActive(true);

      return false;
    }
    
    if(! filter.entryLevel.length) {
      setErrorMsg('경력 여부를 선택해 주세요.');

      return false;
    }

    const query = new URLSearchParams();

    query.set('page', '1');
    query.set('sort', filter.sort);
    
    if (filter.company.length && ! filter.company.includes('all')) {
      query.set('company', filter.company.join(','));
    }

    query.set('position', filter.position);

    if (filter.positionDetail.length && ! filter.positionDetail.includes('all')) {
      query.set('positionDetail', filter.positionDetail.join(','));
    }

    if (filter.entryLevel.length && ! filter.entryLevel.includes('all')) {
      query.set('entryLevel', filter.entryLevel.join(','));
    }

    router.push(`/jobList?${query}`);
    
    localStorage.setItem('filter', JSON.stringify(filter));

    complete();

  }
  
  useEffect(() => {
    
    const store = localStorage.getItem('filter');

    if(store) {

      const current = JSON.parse(store);

      setFilter(current);
      setDetailActive(true);

    }

  }, []);

  return (
    <>
      <div className={ classNames( s['modal-filter'] ) }>
        { 
          errorMsg &&
          <div className={ classNames( s['box-error'] ) }
               aria-live='polite'>
            <Icon.Caution width={ 24 } height={ 24 } />
            <p className={ classNames( s['txt-error'] ) }>
              { errorMsg }
            </p>
          </div>
        }
        <div className={ classNames( s['modal-content'] ) }>
          <dl className={ classNames( s['filter-list'] ) }>
            <div className={ classNames( s['grp-option'] ) }>
              <dt>정렬</dt>
              <dd>
                <ul role='radiogroup'
                    className={ classNames( s['list-option'] ) }>
                  <li role='none'>
                    <button type="button" role="radio"
                            className={ classNames( s[`btn-option`], isActiveOption({ type : 'radio', key : 'sort', value : 'startDt' }) && s['btn-option--active'] ) }
                            onClick={ () => handleFilterChange({ type : 'radio', key : 'sort', value : 'startDt' }) }
                            aria-checked={ isActiveOption({ type : 'radio', key : 'sort', value : 'startDt' }) }>
                            최신순
                    </button>
                  </li>
                  <li role='none'>
                    <button type="button" role="radio"
                            className={ classNames( s[`btn-option`], isActiveOption({ type : 'radio', key : 'sort', value : 'endDt' }) && s['btn-option--active'] ) }
                            onClick={ () => handleFilterChange({ type : 'radio', key : 'sort', value : 'endDt' }) }
                            aria-checked={ isActiveOption({ type : 'radio', key : 'sort', value : 'endDt' }) }>
                            마감순
                    </button>
                  </li>
                </ul>
              </dd>
            </div>
            <div className={ classNames( s['grp-option'] ) }>
              <dt>기업</dt>
              <dd>
                <ul role='group'
                    className={ classNames( s['list-option'] ) }>
                  <li role="none">
                        <button type="button" role="checkbox"
                                className={ classNames( s[`btn-option`], isActiveOption({ type :'checkbox', key : 'company', value : 'all' }) && s['btn-option--active'] ) }
                                onClick={ () => handleFilterChange({ type :'checkbox', key : 'company', value : 'all' }) }
                                aria-checked={ isActiveOption({ type :'checkbox', key : 'company', value : 'all' }) }>
                                전체
                        </button>
                  </li>
                  {
                    companyOption.map((e) => (
                      <li key={ e.code }
                          role="none">
                        <button type="button" role="checkbox"
                                className={ classNames( s[`btn-option`], isActiveOption({ type : 'checkbox', key : 'company', value : e.code }) && s[`btn-option--${e.name.en}`] ) }
                                onClick={ () => handleFilterChange({ type : 'checkbox', key : 'company', value : e.code }) }
                                aria-checked={ isActiveOption({ type : 'checkbox', key : 'company', value : e.code }) }>
                          { e.name.kr }
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </dd>
            </div>
            <div className={ classNames( s['grp-option'], s['grp-option-tab'], detailActive && s['grp-option-tab--active'] ) }>
              <dt>직군</dt>
              <dd>
                <ul role='radiogroup'
                    className={ classNames( s['list-option'] ) }>
                  {
                    jobOption.map((e) => (
                      <li key={ e.position.code }
                          role="none">
                        <button type="button" role="radio"
                                className={ classNames( s[`btn-option`], isActiveOption({ type : 'radio', key : 'position', value : e.position.code }) && s['btn-option--active'] ) }
                                onClick={ () => { 
                                                  handleTabActive(e.position.code);
                                                  handleFilterChange({ type : 'radio', key : 'position', value : e.position.code });
                                                }}
                                aria-checked={ isActiveOption({ type : 'radio', key : 'position', value : e.position.code }) }>
                          { e.position.name }
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </dd>
              {
                detailActive &&
                  <>
                    <dt>
                      <ArrowButton fill="#fff"
                                   onClick={() => handleRemoveTabActive() }
                                   className={ classNames( s['btn-backward'] ) } >
                          직군 재선택
                      </ArrowButton>
                      { jobOption.find(e => e.position.code === filter.position)?.position.name }
                      {/* <button type="button"
                              className={ classNames( s['btn-option'], s['btn-option--active'] ) }
                              onClick={ () => handleRemoveTabActive() }>
                        { jobOption.find(e => e.position.code === filter.position)?.position.name }
                        <Icon.Close width={ 20 } height={ 20 } fill="var(--color-toss-blue)" />
                        <span className={ className.a11y }>선택 취소</span>
                      </button> */}
                    </dt>
                    <dd>
                      <ul role='group'
                          className={ classNames( s['list-option'] ) }>
                        <li role="none">
                          <button type="button" role="checkbox"
                                  className={ classNames( s[`btn-option`], isActiveOption({ type :'checkbox', key : 'positionDetail', value : 'all' }) && s['btn-option--active'] ) }
                                  onClick={ () => handleFilterChange({ type :'checkbox', key : 'positionDetail', value : 'all' }) }
                                  aria-checked={ isActiveOption({ type :'checkbox', key : 'positionDetail', value : 'all' }) }>
                                  전체
                          </button>
                        </li>
                        {
                          positionDetail.map((e) => (
                            <li key={ e.code }
                                role="none">
                              <button type="button" role="checkbox"
                                      className={ classNames( s[`btn-option`], isActiveOption({ type : 'checkbox', key : 'positionDetail', value : e.code }) && s['btn-option--active'] ) }
                                      onClick={ () => handleFilterChange({ type : 'checkbox', key : 'positionDetail', value : e.code }) }
                                      aria-checked={ isActiveOption({ type : 'checkbox', key : 'positionDetail', value : e.code }) }>
                                { e.name }
                              </button>
                            </li>
                          ))
                        }
                      </ul>
                    </dd>
                  </>
              }
            </div>
            <div className={ classNames( s['grp-option'] ) }>
              <dt>경력</dt>
              <dd>
                <ul role='group'
                    className={ classNames( s['list-option'] ) }>
                  <li role="none">
                    <button type="button" role="checkbox"
                            className={ classNames( s[`btn-option`], isActiveOption({ type : 'checkbox', key : 'entryLevel', value : 'all' }) && s['btn-option--active'] ) }
                            onClick={ () => handleFilterChange({ type : 'checkbox', key : 'entryLevel', value : 'all' }) }
                            aria-checked={ isActiveOption({ type : 'checkbox', key : 'entryLevel', value : 'all' }) }>
                      전체
                    </button>
                  </li>
                  <li role="none">
                    <button type="button" role="checkbox"
                            className={ classNames( s[`btn-option`], isActiveOption({ type : 'checkbox', key : 'entryLevel', value : 'EL10001' }) && s['btn-option--active'] ) }
                            onClick={ () => handleFilterChange({ type : 'checkbox', key : 'entryLevel', value : 'EL10001' }) }
                            aria-checked={ isActiveOption({ type : 'checkbox', key : 'entryLevel', value : 'EL10001' }) }>
                      경력
                    </button>
                  </li>
                  <li role="none">
                    <button type="button" role="checkbox"
                            className={ classNames( s[`btn-option`], isActiveOption({ type : 'checkbox', key : 'entryLevel', value : 'EL10002' }) && s['btn-option--active'] ) }
                            onClick={ () => handleFilterChange({ type : 'checkbox', key : 'entryLevel', value : 'EL10002' }) }
                            aria-checked={ isActiveOption({ type : 'checkbox', key : 'entryLevel', value : 'EL10002' }) }>
                      신입
                    </button>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div className={ classNames( s['modal-footer'] ) }>
              <button type="button"
                      className={ classNames( s['btn-submit'] ) }
                      onClick={ () => handleFilterSubmit() }>
                  완료
              </button>
          </div>
      </div>
    </>
  )
}

export default FilterModal;