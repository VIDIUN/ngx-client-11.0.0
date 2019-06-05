/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SearchSearchUrlActionArgs() { }
/** @type {?} */
SearchSearchUrlActionArgs.prototype.mediaType;
/** @type {?} */
SearchSearchUrlActionArgs.prototype.url;
/**
 * Build request payload for service 'search' action 'searchUrl'.
 *
 * Usage: Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *
 * Server response type:         KalturaSearchResult
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'search' action 'searchUrl'.
 *
 * Usage: Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *
 * Server response type:         KalturaSearchResult
 * Server failure response type: KalturaAPIException
 */
SearchSearchUrlAction = /** @class */ (function (_super) {
    tslib_1.__extends(SearchSearchUrlAction, _super);
    function SearchSearchUrlAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaSearchResult', responseConstructor: KalturaSearchResult }) || this;
    }
    /**
     * @return {?}
     */
    SearchSearchUrlAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'search' },
            action: { type: 'c', default: 'searchUrl' },
            mediaType: { type: 'en', subTypeConstructor: KalturaMediaType, subType: 'KalturaMediaType' },
            url: { type: 's' }
        });
        return result;
    };
    return SearchSearchUrlAction;
}(KalturaRequest));
/**
 * Build request payload for service 'search' action 'searchUrl'.
 *
 * Usage: Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *
 * Server response type:         KalturaSearchResult
 * Server failure response type: KalturaAPIException
 */
export { SearchSearchUrlAction };
if (false) {
    /** @type {?} */
    SearchSearchUrlAction.prototype.mediaType;
    /** @type {?} */
    SearchSearchUrlAction.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoU2VhcmNoVXJsQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZWFyY2hTZWFyY2hVcmxBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7OztBQUFBO0lBQTJDLGlEQUFtQztJQUsxRSwrQkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRyxtQkFBbUIsRUFBRyxDQUFDO0tBQzFIOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUM5QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNoRyxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0E3Q0w7RUFzQjJDLGNBQWMsRUF3QnhELENBQUE7Ozs7Ozs7Ozs7O0FBeEJELGlDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoUmVzdWx0JztcblxuaW1wb3J0IHsgS2FsdHVyYU1lZGlhVHlwZSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTZWFyY2hVcmxBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbWVkaWFUeXBlIDogS2FsdHVyYU1lZGlhVHlwZTtcblx0dXJsIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2VhcmNoJyBhY3Rpb24gJ3NlYXJjaFVybCcuXG4gKlxuICogVXNhZ2U6IFNlYXJjaCBmb3IgbWVkaWEgZ2l2ZW4gYSBzcGVjaWZpYyBVUkxcbiAqIEthbHR1cmEgc3VwcG9ydHMgYSBzZWFyY2hVUkwgYWN0aW9uIG9uIHNvbWUgb2YgdGhlIG1lZGlhIHByb3ZpZGVycy5cbiAqIFRoaXMgYWN0aW9uIHdpbGwgcmV0dXJuIGEgS2FsdHVyYVNlYXJjaFJlc3VsdCBvYmplY3QgYmFzZWQgb24gYSBnaXZlbiBVUkwgKGFzc3VtaW5nIHRoZSBtZWRpYSBwcm92aWRlciBpcyBzdXBwb3J0ZWQpXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVNlYXJjaFJlc3VsdFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VhcmNoVXJsQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVNlYXJjaFJlc3VsdD4ge1xuXG4gICAgbWVkaWFUeXBlIDogS2FsdHVyYU1lZGlhVHlwZTtcblx0dXJsIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNlYXJjaFNlYXJjaFVybEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNlYXJjaFJlc3VsdCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoUmVzdWx0ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZWFyY2gnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZWFyY2hVcmwnIH0sXG5cdFx0XHRcdG1lZGlhVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhVHlwZScgfSxcblx0XHRcdFx0dXJsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==