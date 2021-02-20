import React, { useContext } from 'react'

/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react'
import { stat, statNumber, tile } from '../styles/AppStyles'
import { AppContext } from '../context/AppContext'
import { maxHeaderSize } from 'http'

interface IPlayerTileProps {
    player: any
}


const LastMatchesTile = (props: IPlayerTileProps) => {

    const kills = props.player.summary.all.kills
    const KD = (props.player.summary.all.kdRatio).toFixed(2)
    const gulagKD = (props.player.summary.all.gulagKills / props.player.summary.all.gulagDeaths).toFixed(2)
    const minutes = Math.floor((props.player.summary.all.avgLifeTime / 60))
    const accSeconds = Math.round((props.player.summary.all.avgLifeTime % 60))
    const avgLife = `${minutes}:${accSeconds < 10 ? '0' + accSeconds.toString() : accSeconds}`
    let tempArr: any = []

    const getMostKills = () => {
        props.player.matches.map((match: any) => (
            tempArr.push(match.playerStats.kills)
        ))
        return Math.max(...tempArr)
    }


    return (
        <div css={tile}>
            <h1>{props.player.matches[0].player.username}</h1>
            <div css={stat}>
                <p>Kills:</p>
                <p css={statNumber}>{kills}</p>
            </div>
            <div css={stat}>
                <p>KD:</p>
                <p css={statNumber}>{KD}</p>
            </div>
            <div css={stat}>
                <p>Gulag KD:</p>
                <p css={statNumber}>{gulagKD}</p>
            </div>
            <div css={stat}>
                <p>Average life:</p>
                <p css={statNumber}>{avgLife}</p>
            </div>
            <div css={stat}>
                <p>Most kills:</p>
                <p css={statNumber}>{getMostKills()}</p>
            </div>

        </div>


    )
}

export default LastMatchesTile