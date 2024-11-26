import './styles/global.css'
import { useEffect, useState } from 'react'
import Links from './components/Links'
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <img className="profile" src="https://github.com/cesar-lima.png" alt="foto de perfil" />
          <h1>César Lima</h1>
          <p>Front-End Developer</p>

          <Links />
        </div>
      )}
    </>


  )
}

export default App