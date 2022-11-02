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
          <PagerLink onClick={() => {
              goBackwards();
            }}><FontAwesomeIcon
            icon={faChevronLeft}
            
          />
          </PagerLink>
        </PagerItem>
        {pageNumbers.map((number) => (
          <PagerItem key={number} className="page-item">
            <PagerLink
              href="#"
              className="page-link"
              onClick={(event) => {
                event.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </a>
          </PagerItem>
        ))}
        <PagerItem className="page-item">
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => {
              goForward();
              console.log('hello');
            }}
            className="nav-icon"
          />
        </PagerItem>
      </ul>
    </Pager>
  );
};

export default TablePagination;
