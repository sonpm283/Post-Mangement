import { Grid } from '@mui/material';
import { Props } from 'src/interfaces';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }: Props) => {
  return (
    <Grid container direction="column" minHeight="100vh">
      <Grid item>
        <Header />
      </Grid>

      <Grid item sx={{ flexGrow: 1 }}>
        {children}
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
