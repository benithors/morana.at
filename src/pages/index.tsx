import React from 'react'
import dynamic from 'next/dynamic'
import {withUserAgent, WithUserAgentProps} from 'next-useragent'

const DesktopContent = dynamic(() => import('../components/DesktopContent'))

class Index extends React.Component<WithUserAgentProps> {


    render() {
        return (
            <DesktopContent/>
        )
    }
}

export default withUserAgent(Index)
