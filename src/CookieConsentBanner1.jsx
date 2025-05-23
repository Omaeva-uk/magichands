"use client";


import CookieConsent from "react-cookie-consent";



const CookieConsentBanner1 = () => {

    const onAccept = () => {
        
    }


    const onDecline = () => {

    }



  return (
    <div>
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            buttonStyle={{backgroundColor: "#A9D3A9", padding: "5px 20px", borderRadius: "5px"}}
            enableDeclineButton
            declineButtonText="Reject"
            declineButtonStyle={{backgroundColor:"black", padding: "5px 20px", borderRadius: "5px"}}
            expires={150}
            style={{maxWidth: "500px", backgroundColor: "#f8faf7", color: "black", 
                borderRadius: "20px", display: "flex", padding: "10px", 
                marginLeft: "auto", right: "0"}}
            onAccept={onAccept}
            onDecline={onDecline}

        >
            This website uses cookies to improve your browsing experience. Please click Accept to continue.
        </CookieConsent>
    </div>
  )
}

export default CookieConsentBanner1;