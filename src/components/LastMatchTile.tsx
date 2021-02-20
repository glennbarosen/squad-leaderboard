import React, { useContext } from 'react'

/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react'
import { matchTime, stat, statNumber, tile } from '../styles/AppStyles'
import { AppContext } from '../context/AppContext'
import { format } from 'date-fns'

interface IPlayerTileProps {
    player: any
}


const LastMatchTile = (props: IPlayerTileProps) => {

    const kills = props.player.matches[0].playerStats.kills
    const KD = props.player.matches[0].playerStats.kdRatio
    const damage = props.player.matches[0].playerStats.damageDone
    const moving = `${Math.round(props.player.matches[0].playerStats.percentTimeMoving)}%`
    const placement = props.player.matches[0].playerStats.teamPlacement
    const utcSec = props.player.matches[0].utcEndSeconds
    const matchEnd = format(new Date(utcSec * 1000), 'dd.MMM HH:mm')


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
                <p>Damage:</p>
                <p css={statNumber}>{damage}</p>
            </div>
            <div css={stat}>
                <p>Time moving:</p>
                <p css={statNumber}>{moving}</p>
            </div>
            <div css={stat}>
                <p>Placement:</p>
                <p css={statNumber}>{placement}</p>
            </div>
            <div css={matchTime}>
                <p>Match ended: {matchEnd}</p>
            </div>

        </div>


    )
}

export default LastMatchTile