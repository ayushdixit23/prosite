"use client";
import axios from "axios";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

function page() {
  const [bio, setBio] = useState();
  const [user, setUser] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://back.grovyo.xyz/api/getprositedetails/64b84197281876c462d40978`
      );
      console.log(res.data);
      setBio(res.data.data.userDetails);

      console.log(bio);
      if (res.data.success) {
      } else {
        setUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="w-full h-[90vh] pn:max-sm:hidden bg-green-700"
        dangerouslySetInnerHTML={{ __html: bio?.temp }}
      ></div>
      <div
        className="w-full h-[90vh] sm:hidden bg-green-700"
        dangerouslySetInnerHTML={{ __html: bio?.temp1 }}
      ></div>
    </>
  );
}

export default page;
