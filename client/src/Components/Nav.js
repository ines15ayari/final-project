import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


function Nav() {
  const x = 5
  return (
    <div>
      <AppBar position='static' style={{
        backgroundColor: "black"
      }} >
        <Toolbar>
          <IconButton
            size='large'
            edge="start"
            color='inherit'
            aria-label="open drawer">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Typography variant='h6' component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
          BOOKSTORE
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Store</Button>
        </Stack>
      </AppBar>
    </div>
  )
}

export default Nav