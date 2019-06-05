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
export function GenericDistributionProviderActionAddMrssValidateFromFileActionArgs() { }
/** @type {?} */
GenericDistributionProviderActionAddMrssValidateFromFileActionArgs.prototype.id;
/** @type {?} */
GenericDistributionProviderActionAddMrssValidateFromFileActionArgs.prototype.xsdFile;
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidateFromFile'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidateFromFile'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
GenericDistributionProviderActionAddMrssValidateFromFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(GenericDistributionProviderActionAddMrssValidateFromFileAction, _super);
    function GenericDistributionProviderActionAddMrssValidateFromFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGenericDistributionProviderAction', responseConstructor: KalturaGenericDistributionProviderAction }) || this;
    }
    /**
     * @return {?}
     */
    GenericDistributionProviderActionAddMrssValidateFromFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_genericdistributionprovideraction' },
            action: { type: 'c', default: 'addMrssValidateFromFile' },
            id: { type: 'n' },
            xsdFile: { type: 'f' }
        });
        return result;
    };
    return GenericDistributionProviderActionAddMrssValidateFromFileAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidateFromFile'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export { GenericDistributionProviderActionAddMrssValidateFromFileAction };
if (false) {
    /** @type {?} */
    GenericDistributionProviderActionAddMrssValidateFromFileAction.prototype.id;
    /** @type {?} */
    GenericDistributionProviderActionAddMrssValidateFromFileAction.prototype.xsdFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQWRkTXJzc1ZhbGlkYXRlRnJvbUZpbGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0dlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZE1yc3NWYWxpZGF0ZUZyb21GaWxlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEcsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWUzRjs7Ozs7Ozs7QUFBQTtJQUFvRiwwRkFBOEQ7SUFLOUksd0VBQVksSUFBeUU7ZUFFakYsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMENBQTBDLEVBQUUsbUJBQW1CLEVBQUcsd0NBQXdDLEVBQUcsQ0FBQztLQUNwSzs7OztJQUVTLHFGQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVEQUF1RCxFQUFFO1lBQ3ZHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVELEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUVBMUNMO0VBbUJvRixvQkFBb0IsRUF3QnZHLENBQUE7Ozs7Ozs7OztBQXhCRCwwRUF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbic7XG5cbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25BZGRNcnNzVmFsaWRhdGVGcm9tRmlsZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0eHNkRmlsZSA6IEZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24nIGFjdGlvbiAnYWRkTXJzc1ZhbGlkYXRlRnJvbUZpbGUnLlxuICpcbiAqIFVzYWdlOiBBZGQgTVJTUyB2YWxpZGF0ZSBmaWxlIHRvIGdlbmVyaWMgZGlzdHJpYnV0aW9uIHByb3ZpZGVyIGFjdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZE1yc3NWYWxpZGF0ZUZyb21GaWxlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbj4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdHhzZEZpbGUgOiBGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkFkZE1yc3NWYWxpZGF0ZUZyb21GaWxlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb24gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbnRlbnRkaXN0cmlidXRpb25fZ2VuZXJpY2Rpc3RyaWJ1dGlvbnByb3ZpZGVyYWN0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkTXJzc1ZhbGlkYXRlRnJvbUZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHhzZEZpbGUgOiB7IHR5cGUgOiAnZicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19