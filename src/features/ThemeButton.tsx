import React from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { LocalStorageItems } from '../constants/LocalStorageItems';
import { ThemeModes } from '../constants/ThemeModes';
import { PaletteType } from '@material-ui/core';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NightsStayIcon from '@material-ui/icons/NightsStay';

type ThemeButton = {
    onThemeChange: (mode: PaletteType) => void;
};

export const ThemeButton = ({ onThemeChange }: ThemeButton) => {
    const [darkMode, setDarkMode] = React.useState<boolean>(
        getLocalStorage(LocalStorageItems.Theme) === ThemeModes.Dark,
    );

    const handleDarkModeToggle = () => {
        const newThemeMode = !darkMode ? ThemeModes.Dark : ThemeModes.Light;

        setLocalStorage(LocalStorageItems.Theme, newThemeMode);
        setDarkMode(!darkMode);
        onThemeChange(newThemeMode as PaletteType);
    };

    return darkMode ? (
        <Brightness5Icon onClick={handleDarkModeToggle} />
    ) : (
        <NightsStayIcon onClick={handleDarkModeToggle} />
    );
};
