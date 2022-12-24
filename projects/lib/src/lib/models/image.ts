export interface File {
    url: string;
    title: string;
}

export interface Image {
    fields: {file: File};
}
