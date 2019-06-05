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
export function GenericDistributionProviderActionGetByProviderIdActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionGetByProviderIdActionArgs.prototype.genericDistributionProviderId;
/** @type {?} */
GenericDistributionProviderActionGetByProviderIdActionArgs.prototype.actionType;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'getByProviderId'.
 *
 * Usage: Get Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProviderAction' action 'getByProviderId'.
 *
 * Usage: Get Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderActionGetByProviderIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderActionGetByProviderIdAction, _super);
    function GenericDistributionProviderActionGetByProviderIdAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderActionGetByProviderIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'getByProviderId' },
            genericDistributionProviderId: { type: 'n' },
            actionType: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' }
        });
        return result;
    };
    return GenericDistributionProviderActionGetByProviderIdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'getByProviderId'.
 *
 * Usage: Get Generic Distribution Provider Action by provider id
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderActionGetByProviderIdAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionGetByProviderIdAction.prototype.genericDistributionProviderId;
    /** @type {?} */
    GenericDistributionProviderActionGetByProviderIdAction.prototype.actionType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uR2V0QnlQcm92aWRlcklkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25HZXRCeVByb3ZpZGVySWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE0RSxrRkFBd0Q7SUFLaEksZ0VBQVksSUFBaUU7ZUFFekUsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMENBQTBDLEVBQUUsbUJBQW1CLEVBQUcsd0NBQXdDLEVBQUcsQ0FBQztLQUNwSzs7OztJQUVTLDZFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVEQUF1RCxFQUFFO1lBQ3ZHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3BELDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtTQUMxRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lFQTNDTDtFQW9CNEUsY0FBYyxFQXdCekYsQ0FBQTs7Ozs7Ozs7O0FBeEJELGtFQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJztcblxuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25HZXRCeVByb3ZpZGVySWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZ2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVySWQgOiBudW1iZXI7XG5cdGFjdGlvblR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZ2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJyBhY3Rpb24gJ2dldEJ5UHJvdmlkZXJJZCcuXG4gKlxuICogVXNhZ2U6IEdldCBHZW5lcmljIERpc3RyaWJ1dGlvbiBQcm92aWRlciBBY3Rpb24gYnkgcHJvdmlkZXIgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25HZXRCeVByb3ZpZGVySWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uPiB7XG5cbiAgICBnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJJZCA6IG51bWJlcjtcblx0YWN0aW9uVHlwZSA6IEthbHR1cmFEaXN0cmlidXRpb25BY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uR2V0QnlQcm92aWRlcklkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbnRlbnRkaXN0cmlidXRpb25fZ2VuZXJpY2Rpc3RyaWJ1dGlvbnByb3ZpZGVyYWN0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0QnlQcm92aWRlcklkJyB9LFxuXHRcdFx0XHRnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhY3Rpb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=