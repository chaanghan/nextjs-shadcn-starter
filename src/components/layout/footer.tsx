import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Container } from './container'

const footerLinks = [
  {
    title: '제품',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#security' },
      { label: 'Status', href: '#status' },
    ],
  },
  {
    title: '회사',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: '법적',
    links: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
      { label: 'Cookie', href: '#cookie' },
      { label: 'License', href: '#license' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Starter Kit</h2>
            <p className="text-sm text-muted-foreground">
              모던 웹 개발을 위한 완벽한 스타터킷
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 Starter Kit. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#github"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="#twitter"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#linkedin"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
