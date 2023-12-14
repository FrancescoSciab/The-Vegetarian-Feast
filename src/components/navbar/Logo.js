import { Animate, AnimateKeyframes } from "react-simple-animate";


export default function Logo() {
    return (
        <>
            <AnimateKeyframes play
                            iterationCount="infinite"
                            direction="alternate"
                            duration={5}
                            keyframes={[
                              'transform: rotateX(0) rotateY(0) rotateZ(0)',
                              'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
                            ]}>
                            <span 
                            class="material-symbols-outlined">egg_alt</span>
                            </AnimateKeyframes>
                            <Animate play
                                    start={{ opacity: 0, filter: 'blur(10px)' }}
                                    end={{ opacity: 1, filter: 'blur(0)' }}>
                                The Vegetarian Feast
                            </Animate>
        </>
    )
}