/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadCsvJobData } from './KalturaBulkUploadCsvJobData';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function ScheduleResourceAddFromBulkUploadActionArgs() { }
/** @type {?} */
ScheduleResourceAddFromBulkUploadActionArgs.prototype.fileData;
/** @type {?|undefined} */
ScheduleResourceAddFromBulkUploadActionArgs.prototype.bulkUploadData;
/**
 * Build request payload for service 'scheduleResource' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleResource' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
ScheduleResourceAddFromBulkUploadAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleResourceAddFromBulkUploadAction, _super);
    function ScheduleResourceAddFromBulkUploadAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleResourceAddFromBulkUploadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleresource' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            fileData: { type: 'f' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkUploadCsvJobData, subType: 'KalturaBulkUploadCsvJobData' }
        });
        return result;
    };
    return ScheduleResourceAddFromBulkUploadAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'scheduleResource' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export { ScheduleResourceAddFromBulkUploadAction };
if (false) {
    /** @type {?} */
    ScheduleResourceAddFromBulkUploadAction.prototype.fileData;
    /** @type {?} */
    ScheduleResourceAddFromBulkUploadAction.prototype.bulkUploadData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVSZXNvdXJjZUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TY2hlZHVsZVJlc291cmNlQWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTNGOzs7Ozs7OztBQUFBO0lBQTZELG1FQUF1QztJQUtoRyxpREFBWSxJQUFrRDtlQUUxRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDO0tBQ3RIOzs7O0lBRVMsOERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDM0UsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEQsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUNqSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tEQTNDTDtFQW9CNkQsb0JBQW9CLEVBd0JoRixDQUFBOzs7Ozs7Ozs7QUF4QkQsbURBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZCc7XG5cbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkQ3N2Sm9iRGF0YSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRDc3ZKb2JEYXRhJztcbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZVJlc291cmNlQWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB7XG4gICAgZmlsZURhdGEgOiBGaWxlO1xuXHRidWxrVXBsb2FkRGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGE7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzY2hlZHVsZVJlc291cmNlJyBhY3Rpb24gJ2FkZEZyb21CdWxrVXBsb2FkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBidWxrIHVwbG9hZCBiYXRjaCBqb2JcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQnVsa1VwbG9hZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVSZXNvdXJjZUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYUJ1bGtVcGxvYWQ+IHtcblxuICAgIGZpbGVEYXRhIDogRmlsZTtcblx0YnVsa1VwbG9hZERhdGEgOiBLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVSZXNvdXJjZUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2NoZWR1bGVfc2NoZWR1bGVyZXNvdXJjZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21CdWxrVXBsb2FkJyB9LFxuXHRcdFx0XHRmaWxlRGF0YSA6IHsgdHlwZSA6ICdmJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkRGF0YSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRDc3ZKb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkQ3N2Sm9iRGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19