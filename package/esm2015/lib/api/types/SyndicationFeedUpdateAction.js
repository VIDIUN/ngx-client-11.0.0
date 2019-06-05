/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SyndicationFeedUpdateActionArgs() { }
/** @type {?} */
SyndicationFeedUpdateActionArgs.prototype.id;
/** @type {?} */
SyndicationFeedUpdateActionArgs.prototype.syndicationFeed;
/**
 * Build request payload for service 'syndicationFeed' action 'update'.
 *
 * Usage: Update Syndication Feed by ID
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 */
export class SyndicationFeedUpdateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaBaseSyndicationFeed', responseConstructor: KalturaBaseSyndicationFeed });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'syndicationfeed' },
            action: { type: 'c', default: 'update' },
            id: { type: 's' },
            syndicationFeed: { type: 'o', subTypeConstructor: KalturaBaseSyndicationFeed, subType: 'KalturaBaseSyndicationFeed' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SyndicationFeedUpdateAction.prototype.id;
    /** @type {?} */
    SyndicationFeedUpdateAction.prototype.syndicationFeed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luZGljYXRpb25GZWVkVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TeW5kaWNhdGlvbkZlZWRVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sa0NBQW1DLFNBQVEsY0FBMEM7Ozs7SUFLdkYsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsNEJBQTRCLEVBQUUsbUJBQW1CLEVBQUcsMEJBQTBCLEVBQUcsQ0FBQyxDQUFDO0tBQ3pJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNqRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUNoSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3luZGljYXRpb25GZWVkVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHRzeW5kaWNhdGlvbkZlZWQgOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3N5bmRpY2F0aW9uRmVlZCcgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgU3luZGljYXRpb24gRmVlZCBieSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTeW5kaWNhdGlvbkZlZWRVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZD4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdHN5bmRpY2F0aW9uRmVlZCA6IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFN5bmRpY2F0aW9uRmVlZFVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N5bmRpY2F0aW9uZmVlZCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3luZGljYXRpb25GZWVkIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCwgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19