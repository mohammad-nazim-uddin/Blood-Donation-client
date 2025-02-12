import { useRef } from 'react';
import beatAnimation from '../../assets/animations/pulseRateNav.json'
import Lottie from 'lottie-react';
import { Player } from '@lottiefiles/react-lottie-player';
const HeartBeat = () => {
    

    return (
        // loadin speaner heart beat sign
        <div className='pb-10'
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
            <Lottie animationData={beatAnimation} />
            {/* <Player loop src={beatAnimation} ref={playerRef}/> */}
        </div>
    );
};
export default HeartBeat;
