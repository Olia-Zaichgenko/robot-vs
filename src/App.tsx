import { useEffect, useRef, useState } from 'react';
import { type IRefPhaserGame, PhaserGame } from './game/PhaserGame';
import './style.css';
import ResCard from './game/scenes/ResCard';
import { EventBus } from './game/EventBus';

type MicrofrontendBus = { emit: (event: string, payload: { points: number }) => void};
interface ResultData {
    error: boolean;
    title: string;
    text: string;
}

function App() {
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    const [result, setResult] = useState<ResultData | null>(null);

    useEffect(() => {
        const handleResult = (data: ResultData) => {
            setResult(data);
            const parentWindow = window.parent as Window & { microfrontendEventBus?: MicrofrontendBus };

            if (parentWindow.microfrontendEventBus) {
                parentWindow.microfrontendEventBus.emit('getPoints', { points: 15 });
            }
        };

        EventBus.on('show-result-card', handleResult);

        return () => {
            EventBus.off('show-result-card', handleResult);
        };
    }, []);

    return (
        <div id="app" className='w-screen h-screen overflow-hidden flex justify-center items-center'>
            <PhaserGame
                ref={phaserRef}
            />
            {result && (
                <ResCard
                    error={result.error}
                    title={result.title}
                    text={result.text}
                    onClose={()=>setResult(null)}
                />
            )}
        </div>
    );
}

export default App;
