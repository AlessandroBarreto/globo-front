import { useState } from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/addItem.scss";

const AddItem = () => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <div className="addItem-container">
      <HeaderSecondary />
      <Container maxWidth="sm">
        <Card classes={{ root: "card-edit-container" }}>
          <TextField
            id="standard-multiline-static"
            label="INSIGHT"
            multiline
            rows={6}
            placeholder="Escreva seu insight aqui"
            variant="standard"
            fullWidth
            color="primary"
            helperText="limite de caracteres: 400"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Card>
        <Button variant="contained" color="primary" fullWidth>
          PUBLICAR
        </Button>
      </Container>
    </div>
  );
};

export default AddItem;
