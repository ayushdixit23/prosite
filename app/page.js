"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiCircleCheck, CiMobile2 } from "react-icons/ci";
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
import { FaBuromobelexperte, FaCrown } from "react-icons/fa6";
import { MdOutlineCloudUpload, MdSearch } from "react-icons/md";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import Fontss from "./Components/Font";
import Membership from "./Components/Membership";
import { GoArrowLeft } from "react-icons/go";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  setComponent,
  setPerf,
  setPremium,
  setTrigger,
  setTextColor,
  setReduxActive,
  setShowbutton,
  setRedirection,
  setRemovePremium,
  setTemplate,
  setimage,
  setBgImage,
  setFonts,
  setFont1,
  setFont2,
  setFont3,
  setButton1,
  setHeader1,
  setHeader2,
  setColor1,
  setColor2,
  setbackground,
  setObjectType,
} from "./redux/reducer/prosite_data";
import style from "./pages/CustomScrollbar.module.css";
import ReactDOMServer from "react-dom/server";
import Button from "./Components/Button";
import Styles from "./Components/Styles";
import Background from "./Components/Background";
import { API } from "@/Essentials";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";
import Template5 from "./Templates/Template5";
import toast, { Toaster } from "react-hot-toast";
import { useWindowSize } from "./Components/windowsize";
import { Switch } from "@/components/ui/switch";
import html2canvas from "html2canvas";
import { RxText } from "react-icons/rx";

