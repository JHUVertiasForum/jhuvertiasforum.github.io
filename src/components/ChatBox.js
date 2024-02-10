import {react} from 'react';
import TimedText from '../components/TimedText.js';

function seriesOfText() {

    const listOfText = [
        "There is a saying, yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
        "We all have the opprounity to make the most of today. Yet the stressors and burdens of everyday life may weigh us down heavily.",
        "And when we they do, we are faced with the question...",
        "Why do we even try?",
        "Share your thoughts below..."
    ];
    return <TimedText listOfText={listOfText} />;
}

export default function ChatBox() {
    return (
        <div className='vertias-main'>
            {seriesOfText()}
        </div>
    );
}