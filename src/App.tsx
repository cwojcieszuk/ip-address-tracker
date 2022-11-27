import { useEffect, useState } from 'react'
import './App.css'
import Info from './components/info';
import SearchInput from './components/search-input'
import Map from './components/map';
import { config } from '../public/config';

const apiKey = config.api_key;

function App() {
  const [data, setData] = useState(null);

  const sendIp = (ip: string) => {
     fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`)
        .then(response => response.json())
        .then(data => setData(data));
  }

  useEffect(() => {
    sendIp('');
  }, []);

  return (
    <div className="App">
      <div className='header'>
        <h1 className='py-4 font-medium text-5xl'>IP Address tracker</h1>
        <SearchInput sendIp={sendIp}/>
        <Info model={data} />
      </div>
      {data !== null ? <Map center={[data.location.lat, data.location.lng]} zoom={13} /> : ''}
      
    </div>
  )
}

export default App
