import React from "react";
import CloseButton from "./CloseButton";
import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';


    const feedBackTypes = {
        BUG: {
            title: 'Problema',
            image: {
                source: bugImageUrl,
                alt: 'Imagem de um inseto',
            }
        },
        IDEA: {
            title: 'Idéia',
            image: {
                source: ideaImageUrl,
                alt: '',
            }
        },
        OTHER: {
            title: 'Outro',
            image: {
                source: thoughtImageUrl,
                alt: '',
            }
        },
    }
const WidgetForm = () => {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl nb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>
            <div className="flex py-8 gap-2 w-full">
                <button></button>
            </div>
            <footer className="text-xs text-neutral-400">
                Feito com amor pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}

export default WidgetForm;