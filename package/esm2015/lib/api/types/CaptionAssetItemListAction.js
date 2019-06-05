/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionAssetItemListActionArgs() { }
/** @type {?} */
CaptionAssetItemListActionArgs.prototype.captionAssetId;
/** @type {?|undefined} */
CaptionAssetItemListActionArgs.prototype.captionAssetItemFilter;
/** @type {?|undefined} */
CaptionAssetItemListActionArgs.prototype.captionAssetItemPager;
/**
 * Build request payload for service 'captionAssetItem' action 'list'.
 *
 * Usage: List caption asset items by filter and pager
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
export class CaptionAssetItemListAction extends KalturaRequest {
    /**
     * @param {?} data
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
            action: { type: 'c', default: 'list' },
            captionAssetId: { type: 's' },
            captionAssetItemFilter: { type: 'o', subTypeConstructor: KalturaCaptionAssetItemFilter, subType: 'KalturaCaptionAssetItemFilter' },
            captionAssetItemPager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CaptionAssetItemListAction.prototype.captionAssetId;
    /** @type {?} */
    CaptionAssetItemListAction.prototype.captionAssetItemFilter;
    /** @type {?} */
    CaptionAssetItemListAction.prototype.captionAssetItemPager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0SXRlbUxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhcHRpb25Bc3NldEl0ZW1MaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RSxNQUFNLGlDQUFrQyxTQUFRLGNBQW1EOzs7O0lBTS9GLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHFDQUFxQyxFQUFFLG1CQUFtQixFQUFHLG1DQUFtQyxFQUFHLENBQUMsQ0FBQztLQUMzSjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDaEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUN0SSxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1MaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGlvbkFzc2V0SXRlbUxpc3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgY2FwdGlvbkFzc2V0SWQgOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldEl0ZW1GaWx0ZXI/IDogS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW1GaWx0ZXI7XG5cdGNhcHRpb25Bc3NldEl0ZW1QYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjYXB0aW9uQXNzZXRJdGVtJyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFVzYWdlOiBMaXN0IGNhcHRpb24gYXNzZXQgaXRlbXMgYnkgZmlsdGVyIGFuZCBwYWdlclxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXB0aW9uQXNzZXRJdGVtTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBjYXB0aW9uQXNzZXRJZCA6IHN0cmluZztcblx0Y2FwdGlvbkFzc2V0SXRlbUZpbHRlciA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtRmlsdGVyO1xuXHRjYXB0aW9uQXNzZXRJdGVtUGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2FwdGlvbkFzc2V0SXRlbUxpc3RBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjYXB0aW9uc2VhcmNoX2NhcHRpb25hc3NldGl0ZW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRjYXB0aW9uQXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXB0aW9uQXNzZXRJdGVtRmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUZpbHRlcicgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0SXRlbVBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=