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
            <p className="page-link" onClick={() => paginate(number)}>
              {number}
            </p>
          </li>
        ))}
        <li className="page-item">
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => {
              goForward();
            }}
            className="nav-icon"
          />
        </li>
      </ul>
    </nav>
  );
};

export default TablePagination;
