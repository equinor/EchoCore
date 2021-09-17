import { TagStatus } from './tagDetails';

export interface Tag {
    description?: string;
    tagCategoryDescription: string;
    tagCategory: number;
    tagNo: string;
    tagStatus: TagStatus;
    projectCode?: string;
    tagType: string;
    tagStatusDescription: string;
    system?: string;
    locationCode?: string;
    poNo?: string;
}
