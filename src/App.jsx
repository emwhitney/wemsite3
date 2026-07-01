import { useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import GlassPanel from './components/GlassPanel'
import Timeline from './components/Timeline'
import Currently from './components/Currently'
import Links from './components/Links'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState(null)

  const handleTabChange = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null)
    } else {
      setActiveTab(tab)
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Timeline':
        return <Timeline />
      case 'Currently':
        return <Currently />
      case 'Links':
        return <Links />
      default:
        return null
    }
  }

  return (
    <div className="app">
      <Hero />
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <GlassPanel isOpen={activeTab !== null} activeTab={activeTab}>
        <div className="content-transition" key={activeTab}>
          {renderContent()}
        </div>
      </GlassPanel>
    </div>
  )
}

export default App
