"use client";

import BuyerList from "@/components/BuyerList";
import SellerList from "@/components/SellerList";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  <p className="text-red-950"> Welcome {name}</p>;
  console.log(role);
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => {
          router.push("/add-product");
        }}
      >
        Add Product
      </Button>
      {role === "buyer" ? <BuyerList /> : <SellerList />}
    </div>
  );
};

export default Home;
