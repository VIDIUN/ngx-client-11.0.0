/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function BulkUploadAddActionArgs() { }
/** @type {?} */
BulkUploadAddActionArgs.prototype.conversionProfileId;
/** @type {?} */
BulkUploadAddActionArgs.prototype.csvFileData;
/** @type {?|undefined} */
BulkUploadAddActionArgs.prototype.bulkUploadType;
/** @type {?|undefined} */
BulkUploadAddActionArgs.prototype.uploadedBy;
/** @type {?|undefined} */
BulkUploadAddActionArgs.prototype.fileName;
/**
 * Build request payload for service 'bulkUpload' action 'add'.
 *
 * Usage: Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'bulkUpload' action 'add'.
 *
 * Usage: Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
BulkUploadAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(BulkUploadAddAction, _super);
    function BulkUploadAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload }) || this;
    }
    /**
     * @return {?}
     */
    BulkUploadAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'bulkupload' },
            action: { type: 'c', default: 'add' },
            conversionProfileId: { type: 'n' },
            csvFileData: { type: 'f' },
            bulkUploadType: { type: 'es', subTypeConstructor: KalturaBulkUploadType, subType: 'KalturaBulkUploadType' },
            uploadedBy: { type: 's' },
            fileName: { type: 's' }
        });
        return result;
    };
    return BulkUploadAddAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'bulkUpload' action 'add'.
 *
 * Usage: Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export { BulkUploadAddAction };
if (false) {
    /** @type {?} */
    BulkUploadAddAction.prototype.conversionProfileId;
    /** @type {?} */
    BulkUploadAddAction.prototype.csvFileData;
    /** @type {?} */
    BulkUploadAddAction.prototype.bulkUploadType;
    /** @type {?} */
    BulkUploadAddAction.prototype.uploadedBy;
    /** @type {?} */
    BulkUploadAddAction.prototype.fileName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVsa1VwbG9hZEFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQnVsa1VwbG9hZEFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CM0Y7Ozs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBdUM7SUFRNUUsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDL0csVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBdERMO0VBeUJ5QyxvQkFBb0IsRUE4QjVELENBQUE7Ozs7Ozs7Ozs7O0FBOUJELCtCQThCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZCB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZFR5cGUgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVsa1VwbG9hZEFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRjc3ZGaWxlRGF0YSA6IEZpbGU7XG5cdGJ1bGtVcGxvYWRUeXBlPyA6IEthbHR1cmFCdWxrVXBsb2FkVHlwZTtcblx0dXBsb2FkZWRCeT8gOiBzdHJpbmc7XG5cdGZpbGVOYW1lPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2J1bGtVcGxvYWQnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBidWxrIHVwbG9hZCBiYXRjaCBqb2JcbiAqIENvbnZlcnNpb24gcHJvZmlsZSBpZCBjYW4gYmUgc3BlY2lmaWVkIGluIHRoZSBBUEkgb3IgaW4gdGhlIENTViBmaWxlLCB0aGUgb25lIGluIHRoZSBDU1YgZmlsZSB3aWxsIGJlIHN0cm9uZ2VyLlxuICogSWYgbm8gY29udmVyc2lvbiBwcm9maWxlIHdhcyBzcGVjaWZpZWQsIHBhcnRuZXIncyBkZWZhdWx0IHdpbGwgYmUgdXNlZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCdWxrVXBsb2FkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBCdWxrVXBsb2FkQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYUJ1bGtVcGxvYWQ+IHtcblxuICAgIGNvbnZlcnNpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdGNzdkZpbGVEYXRhIDogRmlsZTtcblx0YnVsa1VwbG9hZFR5cGUgOiBLYWx0dXJhQnVsa1VwbG9hZFR5cGU7XG5cdHVwbG9hZGVkQnkgOiBzdHJpbmc7XG5cdGZpbGVOYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEJ1bGtVcGxvYWRBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdidWxrdXBsb2FkJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNzdkZpbGVEYXRhIDogeyB0eXBlIDogJ2YnIH0sXG5cdFx0XHRcdGJ1bGtVcGxvYWRUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkVHlwZScgfSxcblx0XHRcdFx0dXBsb2FkZWRCeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=