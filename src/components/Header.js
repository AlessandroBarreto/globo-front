import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import eu from "../assets/eu.jpg";
import logo from "../assets/brand-insights.svg";
import "../styles/header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="img-content">
          <img src={logo} alt="" className="logo-img"/>
          <Avatar
            alt="Alessandro Barreto"
            src={eu}
            sx={{ width: 56, height: 56 }}
          />
          <IconButton>
            <AddIcon color="primary" fontSize="medium" />
          </IconButton>
        </div>
        <div className="text-content">
          <h1>Olá, Andrey!</h1>
          <span>antonio@gmail.com</span>
          <hr />
          <h2>
            Feed de <b>Insights</b>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
