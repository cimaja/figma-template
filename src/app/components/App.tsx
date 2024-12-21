import * as React from 'react'
import {TABS, getNewTabItems} from '../../constants'
import 'figma-plugin-ds/dist/figma-plugin-ds.css'
import '../styles/ui.css'

const App: React.FC = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = React.useState<Set<string>>(new Set())
  const [selectedTab, setSelectedTab] = React.useState(TABS[0])
  const [selectedTabItems, setSelectedTabItems] = React.useState<string[]>([])

  React.useEffect(() => {
    changeTabs(selectedTab)
  }, [])

  const onCreate = () => {
    const keys = Array.from(selectedCheckboxes)
    parent.postMessage({pluginMessage: {type: 'create-pages', keys, selectedTab}}, '*')
    setSelectedCheckboxes(new Set())
  }

  const onCancel = () => {
    parent.postMessage({pluginMessage: {type: 'cancel'}}, '*')
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
    setSelectedCheckboxes((prev) => 
      prev.size === selectedTabItems.length ? new Set() : new Set(selectedTabItems)
    )
  }

  const changeTabs = (tab: string) => {
    setSelectedTab(tab)
    const newItems = getNewTabItems(tab)
    setSelectedTabItems(Array.isArray(newItems) ? newItems : [])
    setSelectedCheckboxes(new Set())
  }

  const allSelected = selectedCheckboxes.size === selectedTabItems.length && selectedTabItems.length > 0

  return (
    <div className="wrapper">
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
        <div className="checkbox-wrapper" onClick={onSelectAll}>
          <input
            type="checkbox"
            className="checkbox"
            checked={allSelected}
            onChange={() => {}}
          />
          <span className="label">Select all</span>
        </div>

        {selectedTabItems.map((item) => (
          <div key={item} className="checkbox-wrapper" onClick={() => onChange(item)}>
            <input
              type="checkbox"
              className="checkbox"
              checked={selectedCheckboxes.has(item)}
              onChange={() => {}}
            />
            <span className="label">{item}</span>
          </div>
        ))}
      </div>

      <div className="button-row">
        <button className="button button--secondary" onClick={onCancel}>
          Cancel
        </button>
        <button 
          className="button button--primary" 
          onClick={onCreate}
          disabled={selectedCheckboxes.size === 0}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default App
