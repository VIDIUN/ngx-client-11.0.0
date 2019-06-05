/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function ShortLinkGotoActionArgs() { }
/** @type {?} */
ShortLinkGotoActionArgs.prototype.id;
/** @type {?|undefined} */
ShortLinkGotoActionArgs.prototype.proxy;
/**
 * Build request payload for service 'shortLink' action 'goto'.
 *
 * Usage: Serves short link
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'shortLink' action 'goto'.
 *
 * Usage: Serves short link
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
ShortLinkGotoAction = /** @class */ (function (_super) {
    tslib_1.__extends(ShortLinkGotoAction, _super);
    function ShortLinkGotoAction(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.proxy === 'undefined')
            _this.proxy = false;
        return _this;
    }
    /**
     * @return {?}
     */
    ShortLinkGotoAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'shortlink_shortlink' },
            action: { type: 'c', default: 'goto' },
            id: { type: 's' },
            proxy: { type: 'b' }
        });
        return result;
    };
    return ShortLinkGotoAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'shortLink' action 'goto'.
 *
 * Usage: Serves short link
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { ShortLinkGotoAction };
if (false) {
    /** @type {?} */
    ShortLinkGotoAction.prototype.id;
    /** @type {?} */
    ShortLinkGotoAction.prototype.proxy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcnRMaW5rR290b0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2hvcnRMaW5rR290b0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlckY7Ozs7Ozs7O0FBQUE7SUFBeUMsK0NBQWtCO0lBS3ZELDZCQUFZLElBQThCO1FBQTFDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0tBQzdEOzs7O0lBRVMsMENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDckUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3pDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBM0NMO0VBbUJ5QyxrQkFBa0IsRUF5QjFELENBQUE7Ozs7Ozs7OztBQXpCRCwrQkF5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFGaWxlUmVxdWVzdCwgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtZmlsZS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTaG9ydExpbmtHb3RvQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0cHJveHk/IDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Nob3J0TGluaycgYWN0aW9uICdnb3RvJy5cbiAqXG4gKiBVc2FnZTogU2VydmVzIHNob3J0IGxpbmtcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNob3J0TGlua0dvdG9BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdHByb3h5IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTaG9ydExpbmtHb3RvQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJveHkgPT09ICd1bmRlZmluZWQnKSB0aGlzLnByb3h5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2hvcnRsaW5rX3Nob3J0bGluaycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dvdG8nIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3h5IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==