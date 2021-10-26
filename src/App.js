import Home from "./pages/Home";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "./App.scss";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ED4D77",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
