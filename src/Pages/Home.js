
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
  const handleSearch = async () => {
    setData([])
    if (!value)
      setError('Please Enter title')
    else {
      try {
        setError(null)
        const response = await axios.get(`${process.env.REACT_APP_URL}?title=${value}`)
        if (response) setData(response.data)
      } catch (error) {
        setError("Title not found!!!")
      }
    }
  }
  return (
    <div className="App">
      <input onKeyDown={handleKeyDown} onChange={e => setValue(e.target.value)} type={'text'} placeholder='Enter Title' />
      <button onClick={e => handleSearch()} className='btn'>Search</button>
      {error && <p className='error'>{error}</p>}
      <div className='result'>
        {data.map((item) => (
          <div className='center' key={item.id}>
            <div className='center-img'>
              <img alt='#' src={item.photo} />
            </div>
            <div className='content'>
              <div className='title'>
                <p onClick={() => { navigate('/detail', { state: item }) }}>{item.title}</p>
              </div>
              <div className='des'>
                <p>{item.subDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home