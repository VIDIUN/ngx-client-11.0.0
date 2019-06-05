import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidgetSecurityType } from './KalturaWidgetSecurityType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaWidgetArgs extends KalturaObjectBaseArgs {
    sourceWidgetId?: string;
    entryId?: string;
    uiConfId?: number;
    securityType?: KalturaWidgetSecurityType;
    securityPolicy?: number;
    partnerData?: string;
    enforceEntitlement?: boolean;
    privacyContext?: string;
    addEmbedHtml5Support?: boolean;
    roles?: string;
}
export declare class KalturaWidget extends KalturaObjectBase {
    readonly id: string;
    sourceWidgetId: string;
    readonly rootWidgetId: string;
    readonly partnerId: number;
    entryId: string;
    uiConfId: number;
    securityType: KalturaWidgetSecurityType;
    securityPolicy: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    partnerData: string;
    readonly widgetHTML: string;
    enforceEntitlement: boolean;
    privacyContext: string;
    addEmbedHtml5Support: boolean;
    roles: string;
    constructor(data?: KalturaWidgetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
