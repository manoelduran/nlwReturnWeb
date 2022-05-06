import React, { useState } from "react";
import CloseButton from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import FeedbackTypesStep from "./Steps/FeedbackTypesStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";



export const feedbackTypes = {
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
            alt: 'Imagem de uma lâmpada',
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem',
        }
    },
}
export type FeedBackType = keyof typeof feedbackTypes;
const WidgetForm: React.FC<any> = () => {
    const [selectedType, setSelectedType] = useState<FeedBackType | null>(null);
    const [isSended, setIsSended] = useState(false);
    const handleRestartFeedback = () => {
        setIsSended(false);
        setSelectedType(null);
    }
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl nb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {isSended ? (
                <FeedbackSuccessStep onSend={handleRestartFeedback} />
            ) : (
                <>
                    {!selectedType ? (
                        <FeedbackTypesStep onFeedbackTypeChange={setSelectedType} />
                    ) : (
                        <FeedbackContentStep onIsSended={() => setIsSended(true)} feedbackType={selectedType} onClick={handleRestartFeedback} />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com amor pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}

export default WidgetForm;