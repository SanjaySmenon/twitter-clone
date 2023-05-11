import React from 'react';
import "./Tweetbox.css";
import { Avatar, Button } from '@mui/material';
function Tweetbox() {
  return (
    <div className='tweetbox'>
     <form>
         
        <div className="tweetBox__input">
            <Avatar src="https://4kwallpapers.com/images/wallpapers/itachi-uchiha-naruto-black-background-minimal-art-amoled-2560x2560-4942.png"/>
            <input placeholder="whats happening?"type=''/>
        </div>
         <Button>Tweet</Button>
     </form>
    </div>
  )
}

export default Tweetbox
