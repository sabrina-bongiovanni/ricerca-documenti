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
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRes / resPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(currentPage);

  return (
    <Pager>
      <ul className="pagination">
        <PagerItem className="page-item">
          <PagerLink
            onClick={() => {
              goBackwards();
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </PagerLink>
        </PagerItem>
        {pageNumbers.map((number) => {
          const highlightButton = currentPage === number;
          return (
            <PagerItem
              key={number}
              className={`${highlightButton ? '.page-item-active' : ''}`}
            >
              <PagerLink
                href="#"
                className={`${highlightButton ? '.page-link-active' : ''}`}
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
            onClick={() => {
              goForward();
              console.log('hello');
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} className="nav-icon" />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
  );
};

export default TablePagination;
