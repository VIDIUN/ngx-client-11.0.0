import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderAddActionArgs extends KalturaRequestArgs {
    dropFolder: KalturaDropFolder;
}
/**
 * Build request payload for service 'dropFolder' action 'add'.
 *
 * Usage: Allows you to add a new KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderAddAction extends KalturaRequest<KalturaDropFolder> {
    dropFolder: KalturaDropFolder;
    constructor(data: DropFolderAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
