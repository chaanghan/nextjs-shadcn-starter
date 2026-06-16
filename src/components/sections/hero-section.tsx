import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto text-center">
          <Badge className="w-fit mx-auto" variant="outline">
            🚀 v1.0.0 현재 공개됨
          </Badge>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              모던 웹 개발을 위한
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                {' '}완벽한 스타터킷
              </span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Next.js 15, TypeScript, Tailwind CSS, shadcn/ui로 구성된 프로덕션 준비 완료된 스타터킷. 빠르고 효율적으로 웹 개발을 시작하세요.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              시작하기
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              문서 보기
            </Button>
          </div>
        </div>
      </Container>

      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-gradient-to-bl from-primary/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
      </div>
    </section>
  )
}
