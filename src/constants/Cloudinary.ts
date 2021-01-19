export const Cloudinary = {
    UploadUrl: 'https://api.cloudinary.com/v1_1/thefacesoftomorrow/upload',
    UploadPreset: 'eltdyvx0',
    ThumbnailUrl: (publicId: string) =>
        `https://res.cloudinary.com/thefacesoftomorrow/image/upload/c_thumb/h_500/v26789735/${publicId}`,
    DownloadUrl: (publicId: string) =>
        `https://res.cloudinary.com/thefacesoftomorrow/image/upload/fl_attachment/v26789735/${publicId}`,
};
