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
export function GenericDistributionProviderActionAddMrssValidateActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionAddMrssValidateActionArgs.prototype.id;
/** @type {?} */
GenericDistributionProviderActionAddMrssValidateActionArgs.prototype.xsdData;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidate'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidate'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderActionAddMrssValidateAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderActionAddMrssValidateAction, _super);
    function GenericDistributionProviderActionAddMrssValidateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderActionAddMrssValidateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'addMrssValidate' },
            id: { type: 'n' },
            xsdData: { type: 's' }
        });
        return result;
    };
    return GenericDistributionProviderActionAddMrssValidateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidate'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderActionAddMrssValidateAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionAddMrssValidateAction.prototype.id;
    /** @type {?} */
    GenericDistributionProviderActionAddMrssValidateAction.prototype.xsdData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkTXJzc1ZhbGlkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRNcnNzVmFsaWRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RyxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE0RSxrRkFBd0Q7SUFLaEksZ0VBQVksSUFBaUU7ZUFFekUsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMENBQTBDLEVBQUUsbUJBQW1CLEVBQUcsd0NBQXdDLEVBQUcsQ0FBQztLQUNwSzs7OztJQUVTLDZFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVEQUF1RCxFQUFFO1lBQ3ZHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3BELEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUVBMUNMO0VBbUI0RSxjQUFjLEVBd0J6RixDQUFBOzs7Ozs7Ozs7QUF4QkQsa0VBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRNcnNzVmFsaWRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdHhzZERhdGEgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nIGFjdGlvbiAnYWRkTXJzc1ZhbGlkYXRlJy5cbiAqXG4gKiBVc2FnZTogQWRkIE1SU1MgdmFsaWRhdGUgZmlsZSB0byBnZW5lcmljIGRpc3RyaWJ1dGlvbiBwcm92aWRlciBhY3Rpb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRNcnNzVmFsaWRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0eHNkRGF0YSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRNcnNzVmFsaWRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udGVudGRpc3RyaWJ1dGlvbl9nZW5lcmljZGlzdHJpYnV0aW9ucHJvdmlkZXJhY3Rpb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRNcnNzVmFsaWRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHhzZERhdGEgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19