import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStatsEvent } from './KalturaStatsEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StatsCollectActionArgs extends KalturaRequestArgs {
    event: KalturaStatsEvent;
}
/**
 * Build request payload for service 'stats' action 'collect'.
 *
 * Usage: Will write to the event log a single line representing the event
 * client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 * event_id - number is the row number in yuval's excel
 * datetime - same format as MySql's datetime - can change and should reflect the time zone
 * session id - can be some big random number or guid
 * partner id
 * entry id
 * unique viewer
 * widget id
 * ui_conf id
 * uid - the puser id as set by the ppartner
 * current point - in milliseconds
 * duration - milliseconds
 * user ip
 * process duration - in milliseconds
 * control id
 * seek
 * new point
 * referrer
 *
 *
 * KalturaStatsEvent $event
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class StatsCollectAction extends KalturaRequest<boolean> {
    event: KalturaStatsEvent;
    constructor(data: StatsCollectActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}