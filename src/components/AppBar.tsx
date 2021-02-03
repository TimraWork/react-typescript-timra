import React from 'react';
import {createStyles, makeStyles, Theme, fade} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container} from '@material-ui/core';
import {Logo} from './parts/Logo';
import {AccountCircle} from '@material-ui/icons';
import Search from './parts/Search';
import {Nav} from './parts/Nav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    menuButton: {
      marginLeft: theme.spacing(2)
    },
    logo: {
      flexGrow: 1
    },
    appBar: {
      boxShadow: 'none',
      borderBottom: '1px solid ' + fade(theme.palette.primary.light, 0.35)
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="inherit" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography className={classes.logo}>
            <Logo />
          </Typography>
          <div className={classes.sectionDesktop}>
            <Nav />
            <Search />
            {/* <Button color="inherit" >
            Login
          </Button> */}
            <IconButton color="primary" className={classes.menuButton}>
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton className={classes.menuButton} color="primary">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
