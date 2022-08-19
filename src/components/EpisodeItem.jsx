import React from 'react'
import { Link } from "react-router-dom";
import { Heading, Badge } from '@chakra-ui/react'
import bg from '../assets/images/bg-1.png'


export default function EpisodeItem({ episodeData }) {

    return (
        <div className='episode_item rounded text-white' style={{ backgroundImage: `url(${bg})` }}>
            <Heading as='h4' size='md' mb="2">
                {episodeData.name.length > 25 ? `${episodeData.name.substring(0, 25)}...` : episodeData.name}
            </Heading>
            <span>air date:
                <Badge variant='solid' colorScheme='green'>
                    {episodeData.air_date}
                </Badge>
            </span>

            <Link className='text-warning d-block' to={{
                pathname: `/eposide/${episodeData.id}`,
                state: episodeData
            }}>See More</Link>
        </div>
    )
}
