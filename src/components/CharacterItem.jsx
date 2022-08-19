import React from 'react'
import { Heading, Tag } from '@chakra-ui/react'
import { Link } from "react-router-dom";

export default function CharacterItem({ characterItemData }) {
  return (
    <div className='col-6 col-md-3 mb-3'>
      <Link className='d-block' to={{
            pathname:`/character/${characterItemData.id}`,
            state: characterItemData
          }}>
      <div className='characterItem'>
        <img src={characterItemData.image} className="rounded m-0" />
        <Tag className='characterStatus' size="sm" variant='solid' colorScheme='teal'>
          {characterItemData.status==="Dead"?`${characterItemData.status} ☠️`:characterItemData.status==="Alive" ? `${characterItemData.status} 👻`:`${characterItemData.status} 🤔`}
        </Tag>
        <Heading as='h4' size='md' className="characteName">
          {characterItemData.name}
        </Heading>
      </div>
      </Link>
    </div>
  )
}
