import { Pager, PagerItem, PagerLink } from 'design-react-kit';

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TablePagination.styles.scss';

const TablePagination = ({
  resPerPage,
  totalRes,
  goBackwards,
  goForward,
  paginate,
  currentPage,
  lastPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRes / resPerPage); i++) {
    pageNumbers.push(i);
  }

  const inactivePrevButton = currentPage === 1 || totalRes === 0;
  const inactiveForwButton = currentPage === lastPage || totalRes === 0;

  return (
    <Pager>
      <ul className="pagination">
        <PagerItem>
          <PagerLink
            onClick={(event) => {
              event.preventDefault();
              goBackwards();
            }}
            className={`${inactivePrevButton ? 'inactive-arrow-link' : ''}`}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={`${inactivePrevButton ? 'inactive-arrow' : ''}`}
            />
          </PagerLink>
        </PagerItem>
        {pageNumbers.map((number) => {
          const highlightButton = currentPage === number;
          return (
            <PagerItem
              key={number}
              className={`${highlightButton ? 'page-item-active' : ''}`}
            >
              <PagerLink
                href="#"
                className={`${highlightButton ? 'page-link-active' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  paginate(number);
                }}
              >
                {number}
              </PagerLink>
            </PagerItem>
          );
        })}
        <PagerItem className="page-item">
          <PagerLink
            onClick={(event) => {
              event.preventDefault();
              goForward();
              console.log('hello');
            }}
            className={`${inactiveForwButton ? 'inactive-arrow-link' : ''}`}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`${inactiveForwButton ? 'inactive-arrow' : ''}`}
            />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
  );
};

export default TablePagination;
