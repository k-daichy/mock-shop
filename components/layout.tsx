import React from "react";
import Link from "next/link";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core"
import ShoppingCart from "./ShoppingCart";

import MenuIcon from '@material-ui/icons/Menu'

interface LayoutProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    cart: {
      marginLeft: "auto"
    },
    child: {
      paddingTop: "20px"
    },
  }),
);

export default function Layout({children}: LayoutProps) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Link href={"/"}>
            <Button color="inherit">Mock Shop</Button>
          </Link>
          <div className={classes.cart}>
            <ShoppingCart/>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.child}>
        {children}
      </div>
    </div>
  )
}
