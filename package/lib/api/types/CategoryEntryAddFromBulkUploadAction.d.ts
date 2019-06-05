import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkServiceData } from './KalturaBulkServiceData';
import { KalturaBulkUploadCategoryEntryData } from './KalturaBulkUploadCategoryEntryData';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryEntryAddFromBulkUploadActionArgs extends KalturaRequestArgs {
    bulkUploadData: KalturaBulkServiceData;
    bulkUploadCategoryEntryData?: KalturaBulkUploadCategoryEntryData;
}
/**
 * Build request payload for service 'categoryEntry' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryEntryAddFromBulkUploadAction extends KalturaRequest<KalturaBulkUpload> {
    bulkUploadData: KalturaBulkServiceData;
    bulkUploadCategoryEntryData: KalturaBulkUploadCategoryEntryData;
    constructor(data: CategoryEntryAddFromBulkUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}