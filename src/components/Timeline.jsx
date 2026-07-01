import './Timeline.css'

function Timeline() {
  const milestones = [
    {
      date: 'May 2020',
      title: 'Graduate from Johns Hopkins University',
      description: 'Degrees in Economics and Writing Seminars (creative writing).'
    },
    {
      date: 'Jun 2020',
      title: 'Research Assistant at Johns Hopkins 21st Century Cities Initiative',
      description: 'Cleaning cities data with Python. Fell in love with coding.'
    },
    {
      date: '2021',
      title: 'Learn to Code',
      description: 'Berkeley open source courses.'
    },
    {
      date: 'May 2021',
      title: 'Recurse Center stay',
      description: 'Building small projects.'
    },
    {
      date: 'Sep 2021',
      title: 'CareCopilot Beta Product Development',
      description: 'Building beta product at a startup helping caregivers navigate the caregiving process, headed by Alyse Dunn.'
    },
    {
      date: 'Mar 2022',
      title: 'Software Engineer II at Intuit Mailchimp',
      description: 'Started at Intuit Mailchimp on the partnerships and integrations team.'
    },
    {
      date: 'Aug 2023',
      title: 'Promoted to Software Engineer III',
      description: 'Continued work on key integrations and activating integrations data.'
    },
    {
      date: 'Aug 2024',
      title: 'Promoted to Senior Software Engineer',
      description: 'Worked extensively with Shopify, Wix, and WooCommerce integrations.'
    },
    {
      date: 'Jan 2026',
      title: 'Gap Year for Exploration',
      description: 'Taking a step back to consider computing in an AI world. Exploring behavioral tech and health tech, taking psychology classes, and volunteering in clinical contexts.'
    },
    {
      date: 'Apr 2026',
      title: 'Developing for Good Company',
      description: 'Helping develop new websites for Good Company, a global production company.'
    },
    {
      date: 'Aug 2026',
      title: 'Computational Psychiatry Research',
      description: 'Assisting with research on computational psychiatry under Matteo Malgaroli\'s DigiMind lab.'
    }
  ]

  return (
    <div className="timeline-container">
      <h2 className="section-title">Career Timeline</h2>
      <div className="timeline">
        <div className="timeline-track">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{milestone.date}</span>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
