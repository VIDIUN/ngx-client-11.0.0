/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAppToken } from './KalturaAppToken';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AppTokenAddActionArgs() { }
/** @type {?} */
AppTokenAddActionArgs.prototype.appToken;
/**
 * Build request payload for service 'appToken' action 'add'.
 *
 * Usage: Add new application authentication token
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'appToken' action 'add'.
 *
 * Usage: Add new application authentication token
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
AppTokenAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(AppTokenAddAction, _super);
    function AppTokenAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAppToken', responseConstructor: KalturaAppToken }) || this;
    }
    /**
     * @return {?}
     */
    AppTokenAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'apptoken' },
            action: { type: 'c', default: 'add' },
            appToken: { type: 'o', subTypeConstructor: KalturaAppToken, subType: 'KalturaAppToken' }
        });
        return result;
    };
    return AppTokenAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'appToken' action 'add'.
 *
 * Usage: Add new application authentication token
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
export { AppTokenAddAction };
if (false) {
    /** @type {?} */
    AppTokenAddAction.prototype.appToken;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwVG9rZW5BZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FwcFRva2VuQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF1Qyw2Q0FBK0I7SUFJbEUsMkJBQVksSUFBNEI7ZUFFcEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUyx3Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDMUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUNuRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRCQXZDTDtFQWtCdUMsY0FBYyxFQXNCcEQsQ0FBQTs7Ozs7Ozs7O0FBdEJELDZCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXBwVG9rZW4gfSBmcm9tICcuL0thbHR1cmFBcHBUb2tlbic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRva2VuQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGFwcFRva2VuIDogS2FsdHVyYUFwcFRva2VuO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYXBwVG9rZW4nIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBhcHBsaWNhdGlvbiBhdXRoZW50aWNhdGlvbiB0b2tlblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFBcHBUb2tlblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQXBwVG9rZW5BZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQXBwVG9rZW4+IHtcblxuICAgIGFwcFRva2VuIDogS2FsdHVyYUFwcFRva2VuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEFwcFRva2VuQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQXBwVG9rZW4nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFwcFRva2VuICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhcHB0b2tlbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0YXBwVG9rZW4gOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBcHBUb2tlbiwgc3ViVHlwZSA6ICdLYWx0dXJhQXBwVG9rZW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==