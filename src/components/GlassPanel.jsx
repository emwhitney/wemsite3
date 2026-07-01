import { useState, useEffect } from 'react'
import './GlassPanel.css'

function GlassPanel({ children, isOpen, activeTab }) {
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    setIsMinimized(false)
  }, [activeTab])

  if (!isOpen) return null

  const isCompact = activeTab === 'Links' || activeTab === 'Currently'

  return (
    <div
      className={`glass-panel-shell ${isMinimized ? 'is-minimized' : 'is-expanded'} ${
        isCompact ? 'is-compact' : ''
      }`}
      onClick={isMinimized ? () => setIsMinimized(false) : undefined}
      role={isMinimized ? 'button' : undefined}
      tabIndex={isMinimized ? 0 : undefined}
      onKeyDown={
        isMinimized
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setIsMinimized(false)
              }
            }
          : undefined
      }
      aria-label={isMinimized ? `Expand ${activeTab} panel` : undefined}
    >
      <div className="glass-panel-minimized-content" aria-hidden={!isMinimized}>
        <span className="minimized-label">{activeTab}</span>
        <span className="expand-icon" aria-hidden="true" />
      </div>

      <div className="glass-panel-expanded-content" aria-hidden={isMinimized}>
        <button
          type="button"
          className="minimize-button"
          onClick={(event) => {
            event.stopPropagation()
            setIsMinimized(true)
          }}
          aria-label="Minimize panel"
        >
          −
        </button>
        <div className="glass-panel-body">{children}</div>
      </div>
    </div>
  )
}

export default GlassPanel
