import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderFileUpdateStatusActionArgs extends KalturaRequestArgs {
    dropFolderFileId: number;
    status: KalturaDropFolderFileStatus;
}
/**
 * Build request payload for service 'dropFolderFile' action 'updateStatus'.
 *
 * Usage: Update status of KalturaDropFolderFile
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderFileUpdateStatusAction extends KalturaRequest<KalturaDropFolderFile> {
    dropFolderFileId: number;
    status: KalturaDropFolderFileStatus;
    constructor(data: DropFolderFileUpdateStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
