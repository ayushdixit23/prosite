import { createSlice } from "@reduxjs/toolkit";

export const prosite_data = createSlice({
  name: "prosite_data",
  initialState: {
    background_color: "#fff",
    buttonid: "",
    showbutton: true,
    objectType: "contain",
    trigger: false,
    component: 1,
    header1: "Main long header with several lines",
    header2: "This is subheader.Stormi is a dog.She is dark grey and has long legs.Her eyes are expressive and are able to let her humans know what she is thinking.",
    Button1: "Click Now",
    redirection: "",
    premium: {
      type: [],
      ispremium: false,
    },
    template: 1,
    link: "",
    buttontext: "Click Here",
    bgimage: "https://dn3w8358m09e7.cloudfront.net/def1234.jpeg",
    active: "",
    link1: "",
    link2: "",
    link3: "",
    font1: "",
    font2: "",
    font3: "",
    fontid1: "",
    fontid2: "",
    fontid3: "",
    color1: "",
    color2: "",
    perf: {
      about: true,
      community: true,
      store: true,
      contact: false,
    },
    buttoncss: {
      backgroundColor: "#171717",
      padding: "4px 8px",
      color: "white",
      borderRadius: "0.4rem",
      alignSelf: "",
      borderTop: "",
      borderBottom: "",
      borderRight: "",
      borderLeft: "",
      borderRadiusTop: "",
      borderRadiusBottom: "",
      borderRadiusRight: "",
      borderRadiusLeft: "",
      boxShadow: "",
      fontBold: "",
    },
    text: "Enter your text",
    background_image: "",
    templates: "",
    styles: "",
    display_about: true,
    display_store: true,
    display_community: true,
    primeimage: "https://dn3w8358m09e7.cloudfront.net/def1234.jpeg",
    textcolor: "",
    buttoncolor: "#000",
    Linkes: "",
    Name: "",
    Clic: false,
  },
  reducers: {
    showabout: (state, action) => {
      return {
        ...state,
        display_about: true,
      };
    },
    switchbg_color: (state, action) => {
      return {
        ...state,
        background_color: action.payload,
      };
    },
    setimage: (state, action) => {
      return {
        ...state,
        primeimage: action.payload,
      };
    },
    setbuttoncss: (state, action) => {
      state.buttoncss = action.payload;
    },
    setstyle: (state, action) => {
      const { textcolor, bgcolor, buttoncss } = action.payload;
      // return {
      //   ...state,
      //   textcolor: textcolor,
      //   background_color: bgcolor,
      //   buttoncolor: buttoncss,
      // };
      state.textcolor = textcolor;
      state.background_color = bgcolor;
      state.buttoncss.backgroundColor = buttoncss;
      state.buttoncss.color = textcolor;
      state.bgimage = ""
    },
    setFonts: (state, action) => {
      const { Linke, fontFamily } = action.payload;
      // return {
      //   ...state,
      //   Linkes: Linke,
      //   Name: fontFamily,
      // };
      if (state.font1 === "" && state.font2 === "" && state.font3 === "") {
        state.Linkes = Linke;
        state.Name = fontFamily;
      }
    },
    setbackground: (state, action) => {
      state.background_color = action.payload;
      state.bgimage = "";
    },
    setColor1: (state, action) => {
      if (state.active === "h1") {
        state.color1 = action.payload;
      }
    },
    setColor2: (state, action) => {
      if (state.active === "h2") {
        state.color2 = action.payload;
      }
    },
    setFont1: (state, action) => {
      const { name, link, id } = action.payload;
      if (state.active === "h1") {
        state.font1 = name;
        state.link1 = link;
        state.fontid1 = id

      }
      state.Name = "";
    },
    setFont2: (state, action) => {
      const { name, link, id } = action.payload;
      if (state.active === "h2") {
        state.font2 = name;
        state.link2 = link;
        state.fontid2 = id
      }
      state.Name = "";
    },
    setFont3: (state, action) => {
      const { name, link, id } = action.payload;
      if (state.active === "h3") {
        state.font3 = name;
        state.link3 = link;
        state.fontid3 = id
      }
      state.Name = "";
    },
    setFontT1: (state, action) => {
      const { name, link, id } = action.payload;
      state.font1 = name;
      state.link1 = link;
      state.fontid1 = id
      state.Name = "";
    },
    setFontT2: (state, action) => {
      const { name, link, id } = action.payload;

      state.font2 = name;
      state.link2 = link;
      state.fontid2 = id

      state.Name = "";
    },
    setReduxActive: (state, action) => {
      state.active = action.payload;
    },
    setBgImage: (state, action) => {
      state.bgimage = action.payload;
      state.background_color = "";
    },
    setPerf: (state, action) => {
      const { parameter } = action.payload;
      state.perf = {
        ...state.perf,
        [parameter]: !state.perf[parameter],
      };
    },
    setTextColor: (state, action) => {
      state.textcolor = action.payload;
    },
    settClic: (state, action) => {
      state.Clic = action.payload;
    },
    setPremium: (state, action) => {
      const { type } = action.payload;
      const typeIndex = state.premium.type.indexOf(type);

      if (typeIndex === -1) {
        state.premium.type.push(type);
      }
      state.premium.ispremium = state.premium.type.length > 0;
    },
    setObjectType: (state, action) => {
      state.objectType = action.payload
    },
    setRemovePremium: (state, action) => {
      // const { ispremium, type } = action.payload
      // state.premium.ispremium = ispremium
      // state.premium.type.splice(type, 1)
      const { type } = action.payload;
      const typeIndex = state.premium.type.indexOf(type);

      if (typeIndex !== -1) {
        state.premium.type.splice(typeIndex, 1);
      }

      state.premium.ispremium = state.premium.type.length > 0;
    },
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
    setComponent: (state, action) => {
      state.component = action.payload;
    },
    setTrigger: (state, action) => {
      state.trigger = action.payload;
    },
    setShowbutton: (state, action) => {
      state.showbutton = !state.showbutton;
    },
    setRedirection: (state, action) => {
      state.redirection = action.payload;
    },
    setButton1: (state, action) => {
      state.Button1 = action.payload
    },
    setHeader1: (state, action) => {
      state.header1 = action.payload
    },
    setHeader2: (state, action) => {
      state.header2 = action.payload
    },
    setButtonId: (state, action) => {
      state.buttonid = action.payload
    }
  },
});

export const {
  setTrigger,
  showabout,
  setComponent,
  switchbg_color,
  setButtonId,
  setimage,
  setRedirection,
  setButton1,
  setHeader1, setHeader2,
  setbuttoncss,
  setPremium,
  setbackground,
  setstyle,
  setFont1,
  setFont2,
  setFontT1,
  setFontT2,
  setFont3,
  setFonts,
  setColor1,
  setObjectType,
  setColor2,
  setRemovePremium,
  setTextColor,
  setReduxActive,
  setBgImage,
  setPerf,
  settClic,
  setShowbutton,
  setTemplate,
} = prosite_data.actions;
export default prosite_data.reducer;
