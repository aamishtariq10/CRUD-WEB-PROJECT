import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProducts = () => {
  const navigate = useNavigate();
  const [carCompany, setcarCompany] = React.useState([]);
  const [carName, setcarName] = React.useState([]);
  const [carModel, setcarModel] = React.useState([]);
  const [carPrice, setcarPrice] = React.useState([]);
  const [Features, setFeatures] = React.useState([]);
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products/" + params.id, {
        carCompany,
        carName,
        carModel,
        carPrice,
        Features,
      })
      .then((res) => {
        setcarCompany(res.data.carCompany);
        setcarName(res.data.carName);
        setcarModel(res.data.carModel);
        setcarPrice(res.data.carPrice);
        setFeatures(res.data.Features);
      });
  }, [params.id]);
  const handleProducts = () => {
    axios
      .put("http://localhost:4000/products/update/" + params.id, {
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
        <Button color="primary" variant="contained" onClick={handleProducts}>
          Edit
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

export default EditProducts;
