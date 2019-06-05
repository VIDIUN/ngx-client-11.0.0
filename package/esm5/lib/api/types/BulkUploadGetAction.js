/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BulkUploadGetActionArgs() { }
/** @type {?} */
BulkUploadGetActionArgs.prototype.id;
/**
 * Build request payload for service 'bulkUpload' action 'get'.
 *
 * Usage: Get bulk upload batch job by id
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'bulkUpload' action 'get'.
 *
 * Usage: Get bulk upload batch job by id
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
BulkUploadGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(BulkUploadGetAction, _super);
    function BulkUploadGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload }) || this;
    }
    /**
     * @return {?}
     */
    BulkUploadGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'bulkupload' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return BulkUploadGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'bulkUpload' action 'get'.
 *
 * Usage: Get bulk upload batch job by id
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export { BulkUploadGetAction };
if (false) {
    /** @type {?} */
    BulkUploadGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVsa1VwbG9hZEdldEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQnVsa1VwbG9hZEdldEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBaUM7SUFJdEUsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNWLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBdkNMO0VBa0J5QyxjQUFjLEVBc0J0RCxDQUFBOzs7Ozs7Ozs7QUF0QkQsK0JBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1bGtVcGxvYWRHZXRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdidWxrVXBsb2FkJyBhY3Rpb24gJ2dldCcuXG4gKlxuICogVXNhZ2U6IEdldCBidWxrIHVwbG9hZCBiYXRjaCBqb2IgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQnVsa1VwbG9hZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQnVsa1VwbG9hZEdldEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCdWxrVXBsb2FkPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBCdWxrVXBsb2FkR2V0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYnVsa3VwbG9hZCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19