import React from 'react'
import { OtherDisplay } from '../../styledComponents/OtherDispaly.styled'
import { RingLoader } from 'react-spinners'

const Loading = () => {
    return (
        <OtherDisplay>
            <RingLoader color={ "#fff" } size={ 200 } />
        </OtherDisplay>
    )
}

export default Loading
