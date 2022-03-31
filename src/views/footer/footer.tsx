import React from 'react'

const Footer:React.FC=()=>{
    return(
        <div className='container-fluid px-0 pb-4'>
            <hr className='footer-hr mt-0 mb-4' />
            <div className='px-3 px-sm-5 d-md-flex justify-content-between'>
                <p className='text-color text-center mb-4 mb-md-0 text-md-left'>Copyright © 2022 Space Vikings LLC . All Rights Reserved</p>
                <div className='text-center text-md-left'>
                    <i onClick={()=>window.open('https://twitter.com/SpaceVikingsLLC')} className='text-color mr-3 footer-icons fab fa-twitter'/>
                    <i onClick={()=>window.open('https://t.me/SpaceVikings')} className='text-color mr-3 footer-icons fab fa-telegram-plane'/>
                    <i onClick={()=>window.open('https://www.instagram.com/spacevikingsllc/')} className='text-color mr-3 footer-icons fab fa-instagram'/>
                    <i onClick={()=>window.open('https://www.reddit.com/r/SpaceVikingsOfficial/')} className='text-color mr-3 footer-icons fab fa-reddit'/>
                    <i onClick={()=>window.open('https://www.youtube.com/channel/UCXm80PFL4iySWjUZ-fuumcQ')} className='text-color mr-3 footer-icons fab fa-youtube'/>
                    <i onClick={()=>window.open('https://www.twitch.tv/Spacevikingsofficial')} className="text-color mr-3 footer-icons fab fa-twitch"></i>
                </div>
            </div>
        </div>
    )
}
export default Footer