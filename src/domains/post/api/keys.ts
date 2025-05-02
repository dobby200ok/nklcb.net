// @ name : postKeys
// @ description : /post에서 조회하는 공고에 대한 리액트 쿼리 키를 관리합니다.

const postKeys = {
  all: ['post'] as const,
  post: (id: string) => [ ...postKeys.all, id ] as const
};

export default postKeys
