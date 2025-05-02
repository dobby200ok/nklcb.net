

// @ name : dateUtils
// @ description : 날짜에 관련된 유틸 함수를 정의합니다.

export const dateUtils = {

  // @ name : strToDate
  // @ description : 문자열을 날짜 객체로 반환합니다.
  // @ example : dateUtils.strDate('20250326') // Mon May 26 2025 00:00:00 GMT+0900 (GMT+09:00)

  strToDate: (ymd : string, time = '0000') => {
      const y = Number(ymd.substr(0,4)),
            m = Number(ymd.substr(4,2)),
            d = Number(ymd.substr(6,2)),
            h = Number(time.substr(0,2)),
            mm = Number(time.substr(2,2));

      const date = new Date(y, (m - 1), d, h, mm);

      return date;
  },

  // @ name : dateToStr
  // @ description : 날짜 객체를 문자열로 리턴합니다.
  // @ example : dateUtils.dateToStr(new Date()) // 20250326

  dateToStr: (date:Date) => {

    const dateStr = '' + date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + (date.getDate())).slice(-2);

    return dateStr;
  },

  // @ name : getTimeAgo
  // @ description : 기준 날짜에서 현재 시간이 얼마 경과되었는 지 문자열로 반환합니다.
  // @ example : dateUtils.getTimeAgo(new Date()) // 방금 전

  getTimeAgo: (date: Date) => {

    const today = new Date(),
          baseTime = date;

    const gap = Math.floor((today.getTime() - baseTime.getTime()) / 1000 / 60);

    if( gap < 5 ) {
      return '방금 전';
    }

    if( gap < 60) {
      return `${gap}분 전`
    }

    const hourGap = Math.floor(gap / 60);
    
    if( hourGap < 24 ) {
      return `${hourGap}시간 전`
    }

    const dateGap = Math.floor(gap / 60 / 24)

    if(dateGap < 365) {
      return `${dateGap}일 전`
    }

    return `${baseTime.getFullYear()}.${('0' + (baseTime.getMonth() + 1)).slice(-2)}.${('0' + baseTime.getDate()).slice(-2)}`;
  },

  // @ name : getTimeLeft
  // @ description : 현재 시간이 기준 날짜까지 얼마 남았는 지 문자열로 반환합니다.
  // @ example : dateUtils.getTimeLeft(new Date()) // 종료

  getTimeLeft: (date: Date) => {

    const today = new Date(),
          baseTime = date;

    const gap = Math.floor((baseTime.getTime() - today.getTime()) / 1000 / 60);

    if(gap < 1) {
      return '종료'
    }

    if( gap < 60) {
      return `${gap}분`
    }

    const hourGap = Math.floor(gap / 60);

    if( hourGap < 24 ) {
      return `${hourGap}시간`
    }

    const dateGap = Math.floor(gap / 60 / 24)

    if(dateGap < 365) {
      return `${dateGap}일`
    }

    return `${baseTime.getFullYear()}.${('0' + (baseTime.getMonth() + 1)).slice(-2)}.${('0' + baseTime.getDate()).slice(-2)}`;
  }

}








// @ name : ratioUtils
// @ description : 비율에 관련된 유틸 함수를 정의합니다.

export const ratioUtils = {

  // @ name : getRatio
  // @ description : width, height 인자로 받은 값을 기준으로 비율을 리턴합니다.
  // @ example : ratioUtils.getRatio(118, 20) // 5.9

  getRatio: ( width: number, height: number ) => {

    return width / height;
  },

  // @ name : setRatioSize
  // @ description : ratio를 기반으로 width height 사이즈를 리턴합니다.
  // @ example : ratioUtils.getRatioSize(5.9, 118) // { width : 118, height : 20 }
  getRatioSize: (ratio: number, width: number, height?: number) => {

    const ratioSize = {
      width : width,
      height : height
    };

    if (width && height) {

      if( width / height > ratio ) { 
        ratioSize.width = height * ratio; 
      } else {
        ratioSize.height = width / ratio;
      }

    } else {
      ratioSize.height = width / ratio;
    }
    
    return ratioSize;
  }

}






