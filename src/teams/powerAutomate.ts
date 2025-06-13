import { TeamPageConfig, TeamLibraryConfig } from '../types';

export const teamName: string = "Power Automate";

//=============================================================================
// PAGE TEMPLATES
//=============================================================================

export const pages: TeamPageConfig[] = [
  {
    id: "cover",
    pageName: "📋 Cover",
    componentKey: "656971a2fb5181219077b687d6c8586604d7523e",
    description: "Figma cover + Context cards to help anyone coming into the project understand the problem, goals, approaches, research findings, and any other useful information."
  },
  {
    id: "shipped",
    pageName: "🟢 Date - Shipped",
    componentKey: "5942e399690d55cd46d02777f8b7b4e66ad4278b",
    description: "Use this page to store designs that are shipped."
  },
  {
    id: "inProgress",
    pageName: "🟡 Vx - In Progress",
    componentKey: "cad33eee29401a8c897463c6d9d6d171eecb6650",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "draft",
    pageName: "🔴 Draft x",
    componentKey: "da22094e26cdda32813ec6bd9b5154ae8366064a",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "jtbd",
    pageName: "👤 JTBD",
    componentKey: "95a57e15c89662cc8a0c594c99b5be5967c1d583",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "components",
    pageName: "💠 Components",
    componentKey: "4b96e6be32c90b508b81eb98b21a964ba3792fa5",
    description: "Use this page to store all local components introduced in this project."
  },
  {
    id: "flowCharts",
    pageName: "🔶 Flow charts",
    componentKey: "1c790fa47465d86742df5c0d8226d764bffceda1",
    description: "Use this page to easily communicate highlevel user sceanarios to your stakeholders"
  },
  {
    id: "research",
    pageName: "📋 Research plan",
    componentKey: "8520b0b148e4534ebf82ab7a4df8b89a89b21778",
    description: "Use this page to add a research plan and host prototypes"
  },
  {
    id: "responsive",
    pageName: "📐 Responsive",
    componentKey: "c40775e72e0218cbe15ef349792a6bc8c492d819",
    description: "Use this page for reflow & 400% zoom canonical screens"
  },
  {
    id: "accessibility",
    pageName: "🛟 Accessibility",
    componentKey: "270b49d8fd0709f09bd2a056090173a26586cd6b",
    description: "Use this page for accessiblity guidance"
  },
  {
    id: "audit",
    pageName: "🖼️ Audit",
    componentKey: "c37a8247bde84040a2d831c07ca58e214ac680fe",
    description: "Use this page for audit guidance"
  }
];

//=============================================================================
// DESIGN LIBRARIES
//=============================================================================

export const libraries: TeamLibraryConfig[] = [
  {
    name: "PAU Desktop",
    description: "Power Automate Desktop librairy",
    fileKey: "Zx4JGPqyGlR5GXWlI6hnZr"
  },
  {
    name: "PAU Cloud",
    description: "Power Automate Cloud librairy",
    fileKey: "HuntQhDAnHhpZ8Mu4fQmbh"
  },
  {
    name: "Fluent Web 1",
    description: "Fluent Web 1 Components",
    fileKey: "F5BN2yodUyHlOfpL4KJCFK"
  },
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
