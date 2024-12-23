import {getNewTabItems} from '../constants'

figma.showUI(__html__, {width: 300, height: 500})

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-pages') createPages(msg)
  if (msg.type === 'cancel') figma.closePlugin()
}

const createPages = async (msg: any) => {
  const selectedTab = msg.selectedTab
  const selectedTeam = msg.team
  const numKeys = msg.keys.length

  console.log('Creating pages for team:', selectedTeam)
  console.log(msg)

  if (numKeys > 0) {
    msg.keys.map(async (key: string) => {
      const pageData = getNewTabItems(selectedTab)[parseInt(key)]

      // Create page
      const page = figma.createPage()
      page.name = pageData.pageName

      // Check for page templates and clone them into the page
      const componentKey = pageData.componentKeys[selectedTeam]
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
          const frameRef = page.children[0] as InstanceNode // it should be the first and only node
          frameRef.children.forEach((child) => frameRef.parent.appendChild(child))

          // Remove the tmp frameRef
          frameRef.remove()
        } catch (error) {
          console.error('Error creating page:', error)
          figma.notify('Error creating page: ' + error.message)
        }
      }
    })

    figma.notify(`[${numKeys}] Page${numKeys > 1 ? 's' : ''} generated!`)
  } else {
    figma.notify('Please select at least one page to generate')
  }
}
