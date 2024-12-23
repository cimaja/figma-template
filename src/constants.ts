export type PAGE_DATA_TYPE = {
  pageName: string
  componentKeys: {
    'Power Automate': string | null
    'Power Apps': string | null
    'Power Pages': string | null
  }
  description: string
  displayPageName?: string
}

export type PAGES_TYPE = Record<string, PAGE_DATA_TYPE>

export const PAGES: PAGES_TYPE = {
  cover: {
    pageName: '📋  Cover',
    componentKeys: {
      'Power Automate': 'b1a8099bea0b34a189d232a06cca65cb3deed7b0',
      'Power Apps': '',
      'Power Pages': '',
    },
    description:
      'Figma cover + Context cards to help anyone coming into the project understand the problem, goals, approaches, research findings, and any other useful information.',
  },
  Shipped: {
    pageName: '🟢 Date - Shipped',
    componentKeys: {
      'Power Automate': 'b7fe74d5ae28a1634bd35a14c7a334495e46fc0c',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page to store designs that are shipped.',
  },
  // readyForDevDesigns: {
  //   pageName: '🟢 Vx - Ready for Dev',
  //   componentKeys: {
  //     'Power Automate': 'b7fe74d5ae28a1634bd35a14c7a334495e46fc0c',
  //     'Power Apps': '',
  //     'Power Pages': '',
  //   },
  //   description: 'Use this page to store designs ready for dev.',
  // },
  InProgress: {
    pageName: '🟡 Vx - In Progress',
    componentKeys: {
      'Power Automate': 'b7fe74d5ae28a1634bd35a14c7a334495e46fc0c',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page to store designs that are in progress.',
  },
  Draft: {
    pageName: '🔴 Draft x',
    componentKeys: {
      'Power Automate': 'b7fe74d5ae28a1634bd35a14c7a334495e46fc0c',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page to store designs that are in progress.',
  },
  components: {
    pageName: '💠 Components',
    componentKeys: {
      'Power Automate': 'b060721fd84738eaed64e036302ca0ed9d278807',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page to store all local components introduced in this project.',
  },
  flowCharts: {
    pageName: '🔶 Flow charts',
    componentKeys: {
      'Power Automate': 'c2b077faed323498b0e50b07c12be6ff24f4fc5c',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page to easily communicate highlevel user sceanarios to your stakeholders',
  },
  presentation: {
    pageName: '💎 Presentation',
    componentKeys: {
      'Power Automate': 'a31233af330cc0c8bf1623e793cea63b7fb65fc9',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page to create a presentation',
  },
  research: {
    pageName: '📋 Research plan',
    componentKeys: {
      'Power Automate': '774d5b69d9246d72ea9564ea60413832a2bdf1e5',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page to add a research plan and host prototypes',
  },
  responsive: {
    pageName: '📐 Responsive',
    componentKeys: {
      'Power Automate': '75c104b2494f9424aea67ceb3f65470975c67c93',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page for reflow & 400% zoom canonical screens',
  },
  accessibility: {
    pageName: '🛟 Accessibility',
    componentKeys: {
      'Power Automate': 'bd5030dc4c7f6f03dadba8a5ce24bfbe2d19c5c4',
      'Power Apps': '',
      'Power Pages': '',
    },
    description: 'Use this page for accessiblity guidance',
  },
  archives: {
    pageName: '----ARCHIVES----',
    componentKeys: {
      'Power Automate': null,
      'Power Apps': null,
      'Power Pages': null,
    },
    description: 'A blank divider page.',
  },
}

export const LIBRARIES: PAGES_TYPE = {
  divider: {
    pageName: '----DIVIDER----',
    componentKeys: {
      'Power Automate': null,
      'Power Apps': null,
      'Power Pages': null,
    },
    description: 'A blank divider page.',
  },
}

export const TABS = ['Pages', 'Libraries']

// Quick way to get items per tab
export function getNewTabItems(newTab: string): PAGE_DATA_TYPE[] {
  switch (newTab) {
    case 'Pages':
      return Object.values(PAGES)
    case 'Libraries':
      return Object.values(LIBRARIES)
    default:
      return []
  }
}

export function getPageData(key: string): PAGE_DATA_TYPE | undefined {
  return PAGES[key]
}
