import { Dictionary } from './dictionary';
import { ObjectValues } from './object-values';
import { Step } from './step';

export type Workflow = {
    id: string;
    name: string;
    orderedSteps: Dictionary<Step>;
};

export const WORKFLOW_ACTION = {
    Add: 'add',
    Remove: 'remove',
    Update: 'update',
    Init: 'init',
} as const;

export type WorkflowAction = ObjectValues<typeof WORKFLOW_ACTION>;
