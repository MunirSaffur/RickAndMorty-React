import React from 'react'
import { Switch, Route } from "react-router-dom";
import EpisodesList from '../components/EpisodesList';
import EpisodePage from './EpisodePage';
import CharacterPage from './CharacterPage';
import Header from '../components/Header';

export default function HomePage() {
 
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={EpisodesList} />
          <Route path="/eposide/:id" component={EpisodePage} />
          <Route path="/character/:id" component={CharacterPage} />
        </Switch>
    </div>
  )
}
