import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface BlogPostsType {
  slug: string
  content: string
  [key: string]: any
}
const blogData: BlogPostsType[] = getMarkDownData('data/creative-agency/blog')
const blogPosts = blogData.toSorted((a, b) => a.year - b.year)

const BlogPostsV3 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-5 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear text-clip-fix !text-[#ffdb7c] text-[#ffdb7c]">
                Waggle <span className="font-poppins italic !text-[#ffdb7c] text-[#ffdb7c]">Works</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="max-w-md flex-1">
            <TextAppearAnimation>
              <p className="text-appear max-md:text-justify md:text-right">
              Design che mette l’utente al centro e il business in movimento.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/seo-blog">
                  <Button variant="primary" size="lg">Scopri altri Waggle Works</Button>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center gap-8 gap-y-12 md:grid-cols-2 md:items-start">
          {blogPosts?.map((blog) => (
            <RevealWrapper key={blog.slug} className="underline-hover-effect group w-full">
              <Link href={`/creative-agency/blog/${blog?.slug}`} className="block">
                <figure className="overflow-hidden rounded-xl">
                  <Image
                    width={550}
                    height={598}
                    src={blog.thumbnail}
                    className="h-full w-full rounded-xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt="Blog Images"
                  />
                </figure>
              </Link>
              <div className="mb-2 mt-[24px] flex items-center justify-between md:mb-3.5">
                <p className="text-[13px] font-normal uppercase leading-6 tracking-[8px] text-secondary dark:text-backgroundBody">
                  {blog.tags}
                </p>
                <p className="text-base leading-8 tracking-[0.48px] text-secondary dark:text-backgroundBody md:text-xl">
                  {blog.year}
                </p>
              </div>
              <Link href={`/creative-agency/blog/${blog?.slug}`}>
                <div className="blog-title">
                  <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                    {blog.title}
                  </h3>
                </div>
              </Link>
              <div className="mt-6 border-b dark:border-dark"></div>
              <Link href={`/creative-agency/blog/${blog?.slug}`}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
                  <span className="btn btn--secondary btn--lg uppercase inline-flex items-center gap-2">
                    VIEW
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 7H17V16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPostsV3
