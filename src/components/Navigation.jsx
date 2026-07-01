import './Navigation.css'

function Navigation({ activeTab, onTabChange }) {
  const tabs = ['Timeline', 'Currently', 'Links']

  return (
    <nav className="navigation navigation-left">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`nav-item ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
