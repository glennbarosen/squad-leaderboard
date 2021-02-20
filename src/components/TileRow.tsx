import React, { Fragment, useContext } from 'react'
import { rowTitle, tileContainer } from '../styles/AppStyles'
/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react'
import PlayerTile from './LastMatchTile'
import { AppContext } from '../context/AppContext'





const TileRow = (props: any) => {
    const appContext = useContext(AppContext)

    return (
        <Fragment>
            <div css={rowTitle}>
                <h3>{props.title}</h3>
            </div>
            <div css={tileContainer}>
                {props.children}

            </div>
        </Fragment>
    )

}

export default TileRow