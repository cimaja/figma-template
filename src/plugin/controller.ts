import { getAvailableTeams, getPagesForTeam, getLibrariesForTeam } from '../configLoader'
import { TeamPageConfig, TeamLibraryConfig } from '../types'

figma.showUI(__html__, {width: 320, height: 500})

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-pages') {
    createPages(msg)
  }
  else if (msg.type === 'cancel') {
    figma.closePlugin()
  }
  else if (msg.type === 'get-file-thumbnail') {
    try {
      const file = await figma.clientStorage.getAsync(msg.fileKey)
      if (file) {
        figma.ui.postMessage({ 
          type: 'file-thumbnail', 
          fileKey: msg.fileKey, 
          thumbnail: file.thumbnail 
        })
      }
    } catch (error) {
      console.error('Error fetching thumbnail:', error)
    }
  }
  else if (msg.type === 'open-file') {
    try {
      const url = `https://www.figma.com/file/${msg.fileKey}`
      figma.notify('Opening file...')
      figma.ui.hide()
      figma.ui.postMessage({ type: 'open-url', url })
      setTimeout(() => {
        figma.ui.show()
      }, 100)
    } catch (error) {
      console.error('Error opening file:', error)
      figma.notify('Error opening file: ' + error.message)
    }
  }
  else if (msg.type === 'get-tab-items') {
    const team = msg.team || (getAvailableTeams().length > 0 ? getAvailableTeams()[0] : '')
    let items: TeamPageConfig[] | TeamLibraryConfig[] = []
    
    console.log('get-tab-items requested for tab:', msg.tab, 'and team:', team);
    console.log('Available teams:', getAvailableTeams());
    
    if (msg.tab === 'Pages') {
      items = getPagesForTeam(team)
      console.log('Pages for team', team, ':', items);
    } else {
      items = getLibrariesForTeam(team)
      console.log('Libraries for team', team, ':', items);
    }
    
    figma.ui.postMessage({ type: 'tab-items', items })
  }
  else if (msg.type === 'save-selected-team') {
    await figma.clientStorage.setAsync('selectedTeam', msg.team)
  }
  else if (msg.type === 'get-selected-team') {
    const savedTeam = await figma.clientStorage.getAsync('selectedTeam')
    const availableTeams = getAvailableTeams()
    const defaultTeam = availableTeams.length > 0 ? availableTeams[0] : ''
    
    figma.ui.postMessage({ 
      type: 'selected-team', 
      team: savedTeam || defaultTeam,
      availableTeams: availableTeams
    })
  }
  else if (msg.type === 'copy-to-clipboard') {
    // Notify success
    figma.notify('Copied to clipboard')
  }
  else if (msg.type === 'create-rectangles') {
    const nodes = []

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle()
      rect.x = i * 150
      rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}]
      figma.currentPage.appendChild(rect)
      nodes.push(rect)
    }

    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
  }
}

const createPages = async (msg: any) => {
  const selectedTab = msg.selectedTab
  const selectedTeam = msg.team
  const keys = msg.keys
  const numKeys = keys.length

  console.log('Creating pages for team:', selectedTeam)
  console.log(msg)

  // Load required fonts before creating pages
  try {
    await figma.loadFontAsync({ family: "Segoe UI", style: "Bold" })
  } catch (error) {
    console.error('Error loading font:', error)
    figma.notify('Error: Failed to load required fonts')
    return
  }

  if (numKeys > 0) {
    for (const key of keys) {
      if (selectedTab === 'Pages') {
        const items = getPagesForTeam(selectedTeam)
        const pageData = items[parseInt(key)] as TeamPageConfig
        
        // Create page
        const page = figma.createPage()
        page.name = pageData.displayPageName || pageData.pageName

        // Check for page templates and clone them into the page
        const componentKey = pageData.componentKey
        if (componentKey && pageData.pageName) {
          try {
            // Get the component from the Tools library by component.key
            const template = await figma.importComponentByKeyAsync(componentKey)
            const templateInstance: InstanceNode = template.createInstance() as InstanceNode

            // Add the template to the page
            page.insertChild(0, templateInstance)

            // Detach instance, keep the tree clean
            templateInstance.detachInstance()

            // Zoom to fit the template in view
            figma.viewport.scrollAndZoomIntoView([templateInstance])

            // Re-get the templateInstance
            const frameRef = page.children[0] as InstanceNode
            frameRef.children.forEach((child) => frameRef.parent.appendChild(child))

            // Remove the tmp frameRef
            frameRef.remove()
          } catch (error) {
            console.error('Error creating page:', error)
            figma.notify('Error creating page: ' + error.message)
          }
        }
      }
    }

    figma.notify(`[${numKeys}] Page${numKeys > 1 ? 's' : ''} generated!`)
  } else {
    figma.notify('Please select at least one page to generate')
  }
}
