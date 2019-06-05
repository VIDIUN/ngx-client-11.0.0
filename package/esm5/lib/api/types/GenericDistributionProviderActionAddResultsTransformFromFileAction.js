/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function GenericDistributionProviderActionAddResultsTransformFromFileActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionAddResultsTransformFromFileActionArgs.prototype.id;
/** @type {?} */
GenericDistributionProviderActionAddResultsTransformFromFileActionArgs.prototype.transformFile;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderActionAddResultsTransformFromFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderActionAddResultsTransformFromFileAction, _super);
    function GenericDistributionProviderActionAddResultsTransformFromFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderActionAddResultsTransformFromFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'addResultsTransformFromFile' },
            id: { type: 'n' },
            transformFile: { type: 'f' }
        });
        return result;
    };
    return GenericDistributionProviderActionAddResultsTransformFromFileAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addResultsTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderActionAddResultsTransformFromFileAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionAddResultsTransformFromFileAction.prototype.id;
    /** @type {?} */
    GenericDistributionProviderActionAddResultsTransformFromFileAction.prototype.transformFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkUmVzdWx0c1RyYW5zZm9ybUZyb21GaWxlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9HZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRSZXN1bHRzVHJhbnNmb3JtRnJvbUZpbGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RyxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTNGOzs7Ozs7OztBQUFBO0lBQXdGLDhGQUE4RDtJQUtsSiw0RUFBWSxJQUE2RTtlQUVyRixrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywwQ0FBMEMsRUFBRSxtQkFBbUIsRUFBRyx3Q0FBd0MsRUFBRyxDQUFDO0tBQ3BLOzs7O0lBRVMseUZBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdURBQXVELEVBQUU7WUFDdkcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkVBMUNMO0VBbUJ3RixvQkFBb0IsRUF3QjNHLENBQUE7Ozs7Ozs7OztBQXhCRCw4RUF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbic7XG5cbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRSZXN1bHRzVHJhbnNmb3JtRnJvbUZpbGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdHRyYW5zZm9ybUZpbGUgOiBGaWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZ2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJyBhY3Rpb24gJ2FkZFJlc3VsdHNUcmFuc2Zvcm1Gcm9tRmlsZScuXG4gKlxuICogVXNhZ2U6IEFkZCBNUlNTIHRyYW5zZm9ybSBmaWxlIHRvIGdlbmVyaWMgZGlzdHJpYnV0aW9uIHByb3ZpZGVyIGFjdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZFJlc3VsdHNUcmFuc2Zvcm1Gcm9tRmlsZUFjdGlvbiBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0PEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHR0cmFuc2Zvcm1GaWxlIDogRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRSZXN1bHRzVHJhbnNmb3JtRnJvbUZpbGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udGVudGRpc3RyaWJ1dGlvbl9nZW5lcmljZGlzdHJpYnV0aW9ucHJvdmlkZXJhY3Rpb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRSZXN1bHRzVHJhbnNmb3JtRnJvbUZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRyYW5zZm9ybUZpbGUgOiB7IHR5cGUgOiAnZicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19