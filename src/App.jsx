import './App.css'
import Router from './component/Router'
import PageOne from './component/PageOne'
import PageTwo from './component/PageTwo'
import PageThree from './component/PageThree'

function App() {
  const routes = [
    {
      path: '/',
      element: <PageOne />
    },
    {
      path: '/two',
      element: <PageTwo />
    },
    {
      path: '/three',
      element: <PageThree />
    }
  ]

  return (
    <div>
      <h1>Root</h1>
      <Router routes={routes} fallback={<div><h3>Page Not Found</h3></div>} />
    </div>
  )
}

export default App
