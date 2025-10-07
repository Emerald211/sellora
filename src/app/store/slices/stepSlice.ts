import { createSlice} from "@reduxjs/toolkit";

interface Step{
    id: number;
    status: 'pending' | 'completed';
}
    
interface StepState { 
    step: Step[];
    currentStep: number;
}

const initialState: StepState = { 
    step: [
        { id: 1, status: 'pending' },
        { id: 2, status: 'pending' },
        { id: 3, status: 'pending' }
    ],
    currentStep: 3
};

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        goToNextStep: (state) => {
            if (state.currentStep < state.step.length) {
                state.step[state.currentStep - 1].status = 'completed';
                state.currentStep += 1;
            }
        }
    }
        
})

export const { goToNextStep } = stepSlice.actions;
export default stepSlice.reducer;