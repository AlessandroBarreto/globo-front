import Header from "../components/Header";
import Container from "@mui/material/Container";
import "../styles/home.scss";

const Home = () => {
  return (
    <Container maxWidth="md">
      <div className="home-container">
        <Header />
      </div>
    </Container>
  );
};

export default Home;
