import { useState, useEffect } from 'react';
import { LocalStorageKeys } from '../models/local-storage-keys';
import { Step } from '../models/step';

const getStorageValue = (key: LocalStorageKeys, initialValue: Array<Step>) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
};

export const useLocalStorage = (key: LocalStorageKeys, initialValue: Array<Step>) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
