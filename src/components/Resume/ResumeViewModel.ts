import { useState } from "react";
import { ResumeStateType } from "./ResumeModel";

export const useResumeViewModel = () => {
    const [ resumeState, setResumeState ] = useState('experience' as ResumeStateType);
    
    const toggleResumeState = (newState: ResumeStateType) => setResumeState(newState);

    return {
        resumeState,
        toggleResumeState
    };
};