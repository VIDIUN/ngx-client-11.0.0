import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeacon } from './KalturaBeacon';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BeaconAddActionArgs extends KalturaRequestArgs {
    beacon: KalturaBeacon;
    shouldLog?: KalturaNullableBoolean;
}
/**
 * Build request payload for service 'beacon' action 'add'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class BeaconAddAction extends KalturaRequest<boolean> {
    beacon: KalturaBeacon;
    shouldLog: KalturaNullableBoolean;
    constructor(data: BeaconAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
