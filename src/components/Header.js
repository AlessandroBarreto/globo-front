import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import eu from "../assets/eu.jpg";
import logo from "../assets/brand-insights.svg";
import "../styles/header.scss";

const Header = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("text-content").style.visibility = "hidden";
      document.getElementById("text-content").style.opacity = "0";
      document.getElementById("text-content").style.maxHeight = "0";
      document.getElementById("text-content").style.paddingTop = "0px";
    } else {
      document.getElementById("text-content").style.visibility = "visible";
      document.getElementById("text-content").style.opacity = "1";
      document.getElementById("text-content").style.maxHeight = "200px";
      document.getElementById("text-content").style.paddingTop = "20px";
    }
  };
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="img-content">
          <img src={logo} alt="" className="logo-img" />
          <Avatar
            alt="Alessandro Barreto"
            src={eu}
            sx={{ width: 56, height: 56 }}
          />
          <IconButton>
            <AddIcon color="primary" fontSize="medium" />
          </IconButton>
        </div>
        <div id="text-content">
          <h1>Olá, Andrey!</h1>
          <span>andrey@gmail.com</span>
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
