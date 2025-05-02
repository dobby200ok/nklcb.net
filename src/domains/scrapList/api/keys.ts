// @ name : scrapListKeys
// @ description : /scrapList에서 조회하는 공고에 대한 리액트 쿼리 키를 관리합니다.

const scrapListKeys = {
  all: ['scrapList'] as const,
  list: (page : number, id: string[]) => [ ...scrapListKeys.all, page, id ] as const
};

export default scrapListKeys