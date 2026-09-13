import React from 'react';
import styles from './Pagination.module.scss';

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(total / perPage);

  if (pageCount <= 1) {
    return null;
  }

  const pages = [];
  for (let i = 1; i <= pageCount; i = i + 1) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={styles.button}
        aria-label="Previous page"
      >
        ‹
      </button>

      <div className={styles.pagesList}>
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`${styles.pageItem} ${currentPage === page ? styles.active : ''}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={currentPage === pageCount}
        onClick={() => onPageChange(currentPage + 1)}
        className={styles.button}
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
};
