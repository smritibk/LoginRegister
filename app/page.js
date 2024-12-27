"use client";

import BuyerList from "@/components/BuyerList";
import SellerList from "@/components/SellerList";
import React from "react";

const Home = () => {
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  <p className="text-red-950"> Welcome {name}</p>;
  console.log(role);
  return <div>{role === "buyer" ? <BuyerList /> : <SellerList />}</div>;
};

export default Home;
