# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 주요 명령어

```bash
npm run dev       # Turbopack 개발 서버 실행 (http://localhost:3000)
npm run build     # Turbopack 프로덕션 빌드
npm run start     # 프로덕션 서버 실행
npm run lint      # ESLint 검사
```

shadcn/ui 컴포넌트 추가 시:
```bash
npx shadcn@latest add <component>
```

## 경로 별칭

`@/*` → `./src/*` (예: `@/components/layout/header`)

## 아키텍처

**App Router** 기반 Next.js 15 프로젝트. 페이지는 `src/app/` 아래 디렉토리별 `page.tsx`로 구성된다.

### 컴포넌트 계층

| 위치 | 역할 |
|---|---|
| `src/components/layout/` | 전역 레이아웃 (Header, Footer, MobileNav, Container, Providers) |
| `src/components/sections/` | 랜딩 페이지 섹션 단위 컴포넌트 |
| `src/components/common/` | 여러 페이지에서 재사용하는 공통 컴포넌트 |
| `src/components/ui/` | shadcn/ui 원본 컴포넌트 — 직접 수정 금지 |

### 핵심 파일

- `src/app/layout.tsx` — 루트 레이아웃, Geist/Figtree 폰트 적용, `Providers` 마운트
- `src/components/layout/providers.tsx` — `ThemeProvider` + `TooltipProvider` + `Toaster` 통합
- `src/lib/nav-config.ts` — 헤더·푸터·모바일 메뉴에서 공유하는 네비게이션 항목 정의
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge 조합)

### 테마

`next-themes` 기반 라이트/다크/시스템 3단계 전환. `theme-toggle.tsx`가 `DropdownMenu`로 구현되어 있으며 `'use client'` 필수.

### shadcn/ui 설정

`components.json`의 `style: "radix-maia"`, `iconLibrary: "hugeicons"` 커스텀 스타일을 사용한다. 아이콘은 `lucide-react`와 `@hugeicons/react` 두 라이브러리 모두 사용 가능.

### 현재 페이지

- `/` — Hero, Features, CTA 섹션으로 구성된 랜딩 페이지
- `/examples` — 설치된 shadcn/ui 컴포넌트 갤러리
