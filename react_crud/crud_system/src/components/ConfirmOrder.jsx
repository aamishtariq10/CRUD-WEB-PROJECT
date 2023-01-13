import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const ConfirmOrder = () => {
  const navigation = useNavigate();
  return (
    <div>
      order Confirmed!!!!
      <Button onClick={() => navigation("/")}>Go back</Button>
    </div>
  );
};

export default ConfirmOrder;
