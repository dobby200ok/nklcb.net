

import s from './MainBannerSection.module.scss';

import Image from 'next/image';
import classNames from 'classnames';

const MainBannerSection = () => {

  return (
    <section className={ classNames( s['section-main'] ) }>
      <Image src="/assets/images/main-background.png"
              alt=""
              width={1500}
              height={657}
              className={ classNames( s['bg-main'] ) } />
    </section>
  )
}

export default MainBannerSection;