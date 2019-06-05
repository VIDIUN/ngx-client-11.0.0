import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentListResponse } from './KalturaDocumentListResponse';
import { KalturaDocumentEntryFilter } from './KalturaDocumentEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DocumentsListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDocumentEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'documents' action 'list'.
 *
 * Usage: List document entries by filter with paging support
 *
 * Server response type:         KalturaDocumentListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsListAction extends KalturaRequest<KalturaDocumentListResponse> {
    filter: KalturaDocumentEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: DocumentsListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
