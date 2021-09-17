import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({songs}) {



    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250, maxWidth: 1000, marginLeft:50, backgroundColor: "#E5E2E1" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Song Length</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Artist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song) => (
              <TableRow
                key={song.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {song.duration}
                </TableCell>
                <TableCell align="right">{song.title}</TableCell>
                <TableCell align="right">{song.artist.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }