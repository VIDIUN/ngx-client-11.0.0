import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDataCenterContentResource } from './KalturaGenericDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DataAddContentActionArgs extends KalturaRequestArgs {
    entryId: string;
    resource: KalturaGenericDataCenterContentResource;
}
/**
 * Build request payload for service 'data' action 'addContent'.
 *
 * Usage: Update the dataContent of data entry using a resource
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class DataAddContentAction extends KalturaRequest<string> {
    entryId: string;
    resource: KalturaGenericDataCenterContentResource;
    constructor(data: DataAddContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
