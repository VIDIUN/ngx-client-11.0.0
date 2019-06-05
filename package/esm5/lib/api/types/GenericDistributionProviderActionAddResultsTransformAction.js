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
export function GenericDistributionProviderActionAddResultsTransformActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionAddResultsTransformActionArgs.prototype.id;
/** @type {?} */
GenericDistributionProviderActionAddResultsTransformActionArgs.prototype.transformData;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransform'.
 *
 * Usage: Add results transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransform'.
 *
 * Usage: Add results transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderActionAddResultsTransformAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderActionAddResultsTransformAction, _super);
    function GenericDistributionProviderActionAddResultsTransformAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderActionAddResultsTransformAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'addResultsTransform' },
            id: { type: 'n' },
            transformData: { type: 's' }
        });
        return result;
    };
    return GenericDistributionProviderActionAddResultsTransformAction;
}(KalturaRequest));
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransform'.
 *
 * Usage: Add results transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderActionAddResultsTransformAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionAddResultsTransformAction.prototype.id;
    /** @type {?} */
    GenericDistributionProviderActionAddResultsTransformAction.prototype.transformData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkUmVzdWx0c1RyYW5zZm9ybUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkUmVzdWx0c1RyYW5zZm9ybUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRHLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQWdGLHNGQUF3RDtJQUtwSSxvRUFBWSxJQUFxRTtlQUU3RSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywwQ0FBMEMsRUFBRSxtQkFBbUIsRUFBRyx3Q0FBd0MsRUFBRyxDQUFDO0tBQ3BLOzs7O0lBRVMsaUZBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdURBQXVELEVBQUU7WUFDdkcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUVBMUNMO0VBbUJnRixjQUFjLEVBd0I3RixDQUFBOzs7Ozs7Ozs7QUF4QkQsc0VBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRSZXN1bHRzVHJhbnNmb3JtQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHR0cmFuc2Zvcm1EYXRhIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZ2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJyBhY3Rpb24gJ2FkZFJlc3VsdHNUcmFuc2Zvcm0nLlxuICpcbiAqIFVzYWdlOiBBZGQgcmVzdWx0cyB0cmFuc2Zvcm0gZmlsZSB0byBnZW5lcmljIGRpc3RyaWJ1dGlvbiBwcm92aWRlciBhY3Rpb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRSZXN1bHRzVHJhbnNmb3JtQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbj4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdHRyYW5zZm9ybURhdGEgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkUmVzdWx0c1RyYW5zZm9ybUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2dlbmVyaWNkaXN0cmlidXRpb25wcm92aWRlcmFjdGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZFJlc3VsdHNUcmFuc2Zvcm0nIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRyYW5zZm9ybURhdGEgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19