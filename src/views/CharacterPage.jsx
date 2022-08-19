import React from 'react'
import { useLocation } from "react-router-dom";
import { Tag,Heading } from '@chakra-ui/react'

export default function CharacterPage() {
    const location = useLocation();
    const characterData = location.state;
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <img src={characterData.image} className="rounded"/>
                </div>
                <div className='col-12 col-md-8'>
                    <Heading lineHeight='tall'>
                    {characterData.name}
                    </Heading>
                    <Tag mr="1">{characterData.gender}</Tag>
                    <Tag mr="1">{characterData.species}</Tag>
                    <Tag mr="1">{characterData.status}</Tag>
                </div>
            </div>
        </div>
    )
}
