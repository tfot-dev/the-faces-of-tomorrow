export const openLinkInNewTab = (url: string): void => {
    const win = window.open(url, '_blank');
    if (win != null) {
        win.focus();
    }
};
