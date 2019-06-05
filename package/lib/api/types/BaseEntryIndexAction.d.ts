import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryIndexActionArgs extends KalturaRequestArgs {
    id: string;
    shouldUpdate?: boolean;
}
/**
 * Build request payload for service 'baseEntry' action 'index'.
 *
 * Usage: Index an entry by id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryIndexAction extends KalturaRequest<number> {
    id: string;
    shouldUpdate: boolean;
    constructor(data: BaseEntryIndexActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
