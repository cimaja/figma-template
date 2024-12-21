export type PAGE_DATA_TYPE = {
  pageName: string
  componentKey: string
  description: string
  displayPageName?: string
}

export type PAGES_TYPE = Record<string, PAGE_DATA_TYPE>

export const PAGES: PAGES_TYPE = {
  cover: {
    pageName: '📋  Cover',
    componentKey: 'b1a8099bea0b34a189d232a06cca65cb3deed7b0',
    description:
      'Figma cover + Context cards to help anyone coming into the project understand the problem, goals, approaches, research findings, and any other useful information.',
  },
  wipDesigns: {
    pageName: '🚧 Vx - Designs',
    componentKey: '0dbd204b308d1d08123fa086ab3a4a3abbf18984',
    description: 'Use this page to store work in progress designs. Replace X with the appropriate version',
  },
  readyForDevDesigns: {
    pageName: '✅ Vx - Designs ready for dev',
    componentKey: 'b7fe74d5ae28a1634bd35a14c7a334495e46fc0c',
    description: 'Use this page to store designs ready for dev.',
  },
  components: {
    pageName: '💠 Components',
    componentKey: 'b060721fd84738eaed64e036302ca0ed9d278807',
    description: 'Use this page to store all local components introduced in this project.',
  },
  flowCharts: {
    pageName: '🔶  Flow charts',
    componentKey: 'c2b077faed323498b0e50b07c12be6ff24f4fc5c',
    description: 'Use this page to easily communicate highlevel user sceanarios to your stakeholders',
  },
  audit: {
    pageName: '🖼️ Audit',
    componentKey: 'c7aa526dcc6bd8f190239321a163f7839d5053bd',
    description: 'Use this page to add internal and external references',
  },
  contentIdeas: {
    pageName: '🖋️ Content Ideas',
    componentKey: null,
    description: 'Use this page to explore new content ideas',
  },
  presentation: {
    pageName: '💎 presentation',
    componentKey: 'a31233af330cc0c8bf1623e793cea63b7fb65fc9',
    description: 'Use this page to create a presentation',
  },
  research: {
    pageName: '📋 Research plan',
    componentKey: '774d5b69d9246d72ea9564ea60413832a2bdf1e5',
    description: 'Use this page to add a research plan and host prototypes',
  },
  archives: {
    pageName: '----ARCHIVES----', 
    componentKey: null,
    description: 'A blank divider page.',
  },
  responsive: {
    pageName: '📐 Responsive',
    componentKey: '75c104b2494f9424aea67ceb3f65470975c67c93',
    description: 'Use this page for reflow & 400% zoom canonical screens',
  },
  accessibility: {
    pageName: '🛟 Accessibility',
    componentKey: 'bd5030dc4c7f6f03dadba8a5ce24bfbe2d19c5c4',
    description: 'Use this page for accessiblity guidance',
  },
}

export const OTHER: PAGES_TYPE = {
  divider: {
    pageName: '----DIVIDER----',
    componentKey: null,
    description: 'A blank divider page.',
  },
}

export const TABS = ['Pages', 'Sections', 'Components']

// Quick way to get items per tab
export function getNewTabItems(newTab: string): string[] {
  switch (newTab) {
    case 'Pages':
      return Object.keys(PAGES)
    case 'Sections':
      return ['Section 1', 'Section 2', 'Section 3']
    case 'Components':
      return ['Component 1', 'Component 2', 'Component 3']
    default:
      return []
  }
}

export function getPageData(key: string): PAGE_DATA_TYPE | undefined {
  return PAGES[key]
}
