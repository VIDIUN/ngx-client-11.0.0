import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderFileDeleteActionArgs extends KalturaRequestArgs {
    dropFolderFileId: number;
}
/**
 * Build request payload for service 'dropFolderFile' action 'delete'.
 *
 * Usage: Mark the KalturaDropFolderFile object as deleted
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderFileDeleteAction extends KalturaRequest<KalturaDropFolderFile> {
    dropFolderFileId: number;
    constructor(data: DropFolderFileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
