/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function MediaUploadActionArgs() { }
/** @type {?} */
MediaUploadActionArgs.prototype.fileData;
/**
 * Build request payload for service 'media' action 'upload'.
 *
 * Usage: Upload a media file to Kaltura, then the file can be used to create a media entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'media' action 'upload'.
 *
 * Usage: Upload a media file to Kaltura, then the file can be used to create a media entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
MediaUploadAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaUploadAction, _super);
    function MediaUploadAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    MediaUploadAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'upload' },
            fileData: { type: 'f' }
        });
        return result;
    };
    return MediaUploadAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'media' action 'upload'.
 *
 * Usage: Upload a media file to Kaltura, then the file can be used to create a media entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { MediaUploadAction };
if (false) {
    /** @type {?} */
    MediaUploadAction.prototype.fileData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFVcGxvYWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL01lZGlhVXBsb2FkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjM0Y7Ozs7Ozs7O0FBQUE7SUFBdUMsNkNBQTRCO0lBSS9ELDJCQUFZLElBQTRCO2VBRXBDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLHdDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUN2RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRCQXZDTDtFQWtCdUMsb0JBQW9CLEVBc0IxRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsNkJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFVcGxvYWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB7XG4gICAgZmlsZURhdGEgOiBGaWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWVkaWEnIGFjdGlvbiAndXBsb2FkJy5cbiAqXG4gKiBVc2FnZTogVXBsb2FkIGEgbWVkaWEgZmlsZSB0byBLYWx0dXJhLCB0aGVuIHRoZSBmaWxlIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBhIG1lZGlhIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgc3RyaW5nXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWRpYVVwbG9hZEFjdGlvbiBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0PHN0cmluZz4ge1xuXG4gICAgZmlsZURhdGEgOiBGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1lZGlhVXBsb2FkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAncycsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZWRpYScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwbG9hZCcgfSxcblx0XHRcdFx0ZmlsZURhdGEgOiB7IHR5cGUgOiAnZicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19