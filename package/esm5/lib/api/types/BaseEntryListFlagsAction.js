/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaModerationFlagListResponse } from './KalturaModerationFlagListResponse';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryListFlagsActionArgs() { }
/** @type {?} */
BaseEntryListFlagsActionArgs.prototype.entryId;
/** @type {?|undefined} */
BaseEntryListFlagsActionArgs.prototype.pager;
/**
 * Build request payload for service 'baseEntry' action 'listFlags'.
 *
 * Usage: List all pending flags for the entry
 *
 * Server response type:         KalturaModerationFlagListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'listFlags'.
 *
 * Usage: List all pending flags for the entry
 *
 * Server response type:         KalturaModerationFlagListResponse
 * Server failure response type: KalturaAPIException
 */
BaseEntryListFlagsAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryListFlagsAction, _super);
    function BaseEntryListFlagsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaModerationFlagListResponse', responseConstructor: KalturaModerationFlagListResponse }) || this;
    }
    /**
     * @return {?}
     */
    BaseEntryListFlagsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'listFlags' },
            entryId: { type: 's' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return BaseEntryListFlagsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'listFlags'.
 *
 * Usage: List all pending flags for the entry
 *
 * Server response type:         KalturaModerationFlagListResponse
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryListFlagsAction };
if (false) {
    /** @type {?} */
    BaseEntryListFlagsAction.prototype.entryId;
    /** @type {?} */
    BaseEntryListFlagsAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5TGlzdEZsYWdzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9CYXNlRW50cnlMaXN0RmxhZ3NBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUV4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBaUQ7SUFLM0Ysa0NBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUNBQW1DLEVBQUUsbUJBQW1CLEVBQUcsaUNBQWlDLEVBQUcsQ0FBQztLQUN0Sjs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDOUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQTNDTDtFQW9COEMsY0FBYyxFQXdCM0QsQ0FBQTs7Ozs7Ozs7O0FBeEJELG9DQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTW9kZXJhdGlvbkZsYWdMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFNb2RlcmF0aW9uRmxhZ0xpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VFbnRyeUxpc3RGbGFnc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdiYXNlRW50cnknIGFjdGlvbiAnbGlzdEZsYWdzJy5cbiAqXG4gKiBVc2FnZTogTGlzdCBhbGwgcGVuZGluZyBmbGFncyBmb3IgdGhlIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1vZGVyYXRpb25GbGFnTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlRW50cnlMaXN0RmxhZ3NBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTW9kZXJhdGlvbkZsYWdMaXN0UmVzcG9uc2U+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEJhc2VFbnRyeUxpc3RGbGFnc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1vZGVyYXRpb25GbGFnTGlzdFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNb2RlcmF0aW9uRmxhZ0xpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYmFzZWVudHJ5JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGlzdEZsYWdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=