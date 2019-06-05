/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetItemSearchActionArgs() { }
/** @type {?|undefined} */
CaptionAssetItemSearchActionArgs.prototype.entryFilter;
/** @type {?|undefined} */
CaptionAssetItemSearchActionArgs.prototype.captionAssetItemFilter;
/** @type {?|undefined} */
CaptionAssetItemSearchActionArgs.prototype.captionAssetItemPager;
/**
 * Build request payload for service 'captionAssetItem' action 'search'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetItemSearchAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaCaptionAssetItemListResponse', responseConstructor: KalturaCaptionAssetItemListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'captionsearch_captionassetitem' },
            action: { type: 'c', default: 'search' },
            entryFilter: { type: 'o', subTypeConstructor: KalturaBaseEntryFilter, subType: 'KalturaBaseEntryFilter' },
            captionAssetItemFilter: { type: 'o', subTypeConstructor: KalturaCaptionAssetItemFilter, subType: 'KalturaCaptionAssetItemFilter' },
            captionAssetItemPager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CaptionAssetItemSearchAction.prototype.entryFilter;
    /** @type {?} */
    CaptionAssetItemSearchAction.prototype.captionAssetItemFilter;
    /** @type {?} */
    CaptionAssetItemSearchAction.prototype.captionAssetItemPager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0SXRlbVNlYXJjaEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2FwdGlvbkFzc2V0SXRlbVNlYXJjaEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFNUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSxtQ0FBb0MsU0FBUSxjQUFtRDs7OztJQU1qRyxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRyxtQ0FBbUMsRUFBRyxDQUFDLENBQUM7S0FDM0o7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ2hGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM3RyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ3RJLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnlGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcHRpb25Bc3NldEl0ZW1TZWFyY2hBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlGaWx0ZXI/IDogS2FsdHVyYUJhc2VFbnRyeUZpbHRlcjtcblx0Y2FwdGlvbkFzc2V0SXRlbUZpbHRlcj8gOiBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlcjtcblx0Y2FwdGlvbkFzc2V0SXRlbVBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhcHRpb25Bc3NldEl0ZW0nIGFjdGlvbiAnc2VhcmNoJy5cbiAqXG4gKiBVc2FnZTogU2VhcmNoIGNhcHRpb24gYXNzZXQgaXRlbXMgYnkgZmlsdGVyLCBwYWdlciBhbmQgZnJlZSB0ZXh0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1MaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhcHRpb25Bc3NldEl0ZW1TZWFyY2hBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUxpc3RSZXNwb25zZT4ge1xuXG4gICAgZW50cnlGaWx0ZXIgOiBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyO1xuXHRjYXB0aW9uQXNzZXRJdGVtRmlsdGVyIDogS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXI7XG5cdGNhcHRpb25Bc3NldEl0ZW1QYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogQ2FwdGlvbkFzc2V0SXRlbVNlYXJjaEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1MaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1MaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhcHRpb25zZWFyY2hfY2FwdGlvbmFzc2V0aXRlbScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlYXJjaCcgfSxcblx0XHRcdFx0ZW50cnlGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnlGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeUZpbHRlcicgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0SXRlbUZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXInIH0sXG5cdFx0XHRcdGNhcHRpb25Bc3NldEl0ZW1QYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19