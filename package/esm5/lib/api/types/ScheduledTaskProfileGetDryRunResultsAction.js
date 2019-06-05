/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaObjectListResponse } from './KalturaObjectListResponse';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduledTaskProfileGetDryRunResultsActionArgs() { }
/** @type {?} */
ScheduledTaskProfileGetDryRunResultsActionArgs.prototype.requestId;
/**
 * Build request payload for service 'scheduledTaskProfile' action 'getDryRunResults'.
 *
 *
 *
 * Server response type:         KalturaObjectListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduledTaskProfile' action 'getDryRunResults'.
 *
 *
 *
 * Server response type:         KalturaObjectListResponse
 * Server failure response type: KalturaAPIException
 */
ScheduledTaskProfileGetDryRunResultsAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduledTaskProfileGetDryRunResultsAction, _super);
    function ScheduledTaskProfileGetDryRunResultsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaObjectListResponse', responseConstructor: KalturaObjectListResponse }) || this;
    }
    /**
     * @return {?}
     */
    ScheduledTaskProfileGetDryRunResultsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'scheduledtask_scheduledtaskprofile' },
            action: { type: 'c', default: 'getDryRunResults' },
            requestId: { type: 'n' }
        });
        return result;
    };
    return ScheduledTaskProfileGetDryRunResultsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduledTaskProfile' action 'getDryRunResults'.
 *
 *
 *
 * Server response type:         KalturaObjectListResponse
 * Server failure response type: KalturaAPIException
 */
export { ScheduledTaskProfileGetDryRunResultsAction };
if (false) {
    /** @type {?} */
    ScheduledTaskProfileGetDryRunResultsAction.prototype.requestId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVkVGFza1Byb2ZpbGVHZXREcnlSdW5SZXN1bHRzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TY2hlZHVsZWRUYXNrUHJvZmlsZUdldERyeVJ1blJlc3VsdHNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBZ0Usc0VBQXlDO0lBSXJHLG9EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDJCQUEyQixFQUFFLG1CQUFtQixFQUFHLHlCQUF5QixFQUFHLENBQUM7S0FDdEk7Ozs7SUFFUyxpRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNwRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUNyRCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBdkNMO0VBa0JnRSxjQUFjLEVBc0I3RSxDQUFBOzs7Ozs7Ozs7QUF0QkQsc0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFPYmplY3RMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZWRUYXNrUHJvZmlsZUdldERyeVJ1blJlc3VsdHNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcmVxdWVzdElkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2NoZWR1bGVkVGFza1Byb2ZpbGUnIGFjdGlvbiAnZ2V0RHJ5UnVuUmVzdWx0cycuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU9iamVjdExpc3RSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVkVGFza1Byb2ZpbGVHZXREcnlSdW5SZXN1bHRzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYU9iamVjdExpc3RSZXNwb25zZT4ge1xuXG4gICAgcmVxdWVzdElkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNjaGVkdWxlZFRhc2tQcm9maWxlR2V0RHJ5UnVuUmVzdWx0c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU9iamVjdExpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhT2JqZWN0TGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzY2hlZHVsZWR0YXNrX3NjaGVkdWxlZHRhc2twcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0RHJ5UnVuUmVzdWx0cycgfSxcblx0XHRcdFx0cmVxdWVzdElkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==