import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();

  const [carCompany, setcarCompany] = React.useState([]);
  const [carName, setcarName] = React.useState([]);
  const [carModel, setcarModel] = React.useState([]);
  const [carPrice, setcarPrice] = React.useState([]);
  const [Features, setFeatures] = React.useState([]);
  const handleProducts = () => {
    axios
      .post("http://localhost:4000/products/create", {
        carCompany,
        carName,
        carModel,
        carPrice,
        Features,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/products");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Enter Car details for Sale</h1>
      </Grid>

      <Grid item xs={3}></Grid>

      <Grid item xs={6}>
        <TextField
          id="filled-basic"
          fullWidth
          label="Car Company"
          variant="filled"
          value={carCompany}
          onChange={(e) => setcarCompany(e.target.value)}
        />
        <TextField
          id="filled-basic"
          fullWidth
          label="Car Name"
          variant="filled"
          value={carName}
          onChange={(e) => setcarName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          fullWidth
          label="Model"
          variant="filled"
          value={carModel}
          onChange={(e) => setcarModel(e.target.value)}
        />
        <TextField
          id="filled-basic"
          fullWidth
          label="Price"
          variant="filled"
          value={carPrice}
          onChange={(e) => setcarPrice(e.target.value)}
        />

        <TextField
          id="filled-basic"
          fullWidth
          label="Features"
          variant="filled"
          value={Features}
          onChange={(e) => setFeatures(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}></Grid>

      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleProducts}
          //   (e) => {
          //   axios
          //     .post("http://localhost:4000/products/create", {
          //       carCompany,
          //       carName,
          //       carModel,
          //       carPrice,
          //       Features,
          //     })
          //     .then((res) => {
          //       console.log(res.data);
          //     })
          //     .catch((error) => {
          //       console.log(error);
          //     });
          // }}
        >
          Add Details
        </Button>
      </Grid>
      <Grid>
        {carCompany}
        {carName}
        {carModel}
        {carPrice}
        {Features}
      </Grid>
    </Grid>
  );
};

export default NewProduct;
