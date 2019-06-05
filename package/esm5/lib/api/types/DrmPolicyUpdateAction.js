/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DrmPolicyUpdateActionArgs() { }
/** @type {?} */
DrmPolicyUpdateActionArgs.prototype.drmPolicyId;
/** @type {?} */
DrmPolicyUpdateActionArgs.prototype.drmPolicy;
/**
 * Build request payload for service 'drmPolicy' action 'update'.
 *
 * Usage: Update an existing KalturaDrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'drmPolicy' action 'update'.
 *
 * Usage: Update an existing KalturaDrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
DrmPolicyUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(DrmPolicyUpdateAction, _super);
    function DrmPolicyUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDrmPolicy', responseConstructor: KalturaDrmPolicy }) || this;
    }
    /**
     * @return {?}
     */
    DrmPolicyUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'drm_drmpolicy' },
            action: { type: 'c', default: 'update' },
            drmPolicyId: { type: 'n' },
            drmPolicy: { type: 'o', subTypeConstructor: KalturaDrmPolicy, subType: 'KalturaDrmPolicy' }
        });
        return result;
    };
    return DrmPolicyUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'drmPolicy' action 'update'.
 *
 * Usage: Update an existing KalturaDrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
export { DrmPolicyUpdateAction };
if (false) {
    /** @type {?} */
    DrmPolicyUpdateAction.prototype.drmPolicyId;
    /** @type {?} */
    DrmPolicyUpdateAction.prototype.drmPolicy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJtUG9saWN5VXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Ecm1Qb2xpY3lVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUEyQyxpREFBZ0M7SUFLdkUsK0JBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQztLQUNwSDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUMvRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQTFDTDtFQW1CMkMsY0FBYyxFQXdCeEQsQ0FBQTs7Ozs7Ozs7O0FBeEJELGlDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUG9saWN5IH0gZnJvbSAnLi9LYWx0dXJhRHJtUG9saWN5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJtUG9saWN5VXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGRybVBvbGljeUlkIDogbnVtYmVyO1xuXHRkcm1Qb2xpY3kgOiBLYWx0dXJhRHJtUG9saWN5O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZHJtUG9saWN5JyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBhbiBleGlzdGluZyBLYWx0dXJhRHJtUG9saWN5IG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEcm1Qb2xpY3lcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERybVBvbGljeVVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFEcm1Qb2xpY3k+IHtcblxuICAgIGRybVBvbGljeUlkIDogbnVtYmVyO1xuXHRkcm1Qb2xpY3kgOiBLYWx0dXJhRHJtUG9saWN5O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERybVBvbGljeVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURybVBvbGljeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtUG9saWN5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkcm1fZHJtcG9saWN5JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRkcm1Qb2xpY3lJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkcm1Qb2xpY3kgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1Qb2xpY3ksIHN1YlR5cGUgOiAnS2FsdHVyYURybVBvbGljeScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19