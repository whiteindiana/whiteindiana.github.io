# Chang-Yeol Jung — Academic homepage

기존 Google Sites 홈페이지를 바탕으로 제작한 GitHub Pages용 정적 웹사이트입니다.
별도의 빌드, 패키지 설치, 데이터베이스, 유료 서비스가 필요하지 않습니다.

## 포함된 내용

- 교수 소개, 연구 분야 5개, 최근 논문 9편(투고 중 2편 포함)
- AI 연구 소개: PINNs, 급격한 해의 변화와 보정함수, FVNNs의 국소 보존
- 향후 연구 방향: 적은 센서 관측을 이용하는 생성형 AI, 역문제와 불확실성 정량화
- 공동연구 기여 분야와 연구 개념을 설명하는 영문 벡터 그래픽
- 경력 6개, 학력 2개, Springer 저서
- 논문 연도 필터와 제목·저자·학술지 검색
- 데스크톱·태블릿·모바일 레이아웃, 키보드 탐색, 인쇄 스타일
- 외부 폰트·추적 코드 없이 동작하며 JavaScript를 꺼도 본문을 읽을 수 있습니다.

## GitHub Pages에 게시하기

1. 교수님 GitHub 계정에서 **Public** 저장소를 만듭니다. 기본 개인 주소를 원하면 저장소 이름을 `깃허브아이디.github.io`로 지정합니다. 기존 저장소가 있다면 내용을 확인하고 사용합니다.
2. 이 폴더 안의 파일과 `assets` 폴더를 저장소의 `main` 브랜치 최상위에 올립니다. `index.html`이 저장소 최상위에 있어야 합니다. 압축파일 자체를 올리면 홈페이지가 표시되지 않습니다.
3. 저장소의 **Settings → Pages → Build and deployment**로 이동합니다.
4. **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**를 선택하고 **Save**를 누릅니다.
5. 게시가 완료되면 Pages 설정의 **Visit site**에서 실제 주소를 확인합니다. 반영에 최대 약 10분이 걸릴 수 있습니다.

GitHub Free에서는 이 방식의 저장소를 공개해야 합니다. 홈페이지 콘텐츠와 소스 파일이 공개됩니다.
별도의 개인 도메인 구매는 필요하지 않습니다. `assets/...` 상대 경로를 사용하므로 일반 프로젝트 저장소의 하위 주소에서도 작동합니다.

공식 안내:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 내용 수정

- `index.html`: 소개, 연구 분야, 논문, 경력, 학력, 저서, 연락처
- `styles.css`: 색상, 글꼴, 배치, 모바일·인쇄 스타일
- `script.js`: 논문 검색·연도 필터, 모바일 메뉴
- `assets/boundary-layer.svg`: 이 사이트를 위해 생성한 수학 곡면 일러스트
- `assets/favicon.svg`: 브라우저 탭 아이콘
- `assets/sparse-field.svg`: 희소 관측과 여러 가능한 물리장 복원을 표현한 개념도
- `assets/sparse-field-mobile.svg`: 작은 화면에서 글자가 잘 보이도록 조정한 개념도
- `.nojekyll`: GitHub Pages에서 정적 파일을 그대로 게시하도록 지정

논문을 추가할 때는 `publication` 클래스를 가진 `article`을 복사하고 `data-year`, 연도, 제목, 저자, 학술지, Google Scholar 검색 링크를 수정합니다. 논문 수, 연도 필터와 표시 범위는 페이지에 있는 논문으로부터 자동으로 갱신됩니다.

## 내용 출처

2026년 11월 12일 작업 시 다음 공개 페이지의 내용을 반영했습니다. 논문의 게재·투고 상태는 기존 홈페이지 기준이며 별도로 최신 상태를 추정하지 않았습니다.

- 기존 홈페이지: https://sites.google.com/view/changyeoljung/
- Google Scholar: https://scholar.google.com/citations?hl=en&user=pWKSUngAAAAJ
- 저서 정보: https://link.springer.com/book/10.1007/978-3-030-00638-9

첫 화면의 수학 곡면은 연구 주제를 표현하는 설명용 일러스트이며 실제 연구 결과나 데이터가 아닙니다. 저서 영역은 실제 표지 이미지를 복제하지 않고 서지 정보를 이용해 새로 구성한 시각 디자인입니다.

AI 연구 섹션은 사용자가 제공한 「AI 연구 접점」 문서(2쪽)를 바탕으로 영문으로 재구성했습니다. 현재 관심 연구와 향후 집중할 연구 방향을 구분했으며, 생성형 AI 기반 물리장 복원 및 불확실성 정량화는 연구 목표로 표현했습니다. 새 개념도와 각 연구 축의 그림은 설명용 벡터 그래픽이며 검증된 실험 결과가 아닙니다. 원본 PDF는 공개 저장소에 포함하지 않았습니다.
