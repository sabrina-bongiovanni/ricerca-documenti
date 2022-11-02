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

  const inactivePrevButton = currentPage === 1;
  const inactiveForwButton = currentPage === lastPage;

  return (
    <Pager>
      <ul className="pagination">
        <PagerItem>
          <PagerLink
            onClick={() => {
              goBackwards();
            }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={`${inactivePrevButton ? 'nav-icon' : ''}`}
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
            onClick={() => {
              goForward();
              console.log('hello');
            }}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`${inactiveForwButton ? 'nav-icon' : ''}`}
            />
          </PagerLink>
        </PagerItem>
      </ul>
    </Pager>
  );
};

export default TablePagination;
