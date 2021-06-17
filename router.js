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
  },
  {
    name: "digitalPerformancePage",
    path: "/digitalPerformancePage",
    component: path.resolve(__dirname, "pages/digitalPerformancePage.vue")
  },
  {
    name: "contactPage",
    path: "/contactPage",
    component: path.resolve(__dirname, "pages/contactPage.vue")
  },
  {
    name: "finishPage",
    path: "/finishPage",
    component: path.resolve(__dirname, "pages/finishPage.vue")
  }
];
