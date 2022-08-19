import React, { useEffect, useState } from 'react'
import data from '../api/data';
import EpisodeItem from './EpisodeItem'
import { Heading, Skeleton } from '@chakra-ui/react'
import axios from 'axios';

export default function EpisodesList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        data.get('/episode')
            .then(res => {
                // fetching characters data 
                res.data.results.forEach(episode => {
                    episode.charactersData = []
                    episode.characters.forEach(item => {
                        axios.get(`${item}`).then(ress => {
                            episode.charactersData.push(ress.data)
                        })
                    })
                })
                setEpisodes(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='container'>
            <Heading as='h1' size='2xl' noOfLines={1} className="mb-3 mt-4">
                Episodes
            </Heading>
            <div className='row'>

                {
                    episodes.length ?
                        episodes.map((item, index) => <div key={index} className="col-6 col-md-3"><EpisodeItem episodeData={item} /></div>) :
                        [1,2,3,4].map(item=><div key={item} className='col-6 col-md-3'>
                            <Skeleton height='200px' />
                        </div>)

                }
            </div>
        
        </div>
    )
}
