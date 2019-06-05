import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCEError } from './KalturaCEError';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StatsReportKceErrorActionArgs extends KalturaRequestArgs {
    kalturaCEError: KalturaCEError;
}
/**
 * Build request payload for service 'stats' action 'reportKceError'.
 *
 *
 *
 * Server response type:         KalturaCEError
 * Server failure response type: KalturaAPIException
 */
export declare class StatsReportKceErrorAction extends KalturaRequest<KalturaCEError> {
    kalturaCEError: KalturaCEError;
    constructor(data: StatsReportKceErrorActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
