import React from 'react'
import { GlobalHeaderProps} from "../interfaces";

const GlobalHeader = ({ heading, subheading }: GlobalHeaderProps) =>
    <div style={styles.main}>
        <span style={styles.text}>
            <p style={styles.heading}>{heading}</p>
            <p style={styles.subheading}>{subheading}</p>
        </span>
    </div>

const styles = {
    main: {
        display: 'flex',
        alignItems: 'center',
        height: 60,
        paddingTop: 8,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
    },
    heading: {
        fontSize: '16px',

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
    }
}

export default GlobalHeader
