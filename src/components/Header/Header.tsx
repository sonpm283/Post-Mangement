import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Add, Face6 } from '@mui/icons-material';

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <AppBar>
      <Container maxWidth="md">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Post Mangement</Typography>

          <Button variant="contained" color="info" startIcon={<Add />} sx={{ ml: 1 }}>
            Post
          </Button>

          <Typography align="right" component="div" sx={{ flexGrow: 1 }}>
            Guest,
            <IconButton size="small" edge="start" color="inherit" aria-label="login-icon">
              <Face6 />
            </IconButton>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
