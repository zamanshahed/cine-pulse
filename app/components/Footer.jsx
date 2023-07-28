import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div>© Cine Pulse {currentYear} | All rights reserved.</div>
    )
}

export default Footer