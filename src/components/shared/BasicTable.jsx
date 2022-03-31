import React, {useState, useEffect} from 'react';
import { 
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

export const BasicTable = ({data, minWidth = 1140}) => {
  const [headCells, setHeadCells] = useState([]);

  useEffect(() => data.length && setHeadCells(Object.keys(data[0])), [data])

  return (
    <Paper sx={{mb: 2}}>
      <TableContainer>
        <Table
          sx={{minWidth: minWidth}}
          stickyHeader 
          aria-labelledby="tableTitle"
        >
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell}
                  sx={{borderColor: "#EBEFF2", backgroundColor: '#E7EBF0'}}
                >
                  {headCell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row) =>
              <TableRow
                hover
                key={row.id}
                sx={{'&:last-child th': { border: 0 }}}
              >
                {headCells.map((header) =>
                  <TableCell align='left' key={header} sx={{borderColor: "#EBEFF2", fontSize: 12, color: '#707683'}}>
                    <Box>{row[header]}</Box>
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
