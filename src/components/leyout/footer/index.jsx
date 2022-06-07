import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./footer.scss";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <List
                className="footer_list"
                component="nav"
                aria-label="mailbox folders"
              >
                <ListItem button>
                  <ListItemText primary="Products" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Pricing" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Blog" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid item xs>
              <Item>xs</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
