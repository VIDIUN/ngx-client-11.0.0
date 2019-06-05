import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadToken } from './KalturaUploadToken';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface UploadTokenUploadActionArgs extends KalturaUploadRequestArgs {
    uploadTokenId: string;
    fileData: File;
    resume?: boolean;
    finalChunk?: boolean;
    resumeAt?: number;
}
/**
 * Build request payload for service 'uploadToken' action 'upload'.
 *
 * Usage: Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
export declare class UploadTokenUploadAction extends KalturaUploadRequest<KalturaUploadToken> {
    uploadTokenId: string;
    fileData: File;
    resume: boolean;
    finalChunk: boolean;
    resumeAt: number;
    constructor(data: UploadTokenUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
