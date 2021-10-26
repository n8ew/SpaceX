import { useState, useEffect } from 'react'

export const useWindowWidth = () => {

    

    const [windowWidth,setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const getWidth = () => window.innerWidth

        const handleResize = () => {
            setWindowWidth(getWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowWidth
}