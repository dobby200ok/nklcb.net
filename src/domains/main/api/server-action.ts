
// @ description : index에서 호출하는 서버 액션을 관리합니다.

'use server';


// @ name : getKeywordList
// @ description : 인기 키워드 리스트를 응답받습니다.

export const getKeywordList = async() => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/keywords/popular`);

  if( ! res.ok) {
    throw new Error('/api/keywords/popular server-action Error');
  }

  const data = await res.json();
  
  return data;
}

