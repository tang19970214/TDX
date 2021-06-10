import path from "path";

export default [{
    name: "index",
    path: "/",
    component: path.resolve(__dirname, "pages/index.vue")
  },
  {
    name: "basicInfo",
    path: "/basicInfo",
    component: path.resolve(__dirname, "pages/basicInfo.vue")
  },
  {
    name: "digitalInvestment",
    path: "/digitalInvestment",
    component: path.resolve(__dirname, "pages/digitalInvestment.vue")
  },
  {
    name: "digitalMaturity",
    path: "/digitalMaturity",
    component: path.resolve(__dirname, "pages/digitalMaturity.vue")
  }
];
