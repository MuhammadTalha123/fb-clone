import React from 'react'; 
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel" >
            <Story 
            image="blob:https://web.whatsapp.com/4bbc1d46-eec7-4420-8958-47e2015dca75"
            profileSrc="blob:https://web.whatsapp.com/89419ada-51aa-4559-91c6-210bedc65937"
            title="Tayyab" />
            <Story 
            image="blob:https://web.whatsapp.com/ad10de46-a320-43e6-8225-06786cece5ac"
            profileSrc="blob:https://web.whatsapp.com/118ee1ea-1433-4dc1-915c-9904f9ae9bf9"
            title="Amir" />
            <Story 
            image="blob:https://web.whatsapp.com/a574ac87-8f68-43c1-acbc-77e1c335d50f"
            profileSrc="blob:https://web.whatsapp.com/0953079d-148a-4d75-a7f4-aa65ce4ec617"
            title="Umair" />
            <Story 
            image="blob:https://web.whatsapp.com/df649d95-729a-45a7-8a1b-c01f08133ceb"
            profileSrc="blob:https://web.whatsapp.com/eb840d50-af69-4e37-8355-31fdbc457998"
            title="Ali Raza" />
            <Story 
            image="blob:https://web.whatsapp.com/0bb2a263-963e-445f-8151-5073737660c3"
            profileSrc="blob:https://web.whatsapp.com/ca54828c-5106-4683-b75b-fafbedd663ae"
            title="Mohsin" />
        </div>
    )
}

export default StoryReel;
