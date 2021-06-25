import React from 'react'
import Navbar from "./Navbar"
import {footer, body} from "../styles/layout.module.css"

export default function Layout({children}) {
    return (
        <div className={body}>
            <Navbar />
            <div className="content">
                {/* in order for the content outside of the layout to be seen
                for instance the content in index.js
                I need to do this "children" thing */}
                {children}
            </div>
            {/* <footer className={footer}>
                <p>Copyright 2021 Murat Can Yüksel</p>
            </footer> */}
            
        </div>
    )
}
