import { FC } from 'react'

import { Button } from '@/components/Button/Button'

import styles from './Pagination.module.css'

interface PaginationProps {
  currentPage: number
  onPageChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  const handleClick = (page: number) => {
    const nextPage = !page ? 1 : page
    onPageChange(nextPage)
  }

  return (
    <div className={styles.pagination}>
      <Button
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
        variant="icon"
      >
        <span dangerouslySetInnerHTML={{ __html: '&larr;' }} />
      </Button>

      <div>{currentPage}</div>

      <Button onClick={() => handleClick(currentPage + 1)} variant="icon">
        <span dangerouslySetInnerHTML={{ __html: '&rarr;' }} />
      </Button>
    </div>
  )
}
