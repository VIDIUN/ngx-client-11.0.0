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
export function DeliveryProfileUpdateActionArgs() { }
/** @type {?} */
DeliveryProfileUpdateActionArgs.prototype.id;
/** @type {?} */
DeliveryProfileUpdateActionArgs.prototype.delivery;
/**
 * Build request payload for service 'deliveryProfile' action 'update'.
 *
 * Usage: Update exisiting delivery
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'deliveryProfile' action 'update'.
 *
 * Usage: Update exisiting delivery
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
DeliveryProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(DeliveryProfileUpdateAction, _super);
    function DeliveryProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDeliveryProfile', responseConstructor: KalturaDeliveryProfile }) || this;
    }
    /**
     * @return {?}
     */
    DeliveryProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'deliveryprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 's' },
            delivery: { type: 'o', subTypeConstructor: KalturaDeliveryProfile, subType: 'KalturaDeliveryProfile' }
        });
        return result;
    };
    return DeliveryProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'deliveryProfile' action 'update'.
 *
 * Usage: Update exisiting delivery
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
export { DeliveryProfileUpdateAction };
if (false) {
    /** @type {?} */
    DeliveryProfileUpdateAction.prototype.id;
    /** @type {?} */
    DeliveryProfileUpdateAction.prototype.delivery;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsaXZlcnlQcm9maWxlVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9EZWxpdmVyeVByb2ZpbGVVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBc0M7SUFLbkYscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ2pHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBMUNMO0VBbUJpRCxjQUFjLEVBd0I5RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsdUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeVByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBzdHJpbmc7XG5cdGRlbGl2ZXJ5IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RlbGl2ZXJ5UHJvZmlsZScgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgZXhpc2l0aW5nIGRlbGl2ZXJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlQcm9maWxlVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURlbGl2ZXJ5UHJvZmlsZT4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdGRlbGl2ZXJ5IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEZWxpdmVyeVByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZGVsaXZlcnlwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWxpdmVyeSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=