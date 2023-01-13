import { Button, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setproducts] = React.useState([]);
  //const [id, setid] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setproducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);

  const HandleDelete = async (e) => {
    console.log(e.target.value);

    // try {
    //   var resp = await axios.delete(
    //     `http://localhost:4000/delete/${product._id}`
    //   );
    //   const index = products.findIndex(
    //     (product) => product._id === resp.data._id
    //   );
    //   console.log(resp);
    //   // const product = [...products];
    //   products.splice(index, 1);
    //   setproducts(products);
    //   window.alert("Deleted");
    // } catch (err) {
    //   console.log("erorrrrrrrrr");
    //   console.error(err.message);
    // }
    axios
      .delete(`http://localhost:4000/products/delete/${e.target.value}`)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigation = useNavigate();
  return (
    <div className="products">
      <Grid>
        <Grid>
          <h1>products</h1>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            onClick={() => navigation("/products/new")}
            // onClick={() => props.history.push("/products/new")}
          >
            Add New Products
          </Button>
        </Grid>
      </Grid>
      {products.length === 0 ? (
        <p> no products to show</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={3} className="singleproduct" key={index}>
              <h2>{product.carName}</h2>
              <p>{product.carCompany}</p>
              <p>{product.carModel}</p>
              <p>{product.Features}</p>
              <p>{product.carPrice}</p>
              <Button
                variant="contained"
                color="success"
                onClick={() => navigation("/products/update/" + product._id)}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={HandleDelete}
                value={product._id}
              >
                Delete
              </Button>
              <hr />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
