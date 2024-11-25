import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  category: string
  title: string
  date: string
  image: string
  slug: string
}

export function BlogCard({ category, title, date, image, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={600}
            height={200}
            className="aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <Badge variant="secondary" className="text-yellow-600 bg-yellow-100">
            {category}
          </Badge>
          <h2 className="text-2xl font-semibold group-hover:text-yellow-600 transition-colors duration-200">
            {title}
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </h2>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </article>
    </Link>
  )
}

