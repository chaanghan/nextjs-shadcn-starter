import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { ArrowRight, GitBranch } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 border-t">
      <Container>
        <div className="flex flex-col gap-8 rounded-lg border bg-card p-8 sm:p-12 text-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold sm:text-4xl">
              지금 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground mx-auto max-w-md">
              몇 분 안에 프로덕션 준비된 웹 애플리케이션을 구축하세요
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              문서 읽기
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <GitBranch className="h-4 w-4" />
              저장소 보기
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            MIT 라이선스로 자유롭게 사용하세요
          </p>
        </div>
      </Container>
    </section>
  )
}
