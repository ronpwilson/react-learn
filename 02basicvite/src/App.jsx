import React from 'react'
import Youtube from "./Youtube"

function App() {
  const username = "ron"
  const areactelement = React.createElement(
  'a',
  {'href': 'https://google.com', 'target': '_blank'},
  'Click here to visit'
)

  return (
    <>
      <h3>Basic vite app {username}</h3>
      {areactelement}
      <Youtube/>
    </>
  )
}

export default App
