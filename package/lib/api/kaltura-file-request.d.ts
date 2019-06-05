import { KalturaRequest, KalturaRequestArgs } from './kaltura-request';
export interface KalturaFileRequestArgs extends KalturaRequestArgs {
}
export declare class KalturaFileRequest extends KalturaRequest<{
    url: string;
}> {
    constructor(data: KalturaFileRequestArgs);
}
