import { ObjectValues } from "./object-values";

export const LOCALSTORAGE_KEYS = {
    Workflows: 'Workflows',
} as const;

export type LocalStorageKeys = ObjectValues<typeof LOCALSTORAGE_KEYS>;