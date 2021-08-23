import React from 'react'
import dynamic from 'next/dynamic'
import {withUserAgent, WithUserAgentProps} from 'next-useragent'

const DesktopContent = dynamic(() => import('../components/DesktopContent'))
const MobileContent = dynamic(() => import('../components/MobileContent'))

class Index extends React.Component<WithUserAgentProps> {

    static async getInitialProps(ctx) {
        return {useragent: ctx.ua.source}
    }

    render() {
        const {ua} = this.props
        return (
            <>
                {ua.isMobile ? (
                    <DesktopContent/>
                ) : (
                    <DesktopContent/>
                )}
            </>
        )
    }
}

export default withUserAgent(Index)
