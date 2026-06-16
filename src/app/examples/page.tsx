'use client'

import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Container } from '@/components/layout/container'
import { toast } from 'sonner'
import { AlertCircle, Bell, CheckCircle2, ChevronDown, Info } from 'lucide-react'

export default function ExamplesPage() {
  const [switchEnabled, setSwitchEnabled] = useState(false)

  return (
    <main className="py-12 md:py-16">
      <Container>
        {/* 페이지 헤더 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">컴포넌트 예제</h1>
          <p className="text-lg text-muted-foreground">
            웹 개발에 필요한 기본적인 shadcn/ui 컴포넌트들을 확인해보세요.
          </p>
        </div>

        {/* 버튼 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">버튼</h2>
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-4">
            <Button>기본</Button>
            <Button variant="outline">아웃라인</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="destructive">삭제</Button>
            <Button variant="secondary">보조</Button>
            <Button size="sm">작음</Button>
            <Button size="lg">큼</Button>
            <Button disabled>비활성화</Button>
          </div>
        </section>

        {/* 배지 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">배지</h2>
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Badge>기본</Badge>
            <Badge variant="secondary">보조</Badge>
            <Badge variant="outline">아웃라인</Badge>
            <Badge variant="destructive">삭제</Badge>
          </div>
        </section>

        {/* 카드 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">카드</h2>
          <Separator className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>카드 제목 {i}</CardTitle>
                  <CardDescription>카드 설명</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    이것은 카드 컴포넌트의 예제입니다. 정보를 잘 정리해서 보여줄 수 있습니다.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 입력 폼 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">입력 폼</h2>
          <Separator className="mb-6" />
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">알림 활성화</Label>
                <Switch id="notifications" checked={switchEnabled} onCheckedChange={setSwitchEnabled} />
              </div>
              <p className="text-sm text-muted-foreground">알림 상태: {switchEnabled ? '활성화' : '비활성화'}</p>
              <Button>제출</Button>
            </CardContent>
          </Card>
        </section>

        {/* 피드백 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">알림</h2>
          <Separator className="mb-6" />
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>정보</AlertTitle>
              <AlertDescription>이것은 정보성 알림 메시지입니다.</AlertDescription>
            </Alert>
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>성공</AlertTitle>
              <AlertDescription>작업이 성공적으로 완료되었습니다.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>오류</AlertTitle>
              <AlertDescription>문제가 발생했습니다. 다시 시도해주세요.</AlertDescription>
            </Alert>
          </div>
        </section>

        {/* 데이터 표시 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">아바타 & 스켈레톤</h2>
          <Separator className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">아바타</h3>
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>V</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">스켈레톤 로딩</h3>
              <div className="space-y-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        </section>

        {/* 오버레이 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">오버레이</h2>
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-4">
            {/* Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button>다이얼로그 열기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>다이얼로그 예제</DialogTitle>
                  <DialogDescription>이것은 다이얼로그 컴포넌트의 예제입니다.</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    중요한 정보나 확인이 필요한 내용을 표시할 때 사용합니다.
                  </p>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">취소</Button>
                  <Button>확인</Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Tooltip */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">호버 툴팁</Button>
                </TooltipTrigger>
                <TooltipContent>이것은 툴팁입니다!</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  메뉴 <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>옵션</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>도움말</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        {/* 탭 섹션 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">탭</h2>
          <Separator className="mb-6" />
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList>
              <TabsTrigger value="tab1">탭 1</TabsTrigger>
              <TabsTrigger value="tab2">탭 2</TabsTrigger>
              <TabsTrigger value="tab3">탭 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>탭 1 콘텐츠</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">첫 번째 탭의 콘텐츠입니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>탭 2 콘텐츠</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">두 번째 탭의 콘텐츠입니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>탭 3 콘텐츠</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">세 번째 탭의 콘텐츠입니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* 토스트 알림 섹션 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">토스트 알림</h2>
          <Separator className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast.success('성공!', {
                  description: '작업이 성공적으로 완료되었습니다.',
                })
              }
            >
              성공 알림
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                toast.error('오류!', {
                  description: '문제가 발생했습니다.',
                })
              }
            >
              오류 알림
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.info('정보', {
                  description: '이것은 정보 알림입니다.',
                })
              }
            >
              정보 알림
            </Button>
          </div>
        </section>
      </Container>
    </main>
  )
}
