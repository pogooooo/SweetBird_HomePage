import React from "react";
import { ReactTyped as Typed } from 'react-typed';

import '../../styles/mainSection/Cover.css'

const Cover = () => {
    return(
        <div className="cover">
            <Typed
                strings={['SWEET BIRD']}
                typeSpeed={50}
                backSpeed={30}
                loop={false}
                className="club_title"
            />
            <div className="short_description_of_club">호서대학교 컴퓨터공학부<div>웹 개발</div> 소모임</div>
            <div className="using_language">
                {/*<div className="lans">react</div>*/}
                {/*<div className="lans">spring</div>*/}
                {/*<div className="lans">...</div>*/}
                <Typed
                    strings={['React', 'Spring', "..."]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop={true}
                    className="lans"
                />
            </div>
        </div>
    )
}

export default Cover