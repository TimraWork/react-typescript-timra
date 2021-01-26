import React from 'react';

import Logo from '../assets/img/logo.png';
// import Nav from './Nav';

import {Menu, Search} from '@material-ui/icons';
// import {NavLink} from 'react-router-dom';

import {
  Container,
  InputBase,
  Grid,
  Hidden,
  Switch,
  FormGroup,
  FormControlLabel,
  FormControl,
  IconButton
} from '@material-ui/core';

export const Header = () => (
  <header>
    <Container maxWidth="xl">
      <Grid container spacing={0} alignItems="center" justify="space-between" style={{minHeight: '5vh'}}>
        <a href={'/'} className="logo">
          <img src={Logo} alt="" className="logo__img" />
          <span className="logo__text">
            <span className="logo__title">Timra.ru</span>
            <span className="logo__subtitle">Front-end разработка</span>
          </span>
        </a>

        <div className="searchBox">
          <div className="searchIcon">
            <Search />
          </div>
          <InputBase placeholder="Search…" inputProps={{'aria-label': 'search'}} />
        </div>

        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="eng"
              control={<Switch color="primary" />}
              color="secondary"
              label="Eng"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>

        <Hidden mdUp>
          <IconButton>
            <Menu />
          </IconButton>
        </Hidden>
      </Grid>
    </Container>
  </header>
);
