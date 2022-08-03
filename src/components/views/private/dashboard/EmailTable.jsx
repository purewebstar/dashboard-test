import React, { memo } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { teal, purple, blue, red } from "@mui/material/colors";
import MuiLink from '@mui/material/Link';
import timeSince from '../../../../utils/timeSince';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

const EmailTable = ({ data }) => {

  return (
    <>

    <Container>
    <Grid
    container
    direction="row"
    justifyContent="space-between"
    sx={{
      p: 1,
    }}
  >
    <Grid xs={12}>
      <Box>
      <Typography
        variant="h4"
        className="other-text"
        sx={{
          fontWeight: 600,
          mt: 2,
        }}
      >
      
      Email Marketing Performance
      </Typography>
      </Box>
      <Divider sx={{mb:0,mt:1}} />
    </Grid>
    </Grid>
    <Box
      sx={{
        bgcolor: "background.paper",
        border: `#ddd 1px solid`,
        borderRadius: 2,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},color: blue[800], fontWeight: 600 }}
            >
              Campaign
              
            </TableCell>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},color: blue[800], fontWeight: 600 }}
              numeric
            >
              Send
            </TableCell>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},color: blue[800], fontWeight: 600 }}
              numeric
            >
              Opens
            </TableCell>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},color: blue[800], fontWeight: 600 }}
              numeric
            >
              Open rate
            </TableCell>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},color: blue[800], fontWeight: 600 }}
              numeric
            >
              Clicked
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map(({ _id, displayName, sent, open, clicks, bounces, date, unsubs },i) => {
              
            
            return (
              <TableRow key={_id}>
                <TableCell component="th" scope="row">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >

                    <MuiLink href={`mailto: ${displayName&&displayName}`}>
                    <Typography
                      variant="h6"
                      className="other-text"
                      color='text.primary'
                      sx={{
                        fontSize: {xs:11, sm: 11, md:11, lg:11},
                        fontWeight: {xs: 400, sm:600}

                      }}
                    >
                      {displayName&&displayName}_{i}
                    </Typography>
                    </MuiLink>
                  </Box>
                </TableCell>
                <TableCell
                  className="other-text"
                  color="secondary"
                  numeric
                  sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},fontWeight: 500}}
                >
                  {sent&&sent}
                </TableCell>
                <TableCell
                  className="other-text"
                  color="secondary"
                  numeric
                  sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},fontWeight: 500 }}
                >
                  {open&&open}
                </TableCell>
                <TableCell numeric sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},fontWeight: 500 }}>
                  {clicks&&clicks}
                </TableCell>
                <TableCell numeric sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11},fontWeight: 500 }}>
                  {clicks&&clicks}
                </TableCell>
              </TableRow>
            )})}
        </TableBody>
      </Table>
    </Box>
    </Container>
    </>
);
}

export default memo(EmailTable);