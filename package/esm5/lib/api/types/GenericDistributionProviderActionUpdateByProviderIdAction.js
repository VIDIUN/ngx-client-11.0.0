/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function GenericDistributionProviderActionUpdateByProviderIdActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionUpdateByProviderIdActionArgs.prototype.genericDistributionProviderId;
/** @type {?} */
GenericDistributionProviderActionUpdateByProviderIdActionArgs.prototype.actionType;
/** @type {?} */
GenericDistributionProviderActionUpdateByProviderIdActionArgs.prototype.genericDistributionProviderAction;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'updateByProviderId'.
 *
 * Usage: Update Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProviderAction' action 'updateByProviderId'.
 *
 * Usage: Update Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderActionUpdateByProviderIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderActionUpdateByProviderIdAction, _super);
    function GenericDistributionProviderActionUpdateByProviderIdAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderActionUpdateByProviderIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'updateByProviderId' },
            genericDistributionProviderId: { type: 'n' },
            actionType: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' },
            genericDistributionProviderAction: { type: 'o', subTypeConstructor: KalturaGenericDistributionProviderAction, subType: 'KalturaGenericDistributionProviderAction' }
        });
        return result;
    };
    return GenericDistributionProviderActionUpdateByProviderIdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'updateByProviderId'.
 *
 * Usage: Update Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderActionUpdateByProviderIdAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionUpdateByProviderIdAction.prototype.genericDistributionProviderId;
    /** @type {?} */
    GenericDistributionProviderActionUpdateByProviderIdAction.prototype.actionType;
    /** @type {?} */
    GenericDistributionProviderActionUpdateByProviderIdAction.prototype.genericDistributionProviderAction;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uVXBkYXRlQnlQcm92aWRlcklkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25VcGRhdGVCeVByb3ZpZGVySWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUErRSxxRkFBd0Q7SUFNbkksbUVBQVksSUFBb0U7ZUFFNUUsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMENBQTBDLEVBQUUsbUJBQW1CLEVBQUcsd0NBQXdDLEVBQUcsQ0FBQztLQUNwSzs7OztJQUVTLGdGQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVEQUF1RCxFQUFFO1lBQ3ZHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZELDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNuSCxpQ0FBaUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0NBQXdDLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1NBQzlKLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0VBOUNMO0VBcUIrRSxjQUFjLEVBMEI1RixDQUFBOzs7Ozs7Ozs7QUExQkQscUVBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nO1xuXG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvblVwZGF0ZUJ5UHJvdmlkZXJJZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJJZCA6IG51bWJlcjtcblx0YWN0aW9uVHlwZSA6IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb247XG5cdGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb247XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nIGFjdGlvbiAndXBkYXRlQnlQcm92aWRlcklkJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIEdlbmVyaWMgRGlzdHJpYnV0aW9uIFByb3ZpZGVyIEFjdGlvbiBieSBwcm92aWRlciBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvblVwZGF0ZUJ5UHJvdmlkZXJJZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24+IHtcblxuICAgIGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlcklkIDogbnVtYmVyO1xuXHRhY3Rpb25UeXBlIDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbjtcblx0Z2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25VcGRhdGVCeVByb3ZpZGVySWRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udGVudGRpc3RyaWJ1dGlvbl9nZW5lcmljZGlzdHJpYnV0aW9ucHJvdmlkZXJhY3Rpb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVCeVByb3ZpZGVySWQnIH0sXG5cdFx0XHRcdGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFjdGlvblR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25BY3Rpb24nIH0sXG5cdFx0XHRcdGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=