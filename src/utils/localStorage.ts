export const setLocalStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, (value as unknown) as string);
};

export const getLocalStorage = <T>(key: string): T | null => {
    return (localStorage.getItem(key) as unknown) as T;
};
