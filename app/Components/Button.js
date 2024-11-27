"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setPremium,
  setRemovePremium,
  setbuttoncss,
  setTrigger,
  setButtonId
} from "../redux/reducer/prosite_data";
import axios from "axios";
import { FaCrown } from "react-icons/fa6";
import style from "../pages/CustomScrollbar.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { API } from "@/Essentials";

function Button() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true)
  const [bid, setBid] = useState("")

  useEffect(() => {
    const data = sessionStorage.getItem("data");
    const parseData = JSON.parse(data);
    setTitle(parseData?.memberships);
  }, []);

  const [but, setBut] = useState([]);

  const Buttons = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${API}/get-buttons`);
      setBut(res.data);
    } catch (e) {
      console.log("Items not fetched");
    }
  };

  useEffect(() => {
    Buttons();
    setLoading(false)
  }, []);
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <>
      {loading ? <div className="flex justify-center  h-[30vh] w-[100%] items-center">
        <div className="animate-spin">
          <AiOutlineLoading3Quarters />
        </div>
      </div> :
        <div
          className={`h-[50vh] select-none w-full grid grid-cols-2 overflow-auto mt-2 ${style.customScrollbar}`}
        >
          {but.map((b, i) => (
            <div className={`flex items-center  group hover:border hover:border-[#00f]  relative justify-center rounded-xl w-[96%] h-[100px] overflow-auto mt-2 bg-[#fafafa] dark:bg-[#313D4E] duration-75 select-none cursor-pointer ${b?._id === bid ? "border border-[#00f]" : null}`}>
              {bid === b?._id && < div className={` absolute z-10 bottom-1 right-1`}>
                <CiCircleCheck className="text-[#00f]" />
              </div>}

              <div
                key={i}
                onClick={() => {
                  dispatch(setButtonId(b?._id))
                  setBid(b?._id)
                  dispatch(
                    setbuttoncss({
                      padding: b?.padding,
                      color: b?.color,
                      borderRadius: b?.borderRadius,
                      borderStyle: b?.borderStyle,
                      backgroundColor: b?.backgroundColor,
                      borderColor: b?.borderColor,
                      borderTop: b?.borderTop,
                      borderBottom: b?.borderBottom,
                      borderRight: b?.borderRight,
                      borderLeft: b?.borderLeft,
                      borderRadiusTop: b?.borderRadiusTop,
                      borderRadiusBottom: b?.borderRadiusBottom,
                      borderRadiusRight: b?.borderRadiusRight,
                      borderRadiusLeft: b?.borderRadiusLeft,
                      boxShadow: b?.boxShadow,
                      fontBold: b?.fontBold,
                    })
                  );
                  if (b.premium) {
                    if (title === "Free") {
                      dispatch(setPremium({ type: "buttons" }));
                    }
                  } else {
                    if (title === "Free") {
                      dispatch(setRemovePremium({ type: "buttons" }));
                    }
                  }
                  dispatch(setTrigger(false))
                  // setButton(1);
                  // setBorder(2);
                  // setBgbutton("#BC3433");
                  // setRound(10);
                }}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                style={{
                  padding: b?.padding,
                  color: b?.color,
                  borderRadius: b?.borderRadius,
                  borderStyle: b?.borderStyle,
                  backgroundColor: b?.backgroundColor,
                  borderColor: b?.borderColor,
                  borderTop: b?.borderTop,
                  borderBottom: b?.borderBottom,
                  borderRight: b?.borderRight,
                  borderLeft: b?.borderLeft,
                  borderRadiusTop: b?.borderRadiusTop,
                  borderRadiusBottom: b?.borderRadiusBottom,
                  borderRadiusRight: b?.borderRadiusRight,
                  borderRadiusLeft: b?.borderRadiusLeft,
                  boxShadow: b?.boxShadow,
                  fontBold: b?.fontBold,
                }}
              // className="px-4 py-2 shadow-lg rounded-sm bg-white text-black self-start"
              >
                Click Now
              </div>

              {title === "Free" && (
                <>
                  {" "}
                  {b.premium && (
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
                  )}
                </>
              )}
            </div>
          ))}
        </div >
      }
    </>
  );
}

export default Button;
