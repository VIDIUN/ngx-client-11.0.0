import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CuePointDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'cuePoint' action 'delete'.
 *
 * Usage: delete cue point by id, and delete all children cue points
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointDeleteAction extends KalturaRequest<void> {
    id: string;
    constructor(data: CuePointDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
