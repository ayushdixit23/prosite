import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setPremium,
  setRemovePremium,
  setstyle,
  setTrigger
} from "../redux/reducer/prosite_data";
import axios from "axios";
import { FaCrown } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { API } from "@/Essentials";

function Styles() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [sid, setSid] = useState("")

  useEffect(() => {
    const data = sessionStorage.getItem("data");
    const parseData = JSON.parse(data);
    setTitle(parseData?.memberships);
  }, [])
  const [sty, setSty] = useState([]);

  const Styles = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${API}/get-styles`);
      setSty(res.data);
    } catch (e) {
      console.log("Items not fetched");
    }
  };
  useEffect(() => {
    Styles();
    setLoading(false)
  }, []);

  return (
    <>
      {loading ?
        <div className="flex justify-center h-[60vh] w-[100%] items-center">
          < div className="animate-spin">
            <AiOutlineLoading3Quarters />
          </div >
        </div>
        :
        <div className=" select-none w-full  grid grid-cols-2 gap-3 overflow-y-scroll no-scrollbar ">
          {sty.map((d, i) => (
            <div className="flex items-center justify-center overflow-auto mt-2 rounded-xl group hover:border hover:border-[#00f] duration-75 select-none cursor-pointer ">
              <div className={`w-[100%] h-[120px] rounded-xl p-[2px] relative ${i === sid ? "border border-[#00f]" : null} `}>
                {i === sid && < div className={` absolute z-10 bottom-1 right-1`}>
                  <CiCircleCheck className="text-[#00f]" />
                </div>}
                <div
                  key={i}
                  onClick={() => {
                    setSid(i)
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
                    dispatch(setTrigger(false))
                  }}
                  className=" flex-row flex h-full w-full relative rounded-xl text-black "
                >
                  <div
                    style={{
                      backgroundColor: d?.color,
                      width: "33.33%",
                      height: "100%",
                    }}
                    className="rounded-l-xl" ></div>
                  <div
                    style={{
                      backgroundColor: d?.buttoncolor,
                      width: "33.33%",
                      height: "100%",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: d?.backgroundColor,
                      width: "33.33%",
                      height: "100%",
                    }}
                    className="rounded-r-xl" ></div>
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
          ))
          }
        </div >

      }
    </>

  );
}

export default Styles;