function page() {
  const dispatch = useDispatch();
  const size = useWindowSize();
  const [pic1, setPic1] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  // const [id, setId] = useState("66ac5827858661088c42887e");
  // const [id, setId] = useState("6550737ffe8f9dc7614bba5f");
  const [text1, setText1] = useState(false);
  // const [active, setActive] = useState("");
  const webRef = useRef();
  const [search, setSearch] = useState("");
  const [pop, setPop] = useState(false);
  const [uploadtype, setUploadtype] = useState("image");
  const drawerRef = useRef();
  const [domain, setDomain] = useState("");
  const [imageid, setImageId] = useState("");
  const [userImageId, setUserImageId] = useState("");

  const [backid, setBackId] = useState("");
  const [memberships, setMemberships] = useState("Free");

  useEffect(() => {
    const data = sessionStorage.getItem("data");
    const parseData = JSON.parse(data);
    setData(parseData);
    setId(parseData.id);
    setMemberships(parseData.memberships)
  }, []);

  // useEffect(() => {
  //   const fetchid = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://monarchs.grovyo.xyz/api/login/fetchwithid/${id}`
  //       );
  //       // const res = await axios.get(`http://localhost:7190/api/v1/fetchwithid/${id}`)
  //       console.log(res.data);
  //       if (res.data.success) {
  //         const data = res.data.data;
  //         setData(data);
  //         setId(data.id);
  //         setMemberships(data.memberships);
  //         sessionStorage.setItem("data", JSON.stringify(data));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchid();
  // }, [id]);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (drawerRef.current && !drawerRef.current.contains(event.target)) {
  //       dispatch(setTrigger(false));
  //     }
  //   }

  //   // Attach the event listener
  //   document.addEventListener("click", handleClickOutside);

  //   // Clean up the event listener
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [ drawerRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        console.log("Outside Drawer");
        dispatch(setTrigger(false));
      }
    }

    // Attach mousedown event to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, drawerRef]);

  const applyDomains = async () => {
    try {
      if (!domain) {
        toast.error("Please Enter Valid Domain!");
        return;
      }
      const res = await axios.post(`${API}/setDomain/${id}`, { domain });
      if (res.data.success) {
        setDomain("");
        toast.success("Domain Request Added!");
      } else {
        toast.success("Something Went Wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    background_color,
    primeimage,
    textcolor,
    font1,
    font2,
    active,
    font3,
    link1,
    objectType,
    header1,
    header2,
    Button1,
    link2,
    color1,
    component,
    color2,
    buttonid,
    buttoncss,
    trigger,
    bgimage,
    fontid1,
    fontid2,
    fontid3,
    buttoncolor,
    redirection,
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

  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [blinks, setBlinks] = useState([]);

  const [close, setClose] = useState(Clic);
  const [link, setLink] = useState([]);

  const uploaderPics = async (file) => {
    try {
      setLoad(true);
      if (uploadtype === "image") {
        setLoad(true);
        await uploadcont(file);
        setLoad(false);
      } else {
        setLoad(true);
        await backgroundUpload(file);
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  const uploadcont = async (file) => {
    try {
      setLoad(true);
      const form = new FormData();
      form.append("file", file);
      const res = await axios.post(`${API}/upload-image-prosite/${id}`, form);
      if (res.data.success) {
        toast.success("Image Uploaded!");
        await getitems();
        // setFile("");
        setLoad(false);
      } else {
        console.log("Error");
        toast.error("Something Went Wrong!");
      }
      setLoad(false);
    } catch (e) {
      console.log("Something Went Wrong!");
    } finally {
      setLoad(false);
    }
  };

  const backgroundUpload = async (file) => {
    try {
      setLoad(true);
      const form = new FormData();
      form.append("file", file);
      const res = await axios.post(`${API}/upload-background-prosite/${id}`, form);
      if (res.data.success) {
        toast.success("Image Uploaded!");
        await getBackgrounds();
        setLoad(false);
      } else {
        console.log("Error");
      }
      setLoad(false);
    } catch (e) {
      console.log(e);
      console.log("Something Went Wrong!");
    } finally {
      setLoad(false);
    }
  };

  const getitems = async () => {
    try {
      const res = await axios.get(`${API}/get-image-prosite/${id}`);
      if (res.data.success) {
        setLink(res.data.links);
      }
    } catch (e) {
      console.log("Items not fetched");
    }
  };

  const getBackgrounds = async () => {
    try {
      const res = await axios.get(`${API}/get-background-prosite/${id}`);
      if (res.data.success) {
        setBlinks(res.data.links);
      }
    } catch (e) {
      console.log("Items not fetched");
    }
  };

  useEffect(() => {
    if (id) {
      getitems();
      getBackgrounds();
    }
  }, [id]);

  const textareaRef = useRef(null);

  const handleTextareaChange = (event) => {
    setText(event.target.value);
    adjustTextareaHeight();
    const elm = document.getElementById(active);
    if (active === "h1") {
      dispatch(setHeader1(event.target.value));
    } else if (active === "h2") {
      dispatch(setHeader2(event.target.value));
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
      const res = await axios.get(`${API}/get-some-prosite-data`);
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

  const deleteTemp = () => {
    dispatch(setbackground(""));
    dispatch(setBgImage("https://dn3w8358m09e7.cloudfront.net/def1234.jpeg"));
    dispatch(setComponent(1));
    dispatch(setimage("https://dn3w8358m09e7.cloudfront.net/def1234.jpeg"));

    dispatch(setHeader1("Main long header with several lines"));
    dispatch(
      setHeader2(
        "This is subheader. Stormi is a dog. She is dark grey and has long legs. Her eyes are expressive and are able to let her humans know what she is thinking."
      )
    );
    dispatch(setFont1(""));
    dispatch(setButton1("Click now"));
    dispatch(setFont2(""));
    dispatch(setFont3(""));
    dispatch(setReduxActive("h1"));
    dispatch(setColor1(""));
    dispatch(setTextColor(""));
    dispatch(setReduxActive("h2"));
    dispatch(setColor2(""));
    dispatch(setReduxActive(""));
    dispatch(
      setFonts({
        Linke: "",
        fontFamily: "",
      })
    );
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
                    <a href={redirection} target="_blank">
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
                  objectFit: objectType,
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
                    <a href={redirection} target="_blank">
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
                  objectFit: objectType,
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
                    <a href={redirection} target="_blank">
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
                    <a href={redirection} target="_blank">
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
                    <a href={redirection} target="_blank">
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
                  objectFit: objectType,
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
                    <a href={redirection} target="_blank">
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
                  objectFit: objectType,
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
                    <a href={redirection} target="_blank">
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
                    <a href={redirection} target="_blank">
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
                      <a href={redirection} target="_blank">
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
                    objectFit: objectType,
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
                      <a href={redirection} target="_blank">
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
                    objectFit: objectType,
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

      const canvas = await html2canvas(webRef.current, {
        useCORS: true,
        allowTaint: true,
      });
      const image = canvas.toDataURL("image/png");
      const tempWeb = ReactDOMServer.renderToString(tempWed);
      const tempmob = ReactDOMServer.renderToString(tempPhone);
      const res = await axios.post(`${API}/save-template-prosite/${id}`, {
        curr_template1: tempWeb,
        curr_template2: tempmob,
        community: perf.community,
        template: template,
        headline: header1,
        description: header2,
        backgroundColor: background_color,
        backgroundImage: bgimage,
        color: textcolor,
        image: primeimage,
        fonts: [
          {
            fontFamily: font1 ? font1 : Name,
            link: font1 ? link1 : Linkes,
            type: "headline",
            id: fontid1,
          },
          {
            fontFamily: font2 ? font2 : Name,
            link: font2 ? link2 : Linkes,
            type: "description",
            id: fontid2,
          },
        ],
        button: {
          text: Button1,
          link: redirection,
          id: buttonid,
        },
        canvasImage: image,
        store: perf.store,
        about: perf.about,
        contact: perf.contact,
      });

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
        <div className="h-[50px] w-[100%] border-b dark:border-[#455060] bg-white dark:bg-[#273142] dark:text-white flex flex-row justify-between pn:max-sm:fixed pn:max-sm:top-0 items-center">
          <div
            onClick={() => {
              setClose(Clic);
            }}
            className="flex justify-center items-center"
          >
            {/*  */}
            <GoArrowLeft className="text-2xl ml-4 mt-1" />

            <div className="text-[#424242] dark:text-white font-semibold px-2">
              Customization
            </div>
          </div>
          <div className="pn:max-sm:hidden w-[50%] flex items-center justify-center gap-2">
            <div
              onClick={() => {
                setSwitcher(true);
              }}
              className={` py-1 w-[100px] flex justify-center items-center rounded-lg gap-2 select-none cursor-pointer duration-100 ${
                switcher
                  ? "bg-[#EEF2FF] dark:bg-[#1B2431] dark:text-white"
                  : "bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white"
              }`}
            >
              <HiOutlineDesktopComputer />
              <div>Web</div>
            </div>

            <div
              onClick={() => {
                setSwitcher(false);
              }}
              className={` py-1 w-[100px] flex justify-center items-center rounded-lg gap-2 select-none cursor-pointer duration-100 ${
                switcher === false
                  ? "bg-[#EEF2FF] dark:bg-[#1B2431] dark:text-white"
                  : "bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white"
              }`}
            >
              <CiMobile2 />
              <div>Mobile</div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            {/* <div
              onClick={() => deleteTemp()}
              className={` select-none pn:max-sm:hidden text-white px-4 py-1 flex rounded-xl gap-1 mr-2 cursor-pointer font-semibold items-center ${savetemplate ? " bg-[#d03d3d] " : "bg-[#8cec74]"
                }`}
            >
              <div>Delete Template</div>
            </div> */}
            <div
              onClick={() => deleteTemp()}
              className={` select-none pn:max-sm:hidden light:bg-[#d03d3d] dark:text-[#d03d3d] text-white px-4 py-1 flex rounded-xl gap-1 mr-2 cursor-pointer font-semibold items-center ${
                savetemplate ? "  " : "bg-[#8cec74]"
              }`}
            >
              <div>Discard</div>
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
                <div>Go Live</div>
              </div>
            )}
          </div>
        </div>

        <div className="h-[95%] w-[100%] flex flex-row pn:max-sm:flex-col-reverse bg-[#f1f1f1]">
          {/* Sidebar */}
          <div className="h-[100%] pn:max-sm:hidden bg-white dark:bg-[#273142] dark:text-white z-10 sm:w-[80px] pn:max-sm:fixed pn:max-sm:bottom-0 flex justify-center items-center pn:max-sm:w-[100%] pn:max-sm:h-[60px]">
            <div className="h-[100%] bg-white dark:bg-[#273142] dark:text-white pn:max-sm:rounded-t-xl px-1 w-[100%] flex flex-col sm:gap-2 sm:pt-10  pn:max-sm:justify-between items-center pn:max-sm:flex-row sm:border-r-[2px] sm:border-[#e7e7e7]  sm:dark:border-[#455060] ">
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
                    ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={Templates}
                alt="Templates"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <LuLayoutTemplate className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                <div className="text-[10px] text-[#424242] dark:text-white  my-1">
                  Templates
                </div>
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
                    ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={textt}
                alt="Text"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <RxText className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                <div className="text-[10px] text-[#424242] dark:text-white  my-1">
                  Text
                </div>
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
                    ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={Elements}
                alt="Elements"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <FaBuromobelexperte className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                <div className="text-[10px] text-[#424242] dark:text-white  my-1">
                  Elements
                </div>
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
                    ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={Loader}
                alt="Loader"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <MdOutlineCloudUpload className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                <div className="text-[10px] text-[#424242] dark:text-white  my-1">
                  Upload
                </div>
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
                    ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                    : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                }`}
              >
                {/* <Image
                src={Settings}
                alt="Settings"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                <IoSettingsOutline className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                <div className="text-[10px] text-[#424242] dark:text-white  my-1">
                  Settings
                </div>
              </div>
            </div>
          </div>

          {/* sidebar Phone */}
          <div className="h-[100%] z-10 sm:hidden sm:w-[80px] pn:max-sm:fixed pn:max-sm:bottom-0 flex justify-center items-center pn:max-sm:w-[100%] pn:max-sm:h-[60px]">
            <div className="h-[100%] bg-white dark:bg-[#273142] dark:text-white  pn:max-sm:rounded-t-xl px-1 w-[100%] flex flex-col sm:gap-2 sm:pt-10  pn:max-sm:justify-between items-center pn:max-sm:flex-row sm:border-r-[2px] sm:border-[#e7e7e7] ">
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
                      ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={Templates}
                alt="Templates"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <LuLayoutTemplate className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                  <div className="text-[10px] text-[#424242] dark:text-white  my-1">
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
                      ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={textt}
                alt="Text"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <RxText className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                  <div className="text-[10px] text-[#424242] dark:text-white  my-1">
                    Text
                  </div>
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
                      ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={Elements}
                alt="Elements"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <FaBuromobelexperte className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                  <div className="text-[10px] text-[#424242] dark:text-white  my-1">
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
                      ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={Loader}
                alt="Loader"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <MdOutlineCloudUpload className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                  <div className="text-[10px] text-[#424242] dark:text-white  my-1">
                    Upload
                  </div>
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
                      ? "flex flex-col bg-[#f6f6f6] dark:bg-[#3D4655] dark:text-white  rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                      : "flex flex-col sm:rounded-xl w-[60px] sm:w-[60px] h-[54px] sm:h-[60px] justify-center items-center "
                  }`}
                >
                  {/* <Image
                src={Settings}
                alt="Settings"
                className="object-contain h-[25px] w-[25px]"
              /> */}
                  <IoSettingsOutline className="h-[25px] w-[25px] text-[#424242] dark:text-white " />
                  <div className="text-[10px] text-[#424242] dark:text-white  my-1">
                    Settings
                  </div>
                </div>
              </DrawerTrigger>
            </div>
          </div>
          {/* side Components*/}
          <div
            className={`dark:bg-[#273142] pn:max-sm:hidden ${
              components
                ? "h-[100%] w-[0px] pn:max-sm:w-[100%]  pn:max-sm:h-[0%] pn:max-sm:fixed duration-300"
                : "h-[100%] w-[500px] pn:max-sm:w-[100%]  pn:max-sm:h-[70%] pn:max-sm:fixed duration-300"
            }`}
          >
            <div className="h-[100%] w-[100%] sm:flex sm:flex-row-reverse pn:max-sm:w-[100%] pn:max-sm:h-[100%] pn:max-sm:bg-[#fff] pn:max-sm:dark:bg-[#273142] justify-end pn:max-sm:rounded-t-xl">
              {/* Template */}
              {component === 1 ? (
                <div className="h-[100%] w-[98%] pn:max-sm:w-[100%] bg-[#fff] dark:bg-[#273142] pt-2 flex flex-col items-center pn:max-sm:rounded-t-3xl ">
                  {/* Choose template or styles */}
                  <div
                    className={`bg-[#f1f1f1] dark:bg-[#3c4555] h-[6%] w-[90%] relative ${
                      components ? "p-0" : "p-0.5"
                    } items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]`}
                  >
                    <div
                      className={`duration-150 bg-white dark:bg-[#273142] dark:text-white rounded-xl h-[90%] w-[50%] absolute z-0  ${
                        changetemp === 1 ? "ml-[49%]" : " "
                      }`}
                    ></div>
                    <div
                      onClick={() => {
                        setChangetemp(0);
                      }}
                      className={`m-1 z-10  cursor-pointer font-medium ${
                        components && "text-[0px]"
                      } rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                        changetemp === 0
                          ? "dark:text-white text-[#000] font-semibold"
                          : "text-[#868686] dark:text-white cursor-pointer font-medium"
                      }`}
                    >
                      Templates
                    </div>
                    <div
                      onClick={() => {
                        setChangetemp(1);
                      }}
                      className={`m-1 z-10 ${
                        components && "text-[0px]"
                      } cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                        changetemp === 1
                          ? "dark:text-white text-[#000] font-semibold"
                          : "text-[#868686] dark:text-white cursor-pointer font-medium"
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
                <div className="h-[100%] w-[100%] pn:max-sm:w-[100%] dark:bg-[#273142] bg-[#fff] items-center flex flex-col pn:max-sm:rounded-t-3xl ">
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
                          className="bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white px-3 font-semibold no-scrollbar resize-none light:border rounded-xl text-[#424242] w-[100%] mt-2 p-1 outline-none"
                          ref={textareaRef}
                          onChange={handleTextareaChange}
                          maxLength={50}
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
                            {text.length}/150
                          </div>
                        </div>
                        <textarea
                          value={text}
                          placeholder="enter text what you need"
                          className="bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white px-3 font-semibold no-scrollbar resize-none light:border rounded-xl text-[#424242] w-[100%] mt-2 p-1 outline-none"
                          ref={textareaRef}
                          onChange={handleTextareaChange}
                          maxLength={150}
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
                    <div className="bg-[#f7f7f7] dark:bg-[#313D4E] light:border rounded-xl my-2 h-[40px] flex justify-evenly overflow-hidden w-full">
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-[#f7f7f7] dark:bg-[#313D4E] text-[#424242] dark:text-white text-sm placeholder:text-sm w-[80%] outline-none h-full p-2"
                        placeholder="Search"
                      />
                      <div className=" w-[10%] bg-[#f7f7f7] dark:bg-[#313D4E] h-full">
                        <MdSearch className="text-[#d1d1d1] dark:text-white text-sm w-[100%] h-full" />
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
                <div className="h-[100%] select-none w-[98%] pt-2 pn:max-sm:w-[100%] dark:bg-[#273142] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                  {/* Choose Image,background or button */}
                  <div className="bg-[#f1f1f1] dark:bg-[#3c4555] h-[6%] w-[90%] relative p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                    <div
                      className={`duration-150 bg-white dark:bg-[#273142] dark:text-white rounded-xl h-[90%] ${
                        change === 0 && "ml-[0%]"
                      } ${change === 1 && "ml-[33.33%]"} 
                      ${
                        change === 2 && "ml-[65.66%]"
                      } w-[33.33%] absolute z-0  `}
                    ></div>
                    <div
                      onClick={() => {
                        setChange(0);
                      }}
                      className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                        change === 0
                          ? "dark:text-white text-[#000] font-semibold"
                          : " text-[#868686] dark:text-white "
                      }`}
                    >
                      Image
                    </div>
                    <div
                      onClick={() => {
                        setChange(1);
                      }}
                      className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                        change === 1
                          ? "dark:text-white text-[#000] font-semibold"
                          : " text-[#868686] dark:text-white "
                      }`}
                    >
                      Background
                    </div>
                    <div
                      onClick={() => {
                        setChange(2);
                      }}
                      className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                        change === 2
                          ? "dark:text-white text-[#000] font-semibold"
                          : " text-[#868686] dark:text-white "
                      }`}
                    >
                      Button
                    </div>
                  </div>
                  <div className="h-[80%] w-[90%] justify-evenly ">
                    {/* Image */}
                    {change === 0 ? (
                      <div className="h-full w-[100%] ">
                        <div className="bg-[#f7f7f7] dark:bg-[#313D4E]  light:border my-2 h-[40px] flex justify-evenly rounded-xl overflow-hidden w-full">
                          <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-[#f7f7f7] text-[#424242] dark:bg-[#313D4E] dark:text-white w-[80%] outline-none h-full p-2"
                            placeholder="Search"
                          />
                          <div className=" w-[10%] bg-[#f7f7f7] dark:bg-[#313D4E]  h-full">
                            <MdSearch className="text-[#cfcfcf] dark:text-white w-[100%] h-full" />
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
                                    setImageId(i);
                                    dispatch(setimage(p.link));
                                    if (p.name.includes("cover")) {
                                      dispatch(setObjectType("cover"));
                                    }
                                    if (p.name.includes("contain")) {
                                      dispatch(setObjectType("contain"));
                                    }
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
                                  className={`flex items-center group relative hover:border-[#00f] hover:border-2 justify-center rounded-lg w-[140px] h-[140px] ${
                                    style.customScrollbar
                                  } overflow-auto ${
                                    imageid === i
                                      ? "border-[#00f] border-2"
                                      : null
                                  }  duration-75 select-none cursor-pointer dark:bg-[#313D4E] bg-[#fafafa]`}
                                >
                                  {imageid === i && (
                                    <div
                                      className={` absolute z-10 bottom-1 right-1`}
                                    >
                                      <CiCircleCheck className="text-[#00f]" />
                                    </div>
                                  )}
                                  <div className="w-[90%] h-[90%] relative">
                                    <img
                                      src={p.link}
                                      alt="pic"
                                      className="p-2 flex-row flex object-contain h-full w-full rounded-sm "
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
                                      setImageId(i);
                                      dispatch(setimage(p.link));
                                      if (p.name.includes("cover")) {
                                        dispatch(setObjectType("cover"));
                                      }
                                      if (p.name.includes("contain")) {
                                        dispatch(setObjectType("contain"));
                                      }
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
                                    className={`flex items-center group relative hover:border-[#00f] hover:border-2 justify-center rounded-lg w-[140px] h-[140px] ${
                                      style.customScrollbar
                                    } overflow-auto ${
                                      imageid === i
                                        ? "border-[#00f] border-2"
                                        : null
                                    }  duration-75 select-none cursor-pointer dark:bg-[#313D4E] bg-[#fafafa]`}
                                  >
                                    {imageid === i && (
                                      <div
                                        className={` absolute z-10 bottom-1 right-1`}
                                      >
                                        <CiCircleCheck className="text-[#00f]" />
                                      </div>
                                    )}
                                    <div className="w-[90%] h-[90%]  relative">
                                      <img
                                        src={p.link}
                                        alt="pic"
                                        className="p-2 flex-row flex  rounded-lg  h-full w-full dark:bg-[#313D4E] bg-[#fafafa] "
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
                      </div>
                    ) : null}
                    {/* backgrounds */}
                    {change === 1 ? (
                      <div className={`h-[550px] w-[100%]`}>
                        <div className="bg-[#f7f7f7] dark:bg-[#313D4E]  light:border my-2 h-[40px] flex justify-evenly rounded-xl overflow-hidden w-full">
                          <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-[#f7f7f7] text-[#424242] dark:bg-[#313D4E] dark:text-white w-[80%] outline-none h-full p-2"
                            placeholder="Search"
                          />
                          <div className=" w-[10%] bg-[#f7f7f7] dark:bg-[#313D4E]  h-full">
                            <MdSearch className="text-[#cfcfcf] dark:text-white w-[100%] h-full" />
                          </div>
                        </div>
                        <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        <Background bgimg={bgimg} search={search} />
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
                                dispatch(setButton1(e.target.value));
                              }}
                              placeholder="enter button text"
                              maxLength={50}
                              className=" bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white light:border rounded-xl text-[#424242] w-[100%] px-2 p-1 max-h-[200px] outline-none "
                            />
                          </div>
                        )}
                        {showbutton && (
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        )}
                        {showbutton && (
                          <div className="mt-2">
                            <div className="text-[#9c9c9c] text-[14px]">
                              Enter link
                            </div>
                            <input
                              value={redirection}
                              onChange={(e) => {
                                dispatch(setRedirection(e.target.value));
                              }}
                              placeholder="Enter link "
                              className=" bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white px-2 light:border rounded-xl text-[#424242] w-[100%] p-1 max-h-[200px] outline-none "
                            />
                          </div>
                        )}
                        {showbutton && (
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
                        )}
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
                <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] bg-[#fff] dark:bg-[#273142] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                  <div className="h-[80%] w-[90%] justify-evenly mt-4">
                    {/* Image */}
                    <div className="h-[550px] w-[100%]">
                      {/* <div className=" items-center flex justify-center">
                        <div className="grid bg-[#f4f4f4] text-[#424242] w-full grid-col-1 gap-3 p-4 rounded-xl">
                          <div className="font-semibold ">Upload {uploadtype === "image" ? "Photo" : "Background Images"}</div>
                          <input
                            type="file"
                            name="myFile"
                            id="fileInput"
                            placeholder="Upload file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="w-[100%] self-start hidden text-[#424242]"
                          />
                          {file ? (
                            <div className="flex items-center relative justify-center h-full w-full">
                              <div onClick={() => setFile("")} className="absolute  top-1 px-2 right-0">
                                <RxCross2 className="text-xl font-semibold" />
                              </div>
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
                              {load ? (
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
                                  onClick={() => uploaderPics()}
                                >
                                  Upload
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </div> */}

                      {/* <div className="border-b-[0.5px] w-full border-dotted mt-2"></div> */}
                      <div
                        className={`flex flex-col max-h-[90vh] min-h-[90vh] overflow-y-scroll no-scrollbar`}
                      >
                        {/* <div className="flex justify-between w-full gap-3 items-center">
                          <div onClick={() => setUploadtype("image")} className={`w-full ${uploadtype === "image" ? "border-b-2 border-blue-500" : ""}  pb-1 flex text-[#9c9c9c] font-medium justify-center items-center text-sm `}>Images</div>
                          <div onClick={() => setUploadtype("background")} className={`w-full ${uploadtype === "background" ? "border-b-2 border-blue-500" : ""} pb-1 flex text-[#9c9c9c] font-medium justify-center items-center text-sm `}>Background Images</div>
                        </div> */}

                        <div className="bg-[#f1f1f1] dark:bg-[#3c4555] relative p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                          <div
                            className={`duration-150 dark:bg-[#273142] dark:text-white bg-white rounded-xl h-[90%] w-[50%] absolute z-0  ${
                              uploadtype === "background" ? "ml-[49%]" : " "
                            }`}
                          ></div>
                          <div
                            onClick={() => setUploadtype("image")}
                            className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                              uploadtype === "image"
                                ? "dark:text-white text-[#000] font-semibold"
                                : "text-[#868686] dark:text-white cursor-pointer font-medium"
                            }`}
                          >
                            Images
                          </div>
                          <div
                            onClick={() => setUploadtype("background")}
                            className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                              uploadtype === "background"
                                ? "dark:text-white text-[#000] font-semibold"
                                : "text-[#868686] dark:text-white cursor-pointer font-medium"
                            }`}
                          >
                            Background
                          </div>
                        </div>

                        <div className="my-3">
                          <input
                            type="file"
                            name="myFile"
                            id="fileInput"
                            placeholder="Upload file"
                            onChange={
                              (e) => {
                                uploaderPics(e.target.files[0]);
                              }
                              //  setFile()
                            }
                            className="w-[100%] self-start hidden text-[#424242]"
                          />

                          {load ? (
                            //  <button
                            //   className="bg-blue-800 p-2 flex justify-center w-full text-center  items-center text-white px-5 rounded-xl font-semibold"
                            //   disabled
                            // >
                            //   <div className="animate-spin">
                            //     <AiOutlineLoading3Quarters />
                            //   </div>
                            // </button>
                            <div className="flex justify-between gap-4 bg-[#e2e2e2] text-black p-2 px-3 rounded-xl items-center">
                              <div className="text-xs w-full font-semibold">
                                Upload Your Images
                              </div>
                              <div className="p-1 px-3 bg-[#4880FF] text-white text-sm  flex justify-center w-[120px] py-2 text-center items-center font-semibold rounded-lg">
                                <div className="animate-spin">
                                  <AiOutlineLoading3Quarters />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-between gap-4 bg-[#e2e2e2] text-black p-2 px-3 rounded-xl items-center">
                              <div className="text-xs font-semibold">
                                Upload Your{" "}
                                {uploadtype === "image"
                                  ? "Images"
                                  : "Backgrounds"}
                              </div>

                              {uploadtype === "image" ? (
                                <>
                                  {memberships == "Free" &&
                                  link.length >= 10 ? (
                                    <div
                                      onClick={() =>
                                        toast.error("Max Image Upload Reached!")
                                      }
                                      className="p-1 px-3 bg-[#4880FF] text-white flex justify-center items-center gap-1 text-sm font-semibold rounded-lg"
                                    >
                                      <div>Upload</div>
                                      <FaCrown className=" text-orange-300 " />
                                    </div>
                                  ) : (
                                    <label
                                      htmlFor="fileInput"
                                      className="p-1 px-3 bg-[#4880FF] text-white flex justify-center items-center gap-1 text-sm font-semibold rounded-lg"
                                    >
                                      <div>Upload</div>
                                    </label>
                                  )}
                                </>
                              ) : (
                                <>
                                  {memberships == "Free" &&
                                  blinks.length >= 10 ? (
                                    <div
                                      onClick={() =>
                                        toast.error(
                                          "Max Backgrounds Upload Reached!"
                                        )
                                      }
                                      className="p-1 px-3 bg-[#4880FF] text-white flex justify-center items-center gap-1 text-sm font-semibold rounded-lg"
                                    >
                                      <div>Upload</div>
                                      <FaCrown className=" text-orange-300 " />
                                    </div>
                                  ) : (
                                    <label
                                      htmlFor="fileInput"
                                      className="p-1 px-3 bg-[#4880FF] text-white flex justify-center items-center gap-1 text-sm font-semibold rounded-lg"
                                    >
                                      <div>Upload</div>
                                    </label>
                                  )}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                        {uploadtype === "image" ? (
                          <div>
                            <div className="text-[#9c9c9c] dark:text-white font-medium text-[14px] mt-2">
                              Uploaded Images
                            </div>
                            <div className="w-full pn:max-sm:w-[100%] ">
                              <div
                                className={`w-[100%] pn:max-sm:w-[100%] gap-3 grid grid-cols-2 h-[100%]`}
                              >
                                {link &&
                                  link.map((m, i) => (
                                    <div
                                      key={i}
                                      onClick={() => {
                                        setUserImageId(i);
                                        dispatch(setimage(m));
                                        if (m.premium) {
                                          if (memberships === "Free") {
                                            dispatch(
                                              setPremium({ type: "image" })
                                            );
                                          }
                                        } else {
                                          if (memberships === "Free") {
                                            dispatch(
                                              setRemovePremium({
                                                type: "image",
                                              })
                                            );
                                          }
                                        }
                                      }}
                                      className={`flex items-center rounded-xl relative group hover:border hover:border-[#00f] ${
                                        userImageId === i
                                          ? "border border-[#00f]"
                                          : null
                                      } justify-center w-full mt-1 h-[130px] duration-75 select-none cursor-pointer dark:bg-[#313D4E] bg-[#fafafa]`}
                                    >
                                      {userImageId === i && (
                                        <div
                                          className={` absolute z-10 bottom-1 right-1`}
                                        >
                                          <CiCircleCheck className="text-[#00f]" />
                                        </div>
                                      )}
                                      <div className="w-[90%] h-[90%]  rounded-xl">
                                        <img
                                          src={m}
                                          alt="pic"
                                          className="p-2 flex-row flex h-full  rounded-xl w-full dark:bg-[#313D4E] bg-[#fafafa] "
                                        />
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="text-[#9c9c9c] font-medium text-[14px] mt-2">
                              Background Images
                            </div>
                            <div className="h-[350px] w-full pn:max-sm:w-[100%] ">
                              <div
                                className={`w-[100%] pn:max-sm:w-[100%] gap-3 grid grid-cols-2 h-[100%]`}
                              >
                                {blinks &&
                                  blinks.map((m, i) => (
                                    <div
                                      key={i}
                                      onClick={() => {
                                        setBackId(i);
                                        dispatch(setBgImage(m));
                                        if (m.premium) {
                                          if (memberships === "Free") {
                                            dispatch(
                                              setPremium({ type: "bgimage" })
                                            );
                                          }
                                        } else {
                                          if (memberships === "Free") {
                                            dispatch(
                                              setRemovePremium({
                                                type: "bgimage",
                                              })
                                            );
                                          }
                                        }
                                      }}
                                      className={`flex items-center justify-center w-full relative group hover:border hover:border-[#00f] rounded-xl mt-1 h-[130px] duration-75 select-none cursor-pointer ${
                                        backid === i
                                          ? "border border-[#00f]"
                                          : null
                                      } dark:bg-[#313D4E] bg-[#fafafa]`}
                                    >
                                      {backid === i && (
                                        <div
                                          className={` absolute z-10 bottom-1 right-1`}
                                        >
                                          <CiCircleCheck className="text-[#00f]" />
                                        </div>
                                      )}
                                      <div className="w-[90%] h-[90%] rounded-xl">
                                        <img
                                          src={m}
                                          alt="pic"
                                          className="p-2 flex-row flex rounded-xl h-full w-full dark:bg-[#313D4E] bg-[#fafafa] "
                                        />
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* backgrounds */}
                  </div>
                </div>
              ) : null}
              {/* adv options */}
              {component === 5 ? (
                <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] dark:bg-[#273142] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                  <div className="w-[100%] h-[100%] text-[#424242] dark:text-white p-1">
                    <div className="flex flex-col my-2 gap-1">
                      <div className="font-medium pl-2">
                        <div>Advanced options</div>
                      </div>
                      <div className="border-b-[0.5px] border-dotted" />
                      <div className="flex flex-col gap-4 px-2 my-3">
                        {(memberships === "Premium" ||
                          memberships === "Pro") && (
                          <div className="w-full flex flex-col">
                            <div className="text-[15px] font-semibold">
                              Add Custom Your Domains
                            </div>
                            <div className="flex border-b border-white w-full  justify-center items-center gap-1">
                              <input
                                type="text"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                placeholder="Add Your Domains"
                                className="outline-none bg-transparent placeholder:text-sm w-full placeholder:text-[#9c9c9c]"
                              />
                              <div
                                onClick={applyDomains}
                                className="text-sm cursor-pointer py-2  rounded-xl  font-medium"
                              >
                                Save
                              </div>
                            </div>
                          </div>
                        )}
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
                            Contact information
                          </div>
                          <div className="flex w-full justify-between items-center">
                            <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                              Display your Contact to public
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
                        {/* <div className="flex flex-col w-full">
                          <div
                            onClick={() => deleteTemp()}
                            className={`sm:hidden select-none justify-center text-white px-4 py-1 flex rounded-xl gap-1 mr-2 cursor-pointer font-semibold items-center ${savetemplate ? " bg-[#d03d3d] " : "bg-[#8cec74]"
                              }`}
                          >
                            <div>Delete Template</div>
                          </div>
                        </div> */}
                        <div className="flex flex-col w-full">
                          <div
                            onClick={() => deleteTemp()}
                            className={`sm:hidden select-none justify-center text-white px-4 py-1 flex rounded-xl gap-1 mr-2 cursor-pointer font-semibold items-center ${
                              savetemplate ? " bg-[#d03d3d] " : "bg-[#8cec74]"
                            }`}
                          >
                            <div>Discard</div>
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
              <div className="h-[100%] w-[100%] sm:flex sm:flex-row-reverse pn:max-sm:w-[100%] pn:max-sm:h-[500px] dark:bg-[#273142] pn:max-sm:bg-[#fefefe] justify-end pn:max-sm:rounded-t-xl">
                {component === 1 ? (
                  <div className="h-[100%] w-[98%] pn:max-sm:w-[100%] dark:bg-[#273142] bg-[#fff] flex flex-col items-center pn:max-sm:rounded-t-3xl ">
                    {/* Choose template or styles */}
                    <div className="bg-[#f1f1f1] dark:bg-[#3c4555] h-[6%] w-[90%] relative mt-2 p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                      <div
                        className={`duration-150 dark:bg-[#273142] dark:text-white bg-white rounded-xl h-[90%] w-[50%] absolute z-0  ${
                          changetemp === 1 ? "ml-[49%]" : " "
                        }`}
                      ></div>
                      <div
                        onClick={() => {
                          setChangetemp(0);
                        }}
                        className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                          changetemp === 0
                            ? "dark:text-white text-[#000] font-semibold"
                            : "text-[#868686] dark:text-white cursor-pointer font-medium"
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
                            ? "dark:text-white text-[#000] font-semibold"
                            : "text-[#868686] dark:text-white cursor-pointer font-medium"
                        }`}
                      >
                        Styles
                      </div>
                    </div>

                    <div
                      className={`h-[80%] w-[90%] justify-evenly ${style.customScrollbar} no-scrollbar overflow-auto mt-4`}
                    >
                      {/* Templates */}
                      {changetemp === 0 ? (
                        <div className="grid grid-cols-2  gap-2">
                          {/* {temp && <img src={temp} alt="image" />} */}
                          <Image
                            src={t1}
                            onClick={() => {
                              // setTemplate(1);
                              dispatch(setTemplate(1));
                              dispatch(setTrigger(false));
                            }}
                            className="w-[100%] hover:bg-[#28292c] hover:shadow-lg duration-75 h-[100px] bg-[#f7f7f7] p-1 my-2"
                          />
                          <Image
                            src={t2}
                            onClick={() => {
                              // setTemplate(2);
                              dispatch(setTemplate(2));
                              dispatch(setTrigger(false));
                            }}
                            className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                          />
                          <Image
                            src={t3}
                            onClick={() => {
                              // setTemplate(3);
                              dispatch(setTemplate(3));
                              dispatch(setTrigger(false));
                            }}
                            className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                          />
                          <Image
                            src={t4}
                            onClick={() => {
                              // setTemplate(4);
                              dispatch(setTemplate(4));
                              dispatch(setTrigger(false));
                            }}
                            className="w-[100%] h-[100px] hover:bg-[#28292c] hover:shadow-lg duration-75 bg-[#f7f7f7] p-1 my-2"
                          />
                          <Image
                            src={t5}
                            onClick={() => {
                              // setTemplate(5);
                              dispatch(setTemplate(5));
                              dispatch(setTrigger(false));
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
                  <div className="h-[100%] w-[100%] pn:max-sm:w-[100%] overflow-auto dark:bg-[#273142] bg-[#fff] items-center flex flex-col pn:max-sm:rounded-t-3xl ">
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
                            className="bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white px-3 font-semibold no-scrollbar resize-none light:border rounded-xl text-[#424242] w-[100%] mt-2 p-1 outline-none"
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
                            className="bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white px-3 font-semibold no-scrollbar resize-none light:border rounded-xl text-[#424242] w-[100%] mt-2 p-1 outline-none"
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
                      <div className="bg-[#f7f7f7] dark:bg-[#313D4E] light:border rounded-xl my-2 h-[40px] flex justify-evenly overflow-hidden w-full">
                        <input
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="bg-[#f7f7f7] dark:bg-[#313D4E]  dark:text-white text-[#424242] text-sm placeholder:text-sm w-[80%] outline-none h-full p-2"
                          placeholder="Search"
                        />
                        <div className=" w-[10%] bg-[#f7f7f7] dark:bg-[#313D4E] h-full">
                          <MdSearch className="text-[#d1d1d1] dark:text-white text-sm w-[100%] h-full" />
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
                  <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] bg-[#fff] dark:bg-[#273142] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                    {/* Choose Image,background or button */}
                    <div className="bg-[#f1f1f1] dark:bg-[#3c4555] h-[6%] w-[90%] mt-2 relative p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                      <div
                        className={`duration-150 bg-white dark:bg-[#273142] rounded-xl h-[90%] w-[33.33%] absolute z-0 ${
                          change === 0 && "ml-[0%]"
                        } ${change === 1 && "ml-[33.33%]"} 
                        ${change === 2 && "ml-[65.66%]"}`}
                      ></div>
                      <div
                        onClick={() => {
                          setChange(0);
                        }}
                        className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                          change === 0
                            ? "dark:text-white text-[#000] font-semibold"
                            : " text-[#868686] dark:text-white "
                        }`}
                      >
                        Image
                      </div>
                      <div
                        onClick={() => {
                          setChange(1);
                        }}
                        className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                          change === 1
                            ? "dark:text-white text-[#000] font-semibold"
                            : " text-[#868686] dark:text-white "
                        }`}
                      >
                        Background
                      </div>
                      <div
                        onClick={() => {
                          setChange(2);
                        }}
                        className={`text-[12px] z-10 rounded-xl w-[97%] flex h-[90%] justify-center items-center ${
                          change === 2
                            ? "dark:text-white text-[#000] font-semibold"
                            : "text-[#868686] dark:text-white "
                        }`}
                      >
                        Button
                      </div>
                    </div>
                    <div className="h-[80%] w-[90%] justify-evenly ">
                      {/* Image */}
                      {change === 0 ? (
                        <div className="h-[510px] w-[100%] ">
                          <div className="bg-[#f7f7f7] dark:bg-[#313D4E]  light:border my-2 h-[40px] flex justify-evenly rounded-xl overflow-hidden w-full">
                            <input
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className="bg-[#f7f7f7] text-[#424242] dark:bg-[#313D4E] dark:text-white w-[80%] outline-none h-full p-2"
                              placeholder="Search"
                            />
                            <div className=" w-[10%] bg-[#f7f7f7] dark:bg-[#313D4E]  h-full">
                              <MdSearch className="text-[#cfcfcf] dark:text-white w-[100%] h-full" />
                            </div>
                          </div>
                          <div
                            className={`w-[100%] pn:max-sm:w-[100%] gap-3 grid grid-cols-2 ${style.customScrollbar} overflow-auto h-[100%]`}
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
                                        console.log("membership");
                                      }
                                      if (p.name.includes("cover")) {
                                        dispatch(setObjectType("cover"));
                                      }
                                      if (p.name.includes("contain")) {
                                        dispatch(setObjectType("contain"));
                                      }
                                      dispatch(setTrigger(false));
                                    }}
                                    className={`flex items-center group relative hover:border-[#00f] hover:border-2 justify-center rounded-lg w-[140px] h-[140px] ${
                                      style.customScrollbar
                                    } overflow-auto ${
                                      imageid === i
                                        ? "border-[#00f] border-2"
                                        : null
                                    }  duration-75 select-none cursor-pointer dark:bg-[#313D4E] bg-[#fafafa]`}
                                  >
                                    {imageid === i && (
                                      <div
                                        className={` absolute z-10 bottom-1 right-1`}
                                      >
                                        <CiCircleCheck className="text-[#00f]" />
                                      </div>
                                    )}
                                    <div className="w-[100%] h-[100%] relative">
                                      <img
                                        src={p.link}
                                        alt="pic"
                                        className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm dark:bg-[#313D4E] bg-[#fafafa] "
                                      />
                                      {p.premium && (
                                        <div className="absolute bottom-2 right-2 flex justify-center items-end">
                                          <div
                                            className=" bg-[#171717] 
                                  p-1 rounded-full self-end flex "
                                          >
                                            <FaCrown className="text-orange-300 " />
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
                                        if (p.name.includes("cover")) {
                                          dispatch(setObjectType("cover"));
                                        }
                                        if (p.name.includes("contain")) {
                                          dispatch(setObjectType("contain"));
                                        }
                                        dispatch(setTrigger(false));
                                      }}
                                      className={`flex items-center group relative hover:border-[#00f] hover:border-2 justify-center rounded-lg w-[140px] h-[140px] ${
                                        style.customScrollbar
                                      } overflow-auto ${
                                        imageid === i
                                          ? "border-[#00f] border-2"
                                          : null
                                      }  duration-75 select-none dark:bg-[#313D4E] cursor-pointer bg-[#fafafa]`}
                                    >
                                      {imageid === i && (
                                        <div
                                          className={` absolute z-10 bottom-1 right-1`}
                                        >
                                          <CiCircleCheck className="text-[#00f]" />
                                        </div>
                                      )}
                                      <div className="w-[100%] h-[100%] relative">
                                        <img
                                          src={p.link}
                                          alt="pic"
                                          className="p-2 flex-row flex shadow-lg h-full w-full rounded-sm dark:bg-[#313D4E] bg-[#fafafa] "
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
                          <div className="bg-[#f7f7f7] dark:bg-[#313D4E]  light:border my-2 h-[40px] flex justify-evenly rounded-xl overflow-hidden w-full">
                            <input
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className="bg-[#f7f7f7] text-[#424242] dark:bg-[#313D4E] dark:text-white w-[80%] outline-none h-full p-2"
                              placeholder="Search"
                            />
                            <div className=" w-[10%] bg-[#f7f7f7] dark:bg-[#313D4E]  h-full">
                              <MdSearch className="text-[#cfcfcf] dark:text-white w-[100%] h-full" />
                            </div>
                          </div>
                          <div className=" border-b-[1px] border-dotted w-[100%] py-1" />
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
                                  dispatch(setButton1(e.target.value));
                                }}
                                placeholder="enter button text"
                                maxLength={50}
                                className=" bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white light:border rounded-xl text-[#424242] w-[100%] px-2 p-1 max-h-[200px] outline-none "
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
                                value={redirection}
                                onChange={(e) => {
                                  dispatch(setRedirection(e.target.value));
                                }}
                                placeholder="Enter link "
                                className=" bg-[#f7f7f7] dark:bg-[#313D4E] dark:text-white px-2 light:border rounded-xl text-[#424242] w-[100%] p-1 max-h-[200px] outline-none "
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
                  <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] bg-[#fff] dark:bg-[#273142] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                    <div className="h-[80%] w-[90%] justify-evenly mt-4">
                      {/* Image */}
                      <div className="h-[550px] w-[100%]">
                        <div
                          className={`flex flex-col max-h-[400px] $ overflow-y-scroll no-scrollbar`}
                        >
                          <div className="bg-[#f1f1f1] dark:bg-[#3c4555]  relative p-0.5 items-center flex rounded-xl dark:text-[#171717] select-none text-[14px]">
                            <div
                              className={`duration-150 dark:bg-[#273142] dark:text-white bg-white rounded-xl h-[90%] w-[50%] absolute z-0  ${
                                uploadtype === "background" ? "ml-[49%]" : " "
                              }`}
                            ></div>
                            <div
                              onClick={() => setUploadtype("image")}
                              className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                                uploadtype === "image"
                                  ? "dark:text-white text-[#000] font-semibold"
                                  : "text-[#868686] dark:text-white cursor-pointer font-medium"
                              }`}
                            >
                              Images
                            </div>
                            <div
                              onClick={() => setUploadtype("background")}
                              className={`m-1 z-10  cursor-pointer font-medium rounded-xl h-[80%] w-[50%] flex justify-center items-center ${
                                uploadtype === "background"
                                  ? "dark:text-white text-[#000] font-semibold"
                                  : "text-[#868686] dark:text-white cursor-pointer font-medium"
                              }`}
                            >
                              Background
                            </div>
                          </div>
                          <div className="my-3">
                            <input
                              type="file"
                              name="myFile"
                              id="fileInput"
                              placeholder="Upload file"
                              onChange={
                                (e) => uploaderPics(e.target.files[0])
                                //  setFile()
                              }
                              className="w-[100%] self-start hidden text-[#424242]"
                            />

                            {load ? (
                              <div className="flex justify-between gap-4 bg-[#e2e2e2] text-black p-2 px-3 rounded-xl items-center">
                                <div className="text-xs w-full font-semibold">
                                  Upload Your Images
                                </div>
                                <div className="p-1 px-3 bg-[#4880FF] text-white text-sm  flex justify-center w-[120px] py-2 text-center items-center font-semibold rounded-lg">
                                  <div className="animate-spin">
                                    <AiOutlineLoading3Quarters />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-between gap-4 bg-[#e2e2e2] text-black p-2 px-3 rounded-xl items-center">
                                <div className="text-xs font-semibold">
                                  Upload Your{" "}
                                  {uploadtype === "image"
                                    ? "Images"
                                    : "Backgrounds"}
                                </div>
                                {uploadtype === "image" ? (
                                  <>
                                    {memberships == "Free" &&
                                    link.length >= 10 ? (
                                      <div
                                        onClick={() =>
                                          toast.error(
                                            "Max Image Upload Reached!"
                                          )
                                        }
                                        className="p-1 px-3 bg-[#4880FF] text-white flex justify-center items-center gap-1 text-sm font-semibold rounded-lg"
                                      >
                                        <div>Upload</div>
                                        <FaCrown className=" text-orange-300 " />
                                      </div>
                                    ) : (
                                      <label
                                        htmlFor="fileInput"
                                        className="p-1 px-3 bg-[#4880FF] text-white flex justify-center items-center gap-1 text-sm font-semibold rounded-lg"
                                      >
                                        <div>Upload</div>
                                      </label>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {memberships == "Free" &&
                                    blinks.length >= 10 ? (
                                      <div
                                        onClick={() =>
                                          toast.error(
                                            "Max Backgrounds Upload Reached!"
                                          )
                                        }
                                        className="p-1 px-3 bg-[#4880FF] text-white flex justify-center items-center gap-1 text-sm font-semibold rounded-lg"
                                      >
                                        <div>Upload</div>
                                        <FaCrown className=" text-orange-300 " />
                                      </div>
                                    ) : (
                                      <label
                                        htmlFor="fileInput"
                                        className="p-1 px-3 bg-[#4880FF] text-white flex justify-center items-center gap-1 text-sm font-semibold rounded-lg"
                                      >
                                        <div>Upload</div>
                                      </label>
                                    )}
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                          {uploadtype === "image" ? (
                            <div>
                              <div className="text-[#9c9c9c] font-medium text-[14px] mt-2">
                                Uploaded Images
                              </div>
                              <div className="h-full pn:max-sm:w-[100%] ">
                                <div
                                  className={`w-[100%] gap-3 pn:max-sm:w-[100%] grid grid-cols-2 h-[100%]`}
                                >
                                  {link &&
                                    link.map((m, i) => (
                                      <div
                                        key={i}
                                        onClick={() => {
                                          setUserImageId(i);
                                          dispatch(setimage(m));
                                          dispatch(setTrigger(false));
                                          if (m.premium) {
                                            if (memberships === "Free") {
                                              dispatch(
                                                setPremium({ type: "image" })
                                              );
                                            }
                                          } else {
                                            if (memberships === "Free") {
                                              dispatch(
                                                setRemovePremium({
                                                  type: "image",
                                                })
                                              );
                                            }
                                          }
                                        }}
                                        className={`flex items-center justify-center mt-1 relative group hover:border hover:border-[#00f] rounded-xl h-[130px] dark:bg-[#313D4E] duration-75 select-none cursor-pointer ${
                                          userImageId === i
                                            ? "border border-[#00f]"
                                            : null
                                        } dark:bg-[#313D4E] bg-[#fafafa]`}
                                      >
                                        {userImageId === i && (
                                          <div
                                            className={` absolute z-10 bottom-1 right-1`}
                                          >
                                            <CiCircleCheck className="text-[#00f]" />
                                          </div>
                                        )}
                                        <div className="w-[90%] h-[90%] rounded-xl">
                                          <img
                                            src={m}
                                            alt="pic"
                                            className="p-2 flex-row flex  rounded-xl h-full w-full dark:bg-[#313D4E]  bg-[#fafafa] "
                                          />
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="text-[#9c9c9c] font-medium text-[14px] mt-2">
                                Background Images
                              </div>
                              <div className="h-full w-full pn:max-sm:w-[100%] ">
                                <div
                                  className={`w-[100%] gap-3 pn:max-sm:w-[100%] grid grid-cols-2 h-[100%]`}
                                >
                                  {blinks &&
                                    blinks.map((m, i) => (
                                      <div
                                        key={i}
                                        onClick={() => {
                                          setBackId(i);
                                          dispatch(setBgImage(m));
                                          dispatch(setTrigger(false));
                                          if (m.premium) {
                                            if (memberships === "Free") {
                                              dispatch(
                                                setPremium({ type: "bgimage" })
                                              );
                                            }
                                          } else {
                                            if (memberships === "Free") {
                                              dispatch(
                                                setRemovePremium({
                                                  type: "bgimage",
                                                })
                                              );
                                            }
                                          }
                                        }}
                                        className={`flex items-center justify-center w-[130px] mt-1 relative group hover:border hover:border-[#00f] rounded-xl h-[130px] duration-75 select-none cursor-pointer ${
                                          backid === i
                                            ? "border border-[#00f]"
                                            : null
                                        } dark:bg-[#313D4E] bg-[#fafafa]`}
                                      >
                                        {backid === i && (
                                          <div
                                            className={` absolute z-10 bottom-1 right-1`}
                                          >
                                            <CiCircleCheck className="text-[#00f]" />
                                          </div>
                                        )}
                                        <div className="w-[90%] h-[90%]">
                                          <img
                                            src={m}
                                            alt="pic"
                                            className="p-2 flex-row flex h-full w-full  rounded-xl dark:bg-[#313D4E] bg-[#fafafa] "
                                          />
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* backgrounds */}
                    </div>
                  </div>
                ) : null}
                {/* adv options */}
                {/* moible */}
                {component === 5 ? (
                  <div className="h-[100%] select-none w-[98%] pn:max-sm:w-[100%] flex flex-col items-center pn:max-sm:rounded-t-3xl">
                    <div className="w-[100%] h-[100%] text-[#424242] dark:text-white p-1">
                      <div className="flex flex-col my-2 gap-1">
                        <div className="font-medium pl-2">
                          <div>Advanced options</div>
                        </div>
                        <div className="border-b-[0.5px] border-dotted" />
                        <div className="flex flex-col gap-4 px-2 my-3">
                          {(memberships === "Premium" ||
                            memberships === "Pro") && (
                            <div className="w-full flex flex-col">
                              <div className="text-[15px] font-semibold">
                                Add Custom Your Domains
                              </div>
                              <div className="flex border-b border-white w-full  justify-center items-center gap-1">
                                <input
                                  type="text"
                                  value={domain}
                                  onChange={(e) => setDomain(e.target.value)}
                                  placeholder="Add Your Domains"
                                  className="outline-none bg-transparent placeholder:text-sm w-full placeholder:text-[#9c9c9c]"
                                />
                                <div
                                  onClick={applyDomains}
                                  className="text-sm cursor-pointer py-2  rounded-xl  font-medium"
                                >
                                  Save
                                </div>
                              </div>
                            </div>
                          )}

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
                              Contact information
                            </div>
                            <div className="flex w-full justify-between items-center">
                              <div className="text-sm max-w-[90%] font-medium text-[#9c9c9c]">
                                Display your Contact to public
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
                              <div>Discard</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </DrawerContent>
          </div>

          {/* main */}
          <div className="h-[100%] w-[100%] dark:bg-[#1B2431] bg-[#f1f1f1] flex pn:max-sm:flex-col items-center justify-center">
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
              className={` duration-75 ${
                switcher === true
                  ? "xl:max-txl:h-[70%] xl:max-txl:w-[70%] h-[80%] w-[80%] bg-white  pn:max-ss:h-[30%] ss:max-pp:h-[40%] pp:max-sm:h-[60%] pn:max-sm:w-[98%] duration-75"
                  : "h-[500px] w-[300px] bg-slate-100"
              }`}
            >
              {/* Template 1 */}
              {template === 1 ? (
                <Template1
                  dispatch={dispatch}
                  showbutton={showbutton}
                  switcher={switcher}
                  objectType={objectType}
                  setComponent={setComponent}
                  setChange={setChange}
                  change={change}
                  font1={font1}
                  link1={link1}
                  link2={link2}
                  redirection={redirection}
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
                  redirection={redirection}
                  showbutton={showbutton}
                  objectType={objectType}
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
                  redirection={redirection}
                  switcher={switcher}
                  objectType={objectType}
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
                  redirection={redirection}
                  showbutton={showbutton}
                  switcher={switcher}
                  setComponent={setComponent}
                  setChange={setChange}
                  change={change}
                  font1={font1}
                  link1={link1}
                  objectType={objectType}
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
                  objectType={objectType}
                  font1={font1}
                  link1={link1}
                  link2={link2}
                  setTrigger={setTrigger}
                  redirection={redirection}
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
