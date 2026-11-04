# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- 기본 응답 언어: 한국어
- 코드 주석: 한국어
- 커밋 메시지: 한국어
- 문서화(README, roadmap.md, 이 파일 등): 한국어
- 변수명, 함수명: 영어 (코드 표준 준수, 예: `renderExperience`, `isDarkMode`)
- HTML 태그, CSS 클래스(Tailwind), 파일명: 영어

## 현재 상태

개인 웹 이력서를 만드는 정적 프로젝트입니다. 패키지 매니페스트, 빌드 단계, 린터, 테스트 스위트가 없으므로 빌드, 린트, 테스트 명령어도 없습니다. 사용자가 요청하기 전까지 툴체인을 추가하지 마세요.

Git 저장소가 아닙니다. `roadmap.md`가 개발 계획이며, 다음에 무엇을 만들지 판단하는 기준입니다.

파일:
- `index.html`: 예시 이력서 페이지입니다. Tailwind 설정(`tailwind.config`)에 `cream`, `ink` 색상과 Plus Jakarta Sans 폰트를 토큰으로 정의해 두었으니, 새 스타일은 이 토큰을 재사용하세요.
- `roadmap.md`: 단계별 계획 (기본 골격, 예시 내용, Tailwind 레이아웃, JS 동작, 점검, 배포(선택))
- `welcome.txt`: 사용하지 않음

## 기술 스택과 계획된 구조

- 순수 HTML, CSS, JavaScript. Tailwind CSS는 CDN 스크립트(`cdn.tailwindcss.com`)로 불러오며 빌드 단계는 없습니다.
- `js/main.js`: 모바일 메뉴, 다크 모드 토글, 이미지 대체(`data-fallback`) 동작. 헤더 요소 id(`menu-toggle`, `nav-menu`, `theme-toggle`)에 의존하니 바꿀 때 함께 수정하세요.
- 이력서 내용은 실제 개인 정보가 아닌 예시 문구입니다.
- 섹션 순서: 소개, 경력, 프로젝트, 기술 스택, 연락처(SNS 포함)

## 작업 방법

- 미리보기: `index.html`을 브라우저에서 열기. 약 360px 너비와 데스크톱 너비에서 레이아웃 확인.
- 로드맵이 바뀌지 않는 한 HTML 파일 하나와 `js/main.js`로 유지하며, 프레임워크는 추가하지 않습니다.
- 이력서 내용은 일반적인 예시로 유지하고, 실제 연락처 등 민감한 정보는 사용자에게 확인한 뒤에만 넣습니다.

## 환경

- 플랫폼: Windows 11, Git Bash 및 PowerShell 사용 가능
- 설치된 도구: Node.js v24.22.1, npm 11.19.1, Git 2.56.0
