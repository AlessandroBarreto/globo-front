import Header from "../components/Header";
import Box from "../components/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import API_DATA from "../mocks/api";
import "../styles/home.scss";

const Home = () => {
  console.log(API_DATA);
  return (
    <Container maxWidth="md" disableGutters>
      <div className="home-container">
        <Header />
        <Grid container spacing={1} classes={{ container: "grid-container" }}>
          {API_DATA.map((info) => {
            return (
              <Grid item sm={6}>
                <Box key={info.id} text={info.text} tagName={info.tags} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
