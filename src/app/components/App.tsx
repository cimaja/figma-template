import * as React from 'react'
import {TABS, getNewTabItems, PAGE_DATA_TYPE, LIBRARY_ITEM_TYPE, TEAMS} from '../../constants'
import 'figma-plugin-ds/dist/figma-plugin-ds.css'
import '../styles/ui.css'

const App: React.FC = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState<Set<string>>(new Set())
  const [selectedTab, setSelectedTab] = React.useState(TABS[0])
  const [selectedTabItems, setSelectedTabItems] = React.useState<PAGE_DATA_TYPE[] | LIBRARY_ITEM_TYPE[]>([])
  const [selectedTeam, setSelectedTeam] = React.useState(TEAMS[0])
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null)

  React.useEffect(() => {
    // Load saved team on mount
    parent.postMessage({ pluginMessage: { type: 'get-selected-team' } }, '*')
    changeTabs(selectedTab)

    // Listen for messages from the plugin
    window.onmessage = (event) => {
      const msg = event.data.pluginMessage
      if (!msg) return

      switch (msg.type) {
        case 'team-loaded':
          setSelectedTeam(msg.team)
          break
        case 'items-loaded':
          setSelectedTabItems(msg.items)
          break
        case 'selected-team':
          setSelectedTeam(msg.team)
          if (selectedTab === 'Libraries') {
            setSelectedTabItems(getNewTabItems(selectedTab, msg.team))
          }
          break
      }
    }
  }, [])

  const onCreate = () => {
    const keys = Array.from(selectedCheckboxes)
    parent.postMessage({pluginMessage: {type: 'create-pages', keys, selectedTab, team: selectedTeam}}, '*')
    setSelectedCheckboxes(new Set())
  }

  const onChange = (key: string) => {
    setSelectedCheckboxes((prev) => {
      const newState = new Set(prev)
      if (newState.has(key)) {
        newState.delete(key)
      } else {
        newState.add(key)
      }
      return newState
    })
  }

  const onSelectAll = () => {
    if (selectedTab === 'Pages') {
      setSelectedCheckboxes((prev) => 
        prev.size === selectedTabItems.length ? new Set() : new Set(selectedTabItems.map((_, i) => i.toString()))
      )
    }
  }

  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const team = event.target.value
    setSelectedTeam(team)
    // Save team selection
    parent.postMessage({ pluginMessage: { type: 'save-selected-team', team } }, '*')
    if (selectedTab === 'Libraries') {
      setSelectedTabItems(getNewTabItems(selectedTab, team))
    }
  }

  const changeTabs = (tab: string) => {
    setSelectedTab(tab)
    const newItems = getNewTabItems(tab, selectedTeam)
    setSelectedTabItems(newItems)
    setSelectedCheckboxes(new Set())
  }

  const handleCopy = (e: React.MouseEvent, text: string, index: number) => {
    e.preventDefault()
    e.stopPropagation()

    // Create temporary textarea
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    
    // Select and copy
    textarea.select()
    document.execCommand('copy')
    
    // Cleanup
    document.body.removeChild(textarea)
    
    // Show feedback
    setCopiedIndex(index)
    setTimeout(() => {
      setCopiedIndex(null)
    }, 1000)
  }

  const renderPagesTab = () => {
    const items = selectedTabItems as PAGE_DATA_TYPE[]
    const allSelected = selectedCheckboxes.size === items.length && items.length > 0

    return (
      <>
        <div className="checkbox-wrapper" onClick={onSelectAll}>
          <input
            type="checkbox"
            className="checkbox"
            checked={allSelected}
            onChange={() => {}}
          />
          <span className="label">Select all</span>
        </div>

        {items.map((item, index) => (
          <div key={index} className="checkbox-wrapper" onClick={() => onChange(index.toString())}>
            <input
              type="checkbox"
              className="checkbox"
              checked={selectedCheckboxes.has(index.toString())}
              onChange={() => {}}
            />
            <span className="label">{item.pageName}</span>
          </div>
        ))}
      </>
    )
  }

  const renderLibrariesTab = () => {
    const libraries = selectedTabItems as LIBRARY_ITEM_TYPE[]

    return (
      <>
        <div className="helper-text">
          <h3 className="helper-text-title">Recommended libraries</h3>
          <p className="helper-text-description">
            Here are the recommended libraries that your team uses.
          </p>
          <a 
            href="https://help.figma.com/hc/en-us/articles/1500008731201-Enable-or-disable-a-library-in-a-design-file" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Learn how to enable a library
          </a>
        </div>
        <div className="libraries-list">
          {libraries.map((library, index) => (
            <button 
              key={index} 
              className="library-item"
              onClick={() => parent.postMessage({ pluginMessage: { type: 'open-file', fileKey: library.fileKey }}, '*')}
            >
              <div className="library-icon">
                <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.873 13H9.131C9.411 12.68 9.747 12.403 10.126 12.181C11.605 11.319 14.131 11.272 15.512 12.29H17V3.09C17 3.09 16.203 0.839996 12.58 0.839996C10.705 0.839996 9.678 1.442 9.124 2.024C8.735 2.431 8.579 2.827 8.524 3H8.475C8.421 2.827 8.265 2.43 7.876 2.024C7.322 1.442 6.295 0.839996 4.42 0.839996C0.797 0.839996 0 3.09 0 3.09V12.28H1.488C2.87 11.261 5.398 11.31 6.876 12.175C7.256 12.398 7.593 12.677 7.873 13ZM9 3.289V11.746C9.195 11.588 9.403 11.446 9.622 11.318C10.549 10.777 11.737 10.522 12.863 10.531C13.869 10.539 14.944 10.758 15.815 11.29H16V3.317L15.97 3.267C15.884 3.129 15.734 2.928 15.495 2.722C15.035 2.325 14.165 1.84 12.58 1.84C10.994 1.84 10.24 2.324 9.886 2.675C9.697 2.861 9.59 3.042 9.533 3.165C9.503 3.226 9.487 3.272 9.48 3.296L9.475 3.313L9.476 3.307L9.478 3.299V3.294L9.479 3.292V3.29L9.474 3.289H9ZM8 3.289H7.526L7.52 3.29V3.292L7.521 3.294L7.522 3.299L7.524 3.307L7.525 3.313C7.525 3.314 7.525 3.308 7.52 3.296C7.513 3.272 7.496 3.226 7.467 3.165C7.41 3.042 7.303 2.861 7.114 2.675C6.76 2.324 6.006 1.84 4.42 1.84C2.835 1.84 1.965 2.325 1.504 2.722C1.266 2.928 1.116 3.129 1.03 3.267L1 3.317V11.28H1.185C2.057 10.748 3.133 10.528 4.139 10.521C5.267 10.513 6.455 10.77 7.382 11.313C7.599 11.44 7.806 11.583 8 11.739V3.289Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="library-content">
                <span className="library-name">{library.name}</span>
                <span className="library-description">{library.description}</span>
              </div>
              <button 
                className="copy-button"
                onClick={(e) => handleCopy(e, library.name, index)}
                title="Copy library name"
              >
                {copiedIndex === index ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L7 12L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5028 4.62704L5.5 6.75V17.2542C5.5 19.0491 6.95507 20.5042 8.75 20.5042L17.3663 20.5045C17.0573 21.3782 16.224 22.0042 15.2444 22.0042H8.75C6.12665 22.0042 4 19.8776 4 17.2542V6.75C4 5.76929 4.62745 4.93512 5.5028 4.62704ZM17.75 2C18.9926 2 20 3.00736 20 4.25V17.25C20 18.4926 18.9926 19.5 17.75 19.5H8.75C7.50736 19.5 6.5 18.4926 6.5 17.25V4.25C6.5 3.00736 7.50736 2 8.75 2H17.75ZM17.75 3.5H8.75C8.33579 3.5 8 3.83579 8 4.25V17.25C8 17.6642 8.33579 18 8.75 18H17.75C18.1642 18 18.5 17.6642 18.5 17.25V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5Z" fill="currentColor" />
                  </svg>
                )}
              </button>
            </button>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className="wrapper">
      <div className="select-wrapper">
        <select 
          className="select"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          {TEAMS.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      <div className="tabs">
        {TABS.map((tab) => (
          <div
            key={tab}
            className={'tab ' + (selectedTab === tab ? 'tab--active' : '')}
            onClick={() => changeTabs(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="scrollable">
        {selectedTab === 'Pages' ? renderPagesTab() : renderLibrariesTab()}
      </div>

      <footer>
        <button
          className="button button--primary"
          onClick={onCreate}
          disabled={selectedCheckboxes.size === 0}
          style={{ width: '100%' }}
        >
          Create
        </button>
      </footer>
    </div>
  )
}

export default App
