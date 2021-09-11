import React from 'react'
import dynamic from "next/dynamic";

const DesktopContent = dynamic(() => import('../components/DesktopContent'));

export default function Home() {


    return (
        <DesktopContent></DesktopContent>
    );
}
