import { Reducer, useEffect, useReducer, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useLocalStorage } from './hooks/useLocalStorage';
import { LOCALSTORAGE_KEYS } from './models/local-storage-keys';
import { WORKFLOW_ACTION } from './models/workflow';
import { Step } from './models/step';
import { WorkflowAction } from './models/workflow';
import Modal from './components/atoms/Modal/Modal';

type WorkflowReducerAction = {
    type: WorkflowAction;
    payload: Array<Step>;
};

const workflowReducer = (state: Array<Step>, action: WorkflowReducerAction) => {
    switch (action.type) {
        case WORKFLOW_ACTION.Init:
            return state.concat(action.payload);
        case WORKFLOW_ACTION.Add:
            return state;
        case WORKFLOW_ACTION.Remove:
            return state;
        case WORKFLOW_ACTION.Update:
            return state;
    }
};

const App: React.FC = () => {
    const [storedWorkflows, setStoredWorkflows] = useLocalStorage(LOCALSTORAGE_KEYS.Workflows, []);
    const [workflows, dispatch] = useReducer<Reducer<Array<Step>, WorkflowReducerAction>>(workflowReducer, []);

    const [isModalOpen, toggleModal] = useState<boolean>(false);

    useEffect(() => {
        if (storedWorkflows) {
            dispatch({ type: WORKFLOW_ACTION.Init, payload: storedWorkflows });
        }
    }, [storedWorkflows]);

    const handleModal = (action: string) => {
        console.log(`Modal ${action}`);
        toggleModal(false);
    };

    return (
        <div className="flex justify-center p-5">
            <button className="btn btn-circle" onClick={() => toggleModal(true)}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

            <Modal isOpen={isModalOpen} onSubmit={() => handleModal('submitted')} onDismiss={() => handleModal('dissmissed')} />
        </div>
    );
};

export default App;
