
// @ description : 인덱스에서 조회하는 신규 공고 수, 전체 공고 수에 대한 쿼리키를 관리합니다.

// @ name : keywordKeys
// @ description : 인기 키워드에 대한 쿼리 키 팩토리

export const keywordKeys = {
  all: ['keyword'] as const,
  keyword: (ymd: string) => [...keywordKeys.all, {ymd}] as const
}