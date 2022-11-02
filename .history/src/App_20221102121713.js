import React, { useState, useEffect } from 'react';

import SearchBox from './components/SearchBox/SearchBox.component';
import SelectBox from './components/SelectBox/SelectBox.component';
import ResultTable from './components/ResultTable/ResultTable.component';
import TablePagination from './components/TablePagination/TablePagination.component';

import pdfFile from './assets/pdfFile.pdf';

import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Button,
} from 'design-react-kit';

import cx from 'classnames';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import './App.scss';

import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';

const App = () => {
  const tableData = [
    {
      id: 1,
      struttura: 'Infezioni ospedaliere - CIO',
      tipoDocumento: 'IO',
      descrizione: 'IO',
      revisione: '1',
      data: '07/07/2020',
      link: pdfFile,
    },
    {
      id: 2,
      struttura: 'Qualità e comunicazione - UQ',
      tipoDocumento: 'Best Practice',
      descrizione: 'IO',
      revisione: '00',
      data: '07/06/2020',
      link: pdfFile,
    },
    {
      id: 3,
      struttura: 'Day Surgery e Chirurgia breve - DSCB',
      tipoDocumento: 'PDTA',
      descrizione: 'PDTA - Profilassi del tromboembolismo venoso',
      revisione: '8',
      data: '07/05/2020',
      link: pdfFile,
    },
    {
      id: 4,
      struttura: 'Qualità e comunicazione - UQ',
      tipoDocumento: 'Best Practice',
      descrizione: 'IO',
      revisione: '00',
      data: '07/03/2020',
      link: pdfFile,
    },
    {
      id: 5,
      struttura: 'Infezioni ospedaliere - CIO',
      tipoDocumento: 'IO',
      descrizione: 'IO',
      revisione: '1',
      data: '07/04/2020',
      link: pdfFile,
    },
    {
      id: 6,
      struttura: 'Day Surgery e Chirurgia breve - DSCB',
      tipoDocumento: 'PDTA',
      descrizione: 'PDTA - Profilassi del tromboembolismo venoso',
      revisione: '8',
      data: '07/02/2020',
      link: pdfFile,
    },
    {
      id: 7,
      struttura: 'Infezioni ospedaliere - CIO',
      tipoDocumento: 'IO',
      descrizione: 'IO',
      revisione: '1',
      data: '07/01/2020',
      link: pdfFile,
    },
    {
      id: 8,
      struttura: 'Qualità e comunicazione - UQ',
      tipoDocumento: 'Best Practice',
      descrizione: 'IO',
      revisione: '00',
      data: '05/03/2020',
      link: pdfFile,
    },
    {
      id: 9,
      struttura: 'Day Surgery e Chirurgia breve - DSCB',
      tipoDocumento: 'PDTA',
      descrizione: 'PDTA - Profilassi del tromboembolismo venoso',
      revisione: '8',
      data: '07/01/2023',
      link: pdfFile,
    },
    {
      id: 10,
      struttura: 'Infezioni ospedaliere - CIO',
      tipoDocumento: 'IO',
      descrizione: 'IO',
      revisione: '1',
      data: '07/10/2025',
      link: pdfFile,
    },
    {
      id: 11,
      struttura: 'Qualità e comunicazione - UQ',
      tipoDocumento: 'Best Practice',
      descrizione: 'IO',
      revisione: '00',
      data: '03/03/2022',
      link: pdfFile,
    },
    {
      id: 12,
      struttura: 'Qualità e comunicazione - UQ',
      tipoDocumento: 'Best Practice',
      descrizione: 'IO',
      revisione: '00',
      data: '09/12/2021',
      link: pdfFile,
    },
  ];

  const strutture = [
    { value: 1, label: 'Infezioni ospedaliere - CIO' },
    { value: 2, label: 'Qualità e comunicazione - UQ' },
    { value: 3, label: 'Day Surgery e Chirurgia breve - DSCB' },
  ];

  const tipiDocumento = [
    { value: 1, label: 'IO' },
    { value: 2, label: 'Best practice' },
    { value: 1, label: 'PDTA' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [strutturaFilter, setStrutturaFilter] = useState([]);

  //Get current posts
  const resPerPage = 3;
  const indexOfLastRes = currentPage * resPerPage;
  const indexOfFirstRes = indexOfLastRes - resPerPage;
  const currentRes = tableData.slice(indexOfFirstRes, indexOfLastRes);
  const lastPage = tableData.length / resPerPage;

  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goBackwards = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }
  };

  const goForward = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    } else return;
  };

  //Set filters from select boxes

  const onChangeFilter = (struttura) => {
    console.log(struttura.target);
    setStrutturaFilter(struttura.target);
  };

  return (
    <div className="App">
      <div className="ricerca-moduli">
        <Container className="page-header">
          <div className="breadcrumb-container">
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">Home</a>
                <span className="separator">/</span>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">...</a>
                <span className="separator">/</span>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                Motore di ricerca per moduli e documenti
              </BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="text-container">
            <h2>Motore di ricerca per moduli e documenti</h2>
            <p>
              Per restringere i risultati della ricerca selezionare le categorie
              di interesse nei menù a tendina.
            </p>
          </div>

          <div
            className={cx(
              'rounded bg-',
              'primary',
              'search-group-container',
              'search-group'
            )}
          >
            <SearchBox />
            <div className="filters-line">
              <SelectBox
                strutture={strutture}
                tipiDocumento={tipiDocumento}
                onChangeHandler={onChangeFilter}
              />
              <Button
                color={'tertiary'}
                icon={false}
                tag="button"
                // onClick={() => doRequest(1)}
                className="my-2 my-lg-1"
              >
                Cerca{/* {intl.formatMessage(messages.find)} */}
              </Button>
            </div>
          </div>
        </Container>

        <Container className="result-table">
          <ResultTable
            tableData={currentRes}
            // nPages={nPages}
            // currentPage={currentPage}
            // setCurrentPage={setCurrentPage}
          />
          <div className="pagination-container">
            <div className="page-indication">
              <p>
                {indexOfFirstRes + 1}-{indexOfLastRes} di {tableData.length}{' '}
                items{' '}
              </p>
            </div>
            <TablePagination
              resPerPage={resPerPage}
              totalRes={tableData.length}
              paginate={paginate}
              setCurrentPage={setCurrentPage}
              goBackwards={goBackwards}
              goForward={goForward}
              currentPage={currentPage}
              lastPage={lastPage}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default App;
