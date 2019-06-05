/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSearchAuthData } from './KalturaSearchAuthData';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SearchExternalLoginActionArgs() { }
/** @type {?} */
SearchExternalLoginActionArgs.prototype.searchSource;
/** @type {?} */
SearchExternalLoginActionArgs.prototype.userName;
/** @type {?} */
SearchExternalLoginActionArgs.prototype.password;
/**
 * Build request payload for service 'search' action 'externalLogin'.
 *
 *
 *
 * Server response type:         KalturaSearchAuthData
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'search' action 'externalLogin'.
 *
 *
 *
 * Server response type:         KalturaSearchAuthData
 * Server failure response type: KalturaAPIException
 */
SearchExternalLoginAction = /** @class */ (function (_super) {
    tslib_1.__extends(SearchExternalLoginAction, _super);
    function SearchExternalLoginAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaSearchAuthData', responseConstructor: KalturaSearchAuthData }) || this;
    }
    /**
     * @return {?}
     */
    SearchExternalLoginAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'search' },
            action: { type: 'c', default: 'externalLogin' },
            searchSource: { type: 'en', subTypeConstructor: KalturaSearchProviderType, subType: 'KalturaSearchProviderType' },
            userName: { type: 's' },
            password: { type: 's' }
        });
        return result;
    };
    return SearchExternalLoginAction;
}(KalturaRequest));
/**
 * Build request payload for service 'search' action 'externalLogin'.
 *
 *
 *
 * Server response type:         KalturaSearchAuthData
 * Server failure response type: KalturaAPIException
 */
export { SearchExternalLoginAction };
if (false) {
    /** @type {?} */
    SearchExternalLoginAction.prototype.searchSource;
    /** @type {?} */
    SearchExternalLoginAction.prototype.userName;
    /** @type {?} */
    SearchExternalLoginAction.prototype.password;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXh0ZXJuYWxMb2dpbkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2VhcmNoRXh0ZXJuYWxMb2dpbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUFxQztJQU1oRixtQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRyxxQkFBcUIsRUFBRyxDQUFDO0tBQzlIOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNySCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0E5Q0w7RUFxQitDLGNBQWMsRUEwQjVELENBQUE7Ozs7Ozs7OztBQTFCRCxxQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaEF1dGhEYXRhIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoQXV0aERhdGEnO1xuXG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEV4dGVybmFsTG9naW5BY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2VhcmNoU291cmNlIDogS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZTtcblx0dXNlck5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2VhcmNoJyBhY3Rpb24gJ2V4dGVybmFsTG9naW4nLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTZWFyY2hBdXRoRGF0YVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2VhcmNoRXh0ZXJuYWxMb2dpbkFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTZWFyY2hBdXRoRGF0YT4ge1xuXG4gICAgc2VhcmNoU291cmNlIDogS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZTtcblx0dXNlck5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNlYXJjaEV4dGVybmFsTG9naW5BY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hBdXRoRGF0YScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoQXV0aERhdGEgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlYXJjaCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2V4dGVybmFsTG9naW4nIH0sXG5cdFx0XHRcdHNlYXJjaFNvdXJjZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZWFyY2hQcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZScgfSxcblx0XHRcdFx0dXNlck5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19