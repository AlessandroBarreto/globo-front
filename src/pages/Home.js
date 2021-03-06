import { useState } from "react";
import Header from "../components/Header";
import Box from "../components/Box";
import SearchBox from "../components/SearchBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import API_DATA from "../mocks/api";
import "../styles/home.scss";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const filteredList = API_DATA.filter((e) =>
    e.tags.join().includes(inputValue.toLocaleLowerCase())
  );

  return (
    <Container maxWidth="md" disableGutters>
      <div className="home-container">
        <Header />
        <Grid
          container
          spacing={1}
          justifyContent="center"
          classes={{ container: "grid-container-box" }}
        >
          {filteredList.map((info) => {
            return (
              <Grid key={info.id} item sm={6}>
                <Box text={info.text} tagName={info.tags} />
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          classes={{ container: "grid-container-search-box" }}
        >
          <Grid item sm={6} xs={12}>
            <SearchBox
              placeholder="Pesquise por termos ou categorias..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
