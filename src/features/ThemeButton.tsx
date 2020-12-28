import React from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { LocalStorageItems } from '../constants/LocalStorageItems';
import { Box, IconButton } from '@material-ui/core';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { common } from '@material-ui/core/colors';

type ThemeButtonType = {
    onThemeToggle: (darkMode: boolean) => void;
};

export const ThemeButton = ({ onThemeToggle }: ThemeButtonType) => {
    const isLocallyDarkMode = getLocalStorage(LocalStorageItems.DarkMode) === 'true';

    if (isLocallyDarkMode) {
        onThemeToggle(isLocallyDarkMode);
    }

    const [darkMode, setDarkMode] = React.useState<boolean>(isLocallyDarkMode);

    const handleDarkModeToggle = () => {
        setLocalStorage<boolean>(LocalStorageItems.DarkMode, !darkMode);
        setDarkMode(!darkMode);
        onThemeToggle(!darkMode);
    };

    return (
        <Box color={common.white}>
            <IconButton color="inherit" onClick={handleDarkModeToggle}>
                {darkMode ? <Brightness5Icon /> : <NightsStayIcon />}
            </IconButton>
        </Box>
    );
};
