import { useState } from 'react'
import './Links.css'

function Links() {
  const [copiedId, setCopiedId] = useState(null)

  const links = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      copyText: 'https://www.linkedin.com/in/emily-em-whitney-8a24a6132/',
    },
    {
      id: 'email',
      label: 'Email',
      copyText: 'emilyiswhitney@gmail.com',
    },
  ]

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="links-container">
      <h2 className="section-title">Links</h2>
      <ul className="links-list">
        {links.map((link) => (
          <li key={link.id} className="link-item">
            <span className="link-label">{link.label}</span>
            <button
              type="button"
              className="link-copy"
              onClick={() => handleCopy(link.id, link.copyText)}
            >
              {copiedId === link.id ? 'Copied!' : 'Copy'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Links
