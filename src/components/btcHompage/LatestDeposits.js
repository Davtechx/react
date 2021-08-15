import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";

const columns = [
  { id: 'username', label: 'USERNAME',  },

  { id: 'country', label: 'COUNTRY\u00a0CODE',  },
  {
    id: 'amount',
    label: 'AMOUNT',
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

const rows = [
  ('India', 'IN', 1324171354),
  ('China', 'CN', 1403500365),
  ('Italy', 'IT', 60483973),
  ('United States', 'US', 327167434),
  ('Canada', 'CA', 37602103),
  ('Australia', 'AU', 25475400),
  ('Germany', 'DE', 83019200),
  ('Ireland', 'IE', 4857000),
  ('Mexico', 'MX', 126577691),
  ('Japan', 'JP', 126317000),
  ('France', 'FR', 67022000),
  ('United Kingdom', 'GB', 67545757),
  ('Russia', 'RU', 146793744),
  ('Nigeria', 'NG', 200962417),
  ('Brazil', 'BR', 210147125),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight:'100%',
  },
});

 

function LatestDeposits(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
            LATEST DEPOSITS
          </Typography>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
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
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
}

export default LatestDeposits;