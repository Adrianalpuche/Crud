import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { AppBar, Button, Container, IconButton, Stack, Toolbar } from "@mui/material";
import React from "react";
import { NavLink, Link } from 'react-router-dom';


function Navbars() {
  const pages = [
    {
      name: 'Usuarios',
      to: '/PantallaUsuarios',
    },
    
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: '#3D5495' }}>
      <Container maxWidth="xl">
        <Toolbar>
            <Link to="/" style={{ color: '#DE253B' }}>
                <IconButton size="large" edge="start" aria-label="logo" style={{ color: '#DE253B' }}>
                    <CatchingPokemonIcon fontSize='large' />
                </IconButton>
            </Link>
          <Stack>
            {pages.map(({ name, to }) => (
                <Button key={name}>
                <NavLink color='inherit'  style={{ color: 'white', backgroundColor: 'transparent', textDecoration: 'none'    }} to={to} className="nav-link">{name}</NavLink>
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbars;
