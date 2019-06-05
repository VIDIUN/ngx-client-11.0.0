/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPartnerStatistics } from './KalturaPartnerStatistics';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PartnerGetStatisticsActionArgs() { }
/**
 * Build request payload for service 'partner' action 'getStatistics'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 *
 * Server response type:         KalturaPartnerStatistics
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'partner' action 'getStatistics'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 *
 * Server response type:         KalturaPartnerStatistics
 * Server failure response type: KalturaAPIException
 */
PartnerGetStatisticsAction = /** @class */ (function (_super) {
    tslib_1.__extends(PartnerGetStatisticsAction, _super);
    function PartnerGetStatisticsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPartnerStatistics', responseConstructor: KalturaPartnerStatistics }) || this;
    }
    /**
     * @return {?}
     */
    PartnerGetStatisticsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'getStatistics' }
        });
        return result;
    };
    return PartnerGetStatisticsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'partner' action 'getStatistics'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 *
 * Server response type:         KalturaPartnerStatistics
 * Server failure response type: KalturaAPIException
 */
export { PartnerGetStatisticsAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lckdldFN0YXRpc3RpY3NBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BhcnRuZXJHZXRTdGF0aXN0aWNzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7OztBQUFBO0lBQWdELHNEQUF3QztJQUlwRixvQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRyx3QkFBd0IsRUFBRyxDQUFDO0tBQ3BJOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1lBQ3pELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtTQUN6QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQXZDTDtFQW1CZ0QsY0FBYyxFQXFCN0QsQ0FBQTs7Ozs7Ozs7OztBQXJCRCxzQ0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJTdGF0aXN0aWNzIH0gZnJvbSAnLi9LYWx0dXJhUGFydG5lclN0YXRpc3RpY3MnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJ0bmVyR2V0U3RhdGlzdGljc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BhcnRuZXInIGFjdGlvbiAnZ2V0U3RhdGlzdGljcycuXG4gKlxuICogVXNhZ2U6IEdldCB1c2FnZSBzdGF0aXN0aWNzIGZvciBhIHBhcnRuZXJcbiAqIENhbGN1bGF0aW9uIGlzIGRvbmUgYWNjb3JkaW5nIHRvIHBhcnRuZXIncyBwYWNrYWdlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBhcnRuZXJTdGF0aXN0aWNzXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJ0bmVyR2V0U3RhdGlzdGljc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQYXJ0bmVyU3RhdGlzdGljcz4ge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFBhcnRuZXJHZXRTdGF0aXN0aWNzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lclN0YXRpc3RpY3MnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXJTdGF0aXN0aWNzICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdwYXJ0bmVyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0U3RhdGlzdGljcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19