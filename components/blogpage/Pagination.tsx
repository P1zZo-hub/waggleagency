'use client'
import { useLenis } from 'lenis/react'
import { useEffect } from 'react'

const Pagination = ({ paginateFunction }: any) => {
  const { totalPage, currentPage, setCurrentPage, goToNextPage, goToPreviousPage } = paginateFunction
  const lenis = useLenis()

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handlePreviousPage = () => {
    goToPreviousPage()
  }

  const handleNextPage = () => {
    goToNextPage()
  }

  useEffect(() => {
    if (currentPage) {
      lenis?.scrollTo(100, { immediate: true })
    }
  }, [currentPage, lenis])

  return (
    <div className="reveal-me mt-16 md:mt-24">
      <ul className="reveal-me flex flex-wrap items-center justify-center gap-3">
        <li className="group">
          <button
            onClick={handlePreviousPage}
            className={`btn btn--ghost btn--sm ${currentPage === 1 ? 'cursor-not-allowed opacity-70' : ''}`}
            disabled={currentPage === 1}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 16"
                fill="none"
                className="flex h-3 w-[18px] stroke-black dark:stroke-white lg:h-4">
                <path
                  d="M17.25 8H0.75M0.75 8L7.5 1.25M0.75 8L7.5 14.75"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </li>

        {Array.from({ length: totalPage }, (_, index) => (
          <li className={`group ${index + 1 === currentPage && 'page-active'}`} key={index}>
            <button
              className="btn btn--ghost btn--sm group-[.page-active]:btn--primary"
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}

        <li className="group">
          <button
            onClick={handleNextPage}
            className={`btn btn--ghost btn--sm ${currentPage === totalPage ? 'cursor-not-allowed opacity-70' : ''}`}
            disabled={currentPage === totalPage}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex h-3 w-[18px] stroke-black dark:stroke-white lg:h-4"
                viewBox="0 0 18 16"
                fill="none">
                <path
                  d="M0.75 8H17.25M17.25 8L10.5 1.25M17.25 8L10.5 14.75"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
