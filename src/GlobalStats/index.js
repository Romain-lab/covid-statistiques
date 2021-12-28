import React from 'react'
import './style.scss'
import { Statistic, Card } from 'semantic-ui-react'

export default () => (
    <div>
        <h1 className='title'>Global :</h1>
        <Card.Group centered stackable className='globalstats'>
            <Card className='globalstats__card'>
                <Statistic>
                    <Statistic.Value>122898</Statistic.Value>
                    <Statistic.Label>Nombre de décès</Statistic.Label>
                </Statistic>
            </Card>
            <Card className='globalstats__card'>
                <Statistic>
                    <Statistic.Value>95865</Statistic.Value>
                    <Statistic.Label>Décès à l’hôpital</Statistic.Label>
                </Statistic>
            </Card>
            <Card className='globalstats__card'>
                <Statistic>
                    <Statistic.Value>9146451</Statistic.Value>
                    <Statistic.Label>Cas confirmés</Statistic.Label>
                </Statistic>
            </Card>
        </Card.Group>
    </div>
);