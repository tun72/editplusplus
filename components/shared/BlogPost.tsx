/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BlogPost() {
  const shareUrl = encodeURIComponent("https://yoursite.com/blog/add-white-background")
  const shareTitle = encodeURIComponent("The Easiest Way to Add a Solid White Background to a Photo")

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Social Share Sidebar */}
      <div className="fixed left-4 top-1/3 hidden lg:flex flex-col gap-3">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          // onClicked={() => window.open(`https://facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          // onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, '_blank')}
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          // onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <header className="space-y-4">
          <div className="space-y-2">
            <Badge variant="secondary" className="text-purple-600 bg-purple-100">
              IMAGE EDITING
            </Badge>
            <p className="text-sm text-muted-foreground">Nov 22, 2024</p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            The Easiest Way to Add a Solid White Background to a Photo
          </h1>
        </header>

        <div className="prose prose-gray max-w-none">
          <p className="text-lg leading-relaxed">
            The white background. Its a seemingly simple concept, yet it has the power to leave your photos looking fresh,
            clean, and ready to upload onto any e-commerce platform.
          </p>
          <p className="text-lg leading-relaxed">
            Wondering how to add a solid white background to a photo? We have got you covered.
          </p>
        </div>

        {/* Featured Image */}
        <figure className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/assets/images/free-images.jpg"
            alt="Orange gerbera daisy against grey background"
            fill
            className="object-cover"
            priority
          />
        </figure>

        {/* Extended Content */}
        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold mt-8">Why White Backgrounds Matter</h2>
          <p>
            White backgrounds are essential for:
          </p>
          <ul>
            <li>Creating a clean, professional look</li>
            <li>Meeting marketplace requirements (like Amazon, Etsy, etc.)</li>
            <li>Maintaining consistency across your product catalog</li>
            <li>Improving focus on the subject</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">Common Methods</h2>
          <p>
            There are several approaches to achieving a white background:
          </p>
          <ol>
            <li>
              <strong>Photography Setup:</strong> Using proper lighting and a white backdrop
            </li>
            <li>
              <strong>Photo Editing Software:</strong> Using tools like Photoshop or GIMP
            </li>
            <li>
              <strong>AI-Powered Tools:</strong> Using modern background removal services
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-8">Best Practices</h2>
          <p>
            When adding a white background to your photos, consider these tips:
          </p>
          <ul>
            <li>Ensure proper lighting before taking the photo</li>
            <li>Use high-resolution images for better results</li>
            <li>Pay attention to shadows and reflections</li>
            <li>Save in the appropriate format for your intended use</li>
          </ul>
        </div>

        {/* Mobile Social Share */}
        <div className="flex gap-4 lg:hidden justify-center mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            // onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
            aria-label="Share on Facebook"
          >
            <Facebook className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            // onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, '_blank')}
            aria-label="Share on Twitter"
          >
            <Twitter className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            // onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </article>
  )
}

