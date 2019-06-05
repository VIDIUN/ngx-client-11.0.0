import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface VarConsoleUpdateStatusActionArgs extends KalturaRequestArgs {
    id: number;
    status: KalturaPartnerStatus;
}
/**
 * Build request payload for service 'varConsole' action 'updateStatus'.
 *
 * Usage: Function to change a sub-publisher's status
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class VarConsoleUpdateStatusAction extends KalturaRequest<void> {
    id: number;
    status: KalturaPartnerStatus;
    constructor(data: VarConsoleUpdateStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}