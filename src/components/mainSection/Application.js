import '../../styles/mainSection/Application.css'

const Application = () => {

    const application_allow = true
    const login_allow = false

    return(
        <div className='application-main'>
            <div className='application-title'><div className="information-highlight-2">SWEET BIRD</div><div className="information-title-tail">와 함께하고 싶다면?</div></div>
            {application_allow === true && (
                <div className='application-on' onClick={() => window.open("https://forms.gle/HKYzdABJUAsPm85s5")}> 
                    가입 신청하러 가기 →
                </div>
            )}

            {application_allow === false && (
                <div className='application-off' onClick={() => window.open("https://forms.gle/HKYzdABJUAsPm85s5")}>
                    지금은 신청기간이 아닙니다!
                </div>
            )}

            {login_allow === true && (
                <div>
                    <div className='application-signIn'><div className="information-highlight">SWEET BIRD</div> 게시판에 댓글을 달고 싶다면?</div>
                
                    <div className='application-to-signIn'>
                            <a href="/signin">로그인 하러 가기 →</a>
                    </div>
                </div>
            )}
            
            

        </div>
    )
}

export default Application