
// @ name : jobOption
// @ description : 직군에 대한 옵션들을 변수로 관리합니다.

const jobOption = [
  {
    position: { name: '개발자', code: 'PO11000' },
    detail : [
      { name: '프론트엔드', code: 'PO11001'},
      { name: '백엔드', code: 'PO11002'},
      { name: '안드로이드', code: 'PO11003'},
      { name: 'iOS', code: 'PO11004'},
      { name: 'AI/ML', code: 'PO11005'},
      { name: '서버', code: 'PO11006'},
      { name: '보안', code: 'PO11007'},
      { name: '데이터 엔지니어', code: 'PO11008'},
      { name: 'DBA', code: 'PO11009'},
      { name: 'SRE', code: 'PO11010'},
      { name: '데이터 분석', code: 'PO11011'},
      { name: '풀스택', code: 'PO11012'},
      { name: 'QA', code: 'PO11013'},
      { name: '임베디드', code: 'PO11015'},
      
      { name: '기타', code: 'PO11014'},
    ]
  },
  {
    position: { name: '디자이너', code: 'PO21000' },
    detail : [
      { name: '그래픽', code: 'PO21001'},
      { name: '3D', code: 'PO21002'},
      { name: '제품', code: 'PO21003'},
      { name: '영상', code: 'PO21004'},
      { name: 'UI/UX', code: 'PO21005'},
      { name: '브랜딩', code: 'PO21006'},
      { name: '인터랙션', code: 'PO21007'},
      { name: '마케팅', code: 'PO21008'},
      { name: '어시스턴트', code: 'PO21009'},
      { name: '리서치', code: 'PO21010'},
      { name: '일러스트레이터', code: 'PO21011'},

      { name: '기타', code: 'PO21012'}
    ]
  },
  {
    position: { name: '서비스', code: 'PO31000' },
    detail : [
      { name: '비즈니스 기획', code: 'PO31002'},
      { name: '마케팅 기획', code: 'PO31003'},
      { name: 'PL/PM/PO', code: 'PO31004'},
      { name: '컨텐츠 기획', code: 'PO31005'},
      { name: '브랜드 기획', code: 'PO31006'},
      { name: '사업 기획', code: 'PO31007'},
      { name: '제품 기획', code: 'PO31008'},
      { name: '어시스턴트', code: 'PO31009'},
      { name: 'CS', code: 'PO31010'},
      { name: 'BM', code: 'PO31013'},

      { name: '기타', code: 'PO31012'}
    ]
  }
]

export default jobOption;