import { css } from '@emotion/react'


export const appContainer = css`
    color: #f1f1f1;
    width: min(95vw, 1080px);
    min-height: 100vh;
    margin: 0 auto !important;
`

export const tileContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    justify-items: center;
    height:auto;
    margin-bottom: 2rem;

    @media (min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`


export const tile = css`
    padding: 1rem;
    width: min(95vw, 400px);
    height: auto;
    background: #272950;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.75);
    margin-bottom: 1rem;
    
`

export const stat = css`
    
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: baseline;
    margin-bottom: 0.5rem;
`

export const statNumber = css`
    font-size: 1.5rem;
`

export const headerContainer = css`
    display: grid;
    place-items: center;
    width: min(95vw, 1080px);
    height: 3rem;
    margin: 2rem auto !important;
    
    @media (min-width: 600px) {
        place-items: center start;
    }
`

export const rowTitle = css`
    width: min(95vw, 1080px);
    height: auto;
    margin: 1rem 0;

`
export const matchTime = css`
    font-size: 0.7rem;
    width: 100%;
    text-align: right;
    
`