import React from 'react'
import { headerContainer } from '../styles/AppStyles'

/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react'


const Header = () => {
    return (
        <div css={headerContainer}>
            <h1>squadboard</h1>
        </div>
    )
}

export default Header