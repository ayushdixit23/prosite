"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const [data, setData] = useState(null);
  function decodeUsernameAndNumber(encodedString) {
    const decodedString = decodeURIComponent(encodedString);
    return decodedString;
  }
  const fetchData = async () => {
    try {
      const res = await axios.post(
        "https://work.grovyo.xyz/api/v1/getprosite",
        {
          username: decodeUsernameAndNumber(params.id),
        }
      );
      console.log(res.data);
      setData(res.data?.prosite);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  return (
    <div className="h-screen w-screen">
      <div className="h-[100%] w-[100%]">
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </div>
  );
}

export default page;
