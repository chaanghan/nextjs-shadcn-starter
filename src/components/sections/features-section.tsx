import {
  Code,
  Palette,
  Zap,
  Shield,
  Monitor,
  Database,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/layout/container'

const features = [
  {
    icon: Code,
    title: 'TypeScript',
    description: '완전한 타입 안정성으로 더욱 안정적인 코드 작성',
  },
  {
    icon: Palette,
    title: 'shadcn/ui',
    description: '아름답고 커스터마이징 가능한 컴포넌트 라이브러리',
  },
  {
    icon: Zap,
    title: 'Next.js 15',
    description: '최신 Next.js 15 App Router와 성능 최적화',
  },
  {
    icon: Monitor,
    title: '반응형 디자인',
    description: 'Tailwind CSS로 모든 기기에 완벽하게 대응',
  },
  {
    icon: Shield,
    title: '다크 모드',
    description: 'next-themes로 간편한 테마 관리',
  },
  {
    icon: Database,
    title: '확장성',
    description: '프로젝트 성장에 맞춰 확장 가능한 구조',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              강력한 기능들
            </h2>
            <p className="text-muted-foreground">
              현대적인 웹 개발에 필요한 모든 기능을 갖춘 스타터킷
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="flex flex-col gap-4 p-6 transition-all hover:shadow-lg hover:border-primary/50"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
