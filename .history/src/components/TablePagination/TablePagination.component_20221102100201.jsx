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
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => {
              goBackwards();
            }}
          />
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={(event) => {
                event.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => {
              goForward();
              console.log('hello');
            }}
            className="nav-icon"
          />
        </li>
      </ul>
    </nav>
  );
};

export default TablePagination;
