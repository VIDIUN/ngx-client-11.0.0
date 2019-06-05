/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaClientNotificationArgs() { }
/** @type {?|undefined} */
KalturaClientNotificationArgs.prototype.url;
/** @type {?|undefined} */
KalturaClientNotificationArgs.prototype.data;
var KalturaClientNotification = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaClientNotification, _super);
    function KalturaClientNotification(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaClientNotification.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaClientNotification' },
            url: { type: 's' },
            data: { type: 's' }
        });
        return result;
    };
    return KalturaClientNotification;
}(KalturaObjectBase));
export { KalturaClientNotification };
if (false) {
    /** @type {?} */
    KalturaClientNotification.prototype.url;
    /** @type {?} */
    KalturaClientNotification.prototype.data;
}
typesMappingStorage['KalturaClientNotification'] = KalturaClientNotification;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNsaWVudE5vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNsaWVudE5vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQVFsRixJQUFBO0lBQStDLHFEQUFpQjtJQUs1RCxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBaENMO0VBVStDLGlCQUFpQixFQXVCL0QsQ0FBQTtBQXZCRCxxQ0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2xpZW50Tm90aWZpY2F0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHVybD8gOiBzdHJpbmc7XG5cdGRhdGE/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2xpZW50Tm90aWZpY2F0aW9uIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgdXJsIDogc3RyaW5nO1xuXHRkYXRhIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2xpZW50Tm90aWZpY2F0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDbGllbnROb3RpZmljYXRpb24nIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkYXRhIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDbGllbnROb3RpZmljYXRpb24nXSA9IEthbHR1cmFDbGllbnROb3RpZmljYXRpb247Il19