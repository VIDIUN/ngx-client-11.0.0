/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUiConfTypeInfo } from './KalturaUiConfTypeInfo';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UiConfGetAvailableTypesActionArgs() { }
/**
 * Build request payload for service 'uiConf' action 'getAvailableTypes'.
 *
 * Usage: Retrieve a list of all available versions by object type
 *
 * Server response type:         KalturaUiConfTypeInfo[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'uiConf' action 'getAvailableTypes'.
 *
 * Usage: Retrieve a list of all available versions by object type
 *
 * Server response type:         KalturaUiConfTypeInfo[]
 * Server failure response type: KalturaAPIException
 */
UiConfGetAvailableTypesAction = /** @class */ (function (_super) {
    tslib_1.__extends(UiConfGetAvailableTypesAction, _super);
    function UiConfGetAvailableTypesAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaUiConfTypeInfo', responseConstructor: KalturaUiConfTypeInfo }) || this;
    }
    /**
     * @return {?}
     */
    UiConfGetAvailableTypesAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uiconf' },
            action: { type: 'c', default: 'getAvailableTypes' }
        });
        return result;
    };
    return UiConfGetAvailableTypesAction;
}(KalturaRequest));
/**
 * Build request payload for service 'uiConf' action 'getAvailableTypes'.
 *
 * Usage: Retrieve a list of all available versions by object type
 *
 * Server response type:         KalturaUiConfTypeInfo[]
 * Server failure response type: KalturaAPIException
 */
export { UiConfGetAvailableTypesAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVWlDb25mR2V0QXZhaWxhYmxlVHlwZXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VpQ29uZkdldEF2YWlsYWJsZVR5cGVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUFtRCx5REFBdUM7SUFJdEYsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUcscUJBQXFCLEVBQUcsQ0FBQztLQUM5SDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUM3QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQXRDTDtFQWtCbUQsY0FBYyxFQXFCaEUsQ0FBQTs7Ozs7Ozs7O0FBckJELHlDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVWlDb25mVHlwZUluZm8gfSBmcm9tICcuL0thbHR1cmFVaUNvbmZUeXBlSW5mbyc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVpQ29uZkdldEF2YWlsYWJsZVR5cGVzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIFxufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndWlDb25mJyBhY3Rpb24gJ2dldEF2YWlsYWJsZVR5cGVzJy5cbiAqXG4gKiBVc2FnZTogUmV0cmlldmUgYSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgdmVyc2lvbnMgYnkgb2JqZWN0IHR5cGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhVWlDb25mVHlwZUluZm9bXVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVWlDb25mR2V0QXZhaWxhYmxlVHlwZXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhVWlDb25mVHlwZUluZm9bXT4ge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFVpQ29uZkdldEF2YWlsYWJsZVR5cGVzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYScsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVWlDb25mVHlwZUluZm8nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVpQ29uZlR5cGVJbmZvICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1aWNvbmYnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRBdmFpbGFibGVUeXBlcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19