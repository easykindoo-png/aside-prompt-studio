/**
 * Aside Prompt Studio - 105종 완전 독자 기획 실전 AI 에이전트 프롬프트 라이브러리
 * 타 사이트(dexa.art 등)에 종속되지 않는 100% 독자 설계 실무 프롬프트 모음입니다.
 * 실무, 연구, 개발, 마케팅, 기획, 데이터 분석 전반에서 즉시 활용할 수 있습니다.
 */

const DEFAULT_PROMPTS = [
  {
    "id": "RPA-01",
    "group": "업무 자동화 & RPA",
    "title": "수신 이메일 첨부파일(PDF/Excel) 검증 및 구글 드라이브 자동 아카이빙",
    "why": "메일함에 쏟아지는 거래처 파일의 위변조 여부와 포맷을 검사한 뒤 규격 폴더로 분류 저장합니다.",
    "tags": [
      "이메일",
      "파일분류",
      "구글드라이브",
      "자동화"
    ],
    "sites": [
      "mail.google.com",
      "drive.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "파일 이동 및 기존 파일 덮어쓰기 전",
    "prompt": "{{메일 수신함}}에서 지난 24시간 동안 수신된 '{{발신자 도메인 또는 제목 키워드}}' 관련 이메일을 탐색해 주세요.\n첨부파일(PDF, XLSX)이 있는 경우 파일명, 용량, 확장자 위변조 여부를 확인한 뒤, Google Drive의 '{{대상 드라이브 폴더 경로}}'로 'YYYYMMDD_업체명_파일명' 규칙으로 리네이밍하여 업로드할 준비를 해 주세요.\n작업 전 이동 대상 파일 목록과 기존 동일 파일 존재 여부를 표로 먼저 출력하고, 파일 덮어쓰기는 절대 승인 없이 진행하지 마세요.",
    "sampleValues": {
      "메일 수신함": "Gmail 업무용 계정",
      "발신자 도메인 또는 제목 키워드": "[세금계산서/청구서]",
      "대상 드라이브 폴더 경로": "/경영지원/2026_지출증빙"
    },
    "cliExample": "aside \"지난 24시간 청구서 첨부파일 구글 드라이브 아카이빙 준비\""
  },
  {
    "id": "RPA-02",
    "group": "업무 자동화 & RPA",
    "title": "다채널 고객 문의(CS) 티켓 유형 자동 분류 및 1차 표준 답변 생성",
    "why": "슬랙, 채널톡, 이메일로 인입된 고객 불만 및 문의를 카테고리별로 군집화하고 초안을 작성합니다.",
    "tags": [
      "CS자동화",
      "고객문의",
      "티켓분류",
      "채널톡"
    ],
    "sites": [
      "channeltalk.com",
      "zendesk.com"
    ],
    "status": "실전 검증됨",
    "stop": "고객에게 실제 답변 발송 전",
    "prompt": "'{{CS 관리 도구}}'에 오늘 접수된 미답변 문의 목록을 조회해 주세요.\n각 문의를 [1. 단순 사용법, 2. 결제/환불, 3. 시스템 버그, 4. 제휴/제안] 4가지 범주로 자동 분류하고, 긴급도(상/중/하)를 판별해 주세요.\n사내 FAQ 매뉴얼에 기반하여 고객에게 보낼 정중한 1차 표준 응대 스크립트를 작성하여 확인 테이블로 제시해 주세요.\n고객에게 직접 메시지를 전송하지 말고 검토 대기 상태를 유지하세요.",
    "sampleValues": {
      "CS 관리 도구": "채널톡 상담 관리자 화면"
    },
    "cliExample": "aside \"채널톡 미답변 CS 문의 분류 및 1차 표준 답변 초안 작성\""
  },
  {
    "id": "RPA-03",
    "group": "업무 자동화 & RPA",
    "title": "주간 스프레드시트 결측치/이상치 검증 및 데이터 무결성 리포트",
    "why": "수기 입력된 엑셀/구글 시트의 날짜 오기, 음수 금액, 누락 행을 자동 탐지하여 데이터 오류를 차단합니다.",
    "tags": [
      "스프레드시트",
      "데이터정제",
      "무결성검증",
      "엑셀"
    ],
    "sites": [
      "docs.google.com/spreadsheets"
    ],
    "status": "실전 검증됨",
    "stop": "원본 시트 셀 데이터 수정 직전",
    "prompt": "구글 스프레드시트 '{{시트 URL 또는 파일명}}'의 '{{시트 탭 이름}}' 시트 데이터를 점검해 주세요.\n1. 날짜 포맷이 YYYY-MM-DD 규격과 다른 행 식별\n2. 금액 필드에 음수나 문자가 들어간 비정상 행 탐색\n3. 필수 고유키(ID, 이메일) 중복 또는 공란 행 추출\n발견된 이상치 목록을 [행 번호 / 컬럼명 / 현재 값 / 수정 제안 값 / 오류 유형] 표로 정리해 주세요.\n원본 데이터 셀을 임의로 덮어쓰거나 삭제하지 마세요.",
    "sampleValues": {
      "시트 URL 또는 파일명": "https://docs.google.com/spreadsheets/d/1example/edit",
      "시트 탭 이름": "10월_매출원장"
    },
    "cliExample": "aside \"매출원장 시트 결측치 및 이상치 검증 리포트 생성\""
  },
  {
    "id": "RPA-04",
    "group": "업무 자동화 & RPA",
    "title": "회의 음성 녹음 텍스트 기반 Jira/Linear 액션 티켓 자동 발행 준비",
    "why": "회의록 텍스트에서 '누가 무엇을 언제까지' 해야 하는지를 정밀 추출하여 업무 티켓 템플릿으로 변환합니다.",
    "tags": [
      "회의록",
      "액션아이템",
      "지라",
      "리니어"
    ],
    "sites": [
      "jira.atlassian.com",
      "linear.app"
    ],
    "status": "실전 검증됨",
    "stop": "티켓 일괄 생성 버튼 클릭 직전",
    "prompt": "입력된 회의록 원문 '{{회의록 텍스트 파일 또는 내용}}'을 분석하여 실무 실행 항목을 분리해 주세요.\n각 액션 아이템마다 [담당자, 구체적 작업 내용, 마감 기한, 우선순위, 의존성 관계]를 명시한 테이블을 생성해 주세요.\n이를 {{프로젝트 관리 도구}}의 일괄 생성용 포맷(CSV 또는 마크다운)으로 변환해 주세요.\n실제 티켓 생성 API를 호출하거나 등록 버튼을 누르지 말고 미리보기 테이블만 제시하세요.",
    "sampleValues": {
      "회의록 텍스트 파일 또는 내용": "downloads/20261104_신제품_릴리즈_회의.txt",
      "프로젝트 관리 도구": "Jira Software"
    },
    "cliExample": "aside \"회의록 텍스트 분석하여 Jira 액션 티켓 일괄 작성 테이블 생성\""
  },
  {
    "id": "RPA-05",
    "group": "업무 자동화 & RPA",
    "title": "공급업체 발주서 수신 내역 대조 및 ERP 전산 입력 검증표",
    "why": "거래처에서 보내온 발주서 PDF의 품목, 단가, 수량을 사내 단가표와 1:1 대조하여 오발주를 방지합니다.",
    "tags": [
      "발주서",
      "단가검증",
      "ERP",
      "구매관리"
    ],
    "sites": [
      "internal-erp.local"
    ],
    "status": "실전 검증됨",
    "stop": "ERP 최종 전표 승인 버튼 클릭 전",
    "prompt": "수신된 발주서 '{{발주서 파일명}}'과 사내 기준 단가표를 상호 대조해 주세요.\n발주된 각 품목별 수량 * 단가 = 공급가액 계산의 산술 오류 여부, 계약 단가와의 차이 발생 여부를 전수 검사해 주세요.\n[품목코드 / 품목명 / 발주단가 / 기준단가 / 차액 / 일치여부] 대조표를 출력하고 단가 불일치가 발생한 품목은 굵게 강조해 주세요.\nERP 전산에 최종 전표 등록이나 결재는 진행하지 마세요.",
    "sampleValues": {
      "발주서 파일명": "downloads/2026_11월_대일물산_발주서.pdf"
    },
    "cliExample": "aside \"발주서 품목 단가 대조 및 ERP 사전 입력 검증표 작성\""
  },
  {
    "id": "RPA-06",
    "group": "업무 자동화 & RPA",
    "title": "사내 위키(Notion/Confluence) 깨진 하이퍼링크 및 만료 문서 전수 점검",
    "why": "수백 개의 사내 문서에 포함된 외부 링크의 HTTP 404 에러와 1년 이상 방치된 레거시 문서를 식별합니다.",
    "tags": [
      "사내위키",
      "링크점검",
      "문서관리",
      "노션"
    ],
    "sites": [
      "notion.so",
      "confluence.atlassian.com"
    ],
    "status": "실전 검증됨",
    "stop": "문서 내용 편집 또는 페이지 삭제 전",
    "prompt": "'{{사내 워크스페이스 URL}}'의 '{{대상 카테고리/페이지}}' 하위 문서들에 포함된 모든 외부 URL의 연결 상태를 점검해 주세요.\n1. HTTP 404, 500 오류가 발생하는 깨진 링크(Dead Link) 목록 추출\n2. 최종 수정일이 1년 이상 경과된 업데이트 필요 문서 목록 도출\n[문서명 / 링크 텍스트 / 타겟 URL / 응답 코드 / 최종 수정일] 표로 결과를 보고해 주세요.\n문서 내용을 임의로 수정하거나 페이지를 아카이빙하지 마세요.",
    "sampleValues": {
      "사내 워크스페이스 URL": "https://notion.so/my-team-space",
      "대상 카테고리/페이지": "개발팀 온보딩 가이드"
    },
    "cliExample": "aside \"노션 사내위키 깨진 링크 및 만료 문서 점검 리포트\""
  },
  {
    "id": "RPA-07",
    "group": "업무 자동화 & RPA",
    "title": "클라우드 인프라(AWS/GCP) 유휴 리소스 및 월간 비용 이상치 탐지",
    "why": "사용되지 않는 미연결 EBS 볼륨, 탄력적 IP, 과도하게 청구된 인스턴스를 찾아 비용 절감안을 도출합니다.",
    "tags": [
      "AWS",
      "GCP",
      "비용최적화",
      "FinOps"
    ],
    "sites": [
      "aws.amazon.com",
      "console.cloud.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "인프라 리소스 삭제 및 인스턴스 중지 전",
    "prompt": "현재 로그인된 클라우드 콘솔의 비용 분석(Cost Explorer) 및 리소스 대시보드를 확인해 주세요.\n1. 지난달 대비 지출이 20% 이상 급증한 서비스 항목 식별\n2. 인스턴스에 연결되지 않은 유휴 볼륨(Unattached Volume) 및 미할당 고정 IP 목록\n3. 권장 라이트사이징(인스턴스 다운그레이드) 후보군 3개\n예상 절감 비용과 함께 마크다운 리포트로 출력해 주세요.\n어떠한 리소스도 삭제하거나 설정을 변경하지 마세요.",
    "sampleValues": {},
    "cliExample": "aside \"클라우드 인프라 유휴 리소스 및 비용 절감 리포트 생성\""
  },
  {
    "id": "RPA-08",
    "group": "업무 자동화 & RPA",
    "title": "구글 캘린더 일정 충돌 자동 분석 및 최적 미팅 시간대 추천",
    "why": "필수 참석자 3인 이상의 일정을 대조하여 이동 시간과 집중 업무 시간을 고려한 슬롯을 산출합니다.",
    "tags": [
      "캘린더",
      "미팅조율",
      "일정관리",
      "생산성"
    ],
    "sites": [
      "calendar.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "캘린더 초대장 자동 발송 전",
    "prompt": "Google Calendar에서 '{{참석자 이메일 목록}}'의 다음 주 월~금 일정을 대조해 주세요.\n- 회의 소요 시간: {{회의 시간(예: 45분)}}\n- 참석자 전원이 비어 있는 최적의 시간 슬롯 3개를 추천해 주세요.\n- 오전 9시 이전, 점심시간(12~13시), 오후 6시 이후는 후보에서 제외해 주세요.\n- 집중 업무 블록(2시간 이상 빈 슬롯)을 깨지 않는 시간대를 우선순위로 표기해 주세요.\n초대장을 자동으로 발송하거나 일정을 등록하지 마세요.",
    "sampleValues": {
      "참석자 이메일 목록": "pm@company.com, dev@company.com, designer@company.com",
      "회의 시간(예: 45분)": "45분"
    },
    "cliExample": "aside \"참석자 3인 캘린더 대조 후 최적 미팅 슬롯 3선 추천\""
  },
  {
    "id": "RPA-09",
    "group": "업무 자동화 & RPA",
    "title": "웹사이트 양식 제출(Form Filling) 사전 데이터 정합성 검증 매크로",
    "why": "설문지, 공공 포털, 입찰 사이트에 반복 제출하기 전 필수 항목 누락과 글자수 초과를 사전 검수합니다.",
    "tags": [
      "폼입력",
      "데이터검증",
      "매크로",
      "공공포털"
    ],
    "sites": [
      "forms.google.com",
      "tally.so"
    ],
    "status": "실전 검증됨",
    "stop": "최종 제출(Submit) 버튼 클릭 직전",
    "prompt": "'{{제출 대상 웹 폼 URL}}'에 입력할 데이터 세트 '{{입력 데이터 파일명}}'을 검증해 주세요.\n각 입력 필드의 필수 여부(Required), 정규식 규칙(이메일, 연락처 - 하이픈 유무), 최대 글자 수 초과 여부를 사전 대조표로 작성해 주세요.\n검증이 통과된 필드에 한해서만 화면 입력 폼에 텍스트를 채워 넣고, 최종 [제출] 또는 [완료] 버튼은 누르지 말고 대기하세요.",
    "sampleValues": {
      "제출 대상 웹 폼 URL": "https://forms.google.com/example-form",
      "입력 데이터 파일명": "submissions/applicant_01.json"
    },
    "cliExample": "aside \"웹 폼 입력값 정합성 사전 검증 및 임시 채우기\""
  },
  {
    "id": "RPA-10",
    "group": "업무 자동화 & RPA",
    "title": "사내 슬랙 채널 일일 스크럼/스탠드업 요약 및 블로커(Blocker) 추출",
    "why": "팀원들이 비동기로 남긴 일일 스탠드업 메시지를 모아 지연 위험 요소와 핵심 진척 상황을 브리핑합니다.",
    "tags": [
      "슬랙",
      "스탠드업",
      "스크럼",
      "블로커"
    ],
    "sites": [
      "slack.com"
    ],
    "status": "실전 검증됨",
    "stop": "요약 메시지 전체 채널 공지 전",
    "prompt": "슬랙 채널 '{{채널명}}'에서 오늘 오전 팀원들이 작성한 스탠드업 메시지들을 수집해 주세요.\n1. 오늘 완료 예정인 주요 마일스톤 작업 요약\n2. 다른 팀원의 도움이 필요한 블로커(장애 요인) 및 기술적 병목 명시\n3. 프로젝트 관리자가 즉각 팔로업해야 할 우선순위 액션 2개\n한눈에 읽기 쉬운 3단 블릿 리포트로 작성해 주세요.\n채널에 메시지를 자동으로 전송하지 마세요.",
    "sampleValues": {
      "채널명": "#proj-core-dev"
    },
    "cliExample": "aside \"슬랙 일일 스탠드업 수집 및 블로커 추출 요약\""
  },
  {
    "id": "RPA-11",
    "group": "업무 자동화 & RPA",
    "title": "영업 리드(Sales Lead) 웹사이트 스크리닝 및 CRM 신규 등록 준비",
    "why": "잠재 고객사 홈페이지에서 대표자명, 사업 분야, 본사 위치, 채용 규모를 수집해 CRM 등록 시트로 정제합니다.",
    "tags": [
      "영업리드",
      "B2B세일즈",
      "CRM",
      "데이터수집"
    ],
    "sites": [
      "linkedin.com",
      "hubspot.com"
    ],
    "status": "실전 검증됨",
    "stop": "CRM 시스템 데이터 삽입(Insert) 전",
    "prompt": "잠재 고객사 웹사이트 '{{타겟 기업 URL}}'을 탐색해 주세요.\n회사 소개(About) 및 채용(Career) 페이지를 확인하여 [회사명, 대표자명, 설립연도, 본사 주소, 주요 사업 모델, 최근 채용 중인 직군, 대표 연락처 이메일]을 추출해 주세요.\n수집한 정보를 CRM(HubSpot/Salesforce) 업로드용 CSV 포맷 행으로 변환해 주세요.\n확인되지 않은 필드는 빈칸으로 두지 말고 '미확인'으로 기재하세요.",
    "sampleValues": {
      "타겟 기업 URL": "https://example-saas-company.com"
    },
    "cliExample": "aside \"잠재 고객사 웹사이트 탐색 및 CRM 규격 데이터 정제\""
  },
  {
    "id": "RPA-12",
    "group": "업무 자동화 & RPA",
    "title": "노션 데이터베이스(DB) 주간 업무 진척률 통계 및 지연 프로젝트 경고",
    "why": "노션 프로젝트 DB에서 마감일이 지났거나 상태가 '진행 중'에 머문 태스크를 추출하여 리포팅합니다.",
    "tags": [
      "노션DB",
      "진척률",
      "프로젝트관리",
      "일정지연"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "노션 데이터베이스 속성 변경 전",
    "prompt": "노션 데이터베이스 '{{노션 프로젝트 DB URL}}'의 전체 태스크 상태를 조회해 주세요.\n1. 전체 태스크 수 대비 '완료(Done)' 비율(진척률 %)\n2. 마감일이 오늘 이전인데 아직 완료되지 않은 '지연(Overdue)' 태스크 목록 및 담당자\n3. 이번 주 마감 예정인 핵심 태스크 5개\n담당자별 미완료 태스크 수를 집계한 표를 제시해 주세요.\n데이터베이스의 기존 속성이나 상태값을 변경하지 마세요.",
    "sampleValues": {
      "노션 프로젝트 DB URL": "https://notion.so/my-org/project-master-db"
    },
    "cliExample": "aside \"노션 프로젝트 DB 주간 진척률 집계 및 지연 태스크 리포트\""
  },
  {
    "id": "RPA-13",
    "group": "업무 자동화 & RPA",
    "title": "다국어 계약서 조항별 국문/영문 1:1 대조 번역 및 오역 검증표",
    "why": "해외 파트너사와 체결할 영문 계약서의 법률적 독소 조항과 배상 책임 한도를 한국어와 1:1 비교합니다.",
    "tags": [
      "계약서",
      "영문계약",
      "법률번역",
      "독소조항"
    ],
    "sites": [
      "deepl.com"
    ],
    "status": "실전 검증됨",
    "stop": "계약서 문서 최종 저장 전",
    "prompt": "제공된 영문 계약서 텍스트 '{{계약서 파일 경로 또는 본문}}'을 면밀히 분석해 주세요.\n각 조항(Section)별로 [영문 원문 / 정밀 국문 번역 / 실무 법률적 해석 / 리스크 등급(주의/안전)] 4개 열로 구성된 대조표를 작성해 주세요.\n특히 비밀유지 기한, 손해배상 상한선(Limitation of Liability), 준거법 및 관할 조항은 별도 코멘트를 달아주세요.",
    "sampleValues": {
      "계약서 파일 경로 또는 본문": "contracts/2026_Global_Vendor_Agreement.docx"
    },
    "cliExample": "aside \"영문 계약서 조항별 1:1 국문 대조표 및 법률 리스크 검증\""
  },
  {
    "id": "RPA-14",
    "group": "업무 자동화 & RPA",
    "title": "신규 입사자 온보딩 SaaS 계정 발급 체크리스트 생성",
    "why": "직무(개발/기획/영업)에 맞춰 슬랙, 깃허브, 노션, AWS 등 필요한 시스템 권한 요청 목록을 자동화합니다.",
    "tags": [
      "온보딩",
      "인사총무",
      "계정발급",
      "권한관리"
    ],
    "sites": [
      "google.com/workspace"
    ],
    "status": "실전 검증됨",
    "stop": "실제 사용자 초대 이메일 발송 전",
    "prompt": "신규 입사자 '{{입사자 이름}}' (직무: {{담당 직무/부서}})의 첫 출근을 위한 IT 온보딩 셋업 체크리스트를 작성해 주세요.\n- 필수 기본 계정: 구글 워크스페이스, 슬랙 기본 채널, 노션 워크스페이스\n- 직무별 필수 권한: GitHub 저장소, 클라우드 콘솔 IAM 역할, Figma 팀 프로젝트 권한\n- 보안 세팅: 1Password 볼트 초대, 2단계 인증(MFA) 설정 안내문\n담당 IT 관리자가 하나씩 체크할 수 있는 마크다운 표로 구성해 주세요.",
    "sampleValues": {
      "입사자 이름": "김민수",
      "담당 직무/부서": "프론트엔드 개발팀"
    },
    "cliExample": "aside \"신규 입사자 직무별 SaaS 계정 권한 온보딩 체크리스트 작성\""
  },
  {
    "id": "RPA-15",
    "group": "업무 자동화 & RPA",
    "title": "소셜 미디어 댓글 여론(감성 분석) 수집 및 위기관리(Risk) 조기 경보",
    "why": "브랜드 공식 SNS나 커뮤니티의 최신 댓글 50개를 분석해 악성 루머나 제품 하자 징후를 조기에 감지합니다.",
    "tags": [
      "감성분석",
      "여론모니터링",
      "위기관리",
      "SNS"
    ],
    "sites": [
      "youtube.com",
      "instagram.com"
    ],
    "status": "실전 검증됨",
    "stop": "댓글 자동 답글 게시 전",
    "prompt": "'{{모니터링 대상 게시물 URL}}'의 최근 댓글 50개를 수집해 주세요.\n댓글들의 전반적인 감성 분포(긍정 % / 중립 % / 부정 %)를 백분율로 산출해 주세요.\n제품 결함, 환불 요구, 허위 과장 광고 의혹 등 브랜드 리스크로 비화될 소지가 있는 '위험 댓글'을 상위 3개 발췌하고 긴급 대응 방안을 제안해 주세요.\n댓글에 자동으로 답변을 달거나 삭제하지 마세요.",
    "sampleValues": {
      "모니터링 대상 게시물 URL": "https://www.youtube.com/watch?v=example_brand_video"
    },
    "cliExample": "aside \"유튜브 브랜드 영상 댓글 감성 분석 및 부정 이슈 조기 탐지\""
  },
  {
    "id": "RES-01",
    "group": "웹 리서치 & 시장 분석",
    "title": "글로벌 B2B SaaS 가격 정책 및 기능별 요금 매트릭스 전수 비교",
    "why": "각 사 웹사이트 요금제 페이지를 직접 탐색하여 숨겨진 제한사항과 기능별 요금 테이블을 완성합니다.",
    "tags": [
      "SaaS",
      "가격비교",
      "경쟁사분석",
      "비즈니스"
    ],
    "sites": [
      "google.com"
    ],
    "status": "실전 검증됨",
    "stop": "유료 결제 시도 전",
    "prompt": "다음 3개 SaaS 서비스 '{{서비스 A}}', '{{서비스 B}}', '{{서비스 C}}'의 공식 웹사이트 가격 정책(Pricing) 페이지를 확인해 주세요.\n각 서비스의 무료 티어 유무, 입문 플랜 월/연간 비용, 엔터프라이즈 기능(SSO, SLA 등), 시트당 제한 사항을 마크다운 표로 비교해 주세요.\n명시되지 않은 항목은 '미확인'으로 표시하고 마지막 확인 날짜를 기재해 주세요.",
    "sampleValues": {
      "서비스 A": "Notion",
      "서비스 B": "ClickUp",
      "서비스 C": "Monday.com"
    },
    "cliExample": "aside \"Notion, ClickUp, Monday.com 가격 플랜 비교 매트릭스 작성\""
  },
  {
    "id": "RES-02",
    "group": "웹 리서치 & 시장 분석",
    "title": "네이버/구글 검색 트렌드 및 연관 검색어 키워드 인텔리전스",
    "why": "타겟 키워드의 최근 검색량 추이와 실시간 연관 검색어를 취합하여 콘텐츠 기획안을 도출합니다.",
    "tags": [
      "키워드",
      "SEO",
      "검색트렌드",
      "마케팅"
    ],
    "sites": [
      "datalab.naver.com",
      "trends.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "데이터 취합 완료 후",
    "prompt": "'{{타겟 키워드}}'에 대한 네이버 데이터랩과 구글 트렌드 검색량 추이를 비교 분석해 주세요.\n1. 최근 6개월 검색량 증감 추세 요약\n2. 사용자 주요 연관 검색어 상위 10개 및 검색 의도(정보형/상업형) 분류\n3. 이를 바탕으로 블로그나 유튜브 콘텐츠로 다루기 좋은 추천 제목 3개\n수집하지 못한 수치는 추측하지 마세요.",
    "sampleValues": {
      "타겟 키워드": "AI 브라우저 자동화"
    },
    "cliExample": "aside \"AI 브라우저 자동화 트렌드 및 연관 검색어 분석\""
  },
  {
    "id": "RES-03",
    "group": "웹 리서치 & 시장 분석",
    "title": "정부 R&D 및 중기부 창업 지원사업 공고 실시간 레이더",
    "why": "기업마당, K-Startup 포털에서 우리 기술 분야에 적합한 최신 정부 지원 사업을 빠르게 식별합니다.",
    "tags": [
      "정부과제",
      "R&D",
      "지원사업",
      "공공포털"
    ],
    "sites": [
      "bizinfo.go.kr",
      "k-startup.go.kr"
    ],
    "status": "실전 검증됨",
    "stop": "신청서 제출 버튼 클릭 전",
    "prompt": "기업마당(https://www.bizinfo.go.kr)에서 '{{관심 기술/키워드}}' 분야의 접수 중이거나 접수 예정인 정부 지원 공고를 찾아주세요.\n공고명, 주관기관, 지원규모(지원금액), 접수마감일, 신청자격 요건, 공고 링크를 표로 정리해 주세요.\n마감된 사업은 제외하고, 접수 마감일이 빠른 순으로 5개를 정렬해 주세요.",
    "sampleValues": {
      "관심 기술/키워드": "인공지능 소프트웨어"
    },
    "cliExample": "aside \"인공지능 분야 기업마당 최신 정부지원사업 5선 요약\""
  },
  {
    "id": "RES-04",
    "group": "웹 리서치 & 시장 분석",
    "title": "arXiv 최신 AI/ML 논문 핵심 방법론 및 벤치마크 결과 브리핑",
    "why": "arXiv에 등록된 최신 논문의 Abstract, 도입부, 실험 벤치마크 결과를 5분 만에 브리핑받습니다.",
    "tags": [
      "arXiv",
      "논문",
      "AI연구",
      "벤치마크"
    ],
    "sites": [
      "arxiv.org"
    ],
    "status": "실전 검증됨",
    "stop": "자료 수집 및 요약 완료 후",
    "prompt": "arXiv(https://arxiv.org)의 논문 '{{논문 URL 또는 arXiv ID}}'을 읽고 다음 내용을 요약해 주세요.\n1. 제안하는 핵심 방법론(Novelty) 한 줄 요약\n2. 기존 연구(Baseline) 대비 개선된 성능 및 벤치마크 수치\n3. 논문에서 언급된 한계점 및 미래 연구 과제\n4. 실무 엔지니어가 참고할 수 있는 핵심 알고리즘 아키텍처 개요\n수식이나 팩트에 없는 내용을 지어내지 마세요.",
    "sampleValues": {
      "논문 URL 또는 arXiv ID": "2312.11805"
    },
    "cliExample": "aside \"arXiv 논문 핵심 요약 및 벤치마크 비교표 생성\""
  },
  {
    "id": "RES-05",
    "group": "웹 리서치 & 시장 분석",
    "title": "채용 플랫폼(Wanted/LinkedIn) 특정 포지션 JD 역량 분석표",
    "why": "목표 포지션의 주요 기업 채용공고 5개를 분석하여 가장 빈번히 요구되는 필수 스택과 우대역량을 파악합니다.",
    "tags": [
      "JD분석",
      "채용",
      "원티드",
      "이직"
    ],
    "sites": [
      "wanted.co.kr",
      "linkedin.com"
    ],
    "status": "실전 검증됨",
    "stop": "입사 지원 버튼 클릭 전",
    "prompt": "원티드(https://www.wanted.co.kr)에서 '{{직무 키워드}}' 채용 공고 중 추천 상위 5개를 탐색해 주세요.\n각 공고별 주요 업무, 필수 자격요건, 우대사항 기술스택을 취합하여 공통적으로 등장하는 '핵심 기술 스택 TOP 5'와 '가장 강조되는 소프트스킬'을 표로 도출해 주세요.\n지원하기나 로그인 시도는 하지 마세요.",
    "sampleValues": {
      "직무 키워드": "AI 엔지니어"
    },
    "cliExample": "aside \"AI 엔지니어 원티드 공고 분석 및 필수 역량 TOP 5 정리\""
  },
  {
    "id": "RES-06",
    "group": "웹 리서치 & 시장 분석",
    "title": "앱스토어/플레이스토어 유저 리뷰 VOC 불만 유형별 클러스터링",
    "why": "최근 1~2점대 평점 리뷰에서 공통적으로 발생하는 치명적 버그나 기능 불만 사항을 유형별로 군집화합니다.",
    "tags": [
      "VOC",
      "앱리뷰",
      "사용자피드백",
      "QA"
    ],
    "sites": [
      "play.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "리뷰 등록이나 계정 작업 전",
    "prompt": "구글 플레이스토어 앱 '{{앱 URL 또는 앱 이름}}'의 최근 평점 1~2점 리뷰 20개를 수집해 주세요.\n사용자 불만 사항을 [앱 튕김/오류, 결제/환불, UI/UX 불편, 속도 저하, 기타] 5개 카테고리로 분류하고, 각 카테고리별 언급 횟수와 대표 리뷰 인용문을 표로 작성해 주세요.",
    "sampleValues": {
      "앱 URL 또는 앱 이름": "https://play.google.com/store/apps/details?id=com.nhn.android.search"
    },
    "cliExample": "aside \"플레이스토어 1-2점 부정 리뷰 수집 및 VOC 카테고리 분류\""
  },
  {
    "id": "RES-07",
    "group": "웹 리서치 & 시장 분석",
    "title": "국내 부동산 실거래가 및 포털 매물 호가 괴리율 대조표",
    "why": "국토교통부 실거래가 공개시스템과 네이버 부동산 매물 호가를 1:1로 대조하여 괴리율을 파악합니다.",
    "tags": [
      "부동산",
      "실거래가",
      "네이버부동산",
      "시세"
    ],
    "sites": [
      "rt.molit.go.kr",
      "land.naver.com"
    ],
    "status": "실전 검증됨",
    "stop": "중개업소 문의나 상담 신청 전",
    "prompt": "네이버 부동산(https://land.naver.com)에서 '{{단지명 또는 지역명}}'의 '{{평형}}' 매매 매물 호가(상위/중간/하위)를 확인하고, 최근 국토부 실거래가 평균과 비교해 주세요.\n단지명, 전용면적, 최근 실거래 최고가/최근 거래가, 현재 등록된 호가 범위, 차액(괴리율)을 표로 명시해 주세요.",
    "sampleValues": {
      "단지명 또는 지역명": "마포래미안푸르지오",
      "평형": "84㎡"
    },
    "cliExample": "aside \"마포래미안푸르지오 84형 실거래가와 네이버 호가 대조표\""
  },
  {
    "id": "RES-08",
    "group": "웹 리서치 & 시장 분석",
    "title": "Hacker News & GitHub Trending 글로벌 오픈소스 트렌드 다이제스트",
    "why": "전 세계 개발자들이 지금 가장 뜨겁게 토론하고 별(Star)을 누르는 신규 오픈소스를 분석합니다.",
    "tags": [
      "HackerNews",
      "GitHub",
      "오픈소스",
      "트렌드"
    ],
    "sites": [
      "news.ycombinator.com",
      "github.com/trending"
    ],
    "status": "실전 검증됨",
    "stop": "트렌드 분석 리포트 출력 후 종료",
    "prompt": "오늘 날짜 기준 Hacker News 인기 게시물 및 GitHub Trending(Python/TypeScript) 상위 리포지토리를 탐색해 주세요.\n가장 주목할 만한 신규 도구 3가지를 선정하여 다음 형식으로 보고해 주세요.\n- 프로젝트 이름 및 GitHub Star 수\n- 해결하고자 하는 핵심 문제와 기존 기술 대비 장점\n- 국내 실무진이 바로 적용해 볼 수 있는 사용 시나리오 1개\n과장된 홍보성 프로젝트는 제외해 주세요.",
    "sampleValues": {},
    "cliExample": "aside \"Hacker News 및 GitHub Trending 최신 오픈소스 3선 요약\""
  },
  {
    "id": "RES-09",
    "group": "웹 리서치 & 시장 분석",
    "title": "특정 도메인 팟캐스트 및 강연 유튜브 타임라인 핵심 요약 카드",
    "why": "1시간 이상의 해외 테크 컨퍼런스나 전문가 대담 영상에서 핵심 인사이트와 명언만 추출합니다.",
    "tags": [
      "유튜브",
      "컨퍼런스",
      "타임라인",
      "요약"
    ],
    "sites": [
      "youtube.com"
    ],
    "status": "실전 검증됨",
    "stop": "자막 데이터 추출 및 요약 완료 후",
    "prompt": "유튜브 영상 '{{유튜브 영상 URL}}'의 자막 스크립트를 분석하여 다음과 같이 요약해 주세요.\n1. 영상 핵심 한 줄 결론\n2. 주요 섹션별 타임라인과 핵심 메시지 (예: 00:03:20 - 문제점 제기)\n3. 연사가 강조한 실전 팁 3가지\n4. 추천 대상 (어떤 사람이 이 영상을 보면 가장 도움되는지)\n자막에 명시되지 않은 내용은 상상으로 채우지 마세요.",
    "sampleValues": {
      "유튜브 영상 URL": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    "cliExample": "aside \"유튜브 강연 영상 자막 분석 후 타임라인별 핵심 요약 카드 생성\""
  },
  {
    "id": "RES-10",
    "group": "웹 리서치 & 시장 분석",
    "title": "신규 비즈니스 타겟 시장 규모(TAM-SAM-SOM) 톱다운/바텀업 추정",
    "why": "공개 통계청 및 산업 리포트 자료를 크로스체크하여 현실적인 시장 점유율 시나리오를 산출합니다.",
    "tags": [
      "시장규모",
      "TAM",
      "SAM",
      "SOM",
      "시장분석"
    ],
    "sites": [
      "kostat.go.kr"
    ],
    "status": "실전 검증됨",
    "stop": "시장 분석 모델 출력 후",
    "prompt": "'{{신규 사업 아이템 및 타겟 고객}}'에 대한 시장 규모를 톱다운(Top-down) 및 바텀업(Bottom-up) 두 가지 방식으로 추정해 주세요.\n- 전체 잠재 시장 (TAM): 전체 산업 규모 및 출처\n- 유효 시장 (SAM): 우리 제품이 침투 가능한 지역/세그먼트 규모\n- 수익 시장 (SOM): 출시 3년 차에 현실적으로 획득 가능한 점유율 목표\n각 수치의 산출 근거(고객 수 * 객단가)를 명확히 수식으로 제시해 주세요.",
    "sampleValues": {
      "신규 사업 아이템 및 타겟 고객": "국내 50인 미만 중소기업 대상 B2B 경비처리 SaaS"
    },
    "cliExample": "aside \"B2B 경비처리 SaaS 시장 규모 TAM-SAM-SOM 산출 모델\""
  },
  {
    "id": "RES-11",
    "group": "웹 리서치 & 시장 분석",
    "title": "경쟁 브랜드 SNS 마케팅 콘텐츠 반응률 및 해시태그 전략 벤치마킹",
    "why": "경쟁사 공식 인스타그램의 최근 인기 게시물을 분석해 인터랙션이 터진 포맷을 분석합니다.",
    "tags": [
      "인스타그램",
      "경쟁사분석",
      "SNS마케팅",
      "해시태그"
    ],
    "sites": [
      "instagram.com"
    ],
    "status": "실전 검증됨",
    "stop": "게시물 데이터 수집 완료 후",
    "prompt": "경쟁사 SNS 계정 '{{경쟁사 SNS 계정명}}'의 최근 1달간 게시물 중 좋아요/댓글이 가장 많이 달린 상위 3개 게시물을 분석해 주세요.\n- 포스팅 포맷 (카드뉴스, 릴스, 캐러셀, 단일 이미지 등)\n- 사용자 반응을 이끌어낸 카피라이팅 훅(Hook)\n- 사용된 핵심 해시태그 유형 (브랜드 태그, 관심사 태그, 검색형 태그)\n- 우리 브랜드가 차용할 수 있는 벤치마킹 포인트 2가지",
    "sampleValues": {
      "경쟁사 SNS 계정명": "@competitor_official"
    },
    "cliExample": "aside \"경쟁사 공식 SNS 상위 반응 게시물 분석 및 벤치마킹 포인트 도출\""
  },
  {
    "id": "RES-12",
    "group": "웹 리서치 & 시장 분석",
    "title": "특허 정보넷(KIPRIS) 등록 특허 및 경쟁사 선행 기술 침해 여부 조사",
    "why": "출시할 기술이나 제품 명칭이 기존 등록된 특허/상표권과 충돌할 위험이 있는지 사전 스크리닝합니다.",
    "tags": [
      "KIPRIS",
      "특허조사",
      "상표권",
      "선행기술"
    ],
    "sites": [
      "kipris.or.kr"
    ],
    "status": "실전 검증됨",
    "stop": "검색 결과 취합 후",
    "prompt": "키프리스(http://www.kipris.or.kr)에서 '{{검색할 기술 키워드 또는 상표명}}'에 대한 등록 및 공개 특허/상표를 검색해 주세요.\n유사한 선행 등록 건이 있는지 확인하고 [출원번호 / 명칭 / 출원인 / 등록일자 / 핵심 청구항 요약]을 정리해 주세요.\n우리가 준비 중인 기술과의 잠재적 침해 리스크 유무를 상/중/하로 평가해 주세요.",
    "sampleValues": {
      "검색할 기술 키워드 또는 상표명": "브라우저 기반 AI 에이전트 자동 제어 시스템"
    },
    "cliExample": "aside \"KIPRIS 선행 등록 특허 검색 및 침해 리스크 스크리닝\""
  },
  {
    "id": "RES-13",
    "group": "웹 리서치 & 시장 분석",
    "title": "이커머스 베스트셀러 카테고리별 리뷰 마이닝 및 신제품 아이디어 발굴",
    "why": "네이버쇼핑/아마존 베스트셀러 상품 리뷰에서 소비자들이 반복해서 아쉬워하는 미충족 니즈를 찾습니다.",
    "tags": [
      "리뷰마이닝",
      "이커머스",
      "신제품기획",
      "고객니즈"
    ],
    "sites": [
      "shopping.naver.com"
    ],
    "status": "실전 검증됨",
    "stop": "리뷰 수집 및 분석 후",
    "prompt": "'{{조사할 카테고리(예: 캠핑용 무선 선풍기)}}'의 상위 베스트셀러 제품 3개의 구매자 리뷰 중 '아쉬워요/별로예요' 부정 리뷰를 집중 분석해 주세요.\n소비자들이 공통적으로 지적하는 제품 품질, 사용성, 배터리 수명 등의 결함을 3가지로 압축하고, 이를 역이용해 소비자를 설득할 수 있는 '차별화된 신제품 컨셉' 1가지를 제안해 주세요.",
    "sampleValues": {
      "조사할 카테고리(예: 캠핑용 무선 선풍기)": "캠핑용 접이식 테이블"
    },
    "cliExample": "aside \"캠핑 테이블 베스트셀러 부정 리뷰 마이닝 및 신제품 컨셉 도출\""
  },
  {
    "id": "RES-14",
    "group": "웹 리서치 & 시장 분석",
    "title": "국내외 벤처캐피털(VC) 최근 투자 유치(IR) 트렌드 및 유망 섹터 분석",
    "why": "The VC, Crunchbase 등에서 지난 분기 시리즈 A/B 단계 투자가 집중된 도메인과 밸류에이션을 조사합니다.",
    "tags": [
      "VC투자",
      "IR",
      "스타트업",
      "투자트렌드"
    ],
    "sites": [
      "thevc.kr",
      "crunchbase.com"
    ],
    "status": "실전 검증됨",
    "stop": "투자 데이터 브리핑 후",
    "prompt": "최근 3개월간 국내 스타트업 투자 유치 데이터 중 '{{관심 산업 분야}}' 섹터의 주요 딜(Deal) 5건을 조사해 주세요.\n기업명, 투자 단계(Seed, Series A 등), 투자 유치 금액, 주요 투자사, 핵심 사업 모델을 표로 정리해 주세요.\n투자자들이 해당 분야에서 가장 매력적으로 평가한 성장 지표(KPI)가 무엇인지 시사점을 도출해 주세요.",
    "sampleValues": {
      "관심 산업 분야": "AI B2B 생산성 도구"
    },
    "cliExample": "aside \"AI B2B 생산성 스타트업 최근 VC 투자 동향 및 시사점 리포트\""
  },
  {
    "id": "RES-15",
    "group": "웹 리서치 & 시장 분석",
    "title": "해외 최신 규제 및 컴플라이언스(GDPR, AI Act) 준수 체크리스트",
    "why": "EU AI Act, 개인정보보호 규정 등이 우리 글로벌 웹 서비스에 미치는 법적 영향을 사전 진단합니다.",
    "tags": [
      "EU_AI_Act",
      "GDPR",
      "컴플라이언스",
      "글로벌규제"
    ],
    "sites": [
      "europa.eu"
    ],
    "status": "실전 검증됨",
    "stop": "규제 분석 보고서 출력 후",
    "prompt": "'{{우리 서비스 모델}}'이 유럽 또는 미국 시장에 진출할 때 필수 준수해야 할 법적 규제(EU AI Act, GDPR, CCPA) 요건을 점검해 주세요.\n- AI 위험 등급 분류 (금지된 AI / 고위험 / 제한적 위험 / 저위험)\n- 사용자 데이터 처리 시 사전 동의(Opt-in) 요건\n- 서비스 출시 전 필수 이행해야 할 기술적 조치 3가지",
    "sampleValues": {
      "우리 서비스 모델": "사용자 브라우저 세션을 활용한 생성형 AI 웹 자동화 에이전트"
    },
    "cliExample": "aside \"AI 브라우저 에이전트 글로벌 출시를 위한 EU AI Act 컴플라이언스 체크리스트\""
  },
  {
    "id": "DEV-01",
    "group": "개발 & 시스템 엔지니어링",
    "title": "Docker Compose 및 Nginx 리버스 프록시 환경설정 파일 생성",
    "why": "컨테이너 기반 서비스와 SSL(Let's Encrypt), 보안 헤더가 적용된 docker-compose.yml과 nginx.conf를 구축합니다.",
    "tags": [
      "Docker",
      "Nginx",
      "DevOps",
      "서버"
    ],
    "sites": [
      "github.com"
    ],
    "status": "실전 검증됨",
    "stop": "서버 배포 스크립트 실행 전",
    "prompt": "'{{서비스 스택(예: Node.js 앱 + PostgreSQL + Redis)}}'을 위한 프로덕션급 docker-compose.yml과 Nginx reverse proxy 설정 파일을 생성해 주세요.\n- 자동 재시작(always), 헬스체크(healthcheck), 볼륨 영속화, 환경변수(.env) 분리 반영\n- Nginx에 SSL 종료 및 프록시 버퍼, 타임아웃, 보안 헤더(X-Frame-Options 등)를 포함해 주세요.",
    "sampleValues": {
      "서비스 스택(예: Node.js 앱 + PostgreSQL + Redis)": "Next.js 프론트엔드 + FastAPI 백엔드 + PostgreSQL"
    },
    "cliExample": "aside \"Next.js + FastAPI + Postgres용 docker-compose 및 nginx.conf 생성\""
  },
  {
    "id": "DEV-02",
    "group": "개발 & 시스템 엔지니어링",
    "title": "RESTful API 명세서(Swagger / OpenAPI 3.0 YAML) 표준 문서화",
    "why": "컨트롤러 코드나 요구사항 명세로부터 표준 OpenAPI 3.0 스키마와 응답 코드를 작성합니다.",
    "tags": [
      "API",
      "OpenAPI",
      "Swagger",
      "백엔드"
    ],
    "sites": [
      "swagger.io"
    ],
    "status": "실전 검증됨",
    "stop": "스웨거 파일 저장 전",
    "prompt": "엔드포인트 '{{API 엔드포인트 및 기능}}'에 대해 표준 OpenAPI 3.0 YAML 규격 문서를 작성해 주세요.\n- HTTP 메서드, 경로, 요청 파라미터/바디 스키마 명시\n- 200(성공), 400(유효성 검사 실패), 401(인증 실패), 500(서버 오류) 상태 코드별 샘플 응답 JSON 포함\n- JWT Bearer 인증 보안 스키마 정의 반영",
    "sampleValues": {
      "API 엔드포인트 및 기능": "POST /api/v1/users/register - 이메일, 비밀번호, 닉네임으로 회원가입"
    },
    "cliExample": "aside \"회원가입 엔드포인트 OpenAPI 3.0 YAML 스펙 생성\""
  },
  {
    "id": "DEV-03",
    "group": "개발 & 시스템 엔지니어링",
    "title": "단위 테스트(Jest/Pytest) 테스트 스위트 및 경계값(Edge Case) 설계",
    "why": "정상 플로우뿐 아니라 Null, Boundary, 동시성 충돌, 예외 상황을 철저히 검증하는 코드를 만듭니다.",
    "tags": [
      "테스트",
      "Jest",
      "Pytest",
      "QA"
    ],
    "sites": [
      "github.com"
    ],
    "status": "실전 검증됨",
    "stop": "테스트 실행 전 코드 확인",
    "prompt": "아래 함수 로직에 대한 '{{테스트 프레임워크(예: Jest, Pytest)}}' 단위 테스트 코드를 작성해 주세요.\n[함수 내용]\n{{함수 코드 또는 스펙}}\n\n- 정상 입력 시 기대 결과 검증\n- 빈 값, null, 비정상 타입 입력 시의 예외 처리(throw) 검증\n- 경계값(Boundary value) 테스트 케이스 2개 이상 포함\n- 각 테스트 케이스에 어떤 의도인지 한 줄 주석 기재",
    "sampleValues": {
      "테스트 프레임워크(예: Jest, Pytest)": "Jest",
      "함수 코드 또는 스펙": "function calculateDiscount(price, couponCode, isVip) { ... }"
    },
    "cliExample": "aside \"할인율 계산 함수 Jest 단위 테스트 및 경계값 테스트 케이스 작성\""
  },
  {
    "id": "DEV-04",
    "group": "개발 & 시스템 엔지니어링",
    "title": "슬로우 SQL 쿼리 병목 원인 진단 및 인덱스 최적화 가이드",
    "why": "Full Table Scan이나 불필요한 서브쿼리를 JOIN, 커버링 인덱스로 개선하여 쿼리 응답 속도를 개선합니다.",
    "tags": [
      "SQL",
      "DB최적화",
      "PostgreSQL",
      "MySQL"
    ],
    "sites": [
      "postgresql.org"
    ],
    "status": "실전 검증됨",
    "stop": "실제 DB 쿼리 실행 전",
    "prompt": "다음 '{{데이터베이스 종류}}' SQL 쿼리의 성능 병목을 진단하고 최적화된 쿼리를 제안해 주세요.\n[기존 쿼리]\n{{기존 슬로우 쿼리}}\n\n1. 병목 원인 분석 (인덱스 미사용, 풀스캔, N+1 등)\n2. 성능을 개선한 리팩토링된 SQL 쿼리문\n3. 성능 향상을 위해 테이블에 추가해야 할 복합 인덱스(Index) DDL 구문\n4. 예상 개선 효과",
    "sampleValues": {
      "데이터베이스 종류": "PostgreSQL 16",
      "기존 슬로우 쿼리": "SELECT * FROM orders WHERE customer_id IN (SELECT id FROM customers WHERE status = 'active') AND order_date > '2026-01-01' ORDER BY total_amount DESC;"
    },
    "cliExample": "aside \"주문 내역 슬로우 쿼리 성능 분석 및 인덱스 추천\""
  },
  {
    "id": "DEV-05",
    "group": "개발 & 시스템 엔지니어링",
    "title": "GitHub Actions CI/CD 자동 빌드 및 클라우드 무중단 배포 파이프라인",
    "why": "코드 푸시 시 린트, 테스트, 빌드, Docker 이미지 빌드 및 클라우드 배포까지 자동화합니다.",
    "tags": [
      "GitHubActions",
      "CI/CD",
      "자동배포",
      "DevOps"
    ],
    "sites": [
      "github.com"
    ],
    "status": "실전 검증됨",
    "stop": "워크플로우 커밋 전",
    "prompt": "'{{프로젝트 환경(예: Node.js TypeScript + AWS S3 / Docker)}}'을 위한 GitHub Actions 워크플로우 YAML 파일을 작성해 주세요.\n- main 브랜치 PR 시: 린트(ESLint) 및 단위 테스트 실행\n- main 브랜치 머지 시: 프로덕션 빌드, 캐싱 적용(npm cache), 환경변수(Secrets) 주입, 배포 단계 수행\n- 실패 시 슬랙 웹훅으로 알림 전송 스텝 포함",
    "sampleValues": {
      "프로젝트 환경(예: Node.js TypeScript + AWS S3 / Docker)": "Next.js 앱 빌드 후 AWS S3 + CloudFront 배포"
    },
    "cliExample": "aside \"Next.js S3 배포용 GitHub Actions CI/CD 워크플로우 작성\""
  },
  {
    "id": "DEV-06",
    "group": "개발 & 시스템 엔지니어링",
    "title": "웹 서비스 헬스체크 및 슬랙 웹훅 실시간 장애 감지 모니터링",
    "why": "서버 응답 상태코드와 지연 시간을 주기적으로 점검하여 장애 시 슬랙으로 즉시 경보를 발송합니다.",
    "tags": [
      "모니터링",
      "슬랙알림",
      "파이썬",
      "배시"
    ],
    "sites": [
      "slack.com"
    ],
    "status": "실전 검증됨",
    "stop": "스크립트 실행 전",
    "prompt": "'{{점검 대상 URL 목록}}'의 HTTP 상태코드를 1분마다 점검하는 경량 파이썬 스크립트를 작성해 주세요.\n- HTTP 상태코드가 200이 아니거나 응답 시간이 3초를 초과할 경우 슬랙 Incoming Webhook으로 경고 메시지(URL, 상태코드, 지연시간, 타임스탬프) 전송\n- 연속 3회 실패 시 장애 등급 'CRITICAL'로 승격 알림\n- 의존성 라이브러리는 최소화(requests 또는 표준 urllib 활용)",
    "sampleValues": {
      "점검 대상 URL 목록": "https://api.mycompany.com/healthz, https://www.mycompany.com"
    },
    "cliExample": "aside \"웹 서비스 헬스체크 및 슬랙 알림 파이썬 모니터링 스크립트 작성\""
  },
  {
    "id": "DEV-07",
    "group": "개발 & 시스템 엔지니어링",
    "title": "레거시 JavaScript 코드를 엄격한 TypeScript 인터페이스로 리팩토링",
    "why": "오래된 비동기 콜백이나 타입 없는 코드를 모던 async/await와 엄격한 TS 인터페이스로 마이그레이션합니다.",
    "tags": [
      "리팩토링",
      "TypeScript",
      "타입변환",
      "코드개선"
    ],
    "sites": [
      "github.com"
    ],
    "status": "실전 검증됨",
    "stop": "코드 덮어쓰기 전",
    "prompt": "아래 제공된 자바스크립트 레거시 코드를 읽고 최신 TypeScript 표준으로 리팩토링해 주세요.\n[기존 코드]\n{{변환할 기존 코드}}\n\n1. 필요한 모든 데이터 모델의 TypeScript interface / type 정의 작성\n2. 콜백 지옥(Callback) 또는 오래된 프로미스 구문을 모던 async/await 및 구조분해할당으로 변환\n3. 발생 가능한 예외 상황에 대한 try-catch 및 커스텀 에러 클래스 적용\n4. 변경된 주요 이유 3줄 요약",
    "sampleValues": {
      "변환할 기존 코드": "function fetchUser(id, cb) { $.ajax({ url: '/users/' + id, success: function(res) { cb(null, res); }, error: function(e) { cb(e); } }); }"
    },
    "cliExample": "aside \"레거시 AJAX 콜백 코드를 모던 TypeScript async/await로 변환\""
  },
  {
    "id": "DEV-08",
    "group": "개발 & 시스템 엔지니어링",
    "title": "GitHub PR 코드 변경점(diff) OWASP Top 10 보안 취약점 감사",
    "why": "머지 전 PR 코드를 전수 검사하여 SQL 인젝션, XSS, 시크릿 키 노출 위험을 원천 차단합니다.",
    "tags": [
      "GitHub",
      "보안",
      "코드리뷰",
      "OWASP"
    ],
    "sites": [
      "github.com"
    ],
    "status": "실전 검증됨",
    "stop": "PR 머지 및 코멘트 등록 전",
    "prompt": "GitHub 저장소 '{{저장소 URL}}'의 PR #{{PR 번호}}의 diff를 분석해 주세요.\n1. 보안 리스크: SQL Injection, XSS, 취약한 의존성, 하드코딩된 API Key 노출 여부\n2. 성능/아키텍처: N+1 쿼리, 메모리 누수 위험, 적절하지 않은 예외 삼키기(Swallowing errors)\n3. 위험도(심각/경고/개선제안) 태그와 함께 수정 권장 코드를 포함한 리포트를 작성해 주세요.\nPR에 직접 코멘트를 남기지 말고 로컬 터미널에만 출력하세요.",
    "sampleValues": {
      "저장소 URL": "https://github.com/my-org/core-service",
      "PR 번호": "142"
    },
    "cliExample": "aside \"PR #142 코드 diff 분석하여 보안 취약점 리포트 출력\""
  },
  {
    "id": "DEV-09",
    "group": "개발 & 시스템 엔지니어링",
    "title": "비정형 텍스트 및 영수증에서 엄격한 JSON Schema 규격 데이터 추출",
    "why": "자유 형식 이메일, 거래명세서, 계약서에서 지정한 JSON 스키마에 맞춰 오류 없이 데이터를 정제합니다.",
    "tags": [
      "JSON",
      "데이터파싱",
      "자동화",
      "스키마"
    ],
    "sites": [
      "Aside",
      "ChatGPT"
    ],
    "status": "실전 검증됨",
    "stop": "데이터 변환 및 JSON 유효성 검증 완료 후 출력",
    "prompt": "제공된 입력 텍스트: '{{입력 비구조화 텍스트}}'\n\n위 텍스트에서 데이터를 추출하여 아래 JSON Schema 규칙을 철저히 준수하는 유효한 JSON 객체로만 응답해주세요.\n- Markdown 코드블록 외에 불필요한 인사말이나 부연 설명은 일절 생략하세요.\n- 추출 필드: { \"company_name\": string, \"invoice_date\": \"YYYY-MM-DD\", \"total_amount\": number, \"items\": [{ \"name\": string, \"qty\": number, \"unit_price\": number }] }\n- 텍스트에 없는 값은 null로 처리하고, 금액은 쉼표를 제거한 순수 숫자(integer)로 변환하세요.",
    "sampleValues": {
      "입력 비구조화 텍스트": "주식회사 테크솔루션 귀하 / 2026년 10월 28일 공급 / 클라우드 서버 이용료 3대 1,500,000원, 도메인 유지보수 1건 50,000원 합계 1,550,000원 (부가세 별도)"
    },
    "cliExample": "aside \"비정형 거래명세서 텍스트에서 규격 JSON 스키마 추출\""
  },
  {
    "id": "DEV-10",
    "group": "개발 & 시스템 엔지니어링",
    "title": "마이크로서비스 이벤트 기반 Kafka/RabbitMQ 메시지 스키마 설계",
    "why": "서비스 간 결합도를 낮추고 데이터 유실을 방지하는 JSON/Protobuf 메시지 페이로드를 정의합니다.",
    "tags": [
      "메시지큐",
      "Kafka",
      "RabbitMQ",
      "아키텍처"
    ],
    "sites": [
      "kafka.apache.org"
    ],
    "status": "실전 검증됨",
    "stop": "스키마 레지스트리 등록 전",
    "prompt": "이벤트 '{{비즈니스 이벤트(예: 결제 완료, 주문 취소)}}'를 처리하기 위한 표준 메시지 큐 페이로드 스키마를 설계해 주세요.\n- 메시지 헤더: event_id(UUID), event_type, timestamp, trace_id, producer\n- 메시지 바디: 핵심 비즈니스 도메인 엔티티 속성\n- 멱등성(Idempotency) 보장을 위한 키 설계 및 버전 관리(Schema Versioning) 방안 명시",
    "sampleValues": {
      "비즈니스 이벤트(예: 결제 완료, 주문 취소)": "OrderPlaced (신규 주문 접수 완료 이벤트)"
    },
    "cliExample": "aside \"신규 주문 접수 이벤트 Kafka 메시지 페이로드 스키마 정의\""
  },
  {
    "id": "DEV-11",
    "group": "개발 & 시스템 엔지니어링",
    "title": "웹 프론트엔드 Core Web Vitals(LCP, FID, CLS) 성능 최적화 진단",
    "why": "구글 검색 순위에 직결되는 페이지 로딩 속도와 렌더링 지연 요인을 찾아 개선 코드를 제시합니다.",
    "tags": [
      "웹성능",
      "LCP",
      "CoreWebVitals",
      "프론트엔드"
    ],
    "sites": [
      "pagespeed.web.dev"
    ],
    "status": "실전 검증됨",
    "stop": "코드 수정 반영 전",
    "prompt": "웹사이트 '{{대상 웹페이지 URL}}'의 로딩 성능 및 Core Web Vitals 지표를 분석해 주세요.\n1. LCP(Largest Contentful Paint) 지연 요인 (대용량 이미지, 폰트 렌더링 블로킹 등)\n2. CLS(Cumulative Layout Shift) 방지를 위한 이미지/배너 고정 비율 설정\n3. 미사용 자바스크립트 번들 분할(Code Splitting) 및 지연 로딩(Lazy Loading) 적용 가이드",
    "sampleValues": {
      "대상 웹페이지 URL": "https://my-ecommerce-store.com"
    },
    "cliExample": "aside \"이커머스 메인 페이지 Core Web Vitals 성능 개선 가이드\""
  },
  {
    "id": "DEV-12",
    "group": "개발 & 시스템 엔지니어링",
    "title": "Linux 서버 보안 강화(Hardening) 및 SSH 접근 통제 스크립트",
    "why": "우분투 서버의 루트 로그인 차단, 포트 변경, Fail2ban 설치, 방화벽(UFW) 세팅을 일괄 구성합니다.",
    "tags": [
      "리눅스",
      "서버보안",
      "SSH",
      "방화벽"
    ],
    "sites": [
      "ubuntu.com"
    ],
    "status": "실전 검증됨",
    "stop": "스크립트 서버 실행 전",
    "prompt": "신규 Ubuntu 24.04 LTS 서버 초기 보안 설정을 위한 안전한 Bash 쉘 스크립트를 작성해 주세요.\n1. 기본 SSH 포트 변경 및 root 원격 로그인(PermitRootLogin no) 금지\n2. 패스워드 로그인 비활성화 및 SSH Key 기반 인증만 허용\n3. UFW 방화벽 활성화 (지정한 포트만 허용)\n4. Fail2ban 설치 및 무차별 대입 공격(Brute Force) 자동 차단 jail 설정\n실행 전 백업 및 주의사항을 상단 주석으로 명시해 주세요.",
    "sampleValues": {},
    "cliExample": "aside \"Ubuntu 리눅스 초기 서버 보안 강화 Bash 스크립트 작성\""
  },
  {
    "id": "DEV-13",
    "group": "개발 & 시스템 엔지니어링",
    "title": "GraphQL 스키마(SDL) 및 리졸버(Resolver) 보일러플레이트 작성",
    "why": "복잡한 관계형 엔티티를 효율적으로 쿼리할 수 있는 Type, Query, Mutation 스키마를 구성합니다.",
    "tags": [
      "GraphQL",
      "Apollo",
      "스키마",
      "API"
    ],
    "sites": [
      "graphql.org"
    ],
    "status": "실전 검증됨",
    "stop": "서버 코드 반영 전",
    "prompt": "도메인 모델 '{{엔티티 및 요구사항}}'을 위한 표준 GraphQL SDL(Schema Definition Language)과 리졸버 코드를 작성해 주세요.\n- Type, Input, Query, Mutation 스키마 정의\n- N+1 문제 해결을 위한 DataLoader 적용 구조 예시\n- 페이지네이션(Cursor-based pagination) 연결",
    "sampleValues": {
      "엔티티 및 요구사항": "블로그 포스트와 작성자(User), 댓글(Comment) 간의 1:N 관계"
    },
    "cliExample": "aside \"블로그 포스트 및 댓글 도메인 GraphQL SDL 스키마 작성\""
  },
  {
    "id": "DEV-14",
    "group": "개발 & 시스템 엔지니어링",
    "title": "Kubernetes 배포용 Deployment, Service, Ingress YAML 매니페스트",
    "why": "k8s 클러스터에 서비스를 안정적으로 띄우기 위한 롤링 업데이트, 리소스 리밋, 헬스체크를 구성합니다.",
    "tags": [
      "Kubernetes",
      "k8s",
      "컨테이너",
      "DevOps"
    ],
    "sites": [
      "kubernetes.io"
    ],
    "status": "실전 검증됨",
    "stop": "kubectl apply 명령 실행 전",
    "prompt": "'{{애플리케이션 명칭 및 컨테이너 이미지}}'을 k8s 클러스터에 배포하기 위한 표준 매니페스트 YAML을 작성해 주세요.\n- Deployment: Replica 수 3, RollingUpdate 전략, livenessProbe/readinessProbe, resources (requests/limits)\n- Service: ClusterIP 포트 매핑\n- Ingress: Nginx Ingress Controller 기반 도메인 라우팅 및 TLS 시크릿 연동",
    "sampleValues": {
      "애플리케이션 명칭 및 컨테이너 이미지": "api-gateway:v1.2.0 (포트 8080)"
    },
    "cliExample": "aside \"API 게이트웨이용 Kubernetes Deployment 및 Ingress YAML 작성\""
  },
  {
    "id": "DEV-15",
    "group": "개발 & 시스템 엔지니어링",
    "title": "데이터베이스 마이그레이션(Flyway/Prisma) DDL 스크립트 및 롤백 구문",
    "why": "테이블 생성 및 컬럼 변경 시 서비스 중단 없이 적용 가능한 Up/Down 무중단 마이그레이션을 설계합니다.",
    "tags": [
      "DB마이그레이션",
      "Prisma",
      "Flyway",
      "DDL"
    ],
    "sites": [
      "prisma.io"
    ],
    "status": "실전 검증됨",
    "stop": "프로덕션 DB 마이그레이션 실행 전",
    "prompt": "다음 데이터 모델 변경 사항 '{{변경 요구사항}}'에 대한 안전한 SQL 마이그레이션 스크립트를 작성해 주세요.\n- Up 마이그레이션: 신규 테이블 생성, 컬럼 추가 시 기본값 지정, 외래키 제약조건 설정\n- Down 마이그레이션: 문제 발생 시 원상 복구 가능한 롤백 SQL 스크립트\n- 대용량 테이블 대상 ALTER TABLE 시 락(Lock)을 최소화하는 팁 명시",
    "sampleValues": {
      "변경 요구사항": "users 테이블에 last_login_at (TIMESTAMP) 컬럼 추가 및 user_devices 테이블 신규 생성"
    },
    "cliExample": "aside \"users 테이블 확장 및 기기 관리 테이블 DDL 마이그레이션 작성\""
  },
  {
    "id": "MKT-01",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "신제품 런칭 멀티채널 카피라이팅 (인스타/링크드인/뉴스레터)",
    "why": "하나의 핵심 가치 제안을 채널별 사용자 문법(B2B 전문성, B2C 감성, 친근함)에 맞게 3분 만에 분기합니다.",
    "tags": [
      "카피라이팅",
      "SNS",
      "마케팅",
      "브랜딩"
    ],
    "sites": [
      "linkedin.com",
      "instagram.com"
    ],
    "status": "실전 검증됨",
    "stop": "SNS 발행 또는 게시물 업로드 직전",
    "prompt": "새로 출시하는 제품 '{{제품명}}'의 런칭 마케팅 카피를 채널별 성격에 맞게 3가지 버전으로 작성해주세요.\n\n[제품 정보]\n- 타겟 고객: {{타겟 고객}}\n- 핵심 해결 문제: {{해결하는 문제점}}\n- 핵심 차별점/기능: {{주요 특장점}}\n\n[요청 채널별 가이드]\n1. 인스타그램: 시각적 후킹 문구, 이모지 활용, 공감형 어조, 관련 해시태그 15개\n2. 링크드인: 비즈니스 인사이트 중심, 실무 생산성 수치 강조, 격식 있고 프로페셔널한 톤앤매너\n3. 이메일 뉴스레터: 열어볼 수밖에 없는 제목 3개 후보, 개인화된 도입부, 명확한 CTA 버튼 문구",
    "sampleValues": {
      "제품명": "스마트 AI 회의록 요약기 Pro",
      "타겟 고객": "스타트업 팀장 및 프로덕트 매니저(PM)",
      "해결하는 문제점": "1시간 회의 후 30분 동안 회의록 정리하느라 야근하는 문제",
      "주요 특장점": "발언자 분리 인식률 99%, 액션 아이템 자동 지라(Jira) 티켓 연동"
    },
    "cliExample": "aside \"스마트 AI 회의록 신제품 링크드인 및 인스타 카피라이팅 생성\""
  },
  {
    "id": "MKT-02",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "SEO 최적화 전문 테크 블로그 아티클 구조 및 본문 작성",
    "why": "검색엔진 상위 노출에 최적화된 구조(H1-H3), 코드 스니펫, FAQ 섹션까지 완성도 높은 글을 만듭니다.",
    "tags": [
      "SEO",
      "블로그",
      "기술글",
      "콘텐츠"
    ],
    "sites": [
      "velog.io",
      "medium.com"
    ],
    "status": "실전 검증됨",
    "stop": "게시글 작성 완료 후 초안 검토",
    "prompt": "'{{포스팅 주제 및 핵심 키워드}}'를 주제로 개발자 및 기술 애호가를 위한 깊이 있는 테크 블로그 아티클을 작성해주세요.\n- 타겟 독자: 실무 주니어~미들급 엔지니어\n- 분량: 공백 포함 3,000자 내외\n- 구조:\n  1. 검색 유입을 부르는 강력한 제목 (메인 키워드 포함)\n  2. 문제 제기 및 왜 이 기술이 중요한지 (서론)\n  3. 단계별 핵심 구현 방법 (동작 원리 설명 + 예제 코드 블록 포함)\n  4. 실무에서 흔히 겪는 실수 3가지와 해결책\n  5. 자주 묻는 질문(FAQ) 3개\n  6. 결론 및 참고 레퍼런스 링크 형태",
    "sampleValues": {
      "포스팅 주제 및 핵심 키워드": "Aside 브라우저 AI 에이전트를 활용한 웹 스크래핑 완전 자동화 가이드"
    },
    "cliExample": "aside \"Aside 웹 자동화 주제로 SEO 친화적 테크 블로그 포스팅 작성\""
  },
  {
    "id": "MKT-03",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "인스타그램 릴스/쇼츠 60초 숏폼 대본 및 씬별 연출안",
    "why": "초반 3초 후킹 문구, 본론 3단 전개, 마지막 CTA까지 쇼츠 알고리즘에 맞춘 촬영용 씬 대본을 제작합니다.",
    "tags": [
      "릴스",
      "쇼츠",
      "대본",
      "숏폼"
    ],
    "sites": [
      "instagram.com",
      "youtube.com"
    ],
    "status": "실전 검증됨",
    "stop": "영상 업로드 직전",
    "prompt": "주제 '{{영상 주제}}'에 대한 60초 인스타그램 릴스/유튜브 쇼츠 대본을 작성해 주세요.\n[구성]\n1. 0~3초: 시선을 사로잡는 강력한 후킹 멘트 및 자막\n2. 4~40초: 핵심 팁 3가지 (각 씬별 화면 연출 가이드 + 나레이션)\n3. 41~55초: 시청자가 저장/공유할 명분 제시\n4. 56~60초: 프로필 링크 클릭 유도(CTA)\n5. 캡션 본문 문구 및 해시태그 10개",
    "sampleValues": {
      "영상 주제": "직장인이 매일 30분 아끼는 AI 크롬 확장프로그램 3선"
    },
    "cliExample": "aside \"직장인 필수 AI 크롬 확장프로그램 60초 쇼츠 대본 작성\""
  },
  {
    "id": "MKT-04",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "B2B 콜드메일(Cold Email) A/B 테스트 2종 및 후속 팔로업 템플릿",
    "why": "잠재 고객사의 오픈율과 회신율을 극대화하기 위해 질문형과 가치제안형 2가지 버전의 메일을 작성합니다.",
    "tags": [
      "콜드메일",
      "영업",
      "B2B",
      "세일즈"
    ],
    "sites": [
      "gmail.com"
    ],
    "status": "실전 검증됨",
    "stop": "이메일 전송 버튼 클릭 전",
    "prompt": "잠재 고객사 '{{고객사 업종 또는 타겟}}'의 담당자(팀장/임원)에게 보낼 B2B 콜드메일 초안 2가지(버전 A: 문제해결 중심, 버전 B: 수치/사례 중심)를 작성해 주세요.\n- 제공 솔루션: {{우리 솔루션/서비스}}\n- 글자 수: 모바일에서 한 화면에 다 읽히는 150단어 이내\n- 부담 없는 15분 미팅 제안(CTA)\n- 발송 3일 후 회신이 없을 때 보낼 3줄 팔로업(Follow-up) 메일 포함",
    "sampleValues": {
      "고객사 업종 또는 타겟": "이커머스 스타트업 마케팅 팀장",
      "우리 솔루션/서비스": "상세페이지 이미지 자동 다국어 번역 및 최적화 SaaS"
    },
    "cliExample": "aside \"이커머스 마케팅팀 대상 B2B 콜드메일 A/B 버전 및 팔로업 생성\""
  },
  {
    "id": "MKT-05",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "제품 런칭 보도자료(Press Release) 표준 배포용 국문 초안",
    "why": "언론사 기자들이 그대로 인용할 수 있도록 6하 원칙, 대표이사 코멘트, 기업 개요를 포함한 공식 양식으로 작성합니다.",
    "tags": [
      "보도자료",
      "PR",
      "언론홍보",
      "기사"
    ],
    "sites": [
      "newswire.co.kr"
    ],
    "status": "실전 검증됨",
    "stop": "언론사 송고 전",
    "prompt": "다음 런칭 소식을 바탕으로 국내 IT/경제지 표준 배포용 보도자료를 작성해 주세요.\n- 회사명: {{회사명}}\n- 신규 서비스/제품: {{제품명 및 출시 소식}}\n- 주요 핵심 기능: {{주요 기능 3가지}}\n- 기대 효과/성장 지표: {{수치 또는 기대 효과}}\n[필수 포함 항목: 헤드라인 3개(메인/서브), 날짜 및 도입부, 본문 3문단, 대표자/담당자 인용 코멘트 1건, 회사 소개 문단]",
    "sampleValues": {
      "회사명": "(주)에이전트랩스",
      "제품명 및 출시 소식": "노코드 브라우저 AI 자동화 솔루션 'Aside Studio' 정식 출시",
      "주요 기능 3가지": "원클릭 웹 매크로 생성, 폼 자동 입력, 실패 시 안전 자동 중단",
      "수치 또는 기대 효과": "베타 테스트 기간 500개 기업 참여, 반복 업무 시간 70% 단축"
    },
    "cliExample": "aside \"Aside Studio 정식 출시 언론 배포용 공식 보도자료 작성\""
  },
  {
    "id": "MKT-06",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "이커머스 상세페이지 기획 스토리보드 (PASONA 세일즈 공식)",
    "why": "고객의 구매 심리를 자극하는 PASONA(문제-공감-해결-제안-한정-행동) 구조로 상세페이지 카피를 설계합니다.",
    "tags": [
      "상세페이지",
      "이커머스",
      "카피라이팅",
      "PASONA"
    ],
    "sites": [
      "smartstore.naver.com"
    ],
    "status": "실전 검증됨",
    "stop": "상세페이지 에디터 저장 전",
    "prompt": "상품 '{{상품명}}'의 스마트스토어/쿠팡 상세페이지 기획안을 PASONA 법칙(Problem, Affiliation, Solution, Offer, Narrow, Action)에 맞춰 섹션별로 작성해 주세요.\n각 섹션마다 들어갈 [상단 카피], [서브 설명 문구], [필요한 이미지/GIF 연출 가이드]를 표로 구성해 주세요.\n과장 광고나 의료법/식품위생법 위반 소지가 있는 단어는 배제해 주세요.",
    "sampleValues": {
      "상품명": "인체공학 메모리폼 경추 목베개"
    },
    "cliExample": "aside \"경추 목베개 스마트스토어 상세페이지 PASONA 카피 기획\""
  },
  {
    "id": "MKT-07",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "X(트위터) 스레드(Thread) 바이럴 지식 공유 글 (훅-전개-교훈-CTA)",
    "why": "긴 전문 지식을 읽기 쉬운 5~7개의 연결된 트윗 스레드로 분할하여 리트윗과 북마크를 유도합니다.",
    "tags": [
      "트위터",
      "X",
      "스레드",
      "바이럴"
    ],
    "sites": [
      "x.com"
    ],
    "status": "실전 검증됨",
    "stop": "트윗 발행 전",
    "prompt": "주제 '{{공유할 노하우/경험}}'을 바탕으로 X(Twitter)에서 북마크와 리트윗을 이끌어낼 6개 연쇄 스레드를 작성해 주세요.\n1/6: 숫자가 들어간 강력한 훅(Hook)\n2~4/6: 구체적인 실행 단계 및 실무 팁 (각각 불릿 포인트 활용)\n5/6: 사람들이 흔히 저지르는 치명적 실수 1가지\n6/6: 요약 정리 및 팔로우/RT 요청 CTA",
    "sampleValues": {
      "공유할 노하우/경험": "비개발자가 3일 만에 브라우저 AI 에이전트로 월 10시간 업무 단축한 방법"
    },
    "cliExample": "aside \"AI 브라우저 업무 자동화 트위터 6단 스레드 작성\""
  },
  {
    "id": "MKT-08",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "주간 뉴스레터 큐레이션 및 에디터 퍼스널 레터 템플릿",
    "why": "한 주의 업계 핫토픽 3가지와 에디터의 독창적인 통찰이 담긴 이메일 뉴스레터 포맷을 완성합니다.",
    "tags": [
      "뉴스레터",
      "스티비",
      "이메일마케팅",
      "큐레이션"
    ],
    "sites": [
      "stibee.com",
      "mailerlite.com"
    ],
    "status": "실전 검증됨",
    "stop": "전체 발송 버튼 클릭 전",
    "prompt": "분야 '{{산업/도메인}}'의 구독자를 위한 이번 주 뉴스레터 초안을 작성해 주세요.\n- 제목: 클릭률을 높이는 호기심 자극 제목 3개 후보\n- 오프닝: 계절감 또는 최근 이슈와 연결한 에디터의 짧은 생각(200자)\n- 큐레이션: 업계 주요 뉴스 3개(헤드라인 + 3줄 요약 + 읽어볼 포인트)\n- 금주의 추천 툴/아티클 1개 소개\n- 클로징 인사말 및 피드백 설문 링크 자리",
    "sampleValues": {
      "산업/도메인": "생성형 AI 및 노코드 자동화"
    },
    "cliExample": "aside \"생성형 AI 주간 뉴스레터 큐레이션 및 에디터 레터 초안 작성\""
  },
  {
    "id": "MKT-09",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "신규 가입자 온보딩 웰컴 이메일 시퀀스 3단계 (D0, D3, D7)",
    "why": "회원가입 직후 이탈을 막고 유료 전환을 유도하는 가치 중심의 단계별 온보딩 메일을 설계합니다.",
    "tags": [
      "온보딩메일",
      "CRM마케팅",
      "이메일시퀀스",
      "리텐션"
    ],
    "sites": [
      "braze.com",
      "customer.io"
    ],
    "status": "실전 검증됨",
    "stop": "자동화 캠페인 활성화 전",
    "prompt": "'{{서비스/앱 이름}}'의 신규 가입자를 위한 3회차 자동 온보딩 이메일 시퀀스를 작성해 주세요.\n- 1일차 (가입 직후): 환영 인사 + 3분 만에 첫 '아하 모먼트(Aha-moment)' 달성하는 핵심 가이드\n- 3일차: 자주 묻는 질문(FAQ) 해결 및 숨겨진 꿀팁 2가지 안내\n- 7일차: 성공 사례(Case study) 소개 및 프로 플랜 할인/체험 연장 혜택 안내",
    "sampleValues": {
      "서비스/앱 이름": "스마트 프롬프트 스튜디오"
    },
    "cliExample": "aside \"SaaS 신규 가입자 3단계 온보딩 웰컴 이메일 시퀀스 작성\""
  },
  {
    "id": "MKT-10",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "구글/메타 퍼포먼스 광고 소재 카피 및 시각 연출 기획안 5종",
    "why": "CPC(클릭단가)를 낮추고 CTR을 높이기 위해 공감형, 호기심형, 권위형 등 다각도 카피를 만듭니다.",
    "tags": [
      "퍼포먼스마케팅",
      "메타광고",
      "구글광고",
      "소재기획"
    ],
    "sites": [
      "business.facebook.com"
    ],
    "status": "실전 검증됨",
    "stop": "광고 캠페인 라이브 전",
    "prompt": "'{{홍보할 제품 또는 서비스}}'의 메타(인스타그램/페이스북) 피드 피드 광고 소재 4세트를 작성해 주세요.\n1. 공감/고통 호소형 (Pain-point)\n2. 호기심 자극/질문형 (Curiosity)\n3. 수치/신뢰 강조형 (Data-driven)\n4. 후기/사회적 증거형 (Social Proof)\n각 세트별 [기획 의도, 메인 비주얼 이미지/영상 연출안, 헤드라인 카피, 본문 문구, CTA 버튼 문구]를 명시해 주세요.",
    "sampleValues": {
      "홍보할 제품 또는 서비스": "직장인 야근 줄여주는 AI 엑셀 자동화 강의"
    },
    "cliExample": "aside \"직장인 AI 엑셀 강의 메타 피드 광고 소재 4종 카피 기획\""
  },
  {
    "id": "MKT-11",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "오프라인 팝업스토어 및 전시 부스 프로모션 이벤트 기획안",
    "why": "부스 방문객의 체류 시간을 늘리고 인스타그램 인증샷 업로드를 극대화하는 현장 이벤트를 설계합니다.",
    "tags": [
      "팝업스토어",
      "부스이벤트",
      "오프라인마케팅",
      "프로모션"
    ],
    "sites": [
      "instagram.com"
    ],
    "status": "실전 검증됨",
    "stop": "행사 기획안 최종 승인 전",
    "prompt": "브랜드 '{{브랜드 및 전시 테마}}'의 오프라인 팝업 행사 기획안을 작성해 주세요.\n1. 관람객의 호기심을 끄는 인터랙티브 포토존 연출 컨셉\n2. 인스타그램 스토리/피드 인증 시 100% 당첨 럭키드로우 이벤트 플로우\n3. 현장 리드(연락처/카카오톡 플친) 확보를 위한 미니 퀴즈 구성\n4. 운영 인력 배치 및 동선 가이드",
    "sampleValues": {
      "브랜드 및 전시 테마": "생성형 AI 크리에이티브 스튜디오 체험 팝업"
    },
    "cliExample": "aside \"AI 스튜디오 오프라인 팝업스토어 현장 이벤트 및 포토존 기획\""
  },
  {
    "id": "MKT-12",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "인플루언서 섭외 제안서 및 유튜브/인스타 협찬 가이드라인",
    "why": "유튜버나 크리에이터에게 정중히 협찬/광고를 제안하고 제품의 핵심 메시지가 누락되지 않게 가이드합니다.",
    "tags": [
      "인플루언서",
      "협찬",
      "크리에이터",
      "섭외"
    ],
    "sites": [
      "gmail.com"
    ],
    "status": "실전 검증됨",
    "stop": "섭외 이메일 발송 전",
    "prompt": "타겟 크리에이터 '{{크리에이터 채널명/분야}}'에게 발송할 제품 협찬 및 유료 브랜디드 콘텐츠 제작 제안 메일을 작성해 주세요.\n- 채널의 최근 콘텐츠에 대한 진정성 있는 칭찬과 섭외 사유\n- 협업 제안 형태 (단독 영상, PPL 브랜디드, 숏폼 등) 및 원고료 협의 안내\n- 영상 내 필수 언급 포인트 3가지와 금지 사항 가이드라인 포함",
    "sampleValues": {
      "크리에이터 채널명/분야": "IT 기기 및 생산성 툴 리뷰 전문 테크 유튜버"
    },
    "cliExample": "aside \"테크 유튜버 대상 브랜디드 콘텐츠 협찬 제안 메일 작성\""
  },
  {
    "id": "MKT-13",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "온라인 강의/웨비나 등록 전환율을 높이는 랜딩페이지 카피라이팅",
    "why": "강사 소개, 커리큘럼, 수강 혜택, 한정 인원 마감을 적절히 배치해 등록 버튼 클릭을 유도합니다.",
    "tags": [
      "랜딩페이지",
      "웨비나",
      "전환율최적화",
      "CRO"
    ],
    "sites": [
      "framer.com",
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "랜딩페이지 퍼블리싱 전",
    "prompt": "웨비나 '{{웨비나 주제 및 타겟}}'의 고전환 랜딩페이지 카피를 작성해 주세요.\n1. 히어로 섹션: 강력한 메인 카피 + 서브 카피 + 무료 신청 CTA 버튼\n2. 이런 분께 추천합니다 (대상자 페인포인트 4개)\n3. 90분 세부 커리큘럼 (타임라인별 핵심 습득 지식)\n4. 참가자 전원 특별 무료 증정 혜택 (치트시트/템플릿)\n5. 연사 프로필 및 권위 입증",
    "sampleValues": {
      "웨비나 주제 및 타겟": "스타트업 실무자를 위한 브라우저 AI 자동화 실전 웨비나"
    },
    "cliExample": "aside \"브라우저 AI 웨비나 참가 신청 랜딩페이지 풀 카피라이팅 작성\""
  },
  {
    "id": "MKT-14",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "자주 묻는 질문(FAQ) 및 구매 망설임 반론(Objection) 극복 가이드",
    "why": "자주 묻는 질문 10가지와 구매를 망설이는 이유(가격, 배송, 호환성)에 대한 설득력 있는 답변을 구축합니다.",
    "tags": [
      "FAQ",
      "반론극복",
      "CS",
      "고객응대"
    ],
    "sites": [
      "smartstore.naver.com"
    ],
    "status": "실전 검증됨",
    "stop": "CS 템플릿 저장 전",
    "prompt": "'{{제품 또는 서비스}}'에 대해 고객이 구매 전 가장 망설이는 5대 반론(예: '비싸지 않나요?', '환불이 쉬운가요?', '다른 제품과 무엇이 다른가요?')을 도출하고, 상담원이나 상세페이지 하단에 사용할 논리적이고 친절한 극복 답변을 작성해 주세요.",
    "sampleValues": {
      "제품 또는 서비스": "B2B 팀 협업 메신저 SaaS"
    },
    "cliExample": "aside \"B2B 협업툴 구매 망설임 반론 극복 및 FAQ 5종 작성\""
  },
  {
    "id": "MKT-15",
    "group": "콘텐츠 & 마케팅 그로스",
    "title": "추천인(Referral) 및 바이럴 루프 초대 프로모션 메시지 설계",
    "why": "기존 유저가 친구를 초대했을 때 양쪽 모두 혜택을 받는 추천 프로그램 문구와 보상을 기획합니다.",
    "tags": [
      "추천프로그램",
      "바이럴루프",
      "그로스해킹",
      "친구초대"
    ],
    "sites": [
      "apps.apple.com"
    ],
    "status": "실전 검증됨",
    "stop": "프로모션 배포 전",
    "prompt": "'{{서비스/앱 이름}}'의 친구 초대(Referral Program) 프로모션을 위한 바이럴 메시지 패키지를 작성해 주세요.\n1. 초대자(초대한 사람) 및 피초대자(초대받은 사람)가 받을 매력적인 양방향 보상 설계\n2. 카카오톡 공유하기용 썸네일 타이틀 및 설명 문구\n3. 인앱(In-app) 팝업 배너 카피 (헤드라인 + 버튼)\n4. 친구 초대 링크가 포함된 SMS/알림톡 템플릿",
    "sampleValues": {
      "서비스/앱 이름": "AI 프롬프트 라이브러리 Studio"
    },
    "cliExample": "aside \"친구 초대 바이럴 루프 프로모션 카피 및 카카오 공유 문구 작성\""
  },
  {
    "id": "PRD-01",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "1장짜리 프로덕트 요구사항 정의서(PRD) 및 유저 스토리",
    "why": "개발팀과 디자인팀이 즉시 구현에 착수할 수 있도록 문제 정의부터 인수 조건(Acceptance Criteria)까지 정리합니다.",
    "tags": [
      "PRD",
      "기획",
      "유저스토리",
      "애자일"
    ],
    "sites": [
      "notion.so",
      "jira.com"
    ],
    "status": "실전 검증됨",
    "stop": "사내 위키/지라 티켓 자동 등록 직전",
    "prompt": "'{{기능/프로덕트 아이디어}}'에 대한 간결하고 명확한 1-Pager PRD(제품 요구사항 문서)를 작성해주세요.\n\n[문서 구성 요소]\n1. 문제 정의 (Why): 사용자가 겪는 핵심 고통과 이 기능을 개발해야 하는 비즈니스적 이유\n2. 목표 지표 (Success Metrics): 정량적 핵심 결과 지표 2개 (예: 전환율, 체류시간)\n3. 유저 스토리 (User Stories): '사용자로서 [목적]을 달성하기 위해 [기능]을 원한다' 형식 3개\n4. 기능 상세 명세 (Functional Scope): 필수 포함 항목(Must Have)과 제외 항목(Out of Scope)\n5. 인수 조건 (Acceptance Criteria): QA 및 개발 완료 판단을 위한 체크리스트 5개\n6. 엣지 케이스 및 예외 처리 가이드라인",
    "sampleValues": {
      "기능/프로덕트 아이디어": "모바일 앱 내 소셜 로그인 1초 간편 회원가입 및 프로필 자동 완성"
    },
    "cliExample": "aside \"간편 회원가입 기능 1-Pager PRD 및 유저스토리 작성\""
  },
  {
    "id": "PRD-02",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "애자일 2주 스프린트 백로그 분할 및 지라(Jira) 티켓 일괄 작성",
    "why": "에픽(Epic) 수준의 큰 기능을 2주 스프린트에 맞는 여러 개의 독립적인 유저 스토리와 태스크로 분할합니다.",
    "tags": [
      "Jira",
      "스프린트",
      "애자일",
      "백로그"
    ],
    "sites": [
      "jira.com"
    ],
    "status": "실전 검증됨",
    "stop": "Jira 티켓 생성 전",
    "prompt": "에픽 기능 '{{에픽 기능 내용}}'을 2주 스프린트 동안 완료할 수 있는 세부 지라(Jira) 티켓 4개로 쪼개어 주세요.\n각 티켓별:\n- 티켓 타입: Story / Task / Bug\n- 제목: 간결하고 명확한 작업명\n- 상세 설명: 유저스토리 문장 및 개발 고려사항\n- 인수 조건(Acceptance Criteria) 체크리스트 3개\n- 스토리 포인트(Story Point) 추천 (1, 2, 3, 5, 8 중)",
    "sampleValues": {
      "에픽 기능 내용": "장바구니 화면 내 쿠폰/포인트 복합 적용 및 실시간 할인금액 계산 엔진"
    },
    "cliExample": "aside \"장바구니 쿠폰 적용 에픽 기능을 지라 스프린트 티켓 4개로 분할\""
  },
  {
    "id": "PRD-03",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "데이터 분석 대시보드 KPI 지표 정의서 및 시각화 와이어프레임",
    "why": "비즈니스 의사결정에 꼭 필요한 핵심 지표의 산출 공식, 주기, 차트 형태를 1페이지로 정의합니다.",
    "tags": [
      "KPI",
      "대시보드",
      "데이터분석",
      "기획"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "대시보드 구현 착수 전",
    "prompt": "'{{서비스/도메인}}'의 성과를 한눈에 모니터링할 경영진/실무자용 대시보드 지표 정의서를 작성해 주세요.\n1. 북극성 지표(North Star Metric) 1개 및 정의\n2. 보조 인풋 지표 4개(지표명, 산출 수식, 측정 주기, 목표치)\n3. 대시보드 화면 영역별 추천 차트 유형(시계열 라인, 파이, 막대, 게이지 등)과 배치 구성안",
    "sampleValues": {
      "서비스/도메인": "구독형 B2B CRM SaaS"
    },
    "cliExample": "aside \"B2B SaaS 성과 모니터링 대시보드 핵심 KPI 지표 정의서 작성\""
  },
  {
    "id": "PRD-04",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "신규 기능 런칭 전 프리모템(Pre-Mortem) 실패 리스크 진단",
    "why": "출시 6개월 후 서비스가 실패했다고 가정하고, 발생 가능한 모든 원인을 선제적으로 식별하여 대비책을 세웁니다.",
    "tags": [
      "프리모템",
      "리스크관리",
      "전략",
      "사전진단"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "리스크 리뷰 회의 전",
    "prompt": "'{{런칭 예정인 신규 서비스/기능}}'이 출시 후 처참하게 실패했다고 가정하는 프리모템(Pre-Mortem) 분석을 수행해 주세요.\n1. 실패 원인 5가지(제품 결함, 마케팅 실패, 사용자 이탈, 법적/보안 이슈, 운영 리소스 부족)\n2. 각 원인별 치명도(High/Med/Low)와 발생 가능성\n3. 출시 전에 반드시 취해야 할 사전 예방책(Preventive Action) 3가지",
    "sampleValues": {
      "런칭 예정인 신규 서비스/기능": "유저 간 중고 명품 직거래 에스크로 안전결제 시스템"
    },
    "cliExample": "aside \"중고 명품 에스크로 결제 시스템 런칭 전 프리모템 리스크 분석\""
  },
  {
    "id": "PRD-05",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "고객 여정 지도(Customer Journey Map) 5단계 설계",
    "why": "인지-탐색-구매-온보딩-유지 단계별 고객의 행동, 생각, 감정 곡선과 페인포인트를 시각화합니다.",
    "tags": [
      "고객여정지도",
      "CJM",
      "UX",
      "사용자경험"
    ],
    "sites": [
      "figma.com",
      "miro.com"
    ],
    "status": "실전 검증됨",
    "stop": "기획안 확정 전",
    "prompt": "'{{타겟 사용자 페르소나}}'가 '{{우리 제품/서비스}}'를 이용하는 전 과정에 대한 고객 여정 지도(CJM)를 표로 작성해 주세요.\n단계: [1. 인지 및 유입 -> 2. 탐색 및 회원가입 -> 3. 첫 구매/사용 -> 4. 온보딩 -> 5. 재방문 및 추천]\n각 단계별 항목:\n- 사용자 목표 및 주요 행동\n- 접점(Touchpoint 채널)\n- 겪는 주요 고통(Pain Points)\n- 우리 팀의 개선 기회(Opportunities)",
    "sampleValues": {
      "타겟 사용자 페르소나": "초보 1인 쇼핑몰 창업자",
      "우리 제품/서비스": "원클릭 AI 상품 사진 배경 제거 및 누끼 스튜디오"
    },
    "cliExample": "aside \"1인 창업자 대상 AI 이미지 툴 고객여정지도(CJM) 5단계 설계\""
  },
  {
    "id": "PRD-06",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "신규 프로젝트 개발/디자인 공수(M/M) 견적서 및 예산 산출표",
    "why": "기능별 프론트엔드/백엔드/디자인 작업 공수를 Man-Month(M/M)와 인건비 단가로 산출합니다.",
    "tags": [
      "견적서",
      "공수산정",
      "예산",
      "프로젝트관리"
    ],
    "sites": [
      "docs.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "견적서 발송 전",
    "prompt": "프로젝트 '{{프로젝트 명 및 개요}}'의 개발/디자인 공수 산정표를 작성해 주세요.\n- 화면 및 기능 단위 5개 분할\n- 직군별(기획, UI/UX 디자인, 프론트엔드, 백엔드, QA) 투입 공수(M/D 또는 M/M) 표기\n- 서버 인프라 및 서드파티 API 비용 추정치 포함\n- 총 예상 개발 일정(개월 수) 및 마일스톤 제시",
    "sampleValues": {
      "프로젝트 명 및 개요": "사내 임직원 근태 관리 및 연차 승인 모바일 웹앱 구축"
    },
    "cliExample": "aside \"사내 근태관리 웹앱 구축 기능별 M/M 공수 및 예산 산정표 작성\""
  },
  {
    "id": "PRD-07",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "고객 인터뷰(User Interview) 질문지 및 The Mom Test 검증 스크립트",
    "why": "유도신문이나 허황된 칭찬을 피하고 사용자의 '과거 실제 행동'과 지불 의사를 검증하는 질문지를 짭니다.",
    "tags": [
      "고객인터뷰",
      "TheMomTest",
      "사용자리서치",
      "JTBD"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "인터뷰 진행 전",
    "prompt": "'{{검증하고자 하는 비즈니스 가설}}'을 검증하기 위한 30분 심층 고객 인터뷰 질문지를 작성해 주세요.\n- 절대 미래의 상상('이 기능이 나오면 쓰실 건가요?')을 묻지 말고 과거의 실제 경험을 묻는 질문으로 구성\n1. 도입 아이스브레이킹 질문 2개\n2. 현재 이 문제를 어떻게 해결하고 있는지(기존 대안) 탐색 질문 3개\n3. 최근 이 문제로 돈이나 시간을 얼마나 낭비했는지 수치 확인 질문 2개\n4. 인터뷰어가 유의해야 할 편향(Bias) 방지 팁",
    "sampleValues": {
      "검증하고자 하는 비즈니스 가설": "직장인들이 매일 반복되는 엑셀 복사/붙여넣기 업무에 월 2만원 이상 지불할 의사가 있다"
    },
    "cliExample": "aside \"고객 인터뷰 Mom Test 원칙 기반 실전 질문지 및 가설 검증안 작성\""
  },
  {
    "id": "PRD-08",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "UI/UX 사용성 테스트(Usability Test) 시나리오 및 태스크 성공 평가표",
    "why": "피험자에게 주어질 3가지 핵심 과업과 성공/실패 판정 기준, 관찰 포인트 체크리스트를 설계합니다.",
    "tags": [
      "사용성테스트",
      "UT",
      "UX리서치",
      "Figma"
    ],
    "sites": [
      "figma.com",
      "maze.co"
    ],
    "status": "실전 검증됨",
    "stop": "테스트 세션 시작 전",
    "prompt": "프로토타입 화면 '{{테스트 대상 서비스 및 기능}}'에 대한 비대면/대면 사용성 테스트(UT) 가이드를 작성해 주세요.\n1. 피험자에게 부여할 현실적인 미션 시나리오 3개\n2. 과업 완료 판단 기준 (Task Success Criteria)\n3. 사용자가 머뭇거리거나 헤매는 지점을 기록할 관찰자 체크리스트\n4. 과업 완료 후 던질 단일 사용성 평가 질문(SUS 지표 등)",
    "sampleValues": {
      "테스트 대상 서비스 및 기능": "모바일 간편 송금 및 다건 이체 플로우"
    },
    "cliExample": "aside \"간편 송금 모바일 앱 사용성 테스트(UT) 시나리오 및 평가표 작성\""
  },
  {
    "id": "PRD-09",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "A/B 테스트 가설 수립 및 최소 표본 크기(Sample Size) 설계안",
    "why": "실험할 UI 요소의 가설(H1/H0), 성공 지표(Primary Metric), 통계적 유의수준(p-value)을 명시합니다.",
    "tags": [
      "AB테스트",
      "가설검증",
      "그로스",
      "전환율"
    ],
    "sites": [
      "optimizely.com"
    ],
    "status": "실전 검증됨",
    "stop": "실험 배포 전",
    "prompt": "개선하고자 하는 화면 '{{개선 대상 화면 및 문제점}}'에 대한 A/B 테스트 기획안을 수립해 주세요.\n- 가설 공식: '[변경사항]을 적용하면 [타겟 지표]가 [예상 증가율] 상승할 것이다. 왜냐하면 [원인] 때문이다.'\n- A안(대조군) vs B안(실험군) 디자인/카피 변경점\n- 1차 목표 지표 및 가드레일 지표(악영향 모니터링)\n- 유의수준 95%, 검정력 80% 기준 필요한 최소 방문자 수 및 권장 실험 기간",
    "sampleValues": {
      "개선 대상 화면 및 문제점": "회원가입 완료 페이지에서 유료 플랜 체험 신청 전환율이 3%로 저조한 문제"
    },
    "cliExample": "aside \"가입 완료 페이지 유료 전환율 개선 A/B 테스트 실험 기획안 작성\""
  },
  {
    "id": "PRD-10",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "기능 우선순위 선정 매트릭스 (RICE 스코어링 프레임워크)",
    "why": "도달 범위(Reach), 영향도(Impact), 신뢰도(Confidence), 공수(Effort)를 계산해 개발 우선순위를 결정합니다.",
    "tags": [
      "RICE",
      "우선순위",
      "백로그관리",
      "로드맵"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "스프린트 플래닝 전",
    "prompt": "다음 5가지 후보 기능 '{{후보 기능 목록}}'에 대해 RICE 프레임워크를 적용하여 우선순위 점수를 산출해 주세요.\n- Reach (영향받는 분기별 유저 수)\n- Impact (사용자 만족도 및 전환 기여도: 0.5~3)\n- Confidence (추정의 신뢰도: 50%~100%)\n- Effort (투입될 엔지니어링 Person-Month)\n공식 (R * I * C) / E = Score 에 따른 순위표를 제시하고 상위 2개 기능을 먼저 개발해야 하는 이유를 요약해 주세요.",
    "sampleValues": {
      "후보 기능 목록": "다크모드 지원, 엑셀 대용량 다운로드, 소셜 간편로그인, 인앱 알림센터, 다국어 번역"
    },
    "cliExample": "aside \"신규 후보 기능 5종 RICE 스코어링 및 개발 우선순위 매트릭스\""
  },
  {
    "id": "PRD-11",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "사용자 페르소나(User Persona) 및 JTBD(Jobs-to-be-Done) 프로필",
    "why": "실제 인터뷰 데이터를 바탕으로 대표 사용자의 인구통계, 핵심 목표, 좌절 요소를 구체화합니다.",
    "tags": [
      "페르소나",
      "JTBD",
      "타겟고객",
      "UX디자인"
    ],
    "sites": [
      "figma.com"
    ],
    "status": "실전 검증됨",
    "stop": "기획 브리프 작성 시",
    "prompt": "'{{서비스/제품 분야}}'를 사용할 핵심 타겟 사용자 페르소나 2인을 작성해 주세요.\n각 페르소나별:\n- 가상 이름, 나이, 직업, 라이프스타일 한 줄 설명\n- Core Job-to-be-Done: '나는 [상황]일 때, [행동]을 하여 [결과]를 얻고 싶다'\n- 현재 겪고 있는 가장 큰 좌절과 불만(Pains)\n- 우리 제품을 통해 얻고자 하는 궁극적인 이득(Gains)\n- 제품 채택을 가로막는 습관/불안 요소",
    "sampleValues": {
      "서비스/제품 분야": "초기 스타트업을 위한 노코드 자동 세무/회계 관리 툴"
    },
    "cliExample": "aside \"스타트업 노코드 세무 툴 핵심 사용자 페르소나 2인 프로필 작성\""
  },
  {
    "id": "PRD-12",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "기능 상세 화면 설계서 와이어프레임 및 정책(Policy) 정의서",
    "why": "화면 내 컴포넌트별 텍스트 글자 수 제한, 비활성화 조건, 에러 토스트 발생 규칙을 정리합니다.",
    "tags": [
      "화면설계서",
      "와이어프레임",
      "정책서",
      "기능명세"
    ],
    "sites": [
      "figma.com"
    ],
    "status": "실전 검증됨",
    "stop": "디자인 착수 전",
    "prompt": "'{{기획할 화면(예: 프로필 수정 화면)}}'에 들어갈 상세 UI 컴포넌트 레이아웃과 동작 정책(Policy)을 작성해 주세요.\n1. 화면 와이어프레임 텍스트 구조도 (상단 헤더 -> 본문 입력 필드 -> 하단 버튼)\n2. 각 입력 필드별 유효성 검사 규칙 (정규식, 최소/최대 글자 수)\n3. 버튼 활성화/비활성화 트리거 조건\n4. 네트워크 실패 또는 서버 에러 시 사용자에게 노출할 알림/토스트 메시지 문구",
    "sampleValues": {
      "기획할 화면(예: 프로필 수정 화면)": "신용카드 간편 결제수단 등록 및 인증 화면"
    },
    "cliExample": "aside \"카드 결제수단 등록 화면 상세 와이어프레임 및 정책 정의서 작성\""
  },
  {
    "id": "PRD-13",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "경쟁 프로덕트 기능 갭(Feature Gap) 분석 및 차별화 기회 매트릭스",
    "why": "경쟁 앱과 우리 앱의 기능 제공 여부를 O/X/△ 표로 비교하고 블루오션 포인트를 식별합니다.",
    "tags": [
      "기능비교",
      "경쟁사분석",
      "차별화",
      "프로덕트전략"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "기획 전략 수립 전",
    "prompt": "우리 제품과 주요 경쟁사 2곳 '{{경쟁사 A, B}}'의 기능 스펙을 비교 분석해 주세요.\n- 10개 핵심 기능 단위 대조표 (기능명 / 우리 제품 / 경쟁사 A / 경쟁사 B / 비교 평가)\n- 경쟁사가 모두 놓치고 있는 공통 결함(Feature Gap)\n- 우리 제품이 '승부수'로 띄울 수 있는 킬러 기능 제안",
    "sampleValues": {
      "경쟁사 A, B": "경쟁사 A: 슬랙(Slack), 경쟁사 B: 잔디(Jandi)"
    },
    "cliExample": "aside \"사내 메신저 경쟁사 기능 갭(Feature Gap) 비교 매트릭스 작성\""
  },
  {
    "id": "PRD-14",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "사용자 온보딩 튜토리얼 3단계 툴팁 및 코치마크 카피라이팅",
    "why": "앱 최초 실행 시 사용자가 이탈하지 않고 핵심 기능 1개를 직접 조작해보게 유도하는 인터랙션을 설계합니다.",
    "tags": [
      "온보딩",
      "코치마크",
      "툴팁",
      "UX카피"
    ],
    "sites": [
      "figma.com"
    ],
    "status": "실전 검증됨",
    "stop": "디자인/개발 전달 전",
    "prompt": "신규 유저가 '{{앱/서비스 명}}'에 처음 로그인했을 때 뜨는 3단계 코치마크(툴팁 가이드)를 기획해 주세요.\n- Step 1: 첫 프로젝트/작업 공간 생성 유도 툴팁 (헤드라인 + 버튼)\n- Step 2: 핵심 마법 기능(핵심 액션) 버튼 위치 하이라이트 안내\n- Step 3: 완성된 결과물 확인 및 다음 단계 CTA\n- '건너뛰기(Skip)' 버튼 배치 및 사용자가 피로감을 느끼지 않는 간결한 톤앤매너",
    "sampleValues": {
      "앱/서비스 명": "Aside AI 프롬프트 스튜디오"
    },
    "cliExample": "aside \"Aside 프롬프트 스튜디오 첫 사용자용 3단계 코치마크 툴팁 기획\""
  },
  {
    "id": "PRD-15",
    "group": "프로덕트 기획 & UX 리서치",
    "title": "프로덕트 릴리즈 노트(Release Notes) 및 패치 변경사항 공지문",
    "why": "전문적인 개발 용어를 일반 사용자가 이해하기 쉬운 혜택 중심의 언어로 변환하여 공지합니다.",
    "tags": [
      "릴리즈노트",
      "업데이트공지",
      "패치노트",
      "프로덕트운영"
    ],
    "sites": [
      "notion.so",
      "github.com"
    ],
    "status": "실전 검증됨",
    "stop": "공식 배포 공지 전",
    "prompt": "이번 버전 업데이트 내용 '{{이번 배포 변경사항 목록}}'을 바탕으로 대고객용 릴리즈 노트를 작성해 주세요.\n- 버전 번호 및 릴리즈 일자\n- 한눈에 보는 핵심 개선점 1줄 요약\n- [새로운 기능] [개선된 점] [해결된 버그] 3개 섹션 분할\n- 사용자의 감사를 유도하고 피드백 링크를 남기는 친절한 마무리 인사말",
    "sampleValues": {
      "이번 배포 변경사항 목록": "1. 100개 이상의 신규 프롬프트 추가, 2. 다크/라이트 테마 전환 속도 개선, 3. 모달 창 변수 입력 시 실시간 프리뷰 렌더링 버그 수정"
    },
    "cliExample": "aside \"Aside Studio v2.0 정식 업데이트 대고객 릴리즈 노트 작성\""
  },
  {
    "id": "BIZ-01",
    "group": "경영, 전략 & 비즈니스",
    "title": "경영진 및 C-Level 의사결정 보고용 1-Pager 기안서",
    "why": "긴 보고서를 읽을 시간 없는 임원진을 위해 두괄식 결론과 ROI, 리스크 대책을 한 장으로 압축합니다.",
    "tags": [
      "보고서",
      "경영진보고",
      "기안서",
      "비즈니스"
    ],
    "sites": [
      "docs.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "문서 작성 후 공유 또는 결재 상신 직전",
    "prompt": "'{{추진 사업/안건 내용}}'에 대하여 경영진 의사결정(C-Level 보고)을 위한 1페이지 브리프(One-Pager)를 작성해주세요.\n\n[작성 원칙: 두괄식, 정량적 수치 중심]\n1. 추진 목적 및 배경 (왜 지금 해야 하는가? 2줄 이내)\n2. 핵심 제안 사항 (Proposal summary)\n3. 예상 기대 효과 (ROI, 비용 절감률 또는 신규 매출 기여 추정치)\n4. 소요 예산 및 일정 (M/M 공수, 마일스톤)\n5. 예상 리스크 및 대응 방안 (Plan B)\n6. 요청 결정 사항 (승인 필요 사항 요약)",
    "sampleValues": {
      "추진 사업/안건 내용": "고객 상담 센터 내 AI 기반 초동 응대 챗봇 도입을 통한 야간 응답률 개선 건"
    },
    "cliExample": "aside \"AI 챗봇 도입 건 경영진 보고용 1-Pager 기안서 작성\""
  },
  {
    "id": "BIZ-02",
    "group": "경영, 전략 & 비즈니스",
    "title": "표준 프리랜서/외주 용역 계약서 및 비밀유지(NDA) 핵심 조항",
    "why": "용역 대금 지급 시기, 지식재산권 귀속, 분쟁 시 관할 법원 등 필수 권리 조항을 빠짐없이 챙깁니다.",
    "tags": [
      "계약서",
      "프리랜서",
      "용역계약",
      "법률"
    ],
    "sites": [
      "gov.kr"
    ],
    "status": "실전 검증됨",
    "stop": "계약서 서명 전",
    "prompt": "발주사(갑)와 프리랜서(을) 간의 '{{용역 업무 내용}}'에 관한 표준 프리랜서 용역계약서 초안을 작성해 주세요.\n- 계약 기간, 용역 대금(계약금/잔금 분할 지급), 납품 검수 기간\n- 산출물의 저작재산권 전면 귀속 조항\n- 업무 중 취득한 정보에 대한 비밀유지(NDA) 의무\n- 계약 해지 사유 및 손해배상 한도 조항 포함",
    "sampleValues": {
      "용역 업무 내용": "신규 모바일 앱 UI/UX 디자인 및 피그마 디자인 시스템 구축"
    },
    "cliExample": "aside \"UI/UX 디자인 용역 표준 프리랜서 계약서 및 NDA 조항 작성\""
  },
  {
    "id": "BIZ-03",
    "group": "경영, 전략 & 비즈니스",
    "title": "개인사업자/법인 부가세 및 종합소득세 필요경비 인정 체크리스트",
    "why": "국세청 세무조사나 신고 시 부인당하지 않도록 적격증빙(세금계산서, 신용카드, 현금영수증) 구비 요건을 점검합니다.",
    "tags": [
      "세무",
      "부가세",
      "종소세",
      "경비처리"
    ],
    "sites": [
      "hometax.go.kr"
    ],
    "status": "실전 검증됨",
    "stop": "세무 신고 제출 전",
    "prompt": "'{{사업 업종/형태}}'에서 발생하는 다음 지출 내역 '{{지출 항목들}}'에 대해 부가가치세 매입세액 공제 가능 여부와 종합소득세 필요경비 인정 기준을 표로 정리해 주세요.\n- 필요 적격증빙 서류(세금계산서, 사업자카드 영수증 등)\n- 세법상 불인정/주의해야 할 엣지 케이스(예: 업무용 승용차, 접대비, 가사 관련 비용)\n- 홈택스 등록 시 주의사항",
    "sampleValues": {
      "사업 업종/형태": "1인 IT 소프트웨어 개발 및 컨설팅 개인사업자",
      "지출 항목들": "맥북 구매, 클라우드 서버비, 업무 미팅 식대, 공유오피스 임차료, 서적 구매"
    },
    "cliExample": "aside \"1인 IT 개발자 주요 지출 항목 부가세 매입세액공제 및 경비 인정표\""
  },
  {
    "id": "BIZ-04",
    "group": "경영, 전략 & 비즈니스",
    "title": "웹서비스 이용약관(Terms of Service) 표준 약관 생성",
    "why": "전자상거래법 및 약관규제법에 맞춰 서비스 이용 규칙, 계정 정지 사유, 면책 조항을 규정합니다.",
    "tags": [
      "이용약관",
      "약관",
      "법률",
      "서비스운영"
    ],
    "sites": [
      "ftc.go.kr"
    ],
    "status": "실전 검증됨",
    "stop": "웹사이트 공개 게시 전",
    "prompt": "'{{서비스 이름 및 유형}}'을 위한 표준 온라인 서비스 이용약관을 작성해 주세요.\n1. 목적 및 용어 정의\n2. 회원가입 및 계정 관리(만 14세 미만 가입 제한 등)\n3. 유료 서비스 결제, 청약철회 및 환불 규정\n4. 이용자의 금지 행위 및 서비스 이용 제한 조치\n5. 회사의 면책 조항(천재지변, 서버 점검, 제3자 서비스 장애 등)\n6. 준거법 및 관할 법원",
    "sampleValues": {
      "서비스 이름 및 유형": "Aside Studio (AI 프롬프트 관리 및 브라우저 생산성 웹 서비스)"
    },
    "cliExample": "aside \"Aside Studio 웹 서비스 표준 이용약관 초안 작성\""
  },
  {
    "id": "BIZ-05",
    "group": "경영, 전략 & 비즈니스",
    "title": "개인정보 처리방침(Privacy Policy) 필수 고지문 작성",
    "why": "개인정보보호법에 의거하여 수집 항목, 보유 기간, 제3자 제공, 파기 절차를 명시합니다.",
    "tags": [
      "개인정보",
      "보호법",
      "컴플라이언스",
      "약관"
    ],
    "sites": [
      "privacy.go.kr"
    ],
    "status": "실전 검증됨",
    "stop": "웹사이트 공개 게시 전",
    "prompt": "서비스 '{{서비스 명}}'의 개인정보보호법 준수를 위한 개인정보 처리방침을 작성해 주세요.\n- 수집하는 개인정보 항목: {{수집 항목(예: 이메일, 이름, 접속로그)}}\n- 수집 및 이용 목적: {{이용 목적}}\n- 개인정보의 보유 및 이용 기간(회원 탈퇴 시 즉시 파기 또는 법령 기준)\n- 개인정보 파기 절차 및 방법\n- 이용자의 권리 및 행사 방법\n- 개인정보 보호책임자 안내 양식",
    "sampleValues": {
      "서비스 명": "프롬프트 허브",
      "수집 항목(예: 이메일, 이름, 접속로그)": "구글/카카오 로그인 계정 이메일, 닉네임, 서비스 이용 기록",
      "이용 목적": "회원 식별, 프롬프트 동기화 및 고객 문의 응대"
    },
    "cliExample": "aside \"웹 서비스 개인정보 처리방침 필수 항목 표준 고지문 작성\""
  },
  {
    "id": "BIZ-06",
    "group": "경영, 전략 & 비즈니스",
    "title": "정부 창업지원사업 사업계획서 표준 4단 구성 (PSST 프레임워크)",
    "why": "문제인식-실현가능성-성장전략-팀구성 양식에 맞춘 논리 정연한 합격형 사업계획서를 작성합니다.",
    "tags": [
      "사업계획서",
      "PSST",
      "예창패",
      "초창패"
    ],
    "sites": [
      "k-startup.go.kr"
    ],
    "status": "실전 검증됨",
    "stop": "사업계획서 제출 전",
    "prompt": "아이템 '{{창업 아이템 명 및 개요}}'에 대해 정부 창업지원사업 표준 사업계획서(PSST 프레임워크) 초안을 작성해 주세요.\n1. Problem(문제인식): 고객이 겪는 뼈아픈 고통과 시장의 미충족 수요(수치 근거 제시)\n2. Solution(실현가능성): 제안하는 혁신적 해결책 및 기존 대안 대비 경쟁우위\n3. Scale-up(성장전략): 타겟 시장 규모(TAM-SAM-SOM), 비즈니스 모델, 마케팅 계획\n4. Team(팀 구성): 대표자 및 팀원의 핵심 역량과 부족 역량 보완 계획",
    "sampleValues": {
      "창업 아이템 명 및 개요": "소상공인을 위한 로컬 AI 자동 매크로 홍보 및 리뷰 관리 솔루션"
    },
    "cliExample": "aside \"소상공인용 AI 리뷰관리 솔루션 PSST 사업계획서 초안 작성\""
  },
  {
    "id": "BIZ-07",
    "group": "경영, 전략 & 비즈니스",
    "title": "스타트업 비즈니스 모델 캔버스(BMC) 9개 핵심 블록 설계",
    "why": "가치제안, 고객세그먼트, 채널, 수익원, 핵심활동 등 사업의 전 구조를 1장에 매핑합니다.",
    "tags": [
      "BMC",
      "비즈니스모델",
      "사업기획",
      "스타트업"
    ],
    "sites": [
      "strategyzer.com"
    ],
    "status": "실전 검증됨",
    "stop": "사업 모델 확정 시",
    "prompt": "비즈니스 아이디어 '{{사업 아이디어}}'에 대해 알렉산더 오스터왈더의 9-Block 비즈니스 모델 캔버스를 작성해 주세요.\n1. 고객 세그먼트 (Customer Segments)\n2. 가치 제안 (Value Propositions)\n3. 유통 채널 (Channels)\n4. 고객 관계 (Customer Relationships)\n5. 수익원 (Revenue Streams)\n6. 핵심 자원 (Key Resources)\n7. 핵심 활동 (Key Activities)\n8. 핵심 파트너십 (Key Partnerships)\n9. 비용 구조 (Cost Structure)",
    "sampleValues": {
      "사업 아이디어": "개인 맞춤형 식단 및 당뇨 관리 AI 코칭 구독 서비스"
    },
    "cliExample": "aside \"당뇨 관리 AI 코칭 서비스 비즈니스 모델 캔버스(BMC) 9개 블록 작성\""
  },
  {
    "id": "BIZ-08",
    "group": "경영, 전략 & 비즈니스",
    "title": "SWOT 분석 및 크로스(SO, ST, WO, WT) 실행 전략 도출",
    "why": "강점/약점/기회/위협을 매트릭스로 대조하여 실질적으로 취해야 할 행동 전략을 세웁니다.",
    "tags": [
      "SWOT",
      "전략기획",
      "경영전략",
      "경쟁우위"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "전략 기획 회의 전",
    "prompt": "'{{기업 또는 신규 프로덕트}}'의 내외부 환경에 대한 SWOT 분석과 크로스 실행 전략을 도출해 주세요.\n- 내부 환경: 강점(Strengths) 3개, 약점(Weaknesses) 3개\n- 외부 환경: 기회(Opportunities) 3개, 위협(Threats) 3개\n[교차 실행 전략]\n1. SO 전략 (강점으로 기회 선점)\n2. ST 전략 (강점으로 위협 극복)\n3. WO 전략 (약점 보완하여 기회 포착)\n4. WT 전략 (약점 최소화 및 위협 회피)",
    "sampleValues": {
      "기업 또는 신규 프로덕트": "국내 중소 교육기관 대상 AI 자동 문제 생성 솔루션"
    },
    "cliExample": "aside \"AI 교육 솔루션 SWOT 분석 및 4대 크로스 실행 전략 도출\""
  },
  {
    "id": "BIZ-09",
    "group": "경영, 전략 & 비즈니스",
    "title": "서비스 장애/배송 지연에 따른 정중한 공식 사과문 및 보상 안내문",
    "why": "고객 불만 발생 시 감정을 누그러뜨리고 신뢰를 회복하는 투명한 사실 인정과 보상책을 작성합니다.",
    "tags": [
      "사과문",
      "클레임",
      "고객대응",
      "CS"
    ],
    "sites": [
      "gmail.com"
    ],
    "status": "실전 검증됨",
    "stop": "고객 발송 전",
    "prompt": "'{{장애/문제 상황}}'으로 피해를 입은 고객들에게 발송할 정중하고 진정성 있는 공식 사과문 초안을 작성해 주세요.\n[필수 구성]\n1. 명확하고 변명 없는 사과 및 사실 인정\n2. 사고 발생 원인과 현재 조치 상황에 대한 투명한 설명\n3. 재발 방지를 위한 구체적인 시스템/프로세스 개선 약속\n4. 피해 고객에 대한 보상 방안(쿠폰, 이용권 연장, 환불 등) 안내\n5. 추가 문의 접수 채널 안내",
    "sampleValues": {
      "장애/문제 상황": "클라우드 DB 일시 점검 지연으로 인한 3시간 서비스 접속 불가 및 데이터 동기화 지연"
    },
    "cliExample": "aside \"서비스 3시간 접속 장애 관련 고객 공식 사과문 및 보상 안내 작성\""
  },
  {
    "id": "BIZ-10",
    "group": "경영, 전략 & 비즈니스",
    "title": "분기별 전사/팀 OKR(Objectives and Key Results) 수립 가이드",
    "why": "도전적인 정성적 목표(Objective)와 수치로 측정 가능한 핵심 결과(Key Results) 3개를 설계합니다.",
    "tags": [
      "OKR",
      "목표관리",
      "성과관리",
      "인사조직"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "분기 킥오프 회의 전",
    "prompt": "'{{부서 또는 팀명}}'의 이번 분기 OKR 목표를 작성해 주세요.\n- 조직의 핵심 도전 과제: {{이번 분기 집중할 비즈니스 방향}}\n1. 가슴 뛰고 도전적인 질적 목표 (Objective) 1개\n2. 이를 달성했는지 객관적으로 증명하는 정량적 핵심 결과 (Key Results) 3개\n  - KR 1 (성장/확장 지표)\n  - KR 2 (품질/안정성 지표)\n  - KR 3 (효율/수익성 지표)\n3. 각 KR별 주간 체크인 방법",
    "sampleValues": {
      "부서 또는 팀명": "그로스 마케팅팀",
      "이번 분기 집중할 비즈니스 방향": "유료 구독 전환율 2배 개선 및 고객 획득 비용(CAC) 30% 감축"
    },
    "cliExample": "aside \"그로스 마케팅팀 분기 OKR 수립 및 3대 핵심 결과(KR) 정의\""
  },
  {
    "id": "BIZ-11",
    "group": "경영, 전략 & 비즈니스",
    "title": "스타트업 IR 피치덱(Pitch Deck) 10슬라이드 스토리라인 기획",
    "why": "VC 투자자를 설득하기 위해 문제-해결책-시장-트랙션-팀-재무계획의 황금 흐름을 만듭니다.",
    "tags": [
      "피치덱",
      "IR투자",
      "스타트업",
      "투자유치"
    ],
    "sites": [
      "docs.google.com/presentation"
    ],
    "status": "실전 검증됨",
    "stop": "슬라이드 디자인 착수 전",
    "prompt": "투자 유치를 준비하는 스타트업 '{{기업명 및 주요 사업}}'의 10장짜리 IR 피치덱 개요를 작성해 주세요.\nSlide 1: 타이틀 및 한 줄 엘리베이터 피치\nSlide 2: 문제 정의 (시장 내 심각한 고통)\nSlide 3: 솔루션 (우리 제품의 핵심 비밀)\nSlide 4: 제품 데모 및 특장점\nSlide 5: 시장 규모 (TAM-SAM-SOM)\nSlide 6: 비즈니스 모델 및 유닛 이코노믹스\nSlide 7: 트랙션 (현재까지의 성과 지표)\nSlide 8: 경쟁사 비교 우위 매트릭스\nSlide 9: 팀 역량 소개\nSlide 10: 투자 요청 금액 및 사용 계획 (Roadmap)",
    "sampleValues": {
      "기업명 및 주요 사업": "에이전트웍스 (AI 기반 웹 업무 자동화 RPA 솔루션)"
    },
    "cliExample": "aside \"AI 스타트업 10슬라이드 IR 피치덱 스토리라인 구성\""
  },
  {
    "id": "BIZ-12",
    "group": "경영, 전략 & 비즈니스",
    "title": "외부 용역/협력사 과업지시서(SOW) 및 검수 기준 정의서",
    "why": "외주 개발이나 디자인 용역 계약 시 분쟁을 예방하기 위해 과업 범위, 검수 기준, 납품 산출물을 구체화합니다.",
    "tags": [
      "과업지시서",
      "SOW",
      "외주계약",
      "용역"
    ],
    "sites": [
      "docs.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "계약서 날인 직전",
    "prompt": "'{{외주 용역 프로젝트 명}}'에 대한 표준 과업지시서(Statement of Work)를 작성해 주세요.\n1. 과업 목적 및 계약 기간\n2. 세부 과업 범위(Scope of Work) 및 제외 사항(Out of Scope)\n3. 단계별 필수 납품 산출물 목록\n4. 검수 절차 및 하자 보수 기준(무상 하자보수 기간 명시)\n5. 지체상금 및 저작권 귀속 조항 가이드",
    "sampleValues": {
      "외주 용역 프로젝트 명": "반응형 기업 공식 웹사이트 리뉴얼 및 CMS 구축"
    },
    "cliExample": "aside \"기업 웹사이트 리뉴얼 외주 용역 과업지시서(SOW) 표준안 작성\""
  },
  {
    "id": "BIZ-13",
    "group": "경영, 전략 & 비즈니스",
    "title": "사내 임직원 경비 지출 및 영수증 증빙 처리 관리 규정",
    "why": "임직원들이 출장비, 식대, 도서구입비 등 경비 청구 시 증빙 누락으로 반려되지 않도록 기준을 제시합니다.",
    "tags": [
      "경비규정",
      "사내규정",
      "회계",
      "인사총무"
    ],
    "sites": [
      "notion.so"
    ],
    "status": "실전 검증됨",
    "stop": "사내 공지 등록 전",
    "prompt": "'{{회사 규모 및 업종}}'을 위한 사내 경비 지출 및 영수증 증빙 처리 사내 규정 가이드라인을 작성해 주세요.\n1. 경비 지출 기본 원칙(법인카드 사용 의무 등)\n2. 항목별 한도 및 기준 (야근 식대, 시내/시외 출장비, 접대비, 도서구입/교육비)\n3. 인정되는 적격 증빙 서류 및 제출 기한\n4. 경비 불인정 및 반려 대상 사례 5개\n5. 지출결의서 작성 방법 안내",
    "sampleValues": {
      "회사 규모 및 업종": "임직원 20명 규모의 IT 스타트업"
    },
    "cliExample": "aside \"20인 IT 스타트업 사내 경비 지출 및 적격증빙 규정 가이드라인 작성\""
  },
  {
    "id": "BIZ-14",
    "group": "경영, 전략 & 비즈니스",
    "title": "사내 업무 자동화(RPA) 도입 타당성 및 ROI 비용 절감 분석",
    "why": "반복 업무에 자동화를 도입했을 때 절감되는 연간 인건비와 솔루션 도입 비용을 대조합니다.",
    "tags": [
      "ROI",
      "업무자동화",
      "비용절감",
      "기안서"
    ],
    "sites": [
      "docs.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "경영진 결재 상신 전",
    "prompt": "현재 수작업으로 진행 중인 '{{수작업 업무 내용}}'을 AI 에이전트로 자동화할 때의 경제성/ROI 보고서를 작성해 주세요.\n- 가정: 주당 투입 시간 {{주당 투입 시간}}시간, 인건비 시급 {{추정 시급}}원\n1. 연간 소요 인건비 및 잠재 휴먼에러 리스크 산출\n2. 자동화 도구 도입 예상 비용 (툴 구독료 및 초기 구축비)\n3. 연간 순 절감액 및 투자 회수 기간(Payback Period)\n4. 결론 및 신속 추진 필요성 3줄 요약",
    "sampleValues": {
      "수작업 업무 내용": "매일 10개 거래처 주문 엑셀 취합 및 ERP 전산 입력",
      "주당 투입 시간": "15",
      "추정 시급": "25,000"
    },
    "cliExample": "aside \"주문 엑셀 ERP 전산 입력 자동화 도입 ROI 분석 보고서 작성\""
  },
  {
    "id": "BIZ-15",
    "group": "경영, 전략 & 비즈니스",
    "title": "주주총회 및 이사회 안건 의결 의사록 표준 서식 작성",
    "why": "상법 규정에 부합하도록 대표이사 선임, 증자, 정관 변경 등의 결의 과정과 출석 주식수를 기록합니다.",
    "tags": [
      "주주총회",
      "이사회",
      "의사록",
      "기업법무"
    ],
    "sites": [
      "gov.kr"
    ],
    "status": "실전 검증됨",
    "stop": "법원 등기 신청 전",
    "prompt": "'{{의결 안건 내용}}'을 처리하기 위한 주식회사 임시 주주총회(또는 이사회) 의사록 초안을 작성해 주세요.\n- 일시 및 장소\n- 총 주주 수, 발행주식 총수, 출석 주주 수 및 의결권 주식 수\n- 의장의 개회 선언 및 안건 상정\n- 결의 내용 및 찬반 표결 결과\n- 의장 및 출석 이사 기명날인 란 포함",
    "sampleValues": {
      "의결 안건 내용": "제1호 의안: 본점 소재지 이전의 건, 제2호 의안: 신규 사내이사 선임의 건"
    },
    "cliExample": "aside \"본점 이전 및 신규 이사 선임 임시 주주총회 의사록 작성\""
  },
  {
    "id": "DAT-01",
    "group": "데이터 분석 & SQL/BI",
    "title": "월별 코호트(Cohort) 리텐션 유지율 분석 SQL 쿼리 작성",
    "why": "첫 구매/가입 월을 기준으로 N개월 후까지 남아 있는 활성 사용자 비율 매트릭스를 추출합니다.",
    "tags": [
      "SQL",
      "코호트",
      "리텐션",
      "BigQuery"
    ],
    "sites": [
      "console.cloud.google.com/bigquery"
    ],
    "status": "실전 검증됨",
    "stop": "쿼리 실행 전",
    "prompt": "'{{데이터베이스(예: BigQuery, PostgreSQL)}}'에서 사용자 첫 가입월 기준 월별 리텐션 코호트 테이블을 생성하는 SQL 쿼리를 작성해 주세요.\n- 테이블 구조: user_id, signup_date, last_active_date\n- 가입월(Cohort Month), 경과월(Month 0, Month 1, Month 2...), 각 월별 잔존 유저 수 및 잔존율(%)을 Pivot 형태로 출력\n- 윈도우 함수(ROW_NUMBER, DATE_DIFF)를 활용한 최적화된 구문 작성",
    "sampleValues": {
      "데이터베이스(예: BigQuery, PostgreSQL)": "Google BigQuery"
    },
    "cliExample": "aside \"BigQuery 사용자 첫 가입월 기준 월간 코호트 리텐션 분석 SQL 작성\""
  },
  {
    "id": "DAT-02",
    "group": "데이터 분석 & SQL/BI",
    "title": "고객 세분화 RFM(Recency, Frequency, Monetary) 분석 및 점수 산출",
    "why": "최근 구매일, 구매 빈도, 총 구매 금액을 1~5점으로 환산해 충성 고객과 이탈 위험 고객을 분류합니다.",
    "tags": [
      "RFM",
      "고객세분화",
      "CRM",
      "SQL"
    ],
    "sites": [
      "postgresql.org"
    ],
    "status": "실전 검증됨",
    "stop": "쿼리 실행 전",
    "prompt": "주문 테이블(orders) 데이터를 기반으로 고객별 RFM 점수를 산출하는 SQL 쿼리를 작성해 주세요.\n- Recency: 최근 구매 경과일수\n- Frequency: 총 주문 횟수\n- Monetary: 누적 실결제 금액\nNTILE(5) 함수를 사용하여 R, F, M 각각을 1~5점 등급으로 나누고, 합산 점수에 따라 [VIP, 충성고객, 이탈우려, 신규유입] 4개 세그먼트로 분류해 주세요.",
    "sampleValues": {},
    "cliExample": "aside \"주문 데이터 기반 고객 RFM 5등급 산출 및 세그먼트 분류 SQL\""
  },
  {
    "id": "DAT-03",
    "group": "데이터 분석 & SQL/BI",
    "title": "이커머스 결제 퍼널(Funnel) 이탈율 및 전환율 단계별 집계",
    "why": "상품조회 -> 장바구니 -> 주문서작성 -> 결제완료 각 단계별 유입 수와 이탈율을 계산합니다.",
    "tags": [
      "퍼널분석",
      "전환율",
      "이탈율",
      "GA4"
    ],
    "sites": [
      "analytics.google.com"
    ],
    "status": "실전 검증됨",
    "stop": "보고서 출력 후",
    "prompt": "로그 테이블 '{{로그 테이블 구조}}'에서 결제 퍼널의 단계별 전환율을 집계하는 SQL 쿼리를 작성해 주세요.\n1단계: 상품 상세 조회(view_item)\n2단계: 장바구니 담기(add_to_cart)\n3단계: 결제 시작(begin_checkout)\n4단계: 결제 완료(purchase)\n각 단계별 총 유저 수, 직전 단계 대비 전환율(%), 첫 단계 대비 최종 전환율(%)을 계산해 주세요.",
    "sampleValues": {
      "로그 테이블 구조": "event_logs (user_id, event_name, event_timestamp)"
    },
    "cliExample": "aside \"이커머스 결제 퍼널 4단계 유저 전환율 및 이탈율 집계 SQL\""
  },
  {
    "id": "DAT-04",
    "group": "데이터 분석 & SQL/BI",
    "title": "고객 생애 가치(LTV) 및 고객 획득 비용(CAC) 회수 기간 추정 모델",
    "why": "평균 주문 단가, 재구매 주기, 마진율을 기반으로 유료 마케팅의 건전성을 수식화합니다.",
    "tags": [
      "LTV",
      "CAC",
      "단위경제학",
      "유닛이코노믹스"
    ],
    "sites": [
      "docs.google.com/spreadsheets"
    ],
    "status": "실전 검증됨",
    "stop": "시트 수식 입력 전",
    "prompt": "'{{비즈니스 형태 및 수치}}'에 대해 고객 생애 가치(LTV)와 CAC 회수 기간(Payback Period)을 계산하는 스프레드시트 수식 모델을 작성해 주세요.\n- 수식 항목: 평균 결제액(AOV), 구매 빈도(Frequency), 고객 수명(Customer Lifespan), 매출 총이익률(Gross Margin %)\n- 마케팅 채널별 CAC 대비 LTV 비율 (LTV/CAC = 3x 이상 여부 판정)\n- 신규 고객 획득 후 CAC를 전액 회수하는 데 걸리는 개월 수 산출",
    "sampleValues": {
      "비즈니스 형태 및 수치": "월 구독료 39,000원 B2B SaaS (월간 이탈률 4%, 신규 획득비용 CAC 120,000원)"
    },
    "cliExample": "aside \"구독 SaaS 고객 LTV 산출 및 CAC 회수 기간 분석 모델 작성\""
  },
  {
    "id": "DAT-05",
    "group": "데이터 분석 & SQL/BI",
    "title": "시계열 매출 데이터 이동평균(Moving Average) 및 계절성(Seasonality) 분해",
    "why": "일일 매출 변동성에서 7일/30일 이동평균선을 도출하여 진짜 성장 추세와 요일별 패턴을 분리합니다.",
    "tags": [
      "시계열",
      "이동평균",
      "매출분석",
      "파이썬"
    ],
    "sites": [
      "jupyter.org"
    ],
    "status": "실전 검증됨",
    "stop": "분석 스크립트 실행 전",
    "prompt": "일자별 매출 데이터(date, daily_revenue)를 Pandas로 분석하는 파이썬 코드를 작성해 주세요.\n1. 7일 이동평균(7-day MA)과 30일 이동평균 컬럼 계산\n2. 요일별(월~일) 평균 매출 및 요일 계절성 지수 산출\n3. 전주 동요일 대비 증감률(WoW) 및 전년 동월 대비 증감률(YoY) 계산\n결과를 시각화할 수 있는 Matplotlib 차트 생성 코드 포함",
    "sampleValues": {},
    "cliExample": "aside \"일별 매출 데이터 7일/30일 이동평균 및 요일별 계절성 분석 파이썬 코드\""
  },
  {
    "id": "DAT-06",
    "group": "데이터 분석 & SQL/BI",
    "title": "A/B 테스트 결과 통계적 유의성 검정 (T-test / Chi-square)",
    "why": "실험군과 대조군의 전환율 차이가 단순 우연인지, p < 0.05 수준의 통계적 유의미한 결과인지 판정합니다.",
    "tags": [
      "통계검정",
      "AB테스트",
      "카이제곱",
      "가설검증"
    ],
    "sites": [
      "scipy.org"
    ],
    "status": "실전 검증됨",
    "stop": "결과 판정 리포트 출력 후",
    "prompt": "A/B 테스트 결과 데이터 '{{실험 결과 수치}}'에 대해 통계적 유의성을 검정하는 파이썬(SciPy) 스크립트를 작성해 주세요.\n- 대조군(Control) 방문자 수 및 전환 수 vs 실험군(Variant) 방문자 수 및 전환 수\n- 카이제곱 독립성 검정(Chi-square test) 또는 이항 비율 검정 수행\n- 산출된 p-value, Z-score, 95% 신뢰구간(Confidence Interval)\n- 실무 담당자가 즉시 결정할 수 있는 '배포 승인/추가 실험/실험 중단' 권고안",
    "sampleValues": {
      "실험 결과 수치": "대조군: 10,240명 중 312명 전환 (3.05%), 실험군: 10,180명 중 385명 전환 (3.78%)"
    },
    "cliExample": "aside \"A/B 테스트 전환율 카이제곱 통계 유의성 검정 및 95% 신뢰구간 산출\""
  },
  {
    "id": "DAT-07",
    "group": "데이터 분석 & SQL/BI",
    "title": "Google Analytics 4 (GA4) BigQuery 이벤트 익스포트 비정첩(UNNEST) 쿼리",
    "why": "GA4의 중첩된 event_params 키-값 구조를 플랫한 열로 풀어내어 전환 경로를 분석합니다.",
    "tags": [
      "GA4",
      "BigQuery",
      "UNNEST",
      "로그분석"
    ],
    "sites": [
      "console.cloud.google.com/bigquery"
    ],
    "status": "실전 검증됨",
    "stop": "빅쿼리 실행 전",
    "prompt": "GA4 BigQuery 일일 이벤트 테이블(analytics_xxxx.events_*)에서 특정 이벤트 파라미터를 추출하는 표준 SQL 쿼리를 작성해 주세요.\n- event_params 배열 내의 'page_location', 'page_title', 'session_id'를 UNNEST(event_params) 구문으로 각각 분리\n- 사용자 가명 ID(user_pseudo_id), 이벤트 발생 일시(KST 변환), 세션 ID별 페이지뷰 집계\n- BigQuery 쿼리 비용(스캔 용량)을 최소화하기 위한 파티션 필터(_TABLE_SUFFIX) 적용",
    "sampleValues": {},
    "cliExample": "aside \"GA4 BigQuery 이벤트 파라미터 UNNEST 및 KST 세션 분석 SQL\""
  },
  {
    "id": "DAT-08",
    "group": "데이터 분석 & SQL/BI",
    "title": "이커머스 장바구니 분석(Market Basket Analysis) 연관 상품 추천",
    "why": "함께 자주 구매되는 상품 조합(지지도, 신뢰도, 향상도 Lift)을 찾아 교차 판매(Cross-sell)를 기획합니다.",
    "tags": [
      "장바구니분석",
      "연관규칙",
      "Apriori",
      "교차판매"
    ],
    "sites": [
      "python.org"
    ],
    "status": "실전 검증됨",
    "stop": "추천 모델 출력 후",
    "prompt": "주문별 품목 데이터(order_id, product_name)를 바탕으로 연관 규칙(Association Rule)을 분석하는 파이썬 코드를 작성해 주세요.\n1. 최소 지지도(Support) 0.01 이상인 동시 구매 아이템 세트 탐색\n2. 신뢰도(Confidence)와 향상도(Lift > 1.2) 상위 상품 페어 10개 추출\n3. 'A 상품을 산 고객에게 B 상품 추천' 형태의 마케팅 프로모션 번들 제안",
    "sampleValues": {},
    "cliExample": "aside \"주문 데이터 기반 Apriori 연관 상품 추천 및 번들 프로모션 도출\""
  },
  {
    "id": "DAT-09",
    "group": "데이터 분석 & SQL/BI",
    "title": "구독 서비스 이탈 예측(Churn Prediction) 모델 특성(Feature) 공학",
    "why": "유저가 해지 버튼을 누르기 전 접속 빈도 급감, 기능 사용 감소 등 징후를 감지할 피처를 설계합니다.",
    "tags": [
      "이탈예측",
      "머신러닝",
      "피처엔지니어링",
      "리텐션"
    ],
    "sites": [
      "scikit-learn.org"
    ],
    "status": "실전 검증됨",
    "stop": "모델링 데이터셋 추출 전",
    "prompt": "SaaS 유료 고객의 해지(Churn)를 예측하기 위해 원시 로그로부터 생성해야 할 핵심 피처(Feature) 정의서를 작성해 주세요.\n1. 최근 30일 접속 일수 및 전월 대비 접속 증감률\n2. 핵심 기능(Aha feature) 주간 사용 횟수\n3. 결제 실패(Dunning) 이력 횟수\n4. 고객센터(CS) 문의 건수 및 만족도 점수\n위 항목들을 고객 ID 단위 1개 행으로 피벗 집계하는 SQL 쿼리 예시 작성",
    "sampleValues": {},
    "cliExample": "aside \"SaaS 고객 이탈 예측 머신러닝용 핵심 피처 엔지니어링 SQL 정의\""
  },
  {
    "id": "DAT-10",
    "group": "데이터 분석 & SQL/BI",
    "title": "영업 파이프라인 전환 확률 및 분기 예상 매출 가중치 예측",
    "why": "딜 단계(리드-미팅-제안-협상)별 과거 승률을 반영하여 현실적인 분기 클로징 매출을 계산합니다.",
    "tags": [
      "영업파이프라인",
      "매출예측",
      "SalesOps",
      "B2B"
    ],
    "sites": [
      "salesforce.com"
    ],
    "status": "실전 검증됨",
    "stop": "영업 리포트 출력 후",
    "prompt": "영업 관리 시스템의 기회(Deals) 데이터를 바탕으로 분기 예상 수주액(Weighted Forecast)을 산출하는 계산표를 작성해 주세요.\n- 파이프라인 단계별 과거 평균 승률: [자격검증 10%, 제안서제출 30%, 실무협상 60%, 최종계약 90%]\n- 각 딜별 [고객사명 / 예상 계약금액 / 현재 단계 / 승률 가중 예상액 / 마감 예정일]\n- 낙관적(Best), 현실적(Most Likely), 비관적(Worst) 3대 시나리오 총액 제시",
    "sampleValues": {},
    "cliExample": "aside \"B2B 영업 파이프라인 단계별 승률 반영 가중 매출 예측 모델\""
  },
  {
    "id": "DAT-11",
    "group": "데이터 분석 & SQL/BI",
    "title": "소비자 가격 민감도 측정(PSM, Price Sensitivity Meter) 설문 분석",
    "why": "반 베스텐도르프(Van Westendorp) 모델로 너무 쌈/쌈/비쌈/너무 비쌈 교차점을 찾아 최적 가격을 찾습니다.",
    "tags": [
      "PSM",
      "가격책정",
      "설문분석",
      "가격민감도"
    ],
    "sites": [
      "qualtrics.com"
    ],
    "status": "실전 검증됨",
    "stop": "분석 결과 도출 후",
    "prompt": "신제품 가격 수용도 설문 응답 데이터에 대해 반 베스텐도르프(PSM) 4개 질문 분석을 수행하는 파이썬 코드를 작성해 주세요.\n1. 너무 싸서 품질이 의심되는 가격 (Too Cheap)\n2. 저렴하다고 느껴지는 가격 (Cheap)\n3. 슬슬 비싸다고 느껴지는 가격 (Expensive)\n4. 너무 비싸서 도저히 살 수 없는 가격 (Too Expensive)\n누적 응답률 곡선의 4개 교차점을 찾아 [최적 가격(OPP)]과 [수용 가능한 가격 범위(IDR)]를 계산하는 로직 작성",
    "sampleValues": {},
    "cliExample": "aside \"신제품 반 베스텐도르프 PSM 설문 분석 및 최적 가격(OPP) 산출\""
  },
  {
    "id": "DAT-12",
    "group": "데이터 분석 & SQL/BI",
    "title": "웹 서버 액세스 로그(Nginx/Apache) IP별 이상 트래픽 및 웹 크롤러 탐지",
    "why": "특정 IP에서 1초당 수십 회의 비정상 요청을 보내는 웹 스크래퍼나 DDoS 징후를 식별합니다.",
    "tags": [
      "로그분석",
      "Nginx",
      "보안",
      "트래픽"
    ],
    "sites": [
      "elastic.co"
    ],
    "status": "실전 검증됨",
    "stop": "방화벽 차단 전",
    "prompt": "Nginx 표준 access.log 텍스트를 파싱하여 비정상 트래픽을 식별하는 파이썬/Bash 원라이너 스크립트를 작성해 주세요.\n1. 분당 요청 수(RPM)가 가장 높은 상위 10개 클라이언트 IP 주소\n2. 404/403 에러를 가장 많이 유발한 취약점 스캐너 IP 식별\n3. User-Agent가 비어 있거나 python-requests, curl, Scrapy 등 자동화 도구로 식별된 트래픽 비율\n해당 IP를 Nginx deny 설정에 추가할 수 있는 차단 구문 생성",
    "sampleValues": {},
    "cliExample": "aside \"Nginx 액세스 로그 비정상 크롤러 및 공격 IP 탐지 스크립트\""
  },
  {
    "id": "DAT-13",
    "group": "데이터 분석 & SQL/BI",
    "title": "마케팅 채널별 멀티터치 기여도(Multi-Touch Attribution) 모델 비교",
    "why": "첫 클릭, 마지막 클릭, 선형 분배, 시간 가치 감쇄 등 터치포인트별 기여도를 대조합니다.",
    "tags": [
      "기여도분석",
      "Attribution",
      "퍼포먼스마케팅",
      "SQL"
    ],
    "sites": [
      "google.com/analytics"
    ],
    "status": "실전 검증됨",
    "stop": "마케팅 예산 재분배 전",
    "prompt": "고객의 전환 전 방문 경로 데이터 '{{터치포인트 경로(예: 검색 -> 인스타 -> 뉴스레터)}}'에 대해 3가지 기여 모델을 비교하는 SQL 쿼리를 작성해 주세요.\n- 첫 번째 터치 모델 (First-Touch Attribution)\n- 마지막 터치 모델 (Last-Touch Attribution)\n- 선형 분배 모델 (Linear Attribution - n개 채널에 1/n 배분)\n각 채널별로 인정받는 전환 기여 건수와 마케팅 예산 효율성 비교표 출력",
    "sampleValues": {
      "터치포인트 경로(예: 검색 -> 인스타 -> 뉴스레터)": "Google 검색(Organic) -> Meta 광고 -> 이메일 뉴스레터 -> 결제완료"
    },
    "cliExample": "aside \"마케팅 채널 기여도 분석: 첫클릭 vs 막클릭 vs 선형 모델 대조 SQL\""
  },
  {
    "id": "DAT-14",
    "group": "데이터 분석 & SQL/BI",
    "title": "대용량 CSV 파일 분할 및 메모리 효율적 청크(Chunk) 변환 파이프라인",
    "why": "메모리가 부족해 열리지 않는 10GB 이상의 대용량 엑셀/CSV 데이터를 스트리밍 방식으로 정제합니다.",
    "tags": [
      "대용량데이터",
      "파이썬",
      "Pandas",
      "데이터파이프라인"
    ],
    "sites": [
      "pandas.pydata.org"
    ],
    "status": "실전 검증됨",
    "stop": "변환 파일 저장 전",
    "prompt": "RAM 용량을 초과하는 15GB 크기의 원본 CSV 파일 '{{입력 파일 경로}}'을 안전하게 처리하는 파이썬 스크립트를 작성해 주세요.\n- `pandas.read_csv(chunksize=100000)` 청크 단위 스트리밍 로딩\n- 특정 결측치 필터링 및 날짜 포맷 변환\n- 처리된 청크를 SQLite 로컬 DB 또는 압축 Parquet 파일로 분할 저장하여 메모리 오버헤드(OOM) 방지",
    "sampleValues": {
      "입력 파일 경로": "data/large_transaction_logs_2026.csv"
    },
    "cliExample": "aside \"10GB 이상 대용량 CSV 스트리밍 청크 분할 및 Parquet 변환 스크립트\""
  },
  {
    "id": "DAT-15",
    "group": "데이터 분석 & SQL/BI",
    "title": "임원진 주간 경영회의 핵심 비즈니스 메트릭 원페이지 리포트",
    "why": "매출, 신규 고객, 이탈률, CAC, 활성 유저수(WAU) 변동 요인을 두괄식 요약으로 전달합니다.",
    "tags": [
      "주간보고",
      "경영지표",
      "대시보드",
      "BI리포트"
    ],
    "sites": [
      "metabase.com",
      "tableau.com"
    ],
    "status": "실전 검증됨",
    "stop": "보고서 임원 배포 전",
    "prompt": "이번 주 전사 핵심 비즈니스 지표 '{{주간 실적 지표 수치}}'를 바탕으로 대표이사 및 경영진 주간 회의용 원페이지 브리핑을 작성해 주세요.\n1. 한 주간의 비즈니스 3줄 핵심 총평 (가장 좋았던 성과 1개, 경고 신호 1개)\n2. 핵심 지표 WoW 변동표: [지표명 / 전주 실적 / 이번 주 실적 / 증감률 % / 목표 달성도]\n3. 지표 변동의 주요 원인 분석 (마케팅 캠페인 영향, 서버 점검 여파 등)\n4. 다음 주 우선 집중 과제 2가지",
    "sampleValues": {
      "주간 실적 지표 수치": "주간 순매출 4,200만원 (+8.5%), 신규 가입 1,840명 (-3.2%), 유료 전환율 4.8% (+0.4%p), 고객 획득 비용 18,200원"
    },
    "cliExample": "aside \"임원 주간 경영회의용 핵심 비즈니스 지표 1-Pager 브리핑 리포트 작성\""
  }
];