// @ name : localStorageUtils
// @ description : 로컬 스토리지를 관리하는 유틸 함수를 정의합니다.

export const localStorageUtils = {

    // @ name : append
    // @ description : localStorage를 배열 형태로 만들고, 해당 배열에 추가하고자 하는 값이 자식으로 없는 경우 추가하여 저장합니다. 
    // @ example : localStorageUtils.append('test', '1')
    append: (key: string, value: string) => {

      const getStore = localStorage.getItem(key),
            store:string[] = getStore ? JSON.parse(getStore) : [];

      if(! store.includes(value)) {
        
        const newStore = [...store, value];

        localStorage.setItem(key, JSON.stringify(newStore));
      }

    },

    // @ name : toggle
    // @ description : localStorage를 배열 형태로 만들고, 해당 배열에 추가하고자 하는 값이 자식으로 없는 경우 추가하며, 있는 경우 삭제합니다. 
    // @ example : localStorageUtils.toggle('test', '1')
    toggle: (key: string, value: string, appendCallback?:() => void, removeCallback?:() => void) => {

      const getStore = localStorage.getItem(key),
            store:string[] = getStore ? JSON.parse(getStore) : [];

      if(store.includes(value)) {
        
        const newStore = store.filter(item => item !== value);

        localStorage.setItem(key, JSON.stringify(newStore));

        if(removeCallback) {
          removeCallback();
        }

      } else {
        const newStore = [...store, value];

        localStorage.setItem(key, JSON.stringify(newStore));

        if(appendCallback) {
          appendCallback();
        }
        
      }
    },

    // @ name : includes
    // @ description : localStorage에 해당 값이 존재하는 지 검증합니다.
    // @ example : localStorageUtils.includes('test', '1')
    includes: (key: string, value: string):boolean => {

      const getStore = localStorage.getItem(key);

      if(getStore?.includes(value)) { 
        return true;
      } else {
        return false;
      }

    }
}







// @ name : textUtils
// @ description : 문자열과 관련된 유틸 함수를 정의합니다.

export const textUtils = {

  // @ name : splitParagraphs
  // @ description : 텍스트 문자열을 문단 단위로 배열 형태로 분리합니다.
  splitParagraphs: (text: string) => {
    const sentences = text.split(/(?<=[.?!])\s+/)
                          .map(s => s.trim())
                          .filter(s => s.length > 0);

    const paragraphs: string[] = [];

    for (let i = 0; i < sentences.length; i += 2) {
      const paragraph = sentences.slice(i, i + 2).join(' ');
      paragraphs.push(paragraph);
    }

    return paragraphs;
  }
}






// @ name : queryUtils
// @ description : 쿼리 파라미터를 관리하는 유틸 함수를 정의합니다.

export const queryUtils = {

  // @ name : set
  // @ description : 로컬 스토리지에 저장된 filter 값을 기반으로 쿼리 파라미터를 문자열로 리턴합니다.
  set: () => {

    const store = localStorage.getItem('filter'),
          query = new URLSearchParams();

    if(store) {
      const filter = JSON.parse(store);
  
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
    }
  
    return query.toString();
  }

}







// @ name : optimizationUtils
// @ description : 이벤트를 최적화하는 유틸 함수를 정의합니다.

export const optimizationUtils = {

  // @ name : debounce
  // @ description : 함수의 이벤트에 디바운싱을 적용합니다.
  // @ example : optimizationUtils.debounce(function, 300);
  debounce<T extends (...args: unknown[]) => void>(
    func: T,
    time: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        func(...args);
      }, time);
    }
  },

  // @name : throttle
  // @ description : 함수의 이벤트에 쓰로틀링을 적용합니다.
  // @ example : optimizationUtils.throttle(function, 300);
  throttle<T extends (...args: unknown[]) => void>(
    func: T,
    interval: number
  ): (...args: Parameters<T>) => void {
    let lastCalled = 0;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
      const now = Date.now();
      const remaining = interval - (now - lastCalled);

      if (remaining <= 0) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        lastCalled = now;
        func(...args);
      } else if (!timeout) {
        timeout = setTimeout(() => {
          lastCalled = Date.now();
          func(...args);
          timeout = null;
        }, remaining);
      }
    };
  }

}


