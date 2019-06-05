import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StatsReportDeviceCapabilitiesActionArgs extends KalturaRequestArgs {
    data: string;
}
/**
 * Build request payload for service 'stats' action 'reportDeviceCapabilities'.
 *
 * Usage: Use this action to report device capabilities to the kaltura server
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class StatsReportDeviceCapabilitiesAction extends KalturaRequest<void> {
    data: string;
    constructor(data: StatsReportDeviceCapabilitiesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}