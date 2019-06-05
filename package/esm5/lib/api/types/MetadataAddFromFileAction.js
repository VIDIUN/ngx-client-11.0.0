/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function MetadataAddFromFileActionArgs() { }
/** @type {?} */
MetadataAddFromFileActionArgs.prototype.metadataProfileId;
/** @type {?} */
MetadataAddFromFileActionArgs.prototype.objectType;
/** @type {?} */
MetadataAddFromFileActionArgs.prototype.objectId;
/** @type {?} */
MetadataAddFromFileActionArgs.prototype.xmlFile;
/**
 * Build request payload for service 'metadata' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata object and metadata file associated with Kaltura object
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadata' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata object and metadata file associated with Kaltura object
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
MetadataAddFromFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataAddFromFileAction, _super);
    function MetadataAddFromFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadata', responseConstructor: KalturaMetadata }) || this;
    }
    /**
     * @return {?}
     */
    MetadataAddFromFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadata' },
            action: { type: 'c', default: 'addFromFile' },
            metadataProfileId: { type: 'n' },
            objectType: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            objectId: { type: 's' },
            xmlFile: { type: 'f' }
        });
        return result;
    };
    return MetadataAddFromFileAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'metadata' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata object and metadata file associated with Kaltura object
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export { MetadataAddFromFileAction };
if (false) {
    /** @type {?} */
    MetadataAddFromFileAction.prototype.metadataProfileId;
    /** @type {?} */
    MetadataAddFromFileAction.prototype.objectType;
    /** @type {?} */
    MetadataAddFromFileAction.prototype.objectId;
    /** @type {?} */
    MetadataAddFromFileAction.prototype.xmlFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFBZGRGcm9tRmlsZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWV0YWRhdGFBZGRGcm9tRmlsZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCM0Y7Ozs7Ozs7O0FBQUE7SUFBK0MscURBQXFDO0lBT2hGLG1DQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlCQUFpQixFQUFFLG1CQUFtQixFQUFHLGVBQWUsRUFBRyxDQUFDO0tBQ2xIOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNuSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQWpETDtFQXNCK0Msb0JBQW9CLEVBNEJsRSxDQUFBOzs7Ozs7Ozs7QUE1QkQscUNBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhJztcblxuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFBZGRGcm9tRmlsZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0b2JqZWN0VHlwZSA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHR4bWxGaWxlIDogRmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21ldGFkYXRhJyBhY3Rpb24gJ2FkZEZyb21GaWxlJy5cbiAqXG4gKiBVc2FnZTogQWxsb3dzIHlvdSB0byBhZGQgYSBtZXRhZGF0YSBvYmplY3QgYW5kIG1ldGFkYXRhIGZpbGUgYXNzb2NpYXRlZCB3aXRoIEthbHR1cmEgb2JqZWN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1ldGFkYXRhXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YUFkZEZyb21GaWxlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYU1ldGFkYXRhPiB7XG5cbiAgICBtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0b2JqZWN0VHlwZSA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHR4bWxGaWxlIDogRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZXRhZGF0YUFkZEZyb21GaWxlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGEnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZXRhZGF0YV9tZXRhZGF0YScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21GaWxlJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR4bWxGaWxlIDogeyB0eXBlIDogJ2YnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==