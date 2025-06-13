import { TeamPageConfig, TeamLibraryConfig } from '../types';

export const teamName: string = "Power Platform Admin Center";

//=============================================================================
// PAGE TEMPLATES
//=============================================================================

export const pages: TeamPageConfig[] = [
  {
    id: "cover",
    pageName: "📋 Cover",
    componentKey: "a73c0cbec0d24e95d9c7ed94120790557e24a785",
    description: "Figma cover + Context cards to help anyone coming into the project understand the problem, goals, approaches, research findings, and any other useful information."
  },
  {
    id: "shipped",
    pageName: "🟢 Date - Shipped",
    componentKey: "9afed3ab9f1b715c0646f96ba53c365a6161e4f0",
    description: "Use this page to store designs that are shipped."
  },
  {
    id: "inProgress",
    pageName: "🟡 Vx - In Progress",
    componentKey: "60928deea68374b3ad9bee73746df9bd5788f831",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "draft",
    pageName: "🔴 Draft x",
    componentKey: "4204273d88ac1d9b862fad90f97b051eaf7489eb",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "jtbd",
    pageName: "👤 JTBD",
    componentKey: "defbcb4ba8b4291b7fc3f629a07e998634ab74f0",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "components",
    pageName: "💠 Components",
    componentKey: "20761f28f97a14b332c32f38db85001b49e03846",
    description: "Use this page to store all local components introduced in this project."
  },
  {
    id: "flowCharts",
    pageName: "🔶 Flow charts",
    componentKey: "22adb371f1e9cc884362e0085d7059446a7cbe5b",
    description: "Use this page to easily communicate highlevel user sceanarios to your stakeholders"
  },
  {
    id: "research",
    pageName: "📋 Research plan",
    componentKey: "5ee75196623b0f8c29f715c312c24425eae9e847",
    description: "Use this page to add a research plan and host prototypes"
  },
  {
    id: "responsive",
    pageName: "📐 Responsive",
    componentKey: "faa6081c4a91ac9ba9194c05695af067ddfaf615",
    description: "Use this page for reflow & 400% zoom canonical screens"
  },
  {
    id: "accessibility",
    pageName: "🛟 Accessibility",
    componentKey: "0022f5a29cc56a6aae4d8e2da7a0694444203d06",
    description: "Use this page for accessiblity guidance"
  },
  {
    id: "audit",
    pageName: "🖼️ Audit",
    componentKey: "6ab6b40f160370457af099082ca4a19ac776e2c5",
    description: "Use this page for audit guidance"
  }
];

//=============================================================================
// DESIGN LIBRARIES
//=============================================================================

export const libraries: TeamLibraryConfig[] = [
  {
    name: "PPAC Fluent Web variables",
    description: "PPAC Fluent Web variables",
    fileKey: "ISIg5GBv6b4fGsGH5V9Ia1"
  },
  {
    name: "PPAC Web library",
    description: "PPAC Web library",
    fileKey: "fQX6Kei0GhmXI4NTTgOcUu"
  },
  {
    name: "Copilot Web UI Kit",
    description: "Copilot Web UI Kit Components",
    fileKey: "7raji0IWkuBRxs5kLiADgI"
  },
  {
    name: "Fluent Web 2",
    description: "Fluent Web 2 Components",
    fileKey: "GvIcCw0tWaJVDSWD4f1OIW"
  },
  {
    name: "Fluent 2 Design Language",
    description: "Fluent 2 Design Language",
    fileKey: "SicJs4UNaTg29YS8yqhqFv"
  },
  {
    name: "One BIC Fluent 2 and UCI Web",
    description: "One BIC Fluent 2 and UCI Web",
    fileKey: "rtHx2sQ6lVZDaka2OV9Shq"
  },
  {
    name: "Fluent avatars",
    description: "Fluent avatars",
    fileKey: "KGP1cSTKB0NsKZeLhkdlJBXv"
  },
  {
    name: "Fluent Data Viz UI Kit",
    description: "Fluent Data Viz UI Kit",
    fileKey: "2BIB5g5S4UCXIiKf314PZ7"
  },
  {
    name: "Spot illustration",
    description: "Spot illustration",
    fileKey: "x9OflizSYlhILp5nfvV6C0"
  },
  {
    name: "BAP product icon library",
    description: "BAP product icon library",
    fileKey: "oTsMcgqutpfOMjNgDFNBIL"
  },
  {
    name: "Fluent Icons",
    description: "Fluent Icons Library",
    fileKey: "43oQOCD2164ExeSf5ajmou"
  },
  {
    name: "Connectors",
    description: "Power Platform Connector Icons",
    fileKey: "PPFZ2wUBeZXsGpLJsNmmeQ"
  }
];
