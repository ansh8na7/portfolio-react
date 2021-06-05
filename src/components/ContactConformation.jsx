import React from 'react'

const ContactConformation = ({status}) => {
    var msg="";
    if(status==="success-message"){
        msg="Submitted successfully. I will contact you as soon as possible.";
    }
    else if(status==="fail-message"){
        msg="Some error occurred. Please try again!";
    }
    
    return (
        <span className={status}>{msg}</span>
    )
}

export default ContactConformation
