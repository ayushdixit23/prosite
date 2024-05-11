"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setPremium,
  setRemovePremium,
  setbuttoncss,
} from "../redux/reducer/prosite_data";
import axios from "axios";
import { APIPRO } from "@/Essentials";
import { FaCrown } from "react-icons/fa6";
import style from "../pages/CustomScrollbar.module.css";

function Button() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  useEffect(() => {
    const data = sessionStorage.getItem("data");
    const parseData = JSON.parse(data);
    setTitle(parseData?.memberships);
  }, []);

  // const [isHovered, setIsHovered] = useState(false);
  const [but, setBut] = useState([]);
  const Buttons = async () => {
    try {
      const res = await axios.get(`${APIPRO}/getbuttons`);

      setBut(res.data);
    } catch (e) {
      console.log("Items not fetched");
    }
  };
  useEffect(() => {
    Buttons();
  }, []);
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <div
      className={`h-[50vh] select-none w-full grid grid-cols-2 overflow-auto mt-2 ${style.customScrollbar}`}
    >
      {but.map((b, i) => (
        <div className="flex items-center relative justify-center w-[96%] h-[100px] overflow-auto mt-2 hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200">
          <div
            key={i}
            onClick={() => {
              console.log(b.padding);
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
    </div>
  );
}

export default Button;
