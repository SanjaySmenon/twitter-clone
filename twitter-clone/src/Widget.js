import React from 'react';
import './Widget.css';
import SearchIcon from '@mui/icons-material/Search';
import{
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widget() {
  return (
    <div className='widgets'>
       <div className='widgets__input'>
         <SearchIcon className='widgets__searchIcon'/>
         <input placeholder='Search Twitter' type='text'/>
       </div>
       <div className='widget__widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId='1656320697977765890' />
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='Crunchyroll'
        options={{height:400}}
        /> 
        <TwitterShareButton 
        url='https://twitter.com/OnePieceAnime'
        options={{text:"one piece is reallll!!",via:"sanjaysmenon"}}
        />

       </div>
    </div>
  );
}

export default Widget
