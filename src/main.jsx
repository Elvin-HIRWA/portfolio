import { Component } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#09090B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'monospace',
        }}>
          <div style={{ maxWidth: '600px', width: '100%' }}>
            <div style={{ color: '#5B5BD6', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              ⚡ EH Portfolio — Runtime Error
            </div>
            <div style={{
              background: '#18181B',
              border: '1px solid #27272A',
              borderRadius: '12px',
              padding: '1.5rem',
              color: '#ef4444',
              fontSize: '0.85rem',
              lineHeight: '1.6',
            }}>
              <div style={{ color: '#FAFAFA', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                {this.state.error.name}: {this.state.error.message}
              </div>
              <pre style={{ color: '#A1A1AA', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
                {this.state.error.stack}
              </pre>
            </div>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                background: '#5B5BD6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Reload page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
)
