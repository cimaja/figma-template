import { TeamPageConfig, TeamLibraryConfig } from '../types';

export const teamName: string = "Power Pages";

//=============================================================================
// PAGE TEMPLATES
//=============================================================================

export const pages: TeamPageConfig[] = [
  {
    id: "cover",
    pageName: "📋 Cover",
    componentKey: "2f13f9d7cb78d06fc8c982c5b10fcb55d9a30c49",
    description: "Figma cover + Context cards to help anyone coming into the project understand the problem, goals, approaches, research findings, and any other useful information."
  },
  {
    id: "shipped",
    pageName: "🟢 Date - Shipped",
    componentKey: "106fc6bbb8183920508a2af91d9f55df168a7b8a",
    description: "Use this page to store designs that are shipped."
  },
  {
    id: "inProgress",
    pageName: "🟡 Vx - In Progress",
    componentKey: "0a66cca3967167574eba9e672245563bbc52b561",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "draft",
    pageName: "🔴 Draft x",
    componentKey: "c67cca616c84e4dbccb6d0af841d9856e2ec174e",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "jtbd",
    pageName: "👤 JTBD",
    componentKey: "a38634073b34dd4034681fc7adaf289b268371c8",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "components",
    pageName: "💠 Components",
    componentKey: "df3d73e15e7b73a0bb19c2aab3f0fc83e71eb2c4",
    description: "Use this page to store all local components introduced in this project."
  },
  {
    id: "flowCharts",
    pageName: "🔶 Flow charts",
    componentKey: "b8f4849ea8ab6cd37118ef151a884abd1abf800e",
    description: "Use this page to easily communicate highlevel user sceanarios to your stakeholders"
  },
  {
    id: "research",
    pageName: "📋 Research plan",
    componentKey: "68df0a46acb076ec72fbed0636d6309dc40b9a88",
    description: "Use this page to add a research plan and host prototypes"
  },
  {
    id: "responsive",
    pageName: "📐 Responsive",
    componentKey: "19ea1d8086d80c6953c93742388f8bcafc6c7e09",
    description: "Use this page for reflow & 400% zoom canonical screens"
  },
  {
    id: "accessibility",
    pageName: "🛟 Accessibility",
    componentKey: "e34b32c2bb9226d05096a1650435a253a8c9ea4e",
    description: "Use this page for accessiblity guidance"
  },
  {
    id: "audit",
    pageName: "🖼️ Audit",
    componentKey: "eedf46e39cb654457c43f9be1e8c734680dcd3d9",
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
