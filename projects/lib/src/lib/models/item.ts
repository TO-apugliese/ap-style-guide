import {Image} from './image';

export type NodeTypes = 'paragraph' | 'bold' | 'hyperlink' | 'none';

export  interface Fragment {
    content: Fragment[];
    value: string;
    nodeType: NodeTypes;
    data: {uri: string};
    marks: {type: NodeTypes}[];
}

export interface DescriptionContent {
    content: Fragment[];
}

export interface Item {
    id: string;
    order: number;
    title: string;
    description: DescriptionContent;
    descriptionAsHtml: string;
    width: string;
    height: string;
    images: Image[];
    price: string;
    isSold: boolean;
}
