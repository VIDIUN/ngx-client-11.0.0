/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaAddFromUploadedFileActionArgs() { }
/** @type {?} */
MediaAddFromUploadedFileActionArgs.prototype.mediaEntry;
/** @type {?} */
MediaAddFromUploadedFileActionArgs.prototype.uploadTokenId;
/**
 * Build request payload for service 'media' action 'addFromUploadedFile'.
 *
 * Usage: Add new entry after the specific media file was uploaded and the upload token id exists
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'media' action 'addFromUploadedFile'.
 *
 * Usage: Add new entry after the specific media file was uploaded and the upload token id exists
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
MediaAddFromUploadedFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaAddFromUploadedFileAction, _super);
    function MediaAddFromUploadedFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    MediaAddFromUploadedFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'addFromUploadedFile' },
            mediaEntry: { type: 'o', subTypeConstructor: KalturaMediaEntry, subType: 'KalturaMediaEntry' },
            uploadTokenId: { type: 's' }
        });
        return result;
    };
    return MediaAddFromUploadedFileAction;
}(KalturaRequest));
/**
 * Build request payload for service 'media' action 'addFromUploadedFile'.
 *
 * Usage: Add new entry after the specific media file was uploaded and the upload token id exists
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { MediaAddFromUploadedFileAction };
if (false) {
    /** @type {?} */
    MediaAddFromUploadedFileAction.prototype.mediaEntry;
    /** @type {?} */
    MediaAddFromUploadedFileAction.prototype.uploadTokenId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFBZGRGcm9tVXBsb2FkZWRGaWxlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUFkZEZyb21VcGxvYWRlZEZpbGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFvRCwwREFBaUM7SUFLakYsd0NBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUN2RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNsRyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBMUNMO0VBbUJvRCxjQUFjLEVBd0JqRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsMENBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhQWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBtZWRpYUVudHJ5IDogS2FsdHVyYU1lZGlhRW50cnk7XG5cdHVwbG9hZFRva2VuSWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZWRpYScgYWN0aW9uICdhZGRGcm9tVXBsb2FkZWRGaWxlJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBlbnRyeSBhZnRlciB0aGUgc3BlY2lmaWMgbWVkaWEgZmlsZSB3YXMgdXBsb2FkZWQgYW5kIHRoZSB1cGxvYWQgdG9rZW4gaWQgZXhpc3RzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1lZGlhRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhQWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFNZWRpYUVudHJ5PiB7XG5cbiAgICBtZWRpYUVudHJ5IDogS2FsdHVyYU1lZGlhRW50cnk7XG5cdHVwbG9hZFRva2VuSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWVkaWFBZGRGcm9tVXBsb2FkZWRGaWxlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tVXBsb2FkZWRGaWxlJyB9LFxuXHRcdFx0XHRtZWRpYUVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeSwgc3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFFbnRyeScgfSxcblx0XHRcdFx0dXBsb2FkVG9rZW5JZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=