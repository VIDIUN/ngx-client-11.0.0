/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DeliveryProfileCloneActionArgs() { }
/** @type {?} */
DeliveryProfileCloneActionArgs.prototype.deliveryId;
/**
 * Build request payload for service 'deliveryProfile' action 'clone'.
 *
 * Usage: Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'deliveryProfile' action 'clone'.
 *
 * Usage: Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
DeliveryProfileCloneAction = /** @class */ (function (_super) {
    tslib_1.__extends(DeliveryProfileCloneAction, _super);
    function DeliveryProfileCloneAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDeliveryProfile', responseConstructor: KalturaDeliveryProfile }) || this;
    }
    /**
     * @return {?}
     */
    DeliveryProfileCloneAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'deliveryprofile' },
            action: { type: 'c', default: 'clone' },
            deliveryId: { type: 'n' }
        });
        return result;
    };
    return DeliveryProfileCloneAction;
}(KalturaRequest));
/**
 * Build request payload for service 'deliveryProfile' action 'clone'.
 *
 * Usage: Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
export { DeliveryProfileCloneAction };
if (false) {
    /** @type {?} */
    DeliveryProfileCloneAction.prototype.deliveryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsaXZlcnlQcm9maWxlQ2xvbmVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0RlbGl2ZXJ5UHJvZmlsZUNsb25lQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7O0FBQUE7SUFBZ0Qsc0RBQXNDO0lBSWxGLG9DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdCQUF3QixFQUFFLG1CQUFtQixFQUFHLHNCQUFzQixFQUFHLENBQUM7S0FDaEk7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNqRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQXhDTDtFQW1CZ0QsY0FBYyxFQXNCN0QsQ0FBQTs7Ozs7Ozs7OztBQXRCRCxzQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5UHJvZmlsZUNsb25lQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGRlbGl2ZXJ5SWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdkZWxpdmVyeVByb2ZpbGUnIGFjdGlvbiAnY2xvbmUnLlxuICpcbiAqIFVzYWdlOiBBZGQgZGVsaXZlcnkgYmFzZWQgb24gZXhpc3RpbmcgZGVsaXZlcnkuXG4gKiBNdXN0IHByb3ZpZGUgdmFsaWQgc291cmNlRGVsaXZlcnlJZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5UHJvZmlsZUNsb25lQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURlbGl2ZXJ5UHJvZmlsZT4ge1xuXG4gICAgZGVsaXZlcnlJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEZWxpdmVyeVByb2ZpbGVDbG9uZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGVsaXZlcnlQcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkZWxpdmVyeXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjbG9uZScgfSxcblx0XHRcdFx0ZGVsaXZlcnlJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=