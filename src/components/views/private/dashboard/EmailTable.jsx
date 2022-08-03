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

const EmailTable = ({ data }) => {

  return (
  <div style={{marginLeft: '10px'}}>
    <Typography
      variant="h5"
      className="other-text"
      color='primary.light'
      sx={{
        mt: { xs: 4, md: 0 },
        fontWeight: 500,
        mb: 1,
      }}
    >
      Recently Sent Emails
    </Typography>
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
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11}, fontWeight: 600 }}
            >
              {" "}
              
            </TableCell>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11}, fontWeight: 600 }}
              numeric
            >
              SENT
            </TableCell>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11}, fontWeight: 600 }}
              numeric
            >
              OPENS
            </TableCell>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11}, fontWeight: 600 }}
              numeric
            >
              CLICKS
            </TableCell>
            <TableCell
              className="other-text"
              sx={{ fontSize: {xs:11, sm: 11, md:11, lg:11}, fontWeight: 600 }}
              numeric
            >
              BOUNCES
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map(({ _id, displayName, sent, open, clicks, bounces, date, unsubs }) => {
              
            
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
                      color='secondary.light'
                      sx={{
                        fontSize: {xs:11, sm: 11, md:11, lg:11},ml: 1,
                      }}
                    >
                      {displayName&&displayName}
                    </Typography>
                    <Typography

                      className="other-text"
                      color='primary.light'
                      sx={{
                        fontSize: 8,ml: 1,
                      }}
                    >
                      {date&&date}
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
                {
                    bounces&&bounces
                }
                </TableCell>
              </TableRow>
            )})}
        </TableBody>
      </Table>
    </Box>
  </div>
);
}

export default memo(EmailTable);