import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Heading, Select, Button } from '@chakra-ui/react'
import CharacterItem from '../components/CharacterItem';

export default function EpisodePage() {
  const location = useLocation();
  const eposideData = location.state;
  const {charactersData} = eposideData;
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    setCharacters(eposideData.charactersData)
  },[])

  // filter handler
  const handleFilter = (e, type)=>{
    setCharacters(eposideData.charactersData.filter(item=>
      type === "species"?
      item?.species === e.target.value:
      type === "status"?
      item?.status === e.target.value:
      item?.gender === e.target.value
      ))
  }

  // sorting handler
  const sortingHandler = ()=>{
    setCharacters(charactersData.sort(
      (objA, objB) => Number(objA.created) - Number(objB.created),
    ))
  }
  
  return (
    <div className='container mt-3'>
      <Heading as='h3' size='lg' mb="4">
        {eposideData.name}
      </Heading>
      <Heading as='h3' size='sm' mb="3">
        Characters
      </Heading>

      {/* filters */}
      <div className='row mb-3'>
        <div className='col-6 col-md-3 mb-2'>
          <Select placeholder='Gender' onChange={(e)=>{handleFilter(e, 'gender')}}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknown'>unknown</option>
          </Select>
        </div>
        <div className='col-6 col-md-4 mb-2'>
          <Select placeholder='Status' onChange={(e)=>{handleFilter(e, 'status')}}>
            <option value='Alive'>Alive</option>
            <option value='Dead'>Dead</option>
            <option value='unknown'>unknown</option>
          </Select>
        </div>
        <div className='col-6 col-md-4 mb-2'>
          <Select placeholder='Species' onChange={(e)=>{handleFilter(e, 'species')}}>
            <option value='Human'>Human</option>
            <option value='Humanoid'>Humanoid</option>
            <option value='Alien'>Alien</option>
            <option value='Animal'>Animal</option>
            <option value='Robot'>Robot</option>
            <option value='Cronenberg'>Cronenberg</option>
            <option value='Mythological Creature'>Mythological Creature</option>
          </Select>
        </div>
        <div className='col-6 col-md-1 mb-2'>
        <Button colorScheme='teal' onClick={()=>{sortingHandler()}} className="w-100">Sort</Button>
        </div>
      </div>

      <div className='row'>

        {characters?.map((charater, index) => <CharacterItem key={index} characterItemData={charater} />)}
      </div>
    </div>
  )
}
