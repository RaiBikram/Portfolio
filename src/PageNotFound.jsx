import React from "react";

import { Link } from "react-router-dom";
import Layout from "./Layout/Layout";

export default function PageNotFound() {
  return (
  <Layout>
      <div className="flex flex-wrap text-center items-center justify-center max-h-max m-20">
      <h1 className="w-full font-extrabold text-6xl m-10 text-orange-600">404</h1>
      <h2 className=" w-full text-4xl m-5 text-red-900 font-semibold">OOps ! Page Not Found </h2>
      <Link to="/" className="text-3xl m-5 text-green-600 font-bold">Go Back Home</Link>
    </div>
  </Layout>
  );
}
