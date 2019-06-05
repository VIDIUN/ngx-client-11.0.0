/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PartnerGetInfoActionArgs() { }
/**
 * Build request payload for service 'partner' action 'getInfo'.
 *
 * Usage: Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'partner' action 'getInfo'.
 *
 * Usage: Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
PartnerGetInfoAction = /** @class */ (function (_super) {
    tslib_1.__extends(PartnerGetInfoAction, _super);
    function PartnerGetInfoAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPartner', responseConstructor: KalturaPartner }) || this;
    }
    /**
     * @return {?}
     */
    PartnerGetInfoAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'getInfo' }
        });
        return result;
    };
    return PartnerGetInfoAction;
}(KalturaRequest));
/**
 * Build request payload for service 'partner' action 'getInfo'.
 *
 * Usage: Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export { PartnerGetInfoAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lckdldEluZm9BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BhcnRuZXJHZXRJbmZvQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7Ozs7QUFBQTtJQUEwQyxnREFBOEI7SUFJcEUsOEJBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUcsY0FBYyxFQUFHLENBQUM7S0FDaEg7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDekQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1NBQ25DLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBdkNMO0VBbUIwQyxjQUFjLEVBcUJ2RCxDQUFBOzs7Ozs7Ozs7O0FBckJELGdDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGFydG5lciB9IGZyb20gJy4vS2FsdHVyYVBhcnRuZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJ0bmVyR2V0SW5mb0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BhcnRuZXInIGFjdGlvbiAnZ2V0SW5mbycuXG4gKlxuICogVXNhZ2U6IFJldHJpZXZlIGFsbCBpbmZvIGF0dHJpYnV0ZWQgdG8gdGhlIHBhcnRuZXJcbiAqIFRoaXMgYWN0aW9uIGV4cGVjdHMgbm8gcGFyYW1ldGVycy4gSXQgcmV0dXJucyBpbmZvcm1hdGlvbiBmb3IgdGhlIGN1cnJlbnQgS1MgcGFydG5lcklkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBhcnRuZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBhcnRuZXJHZXRJbmZvQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBhcnRuZXI+IHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBQYXJ0bmVyR2V0SW5mb0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXInLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BhcnRuZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRJbmZvJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=