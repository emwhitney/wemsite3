import './Currently.css'

function Currently() {
  const activities = [
    'Developing at Good Company',
    'Volunteer Counselor with Crisis Text Line',
    'Volunteer with Mount Sinai Morningside Child and Adolescent Inpatient Psychiatric Unit',
    'Learning volleyball rotations',
    'Gap year traveling',
  ]

  return (
    <div className="currently-container">
      <h2 className="section-title">Currently</h2>
      <ul className="currently-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            {activity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Currently
