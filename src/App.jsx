import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogGalleryDOM from './components/dog-gallery-dom.jsx'
import DogGalleryState from './components/dog-gallery-states-2.jsx'
import DogCard from './components/dog-card-1.jsx'
import FavouriteToggle from './components/FavouriteToggle-3.jsx'
import AdoptableList from './components/AdoptableList-4.jsx'
import AdoptionForm from './components/AdoptionForm-5.jsx'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { name: 'Part 1 - Events', component: DogCard },
    { name: 'Part 2 - State', component: DogGalleryState },
    { name: 'Part 3 - Snapshot', component: FavouriteToggle },
    { name: 'Part 4 - Arrays', component: AdoptableList },
    { name: 'Part 5 - Forms', component: AdoptionForm },
    { name: 'DOM Way', component: DogGalleryDOM }
  ]

  const ActiveComponent = tabs[activeTab].component

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>🐾 React Learning Lab</h1>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: activeTab === index ? '#4a90d9' : '#e0e0e0',
              color: activeTab === index ? 'white' : '#333',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: activeTab === index ? 'bold' : 'normal',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div style={{
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #ddd',
        backgroundColor: '#fafafa',
        minHeight: '400px'
      }}>
        <ActiveComponent />
      </div>
    </div>
  )
}

export default App
