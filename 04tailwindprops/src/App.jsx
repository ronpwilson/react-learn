import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-blue-500 rounded-md p-3'>Ladakh with tailwind</h1>
      <Card destinationName='Nubra Valley' location='Ladakh, India' description='Nubra Valley is a high-altitude cold desert located in Ladakh and is fed by the Nubra and Shyok rivers, which flow through it and create a fertile oasis in the midst of the harsh desert terrain. The Valley is known for its stunning landscapes, which include sand dunes, snow-capped peaks, and lush greenery.'/>
      <br />
      <Card destinationName='Pangong Tso' location='Ladakh, India' img='https://images.pexels.com/photos/14477905/pexels-photo-14477905.jpeg?auto=compress&cs=tinysrgb&w=600' description="Pangong Lake, situated at a height of almost 4,350m, is the world's highest saltwater lake. Its water, which seems to be dyed in blue, stand in stark contrast to the arid mountains surrounding it. Extending to almost 160km, one-third of the Pangong Lake lies in India and the other two-thirds in China."/>
      <br />
      <Card destinationName='Umling La' location='Ladakh, India' img='https://images.pexels.com/photos/9476993/pexels-photo-9476993.jpeg?auto=compress&cs=tinysrgb&w=600' description='Umling La or Umlung La is the highest paved road and mountain pass in the world, located in Ladakh, India. Lorem ipsom'/>
    </>
  )
}

export default App
