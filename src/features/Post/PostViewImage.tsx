import React from 'react';
import Image from 'material-ui-image';

type PostViewImageType = {
    src: string;
};

export const PostViewImage = (props: PostViewImageType) => <Image src={props.src} style={{ objectFit: 'contain' }} />;
