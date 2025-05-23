import React, {useContext, useState, useEffect, useRef} from 'react'
import Progress from './Progress'
import {ProgressContext, GlobalCtx, StoriesContext as StoriesContextInterface} from './../interfaces'
import ProgressCtx from './../context/Progress'
import GlobalContext from './../context/Global'
import StoriesContext from './../context/Stories'
import GlobalHeader from "./GlobalHeader";

export default () => {
    const [count, setCount] = useState<number>(0)
    const {currentId, next, videoDuration, pause} = useContext<ProgressContext>(ProgressCtx)
    const {
        defaultInterval,
        onStoryEnd,
        onStoryStart,
        onAllStoriesEnd,
        globalHeader
    } = useContext<GlobalCtx>(GlobalContext);
    const {stories} = useContext<StoriesContextInterface>(StoriesContext);

    useEffect(() => {
        setCount(0)
    }, [currentId, stories])

    useEffect(() => {
        if (!pause) {
            animationFrameId.current = requestAnimationFrame(incrementCount)
        }
        return () => {
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [currentId, pause])

    let animationFrameId = useRef<number>()

    let countCopy = count;
    const incrementCount = () => {
        if (countCopy === 0) storyStartCallback()
        setCount((count: number) => {
            const interval = getCurrentInterval()
            countCopy = count + (100 / ((interval / 1000) * 60))
            return count + (100 / ((interval / 1000) * 60))
        })
        if (countCopy < 100) {
            animationFrameId.current = requestAnimationFrame(incrementCount)
        } else {
            storyEndCallback();
            if (currentId === stories.length - 1) {
                allStoriesEndCallback();
            }
            cancelAnimationFrame(animationFrameId.current);
            next();
        }
    }

    const storyStartCallback = () => {
        onStoryStart && onStoryStart(currentId, stories[currentId])
    }

    const storyEndCallback = () => {
        onStoryEnd && onStoryEnd(currentId, stories[currentId])
    }

    const allStoriesEndCallback = () => {
        onAllStoriesEnd && onAllStoriesEnd(currentId, stories)
    }

    const getCurrentInterval = () => {
        if (stories[currentId].type === 'video') return videoDuration
        if (typeof stories[currentId].duration === 'number') return stories[currentId].duration
        return defaultInterval
    }

    return (
        <div style={globalHeader ? styles.containerWithHeader : styles.container}>
            {globalHeader && (<div style={styles.opacity}></div>)}
            {globalHeader && (<GlobalHeader heading={globalHeader.heading} rightActions={globalHeader.rightActions}
                                            subheading={globalHeader.subheading} leftActions={globalHeader.leftActions} isMobile={globalHeader.isMobile}></GlobalHeader>)
            }
            <div style={globalHeader ? styles.progressArrWithHeader : styles.progressArr}>
                {stories.map((_, i) =>
                    <Progress
                        key={i}
                        count={count}
                        width={1 / stories.length}
                        active={i === currentId ? 1 : (i < currentId ? 2 : 0)}
                    />)}
            </div>
        </div>
    )
}

const styles = {
    opacity: {
        backgroundColor: '#333',
        height: 96,
        position: "absolute",
        borderTopWidth: 1,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        top: 0,
        left: 0,
        right: 0,
        opacity: 0.9,
    },
    container: {
        position: 'absolute',
        zIndex: 99,
        left: 0,
        right: 0,
    },

    containerWithHeader: {
        paddingLeft: 16,
        paddingRight: 16,
        position: 'absolute',
        zIndex: 1000,
        left: 0,
        right: 0,
        height: 80,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },
    progressArrWithHeader: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100%',
        flexWrap: 'row',
        width: '100%',
        alignSelf: 'center',
        zIndex: 99,
        paddingTop: 8
    },
    progressArr: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100%',
        flexWrap: 'row',
        width: '98%',
        padding: 5,
        paddingTop: 7,
        alignSelf: 'center',
        zIndex: 99,
        filter: 'drop-shadow(0 1px 8px #222)'
    }
}
