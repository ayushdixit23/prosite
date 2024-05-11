"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
// import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import back from "@/app/assets/Visual.png";
// import Templates from "@/app/Templates.png";
// import Settings from "@/app/Settings.png";
// import Elements from "@/app/Elements.png";
// import textt from "@/app/text.png";
import { CiMobile2 } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import t1 from "./assets/t1.png";
import t2 from "./assets/t2.png";
import t3 from "./assets/t3.png";
import t4 from "./assets/t4.png";
import t5 from "./assets/t5.png";
import Image from "next/image";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { IoFlashOutline, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutTemplate } from "react-icons/lu";
import { RxDoubleArrowLeft, RxText } from "react-icons/rx";
import { FaBuromobelexperte, FaCrown } from "react-icons/fa6";
import { MdOutlineCloudUpload, MdSearch } from "react-icons/md";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import Fontss from "./Components/Font";
import { useScreenshot } from "use-screenshot-hook";
import Membership from "./Components/Membership";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  setComponent,
  // setFont1,
  // setFont2,
  // setFont3,
  setPerf,
  setPremium,
  setTrigger,
  setTextColor,
  setReduxActive,
  setShowbutton,
  setRemovePremium,
  setTemplate,
  setimage,
} from "./redux/reducer/prosite_data";
import style from "./pages/CustomScrollbar.module.css";
import ReactDOMServer from "react-dom/server";
import Button from "./Components/Button";
import Styles from "./Components/Styles";
// import Pic from "./assets/pic.json";
// import m from "./assets/Main.png";
import Background from "./Components/Background";
import html2canvas from "html2canvas";
import { API, APIPRO } from "@/Essentials";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";
import Template5 from "./Templates/Template5";
import toast, { Toaster } from "react-hot-toast";
import { useWindowSize } from "./Components/windowsize";
import { Switch } from "@/components/ui/switch";

