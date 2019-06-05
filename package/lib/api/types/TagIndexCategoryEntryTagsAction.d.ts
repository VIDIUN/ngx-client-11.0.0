import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface TagIndexCategoryEntryTagsActionArgs extends KalturaRequestArgs {
    categoryId: number;
    pcToDecrement: string;
    pcToIncrement: string;
}
/**
 * Build request payload for service 'tag' action 'indexCategoryEntryTags'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class TagIndexCategoryEntryTagsAction extends KalturaRequest<void> {
    categoryId: number;
    pcToDecrement: string;
    pcToIncrement: string;
    constructor(data: TagIndexCategoryEntryTagsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
