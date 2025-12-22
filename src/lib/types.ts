export type ANAS_FolderOrFile = ANAS_File | ANAS_Folder;

export interface ANAS_File {
    kind: 'file';           // classDiscriminator で指定した値
    type: string;           // クラス内のプロパティ
    absolutePath: string;
    name: string;
    size: number;
    lastModified: number;
}

export interface ANAS_Folder {
    kind: 'folder';         // classDiscriminator で指定した値
    type: string;           // クラス内のプロパティ
    absolutePath: string;
    name: string;
    open: boolean;
    children: ANAS_FolderOrFile[]; // 再帰的な構造
}