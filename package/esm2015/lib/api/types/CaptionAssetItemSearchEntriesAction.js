/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetItemSearchEntriesActionArgs() { }
/** @type {?|undefined} */
CaptionAssetItemSearchEntriesActionArgs.prototype.entryFilter;
/** @type {?|undefined} */
CaptionAssetItemSearchEntriesActionArgs.prototype.captionAssetItemFilter;
/** @type {?|undefined} */
CaptionAssetItemSearchEntriesActionArgs.prototype.captionAssetItemPager;
/**
 * Build request payload for service 'captionAssetItem' action 'searchEntries'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaBaseEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetItemSearchEntriesAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaBaseEntryListResponse', responseConstructor: KalturaBaseEntryListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'captionsearch_captionassetitem' },
            action: { type: 'c', default: 'searchEntries' },
            entryFilter: { type: 'o', subTypeConstructor: KalturaBaseEntryFilter, subType: 'KalturaBaseEntryFilter' },
            captionAssetItemFilter: { type: 'o', subTypeConstructor: KalturaCaptionAssetItemFilter, subType: 'KalturaCaptionAssetItemFilter' },
            captionAssetItemPager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CaptionAssetItemSearchEntriesAction.prototype.entryFilter;
    /** @type {?} */
    CaptionAssetItemSearchEntriesAction.prototype.captionAssetItemFilter;
    /** @type {?} */
    CaptionAssetItemSearchEntriesAction.prototype.captionAssetItemPager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0SXRlbVNlYXJjaEVudHJpZXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhcHRpb25Bc3NldEl0ZW1TZWFyY2hFbnRyaWVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RSxNQUFNLDBDQUEyQyxTQUFRLGNBQTRDOzs7O0lBTWpHLFlBQVksSUFBK0M7UUFFdkQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDhCQUE4QixFQUFFLG1CQUFtQixFQUFHLDRCQUE0QixFQUFHLENBQUMsQ0FBQztLQUM3STs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDaEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ2xELFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzdHLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDdEkscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeUxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnlGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcHRpb25Bc3NldEl0ZW1TZWFyY2hFbnRyaWVzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5RmlsdGVyPyA6IEthbHR1cmFCYXNlRW50cnlGaWx0ZXI7XG5cdGNhcHRpb25Bc3NldEl0ZW1GaWx0ZXI/IDogS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXI7XG5cdGNhcHRpb25Bc3NldEl0ZW1QYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjYXB0aW9uQXNzZXRJdGVtJyBhY3Rpb24gJ3NlYXJjaEVudHJpZXMnLlxuICpcbiAqIFVzYWdlOiBTZWFyY2ggY2FwdGlvbiBhc3NldCBpdGVtcyBieSBmaWx0ZXIsIHBhZ2VyIGFuZCBmcmVlIHRleHRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQmFzZUVudHJ5TGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXB0aW9uQXNzZXRJdGVtU2VhcmNoRW50cmllc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCYXNlRW50cnlMaXN0UmVzcG9uc2U+IHtcblxuICAgIGVudHJ5RmlsdGVyIDogS2FsdHVyYUJhc2VFbnRyeUZpbHRlcjtcblx0Y2FwdGlvbkFzc2V0SXRlbUZpbHRlciA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyO1xuXHRjYXB0aW9uQXNzZXRJdGVtUGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IENhcHRpb25Bc3NldEl0ZW1TZWFyY2hFbnRyaWVzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5TGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnlMaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhcHRpb25zZWFyY2hfY2FwdGlvbmFzc2V0aXRlbScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlYXJjaEVudHJpZXMnIH0sXG5cdFx0XHRcdGVudHJ5RmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnlGaWx0ZXInIH0sXG5cdFx0XHRcdGNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyJyB9LFxuXHRcdFx0XHRjYXB0aW9uQXNzZXRJdGVtUGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==