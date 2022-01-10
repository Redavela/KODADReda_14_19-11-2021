import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableRow from '@mui/material/TableRow';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const columns = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'startDate', label: 'Start Date' },
  { id: 'department', label: 'Department' },
  { id: 'birth', label: 'Date of Birth' },
  { id: 'street', label: 'Street' },
  { id: 'city', label: 'City' },
  { id: 'state', label: 'State' },
  { id: 'zipCode', label: 'Zip Code' },
];

function ListeEmployees() {

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getListeEmployees = () => {
    return JSON.parse(localStorage.getItem('listeEmployees')) || [];
  };
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');

  useEffect(() => {
    setRows(
      getListeEmployees()
        .map((employee) => {
          return {
            ...employee,
            startDate: format(new Date(employee.startDate), 'dd/MM/yyyy'),
            birth: format(new Date(employee.birth), 'dd/MM/yyyy'),
          };
        })
        .filter((employee, index) => {
          let isFilter = false;
          Object.keys(employee).some((item) => {
            isFilter = employee[item].includes(searchTerm);
            return isFilter;
          });
          return isFilter;
        })
    );
  }, [searchTerm]);


  function descendingComparator(a, b, orderBy) {
    let vA = a[orderBy];
    let vB = b[orderBy];
    if (['startDate', 'birth'].includes(orderBy)) {
      let dateA = vA.split('/');
      vA = new Date(dateA[2], dateA[1] - 1, dateA[0]);
      let dateB = vB.split('/');
      vB = new Date(dateB[2], dateB[1] - 1, dateB[0]);
    }
    if (vB < vA) {
      return -1;
    }
    if (vB > vA) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };
  return (
    <>
      <h1 className="title deux">Current Employees</h1>
      <Paper
        sx={{
          width: '950px',
          margin: 'auto',
        }}
      >
        <TableContainer >
         

          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={createSortHandler(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
         <div className="tabSearch">
        <TablePagination
          labelDisplayedRows={function defaultLabelDisplayedRows({
            from,
            to,
            count,
          }) {
            return `Showing ${from} to ${to} of ${
              count !== -1 ? count : `more than ${to}`
            } entries`;
          }}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
            <div className="tabSearchInput">
              <label htmlFor="searchBar">Search :</label>
              <input
                id="searchBar"
                type="text"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </div>
      </Paper>
      <Link className="link" to="/">
        Home
      </Link>
    </>
  );
}
export default ListeEmployees;
