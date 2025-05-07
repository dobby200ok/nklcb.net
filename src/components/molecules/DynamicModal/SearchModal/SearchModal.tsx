'use client'

import Icon from '@/components/atoms/Assets/Icon';
import s from './SearchModal.module.scss';

import classNames from 'classnames';

import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useRouter } from 'next/navigation';

import useModal from '@/hooks/useDynamicModal';

const keywordSchema = z.object({
    keyword: z.string()
              .min(1, { message: '검색어를 입력해 주세요.' })
})


const SearchModal = () => {

  const { complete } = useModal(),
        { register, handleSubmit, formState } = useForm({
          mode: 'onBlur',
          resolver: zodResolver(keywordSchema)
        }),
        router = useRouter();

  const onSubmit = (value: FieldValues) => {

    router.push(`/jobList?keyword=${value.keyword}`);

    complete();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={ classNames( s['modal-search'] ) }>
        <div className={ classNames( s['modal-content'] ) }>
          <label className={ classNames( s['inp-wrap'], formState.errors.keyword && s['inp-wrap--error'] ) }>
            <Icon.Search width={ 32 }
                        height={ 32 }
                        fill='#bebebe' />
            <input {...register('keyword')}
                   type="text"
                   className={ classNames( s['inp-txt'] ) }
                   placeholder='검색어를 입력해 주세요.' />
          </label>
        </div>
        <div className={ classNames( s['modal-footer'] ) }>
          <button type="submit"
                  className={ classNames( s['btn-submit'] ) }>
            검색
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchModal;