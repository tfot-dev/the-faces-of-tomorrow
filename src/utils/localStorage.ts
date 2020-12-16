export const setLocalStorage = (key: string, value: string): void => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = <T>(key: string): T | null => {
    return (localStorage.getItem(key) as unknown) as T;
};
