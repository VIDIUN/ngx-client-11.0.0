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
export function DrmPolicyAddActionArgs() { }
/** @type {?} */
DrmPolicyAddActionArgs.prototype.drmPolicy;
/**
 * Build request payload for service 'drmPolicy' action 'add'.
 *
 * Usage: Allows you to add a new DrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'drmPolicy' action 'add'.
 *
 * Usage: Allows you to add a new DrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
DrmPolicyAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(DrmPolicyAddAction, _super);
    function DrmPolicyAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDrmPolicy', responseConstructor: KalturaDrmPolicy }) || this;
    }
    /**
     * @return {?}
     */
    DrmPolicyAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'drm_drmpolicy' },
            action: { type: 'c', default: 'add' },
            drmPolicy: { type: 'o', subTypeConstructor: KalturaDrmPolicy, subType: 'KalturaDrmPolicy' }
        });
        return result;
    };
    return DrmPolicyAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'drmPolicy' action 'add'.
 *
 * Usage: Allows you to add a new DrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
export { DrmPolicyAddAction };
if (false) {
    /** @type {?} */
    DrmPolicyAddAction.prototype.drmPolicy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJtUG9saWN5QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Ecm1Qb2xpY3lBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBd0MsOENBQWdDO0lBSXBFLDRCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUM7S0FDcEg7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDL0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBdkNMO0VBa0J3QyxjQUFjLEVBc0JyRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsOEJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm1Qb2xpY3kgfSBmcm9tICcuL0thbHR1cmFEcm1Qb2xpY3knO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm1Qb2xpY3lBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZHJtUG9saWN5IDogS2FsdHVyYURybVBvbGljeTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RybVBvbGljeScgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBbGxvd3MgeW91IHRvIGFkZCBhIG5ldyBEcm1Qb2xpY3kgb2JqZWN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURybVBvbGljeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRHJtUG9saWN5QWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURybVBvbGljeT4ge1xuXG4gICAgZHJtUG9saWN5IDogS2FsdHVyYURybVBvbGljeTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEcm1Qb2xpY3lBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFEcm1Qb2xpY3knLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVBvbGljeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZHJtX2RybXBvbGljeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0ZHJtUG9saWN5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtUG9saWN5LCBzdWJUeXBlIDogJ0thbHR1cmFEcm1Qb2xpY3knIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==