import { AppBar, Container, Toolbar, Typography } from "@mui/material"

const Footer = () => {
  return (
    <AppBar position='static' color='primary'>
      <Container>
        <Toolbar>
            <Typography variant="body1" color='inherit' >
              &copy; 2024 Post Management Application
            </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer