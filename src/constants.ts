//=============================================================================
// TYPE DEFINITIONS
//=============================================================================

/**
 * Represents a page in the template system
 */
export type PAGE_DATA_TYPE = {
  pageName: string
  componentKeys: {
    'Power Automate': string | null
    'Power Apps': string | null
    'Power Pages': string | null
    'Power Platform Admin Center': string | null
  }
  description: string
  displayPageName?: string
}

/**
 * Represents a library item that can be opened in Figma
 */
export type LIBRARY_ITEM_TYPE = {
  name: string
  description: string
  fileKey: string
}

/**
 * Collection of library items organized by team
 */
export type LIBRARIES_TYPE = Record<string, LIBRARY_ITEM_TYPE[]>

/**
 * Collection of pages organized by section
 */
export type PAGES_TYPE = Record<string, PAGE_DATA_TYPE>

//=============================================================================
// NAVIGATION
//=============================================================================

/**
 * Available teams in the plugin
 */
export const TEAMS = ['Power Automate', 'Power Apps', 'Power Pages', 'Power Platform Admin Center']

/**
 * Available tabs in the plugin
 */
export const TABS = ['Pages', 'Libraries']

/**
 * Helper function to get items for the selected tab
 */
export const getNewTabItems = (tab: string, team: string): PAGE_DATA_TYPE[] | LIBRARY_ITEM_TYPE[] => {
  if (tab === 'Pages') {
    return Object.values(PAGES)
  } else {
    return LIBRARIES[team] || []
  }
}

//=============================================================================
// PAGES CONFIGURATION
//=============================================================================

/**
 * Pages available in the template system
 * To add a new page:
 * 1. Add a new entry with a unique key
 * 2. Specify pageName (required) and description (optional)
 * 3. Add fileKey if the page should link to a specific Figma file
 */
export const PAGES: PAGES_TYPE = {
  cover: {
    pageName: '📋  Cover',
    componentKeys: {
      'Power Automate': '656971a2fb5181219077b687d6c8586604d7523e',
      'Power Apps': '3985dd6174854b30de2fd64e823e6ebeab19f037',
      'Power Pages': '2f13f9d7cb78d06fc8c982c5b10fcb55d9a30c49',
      'Power Platform Admin Center': 'a73c0cbec0d24e95d9c7ed94120790557e24a785',
    },
    description:
      'Figma cover + Context cards to help anyone coming into the project understand the problem, goals, approaches, research findings, and any other useful information.',
  },
  Shipped: {
    pageName: '🟢 Date - Shipped',
    componentKeys: {
      'Power Automate': '5942e399690d55cd46d02777f8b7b4e66ad4278b',
      'Power Apps': 'de26d0262e6afa3f764481794b840b6a32fab951',
      'Power Pages': '106fc6bbb8183920508a2af91d9f55df168a7b8a',
      'Power Platform Admin Center': '9afed3ab9f1b715c0646f96ba53c365a6161e4f0',
    },
    description: 'Use this page to store designs that are shipped.',
  },
  // readyForDevDesigns: {
  //   pageName: '🟢 Vx - Ready for Dev',
  //   componentKeys: {
  //     'Power Automate': '5942e399690d55cd46d02777f8b7b4e66ad4278b',
  //     'Power Apps': 'de26d0262e6afa3f764481794b840b6a32fab951',
  //     'Power Pages': '106fc6bbb8183920508a2af91d9f55df168a7b8a',
  //     'Power Platform Admin Center': '9afed3ab9f1b715c0646f96ba53c365a6161e4f0',
  //   },
  //   description: 'Use this page to store designs ready for dev.',
  // },
  InProgress: {
    pageName: '🟡 Vx - In Progress',
    componentKeys: {
      'Power Automate': 'cad33eee29401a8c897463c6d9d6d171eecb6650',
      'Power Apps': 'eaeca16d9ac1d4b1b67dc3b1b4768b2ebdcf8d11',
      'Power Pages': '0a66cca3967167574eba9e672245563bbc52b561',
      'Power Platform Admin Center': '60928deea68374b3ad9bee73746df9bd5788f831',
    },
    description: 'Use this page to store designs that are in progress.',
  },
  Draft: {
    pageName: '🔴 Draft x',
    componentKeys: {
      'Power Automate': 'da22094e26cdda32813ec6bd9b5154ae8366064a',
      'Power Apps': 'd5f6c3a1ec968d9ea8ade9c557cd2fa331e75bca',
      'Power Pages': 'c67cca616c84e4dbccb6d0af841d9856e2ec174e',
      'Power Platform Admin Center': '4204273d88ac1d9b862fad90f97b051eaf7489eb',
    },
    description: 'Use this page to store designs that are in progress.',
  },
  JTBD: {
    pageName: '👤 JTBD',
    componentKeys: {
      'Power Automate': '95a57e15c89662cc8a0c594c99b5be5967c1d583',
      'Power Apps': '76d95949cdb5d2c63ca401b05c271860abb05b9d',
      'Power Pages': 'a38634073b34dd4034681fc7adaf289b268371c8',
      'Power Platform Admin Center': 'defbcb4ba8b4291b7fc3f629a07e998634ab74f0',
    },
    description: 'Use this page to store designs that are in progress.',
  },
  components: {
    pageName: '💠 Components',
    componentKeys: {
      'Power Automate': '4b96e6be32c90b508b81eb98b21a964ba3792fa5',
      'Power Apps': '82f1bc13dc9fb5617975bb88b22ff9338c89cacb',
      'Power Pages': 'df3d73e15e7b73a0bb19c2aab3f0fc83e71eb2c4',
      'Power Platform Admin Center': '20761f28f97a14b332c32f38db85001b49e03846',
    },
    description: 'Use this page to store all local components introduced in this project.',
  },
  flowCharts: {
    pageName: '🔶 Flow charts',
    componentKeys: {
      'Power Automate': '1c790fa47465d86742df5c0d8226d764bffceda1',
      'Power Apps': '53bd3fd73b92c7f2abeee548ddfc998734a61cc2',
      'Power Pages': 'b8f4849ea8ab6cd37118ef151a884abd1abf800e',
      'Power Platform Admin Center': '22adb371f1e9cc884362e0085d7059446a7cbe5b',
    },
    description: 'Use this page to easily communicate highlevel user sceanarios to your stakeholders',
  },
  research: {
    pageName: '📋 Research plan',
    componentKeys: {
      'Power Automate': '8520b0b148e4534ebf82ab7a4df8b89a89b21778',
      'Power Apps': '0ab15265a9beb6da45e8e38afe11a0e9d89659c9',
      'Power Pages': '68df0a46acb076ec72fbed0636d6309dc40b9a88',
      'Power Platform Admin Center': '5ee75196623b0f8c29f715c312c24425eae9e847',
    },
    description: 'Use this page to add a research plan and host prototypes',
  },
  responsive: {
    pageName: '📐 Responsive',
    componentKeys: {
      'Power Automate': 'c40775e72e0218cbe15ef349792a6bc8c492d819',
      'Power Apps': 'ba462dc8d044b7cfe1f866a559e5cc2fe19fd974',
      'Power Pages': '19ea1d8086d80c6953c93742388f8bcafc6c7e09',
      'Power Platform Admin Center': 'faa6081c4a91ac9ba9194c05695af067ddfaf615',
    },
    description: 'Use this page for reflow & 400% zoom canonical screens',
  },
  accessibility: {
    pageName: '🛟 Accessibility',
    componentKeys: {
      'Power Automate': '270b49d8fd0709f09bd2a056090173a26586cd6b',
      'Power Apps': 'c14ef127221c3f205932c82c29c69c277bd884a4',
      'Power Pages': 'e34b32c2bb9226d05096a1650435a253a8c9ea4e',
      'Power Platform Admin Center': '0022f5a29cc56a6aae4d8e2da7a0694444203d06',
    },
    description: 'Use this page for accessiblity guidance',
  },
  audit: {
    pageName: '🖼️ Audit',
    componentKeys: {
      'Power Automate': 'c37a8247bde84040a2d831c07ca58e214ac680fe',
      'Power Apps': '803554dd9a85802ba62f0994304174a4a1660895',
      'Power Pages': 'eedf46e39cb654457c43f9be1e8c734680dcd3d9',
      'Power Platform Admin Center': '6ab6b40f160370457af099082ca4a19ac776e2c5',
    },
    description: 'Use this page for audit guidance',
  },
  divider: {
    pageName: '----------------------',
    componentKeys: {
      'Power Automate': null,
      'Power Apps': null,
      'Power Pages': null,
      'Power Platform Admin Center': null,
    },
    description: 'A blank divider page.',
  },
  archives: {
    pageName: '----ARCHIVES----',
    componentKeys: {
      'Power Automate': null,
      'Power Apps': null,
      'Power Pages': null,
      'Power Platform Admin Center': null,
    },
    description: 'Use this page to store designs that are archived.',
  },
}

//=============================================================================
// LIBRARIES CONFIGURATION
//=============================================================================

/**
 * Libraries available in the plugin, organized by team
 * To add a new library:
 * 1. Find the appropriate team section
 * 2. Add a new object to the team's array
 * 3. Specify name and description
 * 4. Add fileKey from the Figma file URL
 *    - Open the Figma file
 *    - Copy the key from the URL (e.g., Zx4JGPqyGlR5GXWlI6hnZr)
 */
export const LIBRARIES: LIBRARIES_TYPE = {
  // POWER AUTOMATE LIBRARIES
  'Power Automate': [
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
  ],
  // POWER APPS LIBRARIES
  'Power Apps': [
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
  ],
    // POWER PAGES LIBRARIES
  'Power Pages':  [
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
  ],
  // POWER PLATFORM ADMIN CENTER LIBRARIES
  'Power Platform Admin Center':  [
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
  ],
}

//=============================================================================
// HELPER FUNCTIONS
//=============================================================================

/**
 * Helper function to get page data by key
 */
export function getPageData(key: string): PAGE_DATA_TYPE | undefined {
  return PAGES[key]
}
