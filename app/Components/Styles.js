import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setPremium,
  setRemovePremium,
  setstyle,
} from "../redux/reducer/prosite_data";
import axios from "axios";
import { FaCrown } from "react-icons/fa6";

function Styles() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("")

  useEffect(() => {
    const data = sessionStorage.getItem("data");
    const parseData = JSON.parse(data);
    setTitle(parseData?.memberships);
  }, [])
  const [sty, setSty] = useState([]);

  const Styles = async () => {
    try {
      const res = await axios.get(`https://pros.grovyo.xyz/api/getstyles`);

      setSty(res.data);
    } catch (e) {
      console.log("Items not fetched");
    }
  };
  useEffect(() => {
    Styles();
  }, []);

  return (
    <div className="h-[100%] select-none w-full grid grid-cols-2 overflow-auto ">
      {sty.map((d, i) => (
        <div className="flex items-center justify-center w-[96%] h-[100px] overflow-auto mt-2 hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200">
          <div className="w-[90%] h-[90%]">
            <div
              key={i}
              onClick={() => {
                dispatch(
                  setstyle({
                    textcolor: d?.color,
                    bgcolor: d?.backgroundColor,
                    buttoncss: d?.buttoncolor,
                  })
                );
                if (d.premium) {
                  if (title === "Free") {
                    dispatch(setPremium({ type: "styles" }));
                  }
                } else {
                  if (title === "Free") {
                    dispatch(setRemovePremium({ type: "styles" }))
                  }
                }
              }}
              className="px-4 py-2 flex-row flex shadow-lg h-full w-full relative rounded-sm bg-slate-200 text-black self-start"
            >
              <div
                style={{
                  backgroundColor: d?.color,
                  width: "33%",
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: d?.buttoncolor,
                  width: "33%",
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: d?.backgroundColor,
                  width: "33%",
                  height: "100%",
                }}
              ></div>
              <div>
                {title === "Free" && <>
                  {
                    d.premium && (
                      <div>
                        <div className="absolute bottom-2 right-2 flex justify-center items-end">
                          <div
                            className=" bg-[#171717] 
                       p-1 rounded-full self-end flex "
                          >
                            <FaCrown className=" text-orange-300 " />
                          </div>
                        </div>
                      </div>
                    )
                  }
                </>
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Styles;
