import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CuePointUpdateStatusActionArgs extends KalturaRequestArgs {
    id: string;
    status: KalturaCuePointStatus;
}
/**
 * Build request payload for service 'cuePoint' action 'updateStatus'.
 *
 * Usage: Update cuePoint status by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointUpdateStatusAction extends KalturaRequest<void> {
    id: string;
    status: KalturaCuePointStatus;
    constructor(data: CuePointUpdateStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
