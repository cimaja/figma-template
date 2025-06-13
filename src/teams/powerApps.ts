import { TeamPageConfig, TeamLibraryConfig } from '../types';

export const teamName: string = "Power Apps";

//=============================================================================
// PAGE TEMPLATES
//=============================================================================

export const pages: TeamPageConfig[] = [
  {
    id: "cover",
    pageName: "📋 Cover",
    componentKey: "3985dd6174854b30de2fd64e823e6ebeab19f037",
    description: "Figma cover + Context cards to help anyone coming into the project understand the problem, goals, approaches, research findings, and any other useful information."
  },
  {
    id: "shipped",
    pageName: "🟢 Date - Shipped",
    componentKey: "de26d0262e6afa3f764481794b840b6a32fab951",
    description: "Use this page to store designs that are shipped."
  },
  {
    id: "inProgress",
    pageName: "🟡 Vx - In Progress",
    componentKey: "eaeca16d9ac1d4b1b67dc3b1b4768b2ebdcf8d11",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "draft",
    pageName: "🔴 Draft x",
    componentKey: "d5f6c3a1ec968d9ea8ade9c557cd2fa331e75bca",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "jtbd",
    pageName: "👤 JTBD",
    componentKey: "76d95949cdb5d2c63ca401b05c271860abb05b9d",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "components",
    pageName: "💠 Components",
    componentKey: "82f1bc13dc9fb5617975bb88b22ff9338c89cacb",
    description: "Use this page to store all local components introduced in this project."
  },
  {
    id: "flowCharts",
    pageName: "🔶 Flow charts",
    componentKey: "53bd3fd73b92c7f2abeee548ddfc998734a61cc2",
    description: "Use this page to easily communicate highlevel user sceanarios to your stakeholders"
  },
  {
    id: "research",
    pageName: "📋 Research plan",
    componentKey: "0ab15265a9beb6da45e8e38afe11a0e9d89659c9",
    description: "Use this page to add a research plan and host prototypes"
  },
  {
    id: "responsive",
    pageName: "📐 Responsive",
    componentKey: "ba462dc8d044b7cfe1f866a559e5cc2fe19fd974",
    description: "Use this page for reflow & 400% zoom canonical screens"
  },
  {
    id: "accessibility",
    pageName: "🛟 Accessibility",
    componentKey: "c14ef127221c3f205932c82c29c69c277bd884a4",
    description: "Use this page for accessiblity guidance"
  },
  {
    id: "audit",
    pageName: "🖼️ Audit",
    componentKey: "803554dd9a85802ba62f0994304174a4a1660895",
    description: "Use this page for audit guidance"
  }
];

//=============================================================================
// DESIGN LIBRARIES
//=============================================================================

export const libraries: TeamLibraryConfig[] = [
  {
    name: "Fluent Web 2",
    description: "Fluent Web 2 Components",
    fileKey: "GvIcCw0tWaJVDSWD4f1OIW"
  },
  {
    name: "One BIC Fluent 2 and UCI Web",
    description: "One BIC Fluent 2 and UCI Web",
    fileKey: "rtHx2sQ6lVZDaka2OV9Shq"
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
