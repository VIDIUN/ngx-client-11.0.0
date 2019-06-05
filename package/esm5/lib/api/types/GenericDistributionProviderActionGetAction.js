/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function GenericDistributionProviderActionGetActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionGetActionArgs.prototype.id;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'get'.
 *
 * Usage: Get Generic Distribution Provider Action by id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProviderAction' action 'get'.
 *
 * Usage: Get Generic Distribution Provider Action by id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderActionGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderActionGetAction, _super);
    function GenericDistributionProviderActionGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderActionGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return GenericDistributionProviderActionGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'get'.
 *
 * Usage: Get Generic Distribution Provider Action by id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderActionGetAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uR2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25HZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RyxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBZ0Usc0VBQXdEO0lBSXBILG9EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDBDQUEwQyxFQUFFLG1CQUFtQixFQUFHLHdDQUF3QyxFQUFHLENBQUM7S0FDcEs7Ozs7SUFFUyxpRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1REFBdUQsRUFBRTtZQUN2RyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNWLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBdkNMO0VBa0JnRSxjQUFjLEVBc0I3RSxDQUFBOzs7Ozs7Ozs7QUF0QkQsc0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25HZXRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogR2V0IEdlbmVyaWMgRGlzdHJpYnV0aW9uIFByb3ZpZGVyIEFjdGlvbiBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkdldEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkdldEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2dlbmVyaWNkaXN0cmlidXRpb25wcm92aWRlcmFjdGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19