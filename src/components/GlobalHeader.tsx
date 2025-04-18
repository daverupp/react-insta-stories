import React from 'react'
import {GlobalHeaderProps} from "../interfaces";
import * as url from "url";

const GlobalHeader = ({heading, subheading, rightActions, leftActions, isMobile}: GlobalHeaderProps) => {
    const styles = {
        main: {
            display: 'flex',
            alignItems: 'center',
            height: 60,
            paddingTop: 8,
            paddingLeft: 10,
            paddingRight: 10, position: 'relative',
            zIndex: 1
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            textAlign: 'left'
        },
        heading: {
            fontSize: '16px',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 1)',
            margin: 0,
            marginBottom: 2
        },
        headingMobile: {
            fontSize: '22px',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 1)',
            margin: 0,
            marginBottom: 2
        },
        subheading: {
            fontSize: '14px',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 1)',
            margin: 0
        },
        subheadingMobile: {
            fontSize: '18px',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 1)',
            margin: 0
        },
        actions: {
            display: 'flex',
            height: '100%'
        }
    }

    return <div style={styles.main}>
        {leftActions && (
            <div style={styles.actions}>{leftActions}</div>
        )}
        <span style={styles.text}>
            <p style={isMobile ? styles.headingMobile : styles.heading}>{heading}</p>
            <p style={isMobile ? styles.subheadingMobile : styles.subheading}>{subheading}</p>
        </span>
        {rightActions && (
            <div style={styles.actions}>{rightActions}</div>
        )}
    </div>


}

export default React.memo(GlobalHeader)
