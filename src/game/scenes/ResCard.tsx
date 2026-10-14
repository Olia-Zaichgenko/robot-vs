import line from '../../assets/img/line.svg';

interface ResCardProps{
    error?: boolean,
        title: string,
        text: string,
        onClose: ()=>void,
}
const ResCard = ({error = false, title, text, onClose}:ResCardProps) => {

    return (
        <div onClick={onClose} className="fixed inset-0 z-10000 flex h-screen items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.4)] backdrop-blur-md">
            <section className={`relative w-full max-w-[35vw] rounded-[3vh] border bg-gradient-to-br from-[#4DE4F21A]  to-[rgba(143,245,254,0.3)] p-6 text-white
                backdrop-saturate-150 shadow-[0_0_35px_rgba(77,228,242,0.14),0_25px_100px_rgba(15,23,42,0.35)]',
                ${error ? 'border-rose-300/50 shadow-[0_0_45px_rgba(251,113,133,0.18)]' : 'border-cyan-200/35'}`}
            >
                <div className={`pointer-events-none absolute inset-0 -z-10 opacity-80
                    ${error ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(251,113,133,0.18),transparent_55%)]'
                    : 'bg-[radial-gradient(circle_at_50%_0%,rgba(77,228,242,0.2),transparent_55%)]'
                }`}
                />

                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-90 shadow-[0_0_15px_#4de4f2]" />

                <h1 className='text-cyan-200 shadow-cyan-200/60 font-zekton pr-10 text-3xl uppercase leading-tight'>
                    {title}
                </h1>

                <img src={line} className="h-auto  drop-shadow-[0_0_8px_rgba(77,228,242,0.8)]"/>

                <p className="whitespace-pre-line font-zekton text-md leading-7 tracking-wide text-white">
                    {text}
                </p>
            </section>
        </div>
    );
};

export default ResCard;
