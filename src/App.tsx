import React, { useEffect, useState } from 'react'
import { appContainer } from './styles/AppStyles'

/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react'
import axios from 'axios'
import { loader, loadingContainer } from './styles/LoadingStyles'
import { AppContext } from './context/AppContext'
import TileRow from './components/TileRow'
import Header from './components/Header'
import LastMatchTile from './components/LastMatchTile'
import LastMatchesTile from './components/LastMatchesTile'




const App = () => {

  const [stuff, setStuff] = useState(null)

  useEffect(() => {
    const getStuff = async () => {
      const p1 = await (await axios.get('https://sigl.herokuapp.com/api/v1/warzone/matches/glennarnold/psn')).data
      const p2 = await (await axios.get('https://sigl.herokuapp.com/api/v1/warzone/matches/xlodex/psn')).data
      const p3 = await (await axios.get('https://sigl.herokuapp.com/api/v1/warzone/matches/accidentalbeasty/psn')).data
      const p4 = await (await axios.get('https://sigl.herokuapp.com/api/v1/warzone/matches/myfuture2bright/psn')).data
      console.log()
      setStuff({ p1, p2, p3, p4 })
    }
    getStuff()
  }, [])

  if (window.innerWidth <= 270) {
    return (
      <div css={appContainer}>
        <p>page unavailable for this screen size</p>

      </div>
    )
  }
  if (!stuff) {
    return (
      <div css={loadingContainer}>

        <div css={loader}>Loading...</div>
      </div>
    )
  }





  return (
    <AppContext.Provider value={stuff}>
      <div css={appContainer}>
        <Header />
        <TileRow title='Last match:' >
          <LastMatchTile player={stuff.p1} />
          <LastMatchTile player={stuff.p2} />
          <LastMatchTile player={stuff.p3} />
          <LastMatchTile player={stuff.p4} />
        </TileRow>
        <TileRow title='Last 20 matches:' >
          <LastMatchesTile player={stuff.p1} />
          <LastMatchesTile player={stuff.p2} />
          <LastMatchesTile player={stuff.p3} />
          <LastMatchesTile player={stuff.p4} />
        </TileRow>
      </div>
    </AppContext.Provider>

  )
}

export default App;