function page() {
  const dispatch = useDispatch();
  const size = useWindowSize();
  const [pic1, setPic1] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  // const [id, setId] = useState("64b84197281876c462d40978");
  const [text1, setText1] = useState(false);
  // const [active, setActive] = useState("");
  const webRef = useRef();
  const [search, setSearch] = useState("");
  const [pop, setPop] = useState(false);
  const [limg, setLimg] = useState([]);
  const [a, setA] = useState(null);
  const drawerRef = useRef();

  useEffect(() => {
    const data = sessionStorage.getItem("data");
    const parseData = JSON.parse(data);
    setData(parseData);
    setId(parseData.id);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        dispatch(setTrigger(false));
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [drawerRef]);

  const {
    background_color,
    primeimage,
    textcolor,
    font1,
    font2,
    active,
    font3,
    link1,
    link2,
    color1,
    component,
    color2,
    buttoncss,
    trigger,
    bgimage,
    buttoncolor,
    premium,
    perf,
    Linkes,
    Name,
    template,
    showbutton,
    Clic,
  } = useSelector((state) => state.prosite_data);
  const [changetemp, setChangetemp] = useState(0);
  const [change, setChange] = useState(0);
  const [bgimg, setBgimg] = useState("");
  const [components, setComponents] = useState(false);
  const [switcher, setSwitcher] = useState(true);
  const [header1, setHeader1] = useState("Main long header with several lines");
  const [Button1, setButton1] = useState("Click now");
  const [Link1, setLink1] = useState("");
  const [loading, setLoading] = useState(false);
  const [header2, setHeader2] = useState(
    "This is subheader. Stormi is a dog. She is dark grey and has long legs. Her eyes are expressive and are able to let her humans know what she is thinking."
  );

  useEffect(() => {
    const temp = sessionStorage.getItem("temp");
    const setTs = temp ? parseInt(temp) : 1;
    dispatch(setTemplate(setTs));
    const i = localStorage.getItem("image");
    const a = JSON.parse(i);
    setLimg(a);
  }, []);

  const [file, setFile] = useState();
  const [close, setClose] = useState(Clic);
  const [link, setLink] = useState([]);

  const uploadcont = async () => {
    try {
      setLoading(true);
      const form = new FormData();
      form.append("file", file);
      const res = await axios.post(`${API}/v1/uploaddata/${id}`, form);
      if (res.data.success) {
        toast.success("Image Uploaded!");
        await getitems();
        setFile("");
        setLoading(false);
      } else {
        console.log("Error");
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      console.log("Something Went Wrong!");
    } finally {
      setLoading(false);
    }
  };

  const getitems = async () => {
    try {
      const res = await axios.get(`${API}/v1/getimage/${id}`);
      if (res.data.success) {
        setLink(res.data.links);
      }
    } catch (e) {
      console.log("Items not fetched");
    }
  };

  useEffect(() => {
    if (id) {
      getitems();
    }
  }, [id]);

  const textareaRef = useRef(null);

  const handleTextareaChange = (event) => {
    setText(event.target.value);
    adjustTextareaHeight();
    const elm = document.getElementById(active);
    if (active === "h1") {
      setHeader1(event.target.value);
    } else if (active === "h2") {
      setHeader2(event.target.value);
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const pic = useCallback(async () => {
    try {
      const res = await axios.get(`${APIPRO}/getdata`);
      if (res.data?.success) {
        setPic1(res.data.img);
        setBgimg(res.data.bgimg);
      } else {
        console.log(res.data.message);
      }
    } catch (e) {
      console.log("Items not fetched");
    }
  });

  const deleteTemp = async () => {
    try {
      const res = await axios.delete(`${API}/v1/deletetemp/${id}`);
      console.log(res.data);
      if (res.data.success) {
        toast.success("Template Deleted!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pic();
  }, []);
  let tempWed;
  let tempPhone;

  const savetemplate = async (i) => {
    try {
      setLoading(true);
      if (template === 1) {
        tempWed = (
          <div
            style={{
              backgroundColor: background_color || "transparent",
              backgroundImage: background_color
                ? null
                : bgimage
                ? `url(${bgimage})`
                : null,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                <div
                  style={{
                    fontFamily: font1 ? font1 : Name,
                    // fontFamily: component == 2 ? font1 ? font1 : Name : font1 ? font1 : Name,
                    color: color1 ? color1 : textcolor,
                    fontSize: "40px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                >
                  {header1}
                </div>
                <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                <div
                  style={{
                    // fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
                    fontFamily: font2 ? font2 : Name,
                    color: color2 ? color2 : textcolor,
                  }}
                  className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${
                    active === "h2" ? "" : ""
                  }`}
                >
                  {header2}
                </div>
                {showbutton && (
                  <div className="w-[100%] flex justify-start">
                    <a href={Link1}>
                      <link rel="stylesheet" href={Linkes} />
                      <div
                        style={{
                          ...buttoncss,
                          // backgroundColor: buttoncolor,
                          // color: textcolor,
                          // fontFamily: Name,
                        }}
                        className={`text-[100%] pn:max-ss:text-[30%] cursor-pointer ss:max-pp:text-[60%] pp:max-sm:text-[80%] ${
                          active === "h3" ? "" : ""
                        }`}
                      >
                        <div
                          style={{
                            fontFamily: font3 ? font3 : Name,
                          }}
                        >
                          {Button1}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                height: "100%",
                width: "50%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={primeimage}
                alt="pic"
                style={{
                  objectFit: "cover",
                  height: "400px",
                  width: "400px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        );
        tempPhone = (
          <div
            style={{
              backgroundImage: background_color
                ? null
                : bgimage
                ? `url(${bgimage})`
                : null,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: background_color || "transparent",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "50%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                <div
                  style={{
                    fontFamily: font1 ? font1 : Name,
                    color: color1 ? color1 : textcolor,
                    fontSize: "24px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                  className={`text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%]  font-semibold text-black w-[100%] ${
                    active === "h1" ? "" : ""
                  }`}
                >
                  {header1}
                </div>
                <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                <div
                  style={{
                    fontFamily: font2 ? font2 : Name,
                    color: color2 ? color2 : textcolor,
                    fontSize: "14px",
                    height: "auto",
                    fontWeight: "bold",
                    width: "100%",
                    marginTop: "2%",
                  }}
                  className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${
                    active === "h2" ? "" : ""
                  }`}
                >
                  {header2}
                </div>
                {showbutton && (
                  <div
                    onClick={() => dispatch(setReduxActive("h3"))}
                    style={{ width: "100%", display: "flex" }}
                  >
                    <a>
                      <link rel="stylesheet" href={Linkes} />
                      <div
                        style={{
                          ...buttoncss,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: font3 ? font3 : Name,
                          }}
                        >
                          {Button1}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                height: "50%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src={primeimage}
                alt="pic"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        );
      } else if (template === 2) {
        tempWed = (
          <div
            style={{
              backgroundColor: background_color || "transparent",
              backgroundImage: background_color ? null : bgimage,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: bgimage ? `url(${bgimage})` : null,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: background_color || "transparent",
                height: "95%",
                width: "97%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                <div
                  style={{
                    fontFamily: font1 ? font1 : Name,
                    // fontFamily: component == 2 ? font1 ? font1 : Name : font1 ? font1 : Name,
                    color: color1 ? color1 : textcolor,
                    fontSize: "40px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                >
                  {header1}
                </div>
                <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                <div
                  style={{
                    fontSize: "18px",
                    // fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
                    fontFamily: font2 ? font2 : Name,
                    color: color2 ? color2 : textcolor,
                  }}
                >
                  {header2}
                </div>
                {showbutton && (
                  <div className="w-[100%] flex justify-center">
                    <a>
                      <link rel="stylesheet" href={Linkes} />
                      <div
                        style={{
                          ...buttoncss,
                          // backgroundColor: buttoncolor,
                          // color: textcolor,
                          // fontFamily: Name,
                        }}
                        className={`text-[100%] pn:max-ss:text-[30%] cursor-pointer ss:max-pp:text-[60%] pp:max-sm:text-[80%] ${
                          active === "h3" ? "" : ""
                        }`}
                      >
                        <div
                          style={{
                            fontFamily: font3 ? font3 : Name,
                          }}
                        >
                          {Button1}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
        tempPhone = (
          <div
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: background_color || "transparent",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: bgimage ? `url(${bgimage})` : null,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: background_color || "transparent",
                height: "96%",
                width: "96%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                <div
                  style={{
                    fontFamily: font1 ? font1 : Name,
                    color: color1 ? color1 : textcolor,
                    fontSize: "24px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                  className={`text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%]  font-semibold text-black w-[100%] ${
                    active === "h1" ? "" : ""
                  }`}
                >
                  {header1}
                </div>
                <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                <div
                  style={{
                    // fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
                    fontFamily: font2 ? font2 : Name,
                    color: color2 ? color2 : textcolor,
                    fontSize: "14px",
                    height: "auto",
                    fontWeight: "bold",
                    width: "100%",
                    marginTop: "2%",
                  }}
                  className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${
                    active === "h2" ? "" : ""
                  }`}
                >
                  {header2}
                </div>
                {showbutton && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <a>
                      <link rel="stylesheet" href={Linkes} />
                      <div
                        style={{
                          ...buttoncss,
                          // backgroundColor: buttoncolor,
                          // color: textcolor,
                          // fontFamily: Name,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: font3 ? font3 : Name,
                          }}
                        >
                          {Button1}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      } else if (template === 3) {
        tempWed = (
          <div
            style={{
              backgroundColor: background_color || "transparent",
              backgroundImage: background_color
                ? null
                : bgimage
                ? `url(${bgimage})`
                : null,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                <div
                  style={{
                    fontFamily: font1 ? font1 : Name,
                    // fontFamily: component == 2 ? font1 ? font1 : Name : font1 ? font1 : Name,
                    color: color1 ? color1 : textcolor,
                    fontSize: "40px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                >
                  {header1}
                </div>
                <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                <div
                  style={{
                    // fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
                    fontFamily: font2 ? font2 : Name,
                    color: color2 ? color2 : textcolor,
                  }}
                  className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${
                    active === "h2" ? "" : ""
                  }`}
                >
                  {header2}
                </div>
                {showbutton && (
                  <div className="w-[100%] flex justify-start">
                    <a href={Link1}>
                      <link rel="stylesheet" href={Linkes} />
                      <div
                        style={{
                          ...buttoncss,
                          // backgroundColor: buttoncolor,
                          // color: textcolor,
                          // fontFamily: Name,
                        }}
                        className={`text-[100%] pn:max-ss:text-[30%] cursor-pointer ss:max-pp:text-[60%] pp:max-sm:text-[80%] ${
                          active === "h3" ? "" : ""
                        }`}
                      >
                        <div
                          style={{
                            fontFamily: font3 ? font3 : Name,
                          }}
                        >
                          {Button1}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                height: "100%",
                width: "50%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={primeimage}
                alt="pic"
                style={{
                  objectFit: "cover",
                  height: "400px",
                  width: "400px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        );
        tempPhone = (
          <div
            style={{
              backgroundImage: background_color
                ? null
                : bgimage
                ? `url(${bgimage})`
                : null,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: background_color || "transparent",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <div
              style={{
                height: "50%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                <div
                  style={{
                    fontFamily: font1 ? font1 : Name,
                    color: color1 ? color1 : textcolor,
                    fontSize: "24px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                  className={`text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%]  font-semibold text-black w-[100%] ${
                    active === "h1" ? "" : ""
                  }`}
                >
                  {header1}
                </div>
                <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                <div
                  style={{
                    fontFamily: font2 ? font2 : Name,
                    color: color2 ? color2 : textcolor,
                    fontSize: "14px",
                    height: "auto",
                    fontWeight: "bold",
                    width: "100%",
                    marginTop: "2%",
                  }}
                  className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${
                    active === "h2" ? "" : ""
                  }`}
                >
                  {header2}
                </div>
                {showbutton && (
                  <div
                    onClick={() => dispatch(setReduxActive("h3"))}
                    style={{ width: "100%", display: "flex" }}
                  >
                    <a>
                      <link rel="stylesheet" href={Linkes} />
                      <div
                        style={{
                          ...buttoncss,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: font3 ? font3 : Name,
                          }}
                        >
                          {Button1}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                height: "50%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                paddingTop: "40px",
              }}
            >
              <img
                src={primeimage}
                alt="pic"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        );
      } else if (template === 4) {
        tempWed = (
          <div
            style={{
              backgroundImage: bgimage ? `url(${bgimage})` : null,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: background_color || "transparent",
              height: "100%",
              width: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  paddingTop: "20px",
                }}
              >
                <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                <div
                  style={{
                    fontFamily: font1 ? font1 : Name,
                    // fontFamily: component == 2 ? font1 ? font1 : Name : font1 ? font1 : Name,
                    color: color1 ? color1 : textcolor,
                    fontSize: "40px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                >
                  {header1}
                </div>
                <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                <div
                  style={{
                    // fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
                    fontFamily: font2 ? font2 : Name,
                    color: color2 ? color2 : textcolor,
                  }}
                  className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${
                    active === "h2" ? "" : ""
                  }`}
                >
                  {header2}
                </div>
                {showbutton && (
                  <div className="w-[100%] flex justify-start">
                    <a>
                      <link rel="stylesheet" href={Linkes} />
                      <div
                        style={{
                          ...buttoncss,
                          // backgroundColor: buttoncolor,
                          // color: textcolor,
                          // fontFamily: Name,
                        }}
                        className={`text-[100%] pn:max-ss:text-[30%] cursor-pointer ss:max-pp:text-[60%] pp:max-sm:text-[80%] ${
                          active === "h3" ? "" : ""
                        }`}
                      >
                        <div
                          style={{
                            fontFamily: font3 ? font3 : Name,
                          }}
                        >
                          {Button1}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* <div
              style={{
              height: "100%",
              width: "50%",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
               
              }}
            >
              <img
              id="h4"
              onClick={(e) => {
                e.stopPropagation();
                // setComponent(3);
                dispatch(setComponent(3));
                // setActive("h4")
                dispatch(setReduxActive("h4"));
                setChange(0);
              }}
              src={primeimage}
              alt="pic"
              style={{
                objectFit: "contain",
                height: "60%",
                width: "80%",
              }}
              />
            </div> */}
          </div>
        );
        tempPhone = (
          <div
            style={{
              backgroundImage: bgimage ? `url(${bgimage})` : null,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: background_color || "transparent",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "80%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                <div
                  style={{
                    fontFamily: font1 ? font1 : Name,
                    color: color1 ? color1 : textcolor,
                    fontSize: "24px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                  className={`text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%]  font-semibold text-black w-[100%] ${
                    active === "h1" ? "" : ""
                  }`}
                >
                  {header1}
                </div>
                <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                <div
                  style={{
                    // fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
                    fontFamily: font2 ? font2 : Name,
                    color: color2 ? color2 : textcolor,
                    fontSize: "14px",

                    fontWeight: "bold",
                    width: "100%",
                    marginTop: "2%",
                  }}
                  className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${
                    active === "h2" ? "" : ""
                  }`}
                >
                  {header2}
                </div>
                {showbutton && (
                  <div style={{ width: "100%", display: "flex" }}>
                    <a>
                      <link rel="stylesheet" href={Linkes} />
                      <div
                        style={{
                          ...buttoncss,
                          // backgroundColor: buttoncolor,
                          // color: textcolor,
                          // fontFamily: Name,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: font3 ? font3 : Name,
                          }}
                        >
                          {Button1}
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* <div
              style={{
              height: "50%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding:"10px"
              }}
            >
              <img
              id="h4"
              onClick={(e) => {
                e.stopPropagation();
                // setComponent(3);
                dispatch(setComponent(3));
                // setActive("h4")
                dispatch(setReduxActive("h4"));
                setChange(0);
              }}
              src={primeimage}
              alt="pic"
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
              />
            </div> */}
          </div>
        );
      } else if (template === 5) {
        tempWed = (
          <div
            style={{
              backgroundColor: background_color,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: bgimage ? `url(${bgimage})` : null,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: background_color || "transparent",
                height: "95%",
                width: "97%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "50%",
                  width: "60%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                  <div
                    style={{
                      fontFamily: font1 ? font1 : Name,
                      // fontFamily: component == 2 ? font1 ? font1 : Name : font1 ? font1 : Name,
                      color: color1 ? color1 : textcolor,
                      fontSize: "40px",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {header1}
                  </div>
                  <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                  <div
                    style={{
                      // fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
                      fontFamily: font2 ? font2 : Name,
                      color: color2 ? color2 : textcolor,
                    }}
                  >
                    {header2}
                  </div>
                  {showbutton && (
                    <div className="w-[100%] flex justify-center">
                      <a>
                        <link rel="stylesheet" href={Linkes} />
                        <div
                          style={{
                            ...buttoncss,
                            // backgroundColor: buttoncolor,
                            // color: textcolor,
                            // fontFamily: Name,
                          }}
                          className={`text-[100%] pn:max-ss:text-[30%] cursor-pointer ss:max-pp:text-[60%] pp:max-sm:text-[80%] ${
                            active === "h3" ? "" : ""
                          }`}
                        >
                          <div
                            style={{
                              fontFamily: font3 ? font3 : Name,
                            }}
                          >
                            {Button1}
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  height: "50%",
                  width: "100%",
                  justifyContent: "",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <img
                  src={primeimage}
                  alt="pic"
                  style={{
                    objectFit: "cover",
                    height: "80%",
                    border: "8px",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                />
              </div>
            </div>
          </div>
        );
        tempPhone = (
          <div
            style={{
              backgroundColor: background_color,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: bgimage ? `url(${bgimage})` : null,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: background_color || "transparent",
                height: "97%",
                width: "97%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "50%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <link rel="stylesheet" href={font1 ? link1 : Linkes} />
                  <div
                    style={{
                      fontFamily: font1 ? font1 : Name,
                      color: color1 ? color1 : textcolor,
                      fontSize: "24px",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                    className={`text-[200%] pn:max-ss:text-[50%] ss:max-pp:text-[100%] pp:max-sm:text-[160%]  font-semibold text-black w-[100%] ${
                      active === "h1" ? "" : ""
                    }`}
                  >
                    {header1}
                  </div>
                  <link rel="stylesheet" href={font2 ? link2 : Linkes} />
                  <div
                    style={{
                      // fontFamily: pfont.Font2 ? pfont.Font2 : pfont.Name,
                      fontFamily: font2 ? font2 : Name,
                      color: color2 ? color2 : textcolor,
                      fontSize: "14px",
                      height: "auto",
                      fontWeight: "bold",
                      width: "100%",
                      marginTop: "2%",
                    }}
                    className={`text-[100%] pn:max-ss:text-[30%] ss:max-pp:text-[60%] pp:max-sm:text-[80%] font-semibold text-black w-[100%] my-2 ${
                      active === "h2" ? "" : ""
                    }`}
                  >
                    {header2}
                  </div>
                  {showbutton && (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        marginTop: "2%",
                        justifyContent: "center",
                      }}
                    >
                      <a>
                        <link rel="stylesheet" href={Linkes} />
                        <div
                          style={{
                            ...buttoncss,
                            // backgroundColor: buttoncolor,
                            // color: textcolor,
                            // fontFamily: Name,
                          }}
                        >
                          <div
                            style={{
                              fontFamily: font3 ? font3 : Name,
                            }}
                          >
                            {Button1}
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div
                style={{
                  height: "50%",
                  width: "100%",
                  justifyContent: "",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <img
                  src={primeimage}
                  alt="pic"
                  style={{
                    objectFit: "cover",
                    height: "80%",
                    border: "8px",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                />
              </div>
            </div>
          </div>
        );
      }
      html2canvas(webRef.current).then(function (canvas) {
        const ctx = canvas.getContext("2d");
        setA(canvas.toDataURL());
      });

      console.log(template, "template");

      localStorage.setItem("image", JSON.stringify([primeimage]));
      localStorage.setItem("bgimage", JSON.stringify([bgimage]));

      const tempWeb = ReactDOMServer.renderToString(tempWed);
      const tempmob = ReactDOMServer.renderToString(tempPhone);
      const res = await axios.post(`${API}/v1/savetemppro/${id}`, {
        curr_template1: tempWeb,
        curr_template2: tempmob,
        // webt,
        community: perf.community,
        store: perf.store,
        about: perf.about,
        contact: perf.contact,
      });
      // console.log(res);
      if (res.data.success) {
        setLoading(false);
        toast.success("Templated Saved!");
        console.log(res.data);
      } else {
        console.log("Error");
      }
      setLoading(false);
    } catch (e) {
      console.log("Template not saved");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // console.log(component, "component")
  // console.log(trigger, "trigger")
  // console.log(trigger && size.width < 821)

  return (
    <Drawer
      open={trigger && size.width < 821}
      onClose={() => dispatch(setTrigger(false))}
    >
      <div className="h-screen w-screen flex flex-col bg-[#424242]">
        <Toaster />
        {pop && (
          <div className="fixed inset-0 z-50 w-screen flex justify-center items-center bg-black/50 sm:h-screen">
            <Membership setPop={setPop} />
          </div>
        )}
        {/* header */}
        <div className="h-[50px] w-[100%] border-b-2  bg-white flex flex-row justify-between pn:max-sm:fixed pn:max-sm:top-0 items-center">
          <div
            onClick={() => {
              setClose(Clic);
            }}
            className="flex justify-center items-center"
          >
            <Image
              src={back}
              alt="back"
              className="object-contain h-[100%] w-[30px]"
            />
            <div className="text-[#424242] font-semibold px-2">
              Customization
            </div>
          </div>
          <div className="pn:max-sm:hidden w-[50%] flex items-center justify-center gap-2">
            <div
              onClick={() => {
                setSwitcher(true);
              }}
              className={` py-1 w-[100px] flex justify-center items-center rounded-lg gap-2 select-none cursor-pointer duration-100 ${
                switcher === true ? "bg-[#EEF2FF]" : "bg-[#f7f7f7]"
              }`}
            >
              <HiOutlineDesktopComputer
                className={`${
                  switcher === true ? "text-[#6366F1]" : "text-[#424242]"
                }`}
              />
              <div
                className={`${
                  switcher === true ? "text-[#6366F1]" : "text-[#424242]"
                }`}
              >
                Web
              </div>
            </div>
            <div
              onClick={() => {
                setSwitcher(false);
              }}
              className={` py-1 w-[100px] flex justify-center items-center rounded-lg gap-2 select-none cursor-pointer duration-100 ${
                switcher === false ? "bg-[#EEF2FF]" : "bg-[#f7f7f7]"
              }`}
            >
              <CiMobile2
                className={`${
                  switcher === false ? "text-[#6366F1]" : "text-[#424242]"
                }`}
              />
              <div
                className={`${
                  switcher === false ? "text-[#6366F1]" : "text-[#424242]"
                }`}
              >
                Mobile
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div
              onClick={() => deleteTemp()}
              className={` select-none pn:max-sm:hidden text-white px-4 py-1 flex rounded-xl gap-1 mr-2 cursor-pointer font-semibold items-center ${
                savetemplate ? " bg-[#d03d3d] " : "bg-[#8cec74]"
              }`}
            >
              <div>Delete Template</div>
            </div>
            {loading ? (
              <div
                className={` select-none text-white px-6 py-2 min-w-[100px] hover:bg-[#6366F1] rounded-xl flex justify-center items-center gap-1 mr-2 cursor-pointer font-semibold ${
                  savetemplate ? " bg-[#6366F1] " : "bg-[#8cec74]"
                }`}
              >
                <div className="animate-spin">
                  <AiOutlineLoading3Quarters />
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  if (premium.ispremium) {
                    setPop(true);
                  } else {
                    setLoading(true);
                    const a = primeimage?.toString();
                    savetemplate(a);
                  }
                }}
                // onClick={() => {
                //   setComponents(false);
                // }}
                className={` select-none text-white px-4 py-1 hover:bg-[#6366F1] flex rounded-xl gap-1 mr-2 cursor-pointer font-semibold items-center ${
                  savetemplate ? " bg-[#6366F1] " : "bg-[#8cec74]"
                }`}
              >
                <IoFlashOutline className="font-semibold" />
                <div>Set Live</div>
              </div>
            )}
          </div>
        </div>
        <div className="h-[95%] w-[100%] flex flex-row pn:max-sm:flex-col-reverse bg-[#f1f1f1]">
          {/* Sidebar */}
          <div className="h-[100%] pn:max-sm:hidden bg-white z-10 sm:w-[80px] pn:max-sm:fixed pn:max-sm:bottom-0 flex justify-center items-center pn:max-sm:w-[100%] pn:max-sm:h-[60px]">
            <div className="h-[100%] bg-white pn:max-sm:rounded-t-xl px-1 w-[100%] flex flex-col sm:gap-2 sm:pt-10  pn:max-sm:justify-between items-center pn:max-sm:flex-row sm:border-r-[2px] sm:border-[#e7e7e7] ">
              {/* Components*/}
              <div
                onClick={() => {
                  // setComponent(1);
                  dispatch(setComponent(1));
                  setComponents(false);
                  dispatch(setTrigger(true));
                }}
                className={`${
                  component === 1
                    ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={Templates}
                alt="Templates"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <LuLayoutTemplate className="h-[25px] w-[25px] text-[#424242]" />
                <div className="text-[10px] text-[#424242] my-1">Templates</div>
              </div>

              <div
                onClick={() => {
                  // setComponent(2);
                  dispatch(setComponent(2));
                  setComponents(false);
                  dispatch(setTrigger(true));
                }}
                className={`${
                  component === 2
                    ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={textt}
                alt="Text"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <RxText className="h-[25px] w-[25px] text-[#424242]" />
                <div className="text-[10px] text-[#424242] my-1">Text</div>
              </div>
              <div
                onClick={() => {
                  // setComponent(3);

                  dispatch(setComponent(3));
                  setComponents(false);
                  dispatch(setTrigger(true));
                }}
                className={`${
                  component === 3
                    ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={Elements}
                alt="Elements"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <FaBuromobelexperte className="h-[25px] w-[25px] text-[#424242]" />
                <div className="text-[10px] text-[#424242] my-1">Elements</div>
              </div>
              <div
                onClick={() => {
                  // setComponent(4);
                  dispatch(setComponent(4));
                  setComponents(false);
                  dispatch(setTrigger(true));
                }}
                className={`${
                  component === 4
                    ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={Loader}
                alt="Loader"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <MdOutlineCloudUpload className="h-[25px] w-[25px] text-[#424242]" />
                <div className="text-[10px] text-[#424242] my-1">Upload</div>
              </div>
              <div
                onClick={() => {
                  // setComponent(5);
                  dispatch(setComponent(5));
                  setComponents(false);
                  dispatch(setTrigger(true));
                }}
                className={`${
                  component === 5
                    ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={Settings}
                alt="Settings"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <IoSettingsOutline className="h-[25px] w-[25px] text-[#424242]" />
                <div className="text-[10px] text-[#424242] my-1">Settings</div>
              </div>
            </div>
          </div>

          {/* sidebar Phone */}
          <div className="h-[100%] z-10 sm:hidden sm:w-[80px] pn:max-sm:fixed pn:max-sm:bottom-0 flex justify-center items-center pn:max-sm:w-[100%] pn:max-sm:h-[60px]">
            <div className="h-[100%] bg-white pn:max-sm:rounded-t-xl px-1 w-[100%] flex flex-col sm:gap-2 sm:pt-10  pn:max-sm:justify-between items-center pn:max-sm:flex-row sm:border-r-[2px] sm:border-[#e7e7e7] ">
              {/* Components*/}
              <DrawerTrigger>
                <div
                  onClick={() => {
                    // setComponent(1);
                    dispatch(setComponent(1));
                    setComponents(false);
                    dispatch(setTrigger(true));
                  }}
                  className={`${
                    component === 1
                      ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={Templates}
                alt="Templates"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <LuLayoutTemplate className="h-[25px] w-[25px] text-[#424242]" />
                  <div className="text-[10px] text-[#424242] my-1">
                    Templates
                  </div>
                </div>
              </DrawerTrigger>
              <DrawerTrigger open={trigger == "text"}>
                <div
                  onClick={() => {
                    // setComponent(2);
                    dispatch(setComponent(2));
                    setComponents(false);
                    dispatch(setTrigger(true));
                  }}
                  className={`${
                    component === 2
                      ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={textt}
                alt="Text"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <RxText className="h-[25px] w-[25px] text-[#424242]" />
                  <div className="text-[10px] text-[#424242] my-1">Text</div>
                </div>
              </DrawerTrigger>
              <DrawerTrigger>
                <div
                  onClick={() => {
                    // setComponent(3);
                    dispatch(setComponent(3));
                    setComponents(false);
                    dispatch(setTrigger(true));
                  }}
                  className={`${
                    component === 3
                      ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={Elements}
                alt="Elements"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <FaBuromobelexperte className="h-[25px] w-[25px] text-[#424242]" />
                  <div className="text-[10px] text-[#424242] my-1">
                    Elements
                  </div>
                </div>
              </DrawerTrigger>
              <DrawerTrigger>
                <div
                  onClick={() => {
                    // setComponent(4);
                    dispatch(setComponent(4));
                    setComponents(false);
                    dispatch(setTrigger(true));
                  }}
                  className={`${
                    component === 4
                      ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={Loader}
                alt="Loader"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <MdOutlineCloudUpload className="h-[25px] w-[25px] text-[#424242]" />
                  <div className="text-[10px] text-[#424242] my-1">Upload</div>
                </div>
              </DrawerTrigger>
              <DrawerTrigger>
                <div
                  onClick={() => {
                    // setComponent(5);
                    dispatch(setComponent(5));
                    setComponents(false);
                    dispatch(setTrigger(true));
                  }}
                  className={`${
                    component === 5
                      ? "flex flex-col bg-[#f6f6f6] rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={Settings}
                alt="Settings"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <IoSettingsOutline className="h-[25px] w-[25px] text-[#424242]" />
                  <div className="text-[10px] text-[#424242] my-1">
                    Settings
                  </div>
                </div>
              </DrawerTrigger>
            </div>
          </div>
          {/* side Components*/}
          <div
            className={` pn:max-sm:hidden ${
              components
                ? "h-[100%] w-[0px] pn:max-sm:w-[100%]  pn:max-sm:h-[0%] pn:max-sm:fixed duration-300"
                : "h-[100%] w-[500px] pn:max-sm:w-[100%] pn:max-sm:h-[70%] pn:max-sm:fixed duration-300"
            }`}
          >
            <div className="h-[100%] w-[100%] sm:flex sm:flex-row-reverse pn:max-sm:w-[100%] pn:max-sm:h-[100%] pn:max-sm:bg-[#fff] justify-end pn:max-sm:rounded-t-xl">
              <div
                className="w-full pn:max-sm:h-[10px] sm:w-[20px] flex pn:max-sm:items-end items-center justify-center"
                onClick={() => {
                  setComponents(true);
                }}
              >
                <div
                  className="pn:max-sm:hidden h-[80px] w-[100%] flex items-center justify-center rounded-r-xl bg-[#fff] "
                  onClick={() => {
                    setComponents(true);
                  }}
                >
                  <RxDoubleArrowLeft className="text-[#424242] w-[16px] h-[16px]" />
                </div>

                <div
                  className="sm:hidden h-[6px] w-[20%] rounded-full bg-[#f0f0f0] "
                  onClick={() => {
                    setComponents(true);
                  }}
                ></div>
              </div>
              {/* Template */}
              {component === 1 ? (
                <div className="h-[100%] w-[98%] pn:max-sm:w-[100%] bg-[#fff] pt-2 flex flex-col items-center pn:max-sm:rounded-t-3xl ">
                  {/* Choose template or styles */}
                  <div className="bg-[#f1f1f1] h-[6%] w-[90%] relative p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                    <div
                      className={`duration-150 bg-white rounded-xl h-[90%] w-[50%] absolute z-0  ${
                        changetemp === 1 ? "ml-[49%]" : " "
                      }`}
                    ></div>
                    <div
                      onClick={() => {
                        setChangetemp(0);
                      }}
                      className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                        changetemp === 0
                          ? "text-[#868686] "
                          : "text-[#868686] cursor-pointer font-medium"
                      }`}
                    >
                      Templates
                    </div>
                    <div
                      onClick={() => {
                        setChangetemp(1);
                      }}
                      className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                        changetemp === 1
                          ? "text-[#868686] "
                          : "text-[#868686] cursor-pointer font-medium"
                      }`}
                    >
                      Styles
                    </div>
                  </div>

                  <div
                    className={`h-[80%] w-[90%] justify-evenly ${style.customScrollbar} overflow-auto mt-4`}
                  >
                    {/* Templates */}
                    {changetemp === 0 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {/* {temp && <img src={temp} alt="image" />} */}
                        <Image
                          src={t1}
                          onClick={() => {
                            // setTemplate(1);
                            dispatch(setTemplate(1));
                          }}
                          className="w-[100%] hover:bg-[#28292c] hover:shadow-lg duration-75 h-[100px] bg-[#f7f7f7] p-1 my-2"
                        />
                        <Image
                          src={t2}
                          onClick={() => {
                            // setTemplate(2);
                            dispatch(setTemplate(2));
                          }}
                          className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                        />
                        <Image
                          src={t3}
                          onClick={() => {
                            // setTemplate(3);
                            dispatch(setTemplate(3));
                          }}
                          className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                        />
                        <Image
                          src={t4}
                          onClick={() => {
                            // setTemplate(4);
                            dispatch(setTemplate(4));
                          }}
                          className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                        />
                        <Image
                          src={t5}
                          onClick={() => {
                            // setTemplate(5);
                            dispatch(setTemplate(5));
                          }}
                          className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                        />
                      </div>
                    ) : null}
                    {/* Styles */}
                    {changetemp === 1 ? (
                      <>
                        <Styles />
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {/* Text */}
              {component === 2 ? (
                <div className="h-[100%] w-[100%] pn:max-sm:w-[100%]  bg-[#fff] items-center flex flex-col pn:max-sm:rounded-t-3xl ">
                  <div
                    className={`${
                      text1 === false
                        ? "hidden"
                        : "w-[90%] flex flex-col items-center mt-2"
                    }`}
                  >
                    {active === "h1" ? (
                      <>
                        <div className="flex w-full justify-between items-center">
                          {" "}
                          <div className=" w-[100%] text-[#9c9c9c] text-[14px] font-medium ">
                            Enter text
                          </div>{" "}
                          <div className="  text-[#9c9c9c] text-[14px] font-medium">
                            {text.length}/50
                          </div>
                        </div>
                        <textarea
                          value={text}
                          placeholder="enter text what you need"
                          className="bg-[#f7f7f7] font-semibold no-scrollbar resize-none border rounded-xl text-[#424242] w-[100%] mt-2 p-1 outline-none"
                          ref={textareaRef}
                          onChange={handleTextareaChange}
                          maxLength={100}
                        />
                        <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                      </>
                    ) : (
                      <>
                        <div className="flex w-full justify-between items-center">
                          {" "}
                          <div className=" w-[100%] text-[#9c9c9c] text-[14px] font-medium">
                            Enter text
                          </div>{" "}
                          <div className="  text-[#9c9c9c] text-[14px] font-medium">
                            {text.length}/200
                          </div>
                        </div>
                        <textarea
                          value={text}
                          placeholder="enter text what you need"
                          className="bg-[#f8f8f8] font-semibold no-scrollbar resize-none border rounded-xl text-[#424242] h-[] w-[100%] mt-2 p-1 outline-none"
                          ref={textareaRef}
                          onChange={handleTextareaChange}
                          maxLength={300}
                        />
                        <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                      </>
                    )}
                  </div>
                  <div
                    className={` ${
                      text1 === false
                        ? "h-[100%] w-[90%] justify-evenly mt-2"
                        : "h-[80%] w-[90%] justify-evenly mt-2"
                    }`}
                  >
                    {" "}
                    <div className="bg-[#f7f7f7]  border rounded-xl my-2 h-[40px] flex justify-evenly overflow-hidden w-full">
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-[#f7f7f7] text-[#424242] w-[80%] outline-none h-full p-2"
                        placeholder="Search"
                      />
                      <div className=" w-[10%] bg-[#f7f7f7] h-full">
                        <MdSearch className="text-[#d1d1d1] w-[100%] h-full" />
                      </div>
                    </div>
                    <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                    <div className="h-auto">
                      <Fontss search={search} />
                    </div>
                  </div>
                </div>
              ) : null}
              {/* Element */}
              {component === 3 ? (
                <div className="h-[100%] select-none w-[98%] pt-2 pn:max-sm:w-[100%] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                  {/* Choose Image,background or button */}
                  <div className="bg-[#f1f1f1] h-[6%] w-[90%] relative p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                    <div
                      className={`duration-150 bg-white rounded-xl h-[90%] w-[33.33%] absolute z-0  ${
                        (change === 1 ? "ml-[33.33%]" : "",
                        change === 2 ? " ml-[65.66%]" : "")
                      }`}
                    ></div>
                    <div
                      onClick={() => {
                        setChange(0);
                      }}
                      className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                        change === 0 ? "text-[#424242] " : " text-[#424242] "
                      }`}
                    >
                      Image
                    </div>
                    <div
                      onClick={() => {
                        setChange(1);
                      }}
                      className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                        change === 1 ? "text-[#424242] " : " text-[#424242]  "
                      }`}
                    >
                      Background
                    </div>
                    <div
                      onClick={() => {
                        setChange(2);
                      }}
                      className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                        change === 2 ? "text-[#424242]" : " text-[#424242]"
                      }`}
                    >
                      Button
                    </div>
                  </div>
                  <div className="h-[80%] w-[90%] justify-evenly ">
                    {/* Image */}
                    {change === 0 ? (
                      <div className="h-full w-[100%] ">
                        <div className="bg-[#f7f7f7] border my-2 h-[40px] flex justify-evenly rounded-xl overflow-hidden w-full">
                          <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-[#f7f7f7] text-[#424242] w-[80%] outline-none h-full p-2"
                            placeholder="Search"
                          />
                          <div className=" w-[10%] bg-[#f7f7f7] h-full">
                            <MdSearch className="text-[#cfcfcf] w-[100%] h-full" />
                          </div>
                        </div>
                        <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        <div
                          className={`w-[100%] pn:max-sm:w-[100%] gap-2 grid grid-cols-2 ${style.customScrollbar} overflow-auto h-[70vh] mt-2`}
                        >
                          {search ? (
                            pic1.length > 0 &&
                            pic1
                              .filter((p, i) => {
                                return p.name.some((nameElement) =>
                                  nameElement.includes(search)
                                );
                              })
                              .map((p, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    dispatch(setimage(p.link));
                                    if (p.premium) {
                                      if (data.memberships === "Free") {
                                        dispatch(setPremium({ type: "image" }));
                                      }
                                    } else {
                                      if (data.memberships === "Free") {
                                        dispatch(
                                          setRemovePremium({ type: "image" })
                                        );
                                      }
                                    }
                                  }}
                                  className={`flex items-center justify-center w-[140px] h-[140px] ${style.customScrollbar} overflow-auto hover:bg-[#484a52] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer`}
                                >
                                  <div className="w-[90%] h-[90%] relative">
                                    <img
                                      src={p.link}
                                      alt="pic"
                                      className="p-2 flex-row flex shadow-lg object-contain h-full w-full rounded-sm "
                                    />
                                    {data.memberships === "Free" && (
                                      <>
                                        {" "}
                                        {p.premium && (
                                          <div className="absolute bottom-2 right-2 flex justify-center items-end">
                                            <div
                                              className=" bg-[#171717] 
                                  p-1 rounded-full self-end flex "
                                            >
                                              <FaCrown className=" text-orange-300 " />
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    )}
                                  </div>
                                </div>
                              ))
                          ) : (
                            <>
                              {pic1.length > 0 &&
                                pic1.map((p, i) => (
                                  <div
                                    key={i}
                                    onClick={() => {
                                      dispatch(setimage(p.link));
                                      if (p.premium) {
                                        if (data.memberships === "Free") {
                                          dispatch(
                                            setPremium({ type: "image" })
                                          );
                                        }
                                      } else {
                                        if (data.memberships === "Free") {
                                          dispatch(
                                            setRemovePremium({ type: "image" })
                                          );
                                        }
                                      }
                                    }}
                                    className={`flex items-center justify-center w-[140px] h-[140px] ${style.customScrollbar} overflow-auto hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200`}
                                  >
                                    <div className="w-[90%] h-[90%] relative">
                                      <img
                                        src={p.link}
                                        alt="pic"
                                        className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 "
                                      />
                                      {data.memberships === "Free" && (
                                        <>
                                          {" "}
                                          {p.premium && (
                                            <div className="absolute bottom-2 right-2 flex justify-center items-end">
                                              <div
                                                className=" bg-[#171717] 
                                    p-1 rounded-full self-end flex "
                                              >
                                                <FaCrown className=" text-orange-300 " />
                                              </div>
                                            </div>
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </div>
                                ))}
                            </>
                          )}
                        </div>
                        {/* <div>Recent Image</div>
                      <div className={`w-[100%] pn:max-sm:w-[100%] grid grid-cols-2 ${style.customScrollbar} overflow-auto h-[100%]`}>
                        {limg &&
                          limg.map((p, i) => (
                            <div
                              onClick={() => {
                                dispatch(setimage(p));
                              }}
                              className={`flex items-center justify-center w-[140px] h-[140px] ${style.customScrollbar} overflow-auto hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200`}
                            >

                              <div className="w-[90%] h-[90%]">
                                <img
                                  key={i}
                                  src={p}
                                  alt="pic"
                                  className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 "
                                />
                              </div>
                            </div>
                          ))}
                      </div> */}
                      </div>
                    ) : null}
                    {/* backgrounds */}
                    {change === 1 ? (
                      <div className={`h-[550px] w-[100%]`}>
                        <Background bgimg={bgimg} />
                      </div>
                    ) : null}
                    {/* Buttons */}
                    {change === 2 ? (
                      <div>
                        <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        <div className="text-[#9c9c9c] flex justify-between items-center mt-2 text-[14px]">
                          <div>Use Button</div>
                          <div>
                            <Switch
                              id="button"
                              checked={showbutton}
                              onCheckedChange={() => dispatch(setShowbutton())}
                            />
                          </div>
                        </div>
                        <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        {showbutton && (
                          <div className="mt-1">
                            <div className="text-[#9c9c9c] text-[14px]">
                              Enter button Text
                            </div>
                            <input
                              value={Button1}
                              onChange={(e) => {
                                setButton1(e.target.value);
                              }}
                              placeholder="enter button text"
                              maxLength={50}
                              className=" bg-[#f7f7f7] border rounded-xl text-[#424242] w-[100%] p-1 max-h-[200px] outline-none "
                            />
                          </div>
                        )}
                        <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        {showbutton && (
                          <div className="mt-2">
                            <div className="text-[#9c9c9c] text-[14px]">
                              Enter link
                            </div>
                            <input
                              value={Link1}
                              onChange={(e) => {
                                setLink1(e.target.value);
                              }}
                              placeholder="Enter link "
                              className=" bg-[#f7f7f7] border rounded-xl text-[#424242] w-[100%] p-1 max-h-[200px] outline-none "
                            />
                          </div>
                        )}
                        <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        {showbutton && (
                          <div className=" w-full">
                            <div className="pt-2 text-[14px] text-[#9c9c9c]">
                              Select button
                            </div>
                            <Button />
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {/* web */}
              {component === 4 ? (
                <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                  <div className="h-[80%] w-[90%] justify-evenly mt-4">
                    {/* Image */}
                    <div className="h-[550px] w-[100%]">
                      <div className=" items-center flex justify-center">
                        <div className="grid bg-[#f4f4f4] text-[#424242] w-full grid-col-1 gap-3 p-4 rounded-xl">
                          <div className="font-semibold ">Upload Photo</div>
                          <input
                            type="file"
                            name="myFile"
                            id="fileInput"
                            placeholder="Upload file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="w-[100%] self-start hidden text-[#424242]"
                          />
                          {file ? (
                            <div className="flex items-center justify-center h-full w-full">
                              <Image
                                src={URL.createObjectURL(file)}
                                alt="upload"
                                width={400}
                                height={400}
                                className="w-full h-full flex self-center max-w-[160px] object-cover"
                              />
                            </div>
                          ) : (
                            <label
                              htmlFor="fileInput"
                              className="flex flex-col gap-1 border-dashed border-2 rounded-md p-3 justify-center items-center"
                            >
                              <>
                                <div>
                                  <MdOutlineCloudUpload className="text-4xl" />
                                </div>
                                <div className="text-xs mt-1 text-center">
                                  Browse and chose the files you want to upload
                                  from your computer
                                </div>
                              </>
                            </label>
                          )}

                          {file && (
                            <>
                              {" "}
                              {loading ? (
                                <button
                                  className="bg-blue-800 p-2 flex justify-center items-center text-white px-5 rounded-xl font-semibold"
                                  disabled
                                >
                                  <div className="animate-spin">
                                    <AiOutlineLoading3Quarters />
                                  </div>
                                </button>
                              ) : (
                                <button
                                  className="bg-blue-800 p-2 text-white px-5 rounded-xl font-semibold"
                                  onClick={() => uploadcont()}
                                >
                                  Upload
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="border-b-[0.5px] w-full border-dotted mt-2"></div>
                      <div className="text-[#9c9c9c] font-medium text-[14px] mt-2">
                        Uploaded Images
                      </div>
                      <div className="h-[350px] w-[290px] pn:max-sm:w-[100%] ">
                        <div
                          className={`w-[100%] pn:max-sm:w-[100%] ${style.customScrollbar} overflow-auto grid grid-cols-2 h-[100%]`}
                        >
                          {link &&
                            link.map((m, i) => (
                              <div
                                key={i}
                                onClick={() => {
                                  dispatch(setimage(m));
                                }}
                                className="flex items-center justify-center w-[130px] mt-1 h-[130px] hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200"
                              >
                                <div className="w-[90%] h-[90%]">
                                  <img
                                    src={m}
                                    alt="pic"
                                    className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 "
                                  />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    {/* backgrounds */}
                  </div>
                </div>
              ) : null}
              {/* adv options */}
              {component === 5 ? (
                <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                  <div className="w-[100%] h-[100%] text-[#424242] p-1">
                    <div className="flex flex-col my-2 gap-1">
                      <div className="font-medium pl-2">
                        <div>Advance options</div>
                      </div>
                      <div className="border-b-[0.5px] border-dotted" />
                      <div className="flex flex-col gap-4 px-2 my-3">
                        <div className="flex flex-col w-full">
                          <div className="font-semibold">
                            Show About Section
                          </div>
                          <div className="flex w-full justify-between items-center">
                            <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                              Display a link to a screen with basic information
                              about you.
                            </div>
                            {perf.about ? (
                              <LiaToggleOnSolid
                                className="text-2xl"
                                onClick={() =>
                                  dispatch(setPerf({ parameter: "about" }))
                                }
                              />
                            ) : (
                              <LiaToggleOffSolid
                                className="text-2xl"
                                onClick={() =>
                                  dispatch(setPerf({ parameter: "about" }))
                                }
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <div className="font-semibold">
                            Show Store Section
                          </div>
                          <div className="flex w-full justify-between items-center">
                            <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                              Display your products
                            </div>
                            <div>
                              {perf.store ? (
                                <LiaToggleOnSolid
                                  className="text-2xl"
                                  onClick={() =>
                                    dispatch(setPerf({ parameter: "store" }))
                                  }
                                />
                              ) : (
                                <LiaToggleOffSolid
                                  className="text-2xl"
                                  onClick={() =>
                                    dispatch(setPerf({ parameter: "store" }))
                                  }
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <div className="font-semibold">
                            Show Community Section
                          </div>
                          <div className="flex w-full justify-between items-center">
                            <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                              Display your community with others
                            </div>
                            <div>
                              {perf.community ? (
                                <LiaToggleOnSolid
                                  className="text-2xl"
                                  onClick={() =>
                                    dispatch(
                                      setPerf({ parameter: "community" })
                                    )
                                  }
                                />
                              ) : (
                                <LiaToggleOffSolid
                                  className="text-2xl"
                                  onClick={() =>
                                    dispatch(
                                      setPerf({ parameter: "community" })
                                    )
                                  }
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <div className="font-semibold">
                            Contant information
                          </div>
                          <div className="flex w-full justify-between items-center">
                            <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                              Display your Contant to public
                            </div>
                            <div>
                              {perf.contact ? (
                                <LiaToggleOnSolid
                                  className="text-2xl"
                                  onClick={() =>
                                    dispatch(setPerf({ parameter: "contact" }))
                                  }
                                />
                              ) : (
                                <LiaToggleOffSolid
                                  className="text-2xl"
                                  onClick={() =>
                                    dispatch(setPerf({ parameter: "contact" }))
                                  }
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col w-full">
                          <div
                            onClick={() => deleteTemp()}
                            className={`sm:hidden select-none justify-center text-white px-4 py-1 flex rounded-xl gap-1 mr-2 cursor-pointer font-semibold items-center ${
                              savetemplate ? " bg-[#d03d3d] " : "bg-[#8cec74]"
                            }`}
                          >
                            <div>Delete Template</div>
                          </div>
                        </div>

                        {/* <div className="flex gap-2 items-center">
	<div
	  className="bg-white w-6 h-6 rounded-xl flex justify-center items-center
"
	>
	  <div>
		<GrAdd />
	  </div>
	</div>
	<div>Add a new</div>
  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* side Components for phone */}
          <div className="sm:hidden">
            <DrawerContent ref={drawerRef}>
              <div className="h-[100%] w-[100%] sm:flex sm:flex-row-reverse pn:max-sm:w-[100%] pn:max-sm:h-[500px] pn:max-sm:bg-[#fefefe] justify-end pn:max-sm:rounded-t-xl">
                {component === 1 ? (
                  <div className="h-[100%] w-[98%] pn:max-sm:w-[100%] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl ">
                    {/* Choose template or styles */}
                    <div className="bg-[#f1f1f1] h-[6%] w-[90%] relative mt-2 p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                      <div
                        className={`duration-150 bg-white rounded-xl h-[90%] w-[50%] absolute z-0  ${
                          changetemp === 1 ? "ml-[49%]" : " "
                        }`}
                      ></div>
                      <div
                        onClick={() => {
                          setChangetemp(0);
                        }}
                        className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                          changetemp === 0
                            ? "text-[#868686] "
                            : "text-[#868686] cursor-pointer font-medium"
                        }`}
                      >
                        Templates
                      </div>
                      <div
                        onClick={() => {
                          setChangetemp(1);
                        }}
                        className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                          changetemp === 1
                            ? "text-[#868686] "
                            : "text-[#868686] cursor-pointer font-medium"
                        }`}
                      >
                        Styles
                      </div>
                    </div>

                    <div
                      className={`h-[80%] w-[90%] justify-evenly ${style.customScrollbar} overflow-auto mt-4`}
                    >
                      {/* Templates */}
                      {changetemp === 0 ? (
                        <div className="grid grid-cols-2 gap-2">
                          {/* {temp && <img src={temp} alt="image" />} */}
                          <Image
                            src={t1}
                            onClick={() => {
                              // setTemplate(1);
                              dispatch(setTemplate(1));
                            }}
                            className="w-[100%] hover:bg-[#28292c] hover:shadow-lg duration-75 h-[100px] bg-[#f7f7f7] p-1 my-2"
                          />
                          <Image
                            src={t2}
                            onClick={() => {
                              // setTemplate(2);
                              dispatch(setTemplate(2));
                            }}
                            className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                          />
                          <Image
                            src={t3}
                            onClick={() => {
                              // setTemplate(3);
                              dispatch(setTemplate(3));
                            }}
                            className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                          />
                          <Image
                            src={t4}
                            onClick={() => {
                              // setTemplate(4);
                              dispatch(setTemplate(4));
                            }}
                            className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                          />
                          <Image
                            src={t5}
                            onClick={() => {
                              // setTemplate(5);
                              dispatch(setTemplate(5));
                            }}
                            className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                          />
                        </div>
                      ) : null}
                      {/* Styles */}
                      {changetemp === 1 ? (
                        <>
                          <Styles />
                        </>
                      ) : null}
                    </div>
                  </div>
                ) : null}
                {component === 2 ? (
                  <div className="h-[100%] w-[100%] pn:max-sm:w-[100%] overflow-auto bg-[#fff] items-center flex flex-col pn:max-sm:rounded-t-3xl ">
                    <div
                      className={`${
                        text1 === false
                          ? "hidden"
                          : "w-[90%] flex flex-col items-center mt-2"
                      }`}
                    >
                      {active === "h1" ? (
                        <>
                          <div className="flex w-full justify-between items-center">
                            {" "}
                            <div className=" w-[100%] text-[#9c9c9c] text-[14px] font-medium ">
                              Enter text
                            </div>{" "}
                            <div className="  text-[#9c9c9c] text-[14px] font-medium">
                              {text.length}/50
                            </div>
                          </div>
                          <textarea
                            value={text}
                            placeholder="enter text what you need"
                            className="bg-[#f7f7f7] font-semibold no-scrollbar resize-none border rounded-xl text-[#424242] w-[100%] mt-2 p-1 outline-none"
                            ref={textareaRef}
                            onChange={handleTextareaChange}
                            maxLength={100}
                          />
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        </>
                      ) : (
                        <>
                          <div className="flex w-full justify-between items-center">
                            {" "}
                            <div className=" w-[100%] text-[#9c9c9c] text-[14px] font-medium">
                              Enter text
                            </div>{" "}
                            <div className="  text-[#9c9c9c] text-[14px] font-medium">
                              {text.length}/200
                            </div>
                          </div>
                          <textarea
                            value={text}
                            placeholder="enter text what you need"
                            className="bg-[#f8f8f8] font-semibold no-scrollbar resize-none border rounded-xl text-[#424242] h-[] w-[100%] mt-2 p-1 outline-none"
                            ref={textareaRef}
                            onChange={handleTextareaChange}
                            maxLength={300}
                          />
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        </>
                      )}
                    </div>
                    <div
                      className={` ${
                        text1 === false
                          ? "h-[100%] w-[90%] justify-evenly mt-2"
                          : "h-[80%] w-[90%] justify-evenly mt-2"
                      }`}
                    >
                      {" "}
                      <div className="bg-[#f7f7f7]  border rounded-xl my-2 h-[40px] flex justify-evenly overflow-hidden w-full">
                        <input
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="bg-[#f7f7f7] text-[#424242] w-[80%] outline-none h-full p-2"
                          placeholder="Search"
                        />
                        <div className=" w-[10%] bg-[#f7f7f7] h-full">
                          <MdSearch className="text-[#d1d1d1] w-[100%] h-full" />
                        </div>
                      </div>
                      <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                      <div className="h-[250px]">
                        <Fontss search={search} />
                      </div>
                    </div>
                  </div>
                ) : null}
                {component === 3 ? (
                  <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                    {/* Choose Image,background or button */}
                    <div className="bg-[#f1f1f1] h-[6%] w-[90%] mt-2 relative p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                      <div
                        className={`duration-150 bg-white rounded-xl h-[90%] w-[33.33%] absolute z-0  ${
                          (change === 1 ? "ml-[33.33%]" : "",
                          change === 2 ? " ml-[65.66%]" : "")
                        }`}
                      ></div>
                      <div
                        onClick={() => {
                          setChange(0);
                        }}
                        className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                          change === 0 ? "text-[#424242] " : " text-[#424242] "
                        }`}
                      >
                        Image
                      </div>
                      <div
                        onClick={() => {
                          setChange(1);
                        }}
                        className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                          change === 1 ? "text-[#424242] " : " text-[#424242]  "
                        }`}
                      >
                        Background
                      </div>
                      <div
                        onClick={() => {
                          setChange(2);
                        }}
                        className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                          change === 2 ? "text-[#424242]" : " text-[#424242]"
                        }`}
                      >
                        Button
                      </div>
                    </div>
                    <div className="h-[80%] w-[90%] justify-evenly ">
                      {/* Image */}
                      {change === 0 ? (
                        <div className="h-[510px] w-[100%] ">
                          <div className="bg-[#f7f7f7] border my-2 h-[40px] flex justify-evenly rounded-xl overflow-hidden w-full">
                            <input
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className="bg-[#f7f7f7] text-[#424242] w-[80%] outline-none h-full p-2"
                              placeholder="Search"
                            />
                            <div className=" w-[10%] bg-[#f7f7f7] h-full">
                              <MdSearch className="text-[#cfcfcf] w-[100%] h-full" />
                            </div>
                          </div>
                          <div
                            className={`w-[100%] pn:max-sm:w-[100%] grid grid-cols-2 ${style.customScrollbar} overflow-auto h-[100%]`}
                          >
                            {search ? (
                              pic1.length > 0 &&
                              pic1
                                .filter((p, i) => {
                                  return p.name.some((nameElement) =>
                                    nameElement.includes(search)
                                  );
                                })
                                .map((p, i) => (
                                  <div
                                    key={i}
                                    onClick={() => {
                                      if (!p.premium) {
                                        dispatch(setimage(p.link));
                                      } else {
                                        console.log("Aukat nhi Use Krne ki");
                                      }
                                    }}
                                    className={`flex items-center justify-center w-[140px] h-[140px] ${style.customScrollbar} overflow-auto hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200`}
                                  >
                                    <div className="w-[90%] h-[90%] relative">
                                      <img
                                        src={p.link}
                                        alt="pic"
                                        className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 "
                                      />
                                      {p.premium && (
                                        <div className="absolute bottom-2 right-2 flex justify-center items-end">
                                          <div
                                            className=" bg-[#171717] 
                                  p-1 rounded-full self-end flex "
                                          >
                                            <FaCrown className=" text-orange-300 " />
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))
                            ) : (
                              <>
                                {pic1.length > 0 &&
                                  pic1.map((p, i) => (
                                    <div
                                      key={i}
                                      onClick={() => {
                                        dispatch(setimage(p.link));
                                        if (p.premium) {
                                          dispatch(
                                            setPremium({ type: "image" })
                                          );
                                        } else {
                                          dispatch(
                                            setRemovePremium({ type: "image" })
                                          );
                                        }
                                      }}
                                      className={`flex items-center justify-center w-[140px] h-[140px] ${style.customScrollbar} overflow-auto hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200`}
                                    >
                                      <div className="w-[90%] h-[90%] relative">
                                        <img
                                          src={p.link}
                                          alt="pic"
                                          className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 "
                                        />
                                        {p.premium && (
                                          <div className="absolute bottom-2 right-2 flex justify-center items-end">
                                            <div
                                              className=" bg-[#171717] 
                                    p-1 rounded-full self-end flex "
                                            >
                                              <FaCrown className=" text-orange-300 " />
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                              </>
                            )}
                          </div>
                          {/* <div>Recent Image</div>
                      <div className={`w-[100%] pn:max-sm:w-[100%] grid grid-cols-2 ${style.customScrollbar} overflow-auto h-[100%]`}>
                        {limg &&
                          limg.map((p, i) => (
                            <div
                              onClick={() => {
                                dispatch(setimage(p));
                              }}
                              className={`flex items-center justify-center w-[140px] h-[140px] ${style.customScrollbar} overflow-auto hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200`}
                            >

                              <div className="w-[90%] h-[90%]">
                                <img
                                  key={i}
                                  src={p}
                                  alt="pic"
                                  className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 "
                                />
                              </div>
                            </div>
                          ))}
                      </div> */}
                        </div>
                      ) : null}
                      {/* backgrounds */}
                      {change === 1 ? (
                        <div className={`h-[550px] w-[100%]`}>
                          <Background bgimg={bgimg} />
                        </div>
                      ) : null}
                      {/* Buttons */}
                      {change === 2 ? (
                        <div>
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                          <div className="text-[#9c9c9c] flex justify-between items-center mt-2 text-[14px]">
                            <div>Use Button</div>
                            <div>
                              <Switch
                                id="button"
                                checked={showbutton}
                                onCheckedChange={() =>
                                  dispatch(setShowbutton())
                                }
                              />
                            </div>
                          </div>
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                          {showbutton && (
                            <div className="mt-1">
                              <div className="text-[#9c9c9c] text-[14px]">
                                Enter button Text
                              </div>
                              <input
                                value={Button1}
                                onChange={(e) => {
                                  setButton1(e.target.value);
                                }}
                                placeholder="enter button text"
                                maxLength={50}
                                className=" bg-[#f7f7f7] border rounded-xl text-[#424242] w-[100%] p-1 max-h-[200px] outline-none "
                              />
                            </div>
                          )}
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                          {showbutton && (
                            <div className="mt-2">
                              <div className="text-[#9c9c9c] text-[14px]">
                                Enter link
                              </div>
                              <input
                                value={Link1}
                                onChange={(e) => {
                                  setLink1(e.target.value);
                                }}
                                placeholder="Enter link "
                                className=" bg-[#f7f7f7] border rounded-xl text-[#424242] w-[100%] p-1 max-h-[200px] outline-none "
                              />
                            </div>
                          )}
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                          {showbutton && (
                            <div className=" w-full">
                              <div className="pt-2 text-[14px] text-[#9c9c9c]">
                                Select button
                              </div>
                              <Button />
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
                {/* phone */}
                {component === 4 ? (
                  <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                    <div className="h-[80%] w-[90%] justify-evenly mt-4">
                      {/* Image */}
                      <div className="h-[550px] w-[100%]">
                        <div className=" items-center flex justify-center">
                          <div className="grid bg-[#f4f4f4] text-[#424242] w-full grid-col-1 gap-3 p-4 rounded-xl">
                            <div className="font-semibold ">Upload Photo</div>
                            <input
                              type="file"
                              name="myFile"
                              id="fileInput"
                              placeholder="Upload file"
                              onChange={(e) => setFile(e.target.files[0])}
                              className="w-[100%] self-start hidden text-[#424242]"
                            />
                            {file ? (
                              <div className="w-full flex justify-center items-center ">
                                <Image
                                  src={URL.createObjectURL(file)}
                                  alt="upload"
                                  width={400}
                                  height={400}
                                  className="w-full h-full flex items-center justify-center max-w-[160px] object-cover"
                                />
                              </div>
                            ) : (
                              <label
                                htmlFor="fileInput"
                                className="flex flex-col gap-1 border-dashed border-2 rounded-md p-3 justify-center items-center"
                              >
                                <>
                                  <div>
                                    <MdOutlineCloudUpload className="text-4xl" />
                                  </div>
                                  <div className="text-xs mt-1 text-center">
                                    Browse and chose the files you want to
                                    upload from your computer
                                  </div>
                                </>
                              </label>
                            )}
                            {file && (
                              <>
                                {" "}
                                {loading ? (
                                  <button
                                    className="bg-blue-800 p-2 flex justify-center items-center text-white px-5 rounded-xl font-semibold"
                                    disabled
                                  >
                                    <div className="animate-spin">
                                      <AiOutlineLoading3Quarters />
                                    </div>
                                  </button>
                                ) : (
                                  <button
                                    className="bg-blue-800 p-2 text-white px-5 rounded-xl font-semibold"
                                    onClick={() => uploadcont()}
                                  >
                                    Upload
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                        <div className="text-[#424242] mt-2">
                          Uploaded Images
                        </div>
                        <div className="h-[350px] w-[290px] pn:max-sm:w-[100%] ">
                          <div
                            className={`w-[100%] pn:max-sm:w-[100%] ${style.customScrollbar} overflow-auto grid grid-cols-2 h-[100%]`}
                          >
                            {link &&
                              link.map((m, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    dispatch(setimage(m));
                                  }}
                                  className="flex items-center justify-center w-[130px] mt-1 h-[130px] hover:bg-[#28292c] hover:shadow-lg hover:scale-105 duration-75 select-none cursor-pointer bg-slate-200"
                                >
                                  <div className="w-[90%] h-[90%]">
                                    <img
                                      src={m}
                                      alt="pic"
                                      className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm bg-slate-200 "
                                    />
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      {/* backgrounds */}
                    </div>
                  </div>
                ) : null}
                {/* adv options */}
                {component === 5 ? (
                  <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                    <div className="w-[100%] h-[100%] text-[#424242] p-1">
                      <div className="flex flex-col my-2 gap-1">
                        <div className="font-medium pl-2">
                          <div>Advance options</div>
                        </div>
                        <div className="border-b-[0.5px] border-dotted" />
                        <div className="flex flex-col gap-4 px-2 my-3">
                          <div className="flex flex-col w-full">
                            <div className="font-semibold">
                              Show About Section
                            </div>
                            <div className="flex w-full justify-between items-center">
                              <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                                Display a link to a screen with basic
                                information about you.
                              </div>
                              {perf.about ? (
                                <LiaToggleOnSolid
                                  className="text-2xl"
                                  onClick={() =>
                                    dispatch(setPerf({ parameter: "about" }))
                                  }
                                />
                              ) : (
                                <LiaToggleOffSolid
                                  className="text-2xl"
                                  onClick={() =>
                                    dispatch(setPerf({ parameter: "about" }))
                                  }
                                />
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="font-semibold">
                              Show Store Section
                            </div>
                            <div className="flex w-full justify-between items-center">
                              <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                                Display your products
                              </div>
                              <div>
                                {perf.store ? (
                                  <LiaToggleOnSolid
                                    className="text-2xl"
                                    onClick={() =>
                                      dispatch(setPerf({ parameter: "store" }))
                                    }
                                  />
                                ) : (
                                  <LiaToggleOffSolid
                                    className="text-2xl"
                                    onClick={() =>
                                      dispatch(setPerf({ parameter: "store" }))
                                    }
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="font-semibold">
                              Show Community Section
                            </div>
                            <div className="flex w-full justify-between items-center">
                              <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                                Display your community with others
                              </div>
                              <div>
                                {perf.community ? (
                                  <LiaToggleOnSolid
                                    className="text-2xl"
                                    onClick={() =>
                                      dispatch(
                                        setPerf({ parameter: "community" })
                                      )
                                    }
                                  />
                                ) : (
                                  <LiaToggleOffSolid
                                    className="text-2xl"
                                    onClick={() =>
                                      dispatch(
                                        setPerf({ parameter: "community" })
                                      )
                                    }
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full">
                            <div className="font-semibold">
                              Contant information
                            </div>
                            <div className="flex w-full justify-between items-center">
                              <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                                Display your Contant to public
                              </div>
                              <div>
                                {perf.contact ? (
                                  <LiaToggleOnSolid
                                    className="text-2xl"
                                    onClick={() =>
                                      dispatch(
                                        setPerf({ parameter: "contact" })
                                      )
                                    }
                                  />
                                ) : (
                                  <LiaToggleOffSolid
                                    className="text-2xl"
                                    onClick={() =>
                                      dispatch(
                                        setPerf({ parameter: "contact" })
                                      )
                                    }
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full">
                            <div
                              onClick={() => deleteTemp()}
                              className={`sm:hidden select-none justify-center text-white px-4 py-1 flex rounded-xl gap-1 mr-2 cursor-pointer font-semibold items-center ${
                                savetemplate ? " bg-[#d03d3d] " : "bg-[#8cec74]"
                              }`}
                            >
                              <div>Delete Template</div>
                            </div>
                          </div>

                          {/* <div className="flex gap-2 items-center">
	<div
	  className="bg-white w-6 h-6 rounded-xl flex justify-center items-center
"
	>
	  <div>
		<GrAdd />
	  </div>
	</div>
	<div>Add a new</div>
  </div> */}
                        </div>
                        <div>
                          {perf.store ? (
                            <LiaToggleOnSolid
                              className="text-2xl"
                              onClick={() =>
                                dispatch(setPerf({ parameter: "store" }))
                              }
                            />
                          ) : (
                            <LiaToggleOffSolid
                              className="text-2xl"
                              onClick={() =>
                                dispatch(setPerf({ parameter: "store" }))
                              }
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </DrawerContent>
          </div>

          {/* main */}
          <div className="h-[100%] w-[100%]  bg-[#f1f1f1] flex pn:max-sm:flex-col items-center justify-center">
            {/* Phone Switcher */}
            <div className="w-[50%] sm:hidden flex items-center justify-center fixed top-14 gap-2">
              <div
                onClick={() => {
                  setSwitcher(true);
                }}
                className={` py-1 w-[100px] flex justify-center items-center rounded-lg gap-2 select-none cursor-pointer duration-100 ${
                  switcher === true ? "bg-[#EEF2FF]" : "bg-[#ffffff]"
                }`}
              >
                <HiOutlineDesktopComputer
                  className={`${
                    switcher === true ? "text-[#6366F1]" : "text-[#424242]"
                  }`}
                />
                <div
                  className={`${
                    switcher === true ? "text-[#6366F1]" : "text-[#424242]"
                  }`}
                >
                  Web
                </div>
              </div>
              <div
                onClick={() => {
                  setSwitcher(false);
                }}
                className={` py-1 w-[100px] flex justify-center items-center rounded-lg gap-2 select-none cursor-pointer duration-100 ${
                  switcher === false ? "bg-[#EEF2FF]" : "bg-[#ffffff]"
                }`}
              >
                <CiMobile2
                  className={`${
                    switcher === false ? "text-[#6366F1]" : "text-[#424242]"
                  }`}
                />
                <div
                  className={`${
                    switcher === false ? "text-[#6366F1]" : "text-[#424242]"
                  }`}
                >
                  Mobile
                </div>
              </div>
            </div>
            <div
              ref={webRef}
              className={`duration-75 ${
                switcher === true
                  ? "xl:max-txl:h-[70%] xl:max-txl:w-[70%] h-[80%] w-[80%] bg-white pn:max-ss:h-[30%] ss:max-pp:h-[40%] pp:max-sm:h-[60%] pn:max-sm:w-[98%] duration-75"
                  : "h-[500px] w-[300px] bg-slate-100"
              }`}
            >
              {/* Template 1 */}
              {template === 1 ? (
                <Template1
                  dispatch={dispatch}
                  showbutton={showbutton}
                  switcher={switcher}
                  setComponent={setComponent}
                  setChange={setChange}
                  change={change}
                  font1={font1}
                  link1={link1}
                  link2={link2}
                  setTrigger={setTrigger}
                  trigger={trigger}
                  background_color={background_color}
                  buttoncss={buttoncss}
                  bgimage={bgimage}
                  Linkes={Linkes}
                  setComponents={setComponents}
                  setReduxActive={setReduxActive}
                  setText1={setText1}
                  color1={color1}
                  textcolor={textcolor}
                  active={active}
                  header1={header1}
                  font2={font2}
                  color2={color2}
                  font3={font3}
                  Name={Name}
                  Button1={Button1}
                  primeimage={primeimage}
                  header2={header2}
                  setText={setText}
                />
              ) : null}
              {template === 2 ? (
                <Template2
                  dispatch={dispatch}
                  showbutton={showbutton}
                  switcher={switcher}
                  setComponent={setComponent}
                  setChange={setChange}
                  change={change}
                  font1={font1}
                  link1={link1}
                  link2={link2}
                  background_color={background_color}
                  setTrigger={setTrigger}
                  trigger={trigger}
                  buttoncss={buttoncss}
                  bgimage={bgimage}
                  Linkes={Linkes}
                  setComponents={setComponents}
                  setReduxActive={setReduxActive}
                  setText1={setText1}
                  color1={color1}
                  textcolor={textcolor}
                  active={active}
                  header1={header1}
                  font2={font2}
                  color2={color2}
                  font3={font3}
                  Name={Name}
                  Button1={Button1}
                  primeimage={primeimage}
                  header2={header2}
                  setText={setText}
                />
              ) : null}
              {/* Template 3 */}
              {template === 3 ? (
                <Template3
                  dispatch={dispatch}
                  showbutton={showbutton}
                  switcher={switcher}
                  setComponent={setComponent}
                  setChange={setChange}
                  change={change}
                  font1={font1}
                  link1={link1}
                  setTrigger={setTrigger}
                  trigger={trigger}
                  link2={link2}
                  background_color={background_color}
                  buttoncss={buttoncss}
                  bgimage={bgimage}
                  Linkes={Linkes}
                  setComponents={setComponents}
                  setReduxActive={setReduxActive}
                  setText1={setText1}
                  color1={color1}
                  textcolor={textcolor}
                  active={active}
                  header1={header1}
                  font2={font2}
                  color2={color2}
                  font3={font3}
                  Name={Name}
                  Button1={Button1}
                  primeimage={primeimage}
                  header2={header2}
                  setText={setText}
                />
              ) : null}
              {/* Template 4 */}
              {template === 4 ? (
                <Template4
                  dispatch={dispatch}
                  showbutton={showbutton}
                  switcher={switcher}
                  setComponent={setComponent}
                  setChange={setChange}
                  change={change}
                  font1={font1}
                  link1={link1}
                  setTrigger={setTrigger}
                  trigger={trigger}
                  link2={link2}
                  background_color={background_color}
                  buttoncss={buttoncss}
                  bgimage={bgimage}
                  Linkes={Linkes}
                  setComponents={setComponents}
                  setReduxActive={setReduxActive}
                  setText1={setText1}
                  color1={color1}
                  textcolor={textcolor}
                  active={active}
                  header1={header1}
                  font2={font2}
                  color2={color2}
                  font3={font3}
                  Name={Name}
                  Button1={Button1}
                  primeimage={primeimage}
                  header2={header2}
                  setText={setText}
                />
              ) : null}
              {/* Template 5 */}
              {template === 5 ? (
                <Template5
                  dispatch={dispatch}
                  showbutton={showbutton}
                  switcher={switcher}
                  setComponent={setComponent}
                  setChange={setChange}
                  change={change}
                  font1={font1}
                  link1={link1}
                  link2={link2}
                  setTrigger={setTrigger}
                  trigger={trigger}
                  background_color={background_color}
                  buttoncss={buttoncss}
                  bgimage={bgimage}
                  Linkes={Linkes}
                  setComponents={setComponents}
                  setReduxActive={setReduxActive}
                  setText1={setText1}
                  color1={color1}
                  textcolor={textcolor}
                  active={active}
                  header1={header1}
                  font2={font2}
                  color2={color2}
                  font3={font3}
                  Name={Name}
                  Button1={Button1}
                  primeimage={primeimage}
                  header2={header2}
                  setText={setText}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default page;
