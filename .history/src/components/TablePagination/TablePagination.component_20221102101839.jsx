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
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRes / resPerPage); i++) {
    pageNumbers.push(i);
  }

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
        {pageNumbers.map((number) => (
          <PagerItem
            key={number}
            className="page-item"
            onClick={() => {
              const highlightButton = true;
            }}
          >
            <PagerLink
              href="#"
              // className={`${
              //   highlightButton ? 'navbar-item-active navbar-tab' : 'navbar-tab'
              // }`}
              className={`${highlightButton ? 'page-link-active' : ''}`}
              onClick={(event) => {
                event.preventDefault();
                paginate(number);
                const highlightButton = true;
              }}
            >
              {number}
            </PagerLink>
          </PagerItem>
        ))}
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
