import { TeamPageConfig, TeamLibraryConfig } from '../types';

export const teamName: string = "Microsoft Copilot Studio";

//=============================================================================
// PAGE TEMPLATES
//=============================================================================

export const pages: TeamPageConfig[] = [
  {
    id: "cover",
    pageName: "📋 Cover",
    componentKey: "35ba1ecaf735ea6fc9f80b6dbdb50250cc2fb115",
    description: "Figma cover + Context cards to help anyone coming into the project understand the problem, goals, approaches, research findings, and any other useful information."
  },
  {
    id: "shipped",
    pageName: "🟢 Date - Shipped",
    componentKey: "5022bfe7757c7e160a2a07aa2b8374d8541ccb5f",
    description: "Use this page to store designs that are shipped."
  },
  {
    id: "inProgress",
    pageName: "🟡 Vx - In Progress",
    componentKey: "68a43a641e84546cf76d19bdfad9a2f8513816e9",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "draft",
    pageName: "🔴 Draft x",
    componentKey: "948c1fcc953284f637f9f7d35fd99bec79141d12",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "jtbd",
    pageName: "👤 JTBD",
    componentKey: "b8f079eff313d4e034abf3d28730b51a9a975fb9",
    description: "Use this page to store designs that are in progress."
  },
  {
    id: "components",
    pageName: "💠 Components",
    componentKey: "11e11247dcc74cd11d7de0810892527826945031",
    description: "Use this page to store all local components introduced in this project."
  },
  {
    id: "flowCharts",
    pageName: "🔶 Flow charts",
    componentKey: "559094fd1eab6a5e882fdbd21f4dfed1388764bf",
    description: "Use this page to easily communicate highlevel user sceanarios to your stakeholders"
  },
  {
    id: "research",
    pageName: "📋 Research plan",
    componentKey: "2148a82d3346c911f015984c9b28e3dfe3658917",
    description: "Use this page to add a research plan and host prototypes"
  },
  {
    id: "responsive",
    pageName: "📐 Responsive",
    componentKey: "5c8182f687fdbed83912b58842633cedff78486b",
    description: "Use this page for reflow & 400% zoom canonical screens"
  },
  {
    id: "accessibility",
    pageName: "🛟 Accessibility",
    componentKey: "1f2333b95cbb4d393875c7700a8532f67b3e214f",
    description: "Use this page for accessiblity guidance"
  },
  {
    id: "audit",
    pageName: "🖼️ Audit",
    componentKey: "07e541b9ec669d9f6ac991079327c93a841b22ad",
    description: "Use this page for audit guidance"
  }
];

//=============================================================================
// DESIGN LIBRARIES
//=============================================================================

export const libraries: TeamLibraryConfig[] = [
  {
    name: "Copilot Studio UI Kit",
    description: "Microsoft Copilot Studio UI Components",
    fileKey: "7raji0IWkuBRxs5kLiADgI"
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
