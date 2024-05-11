"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../Components/Loading";

const Component = () => {
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const temp = searchparams.get("temp");
  const router = useRouter();

  const fetchid = async () => {
    try {
      // const res = await axios.get(
      //   `https://work.grovyo.xyz/api/v1/fetchwithid/64b84197281876c462d40978`
      // );
      const res = await axios.get(
        `https://work.grovyo.xyz/api/v1/fetchwithid/${id}`
      );
      // const res = await axios.get(`http://localhost:7190/api/v1/fetchwithid/${id}`)
      console.log(res.data);
      if (res.data.success) {
        const data = res.data.data;
        sessionStorage.setItem("data", JSON.stringify(data));
        sessionStorage.setItem("temp", temp);
        sessionStorage.setItem("defaultopen", false);
        router.push("/");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchid();
    }
  }, [id]);

  return (
    <>
      <div>
        <Loading />
      </div>
    </>
  );
};

export default Component;
