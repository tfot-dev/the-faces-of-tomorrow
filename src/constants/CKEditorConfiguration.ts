export const CKEditorConfiguration = (saveToServer: (data: string) => Promise<unknown>): unknown => ({
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'code',
            'alignment',
            'fontColor',
            'fontFamily',
            'fontSize',
            'link',
            'bulletedList',
            'numberedList',
            'highlight',
            '|',
            'indent',
            'outdent',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo',
        ],
    },
    autosave: {
        save(editor: { getData: () => string }) {
            return saveToServer(editor.getData());
        },
    },
});
