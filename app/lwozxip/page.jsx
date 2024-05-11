import React, { Suspense } from "react";
import Component from "./component";
import Loading from "../Components/Loading";

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense >
    </>
  );
};

export default page;
