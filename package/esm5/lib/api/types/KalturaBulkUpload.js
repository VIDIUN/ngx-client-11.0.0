/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBulkUploadArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.id;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.uploadedBy;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.uploadedByUserId;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.uploadedOn;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.numOfEntries;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.status;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.logFileUrl;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.csvFileUrl;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.bulkFileUrl;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.bulkUploadType;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.results;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.error;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.errorType;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.errorNumber;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.fileName;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.description;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.numOfObjects;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.bulkUploadObjectType;
var KalturaBulkUpload = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUpload, _super);
    function KalturaBulkUpload(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.results === 'undefined')
            _this.results = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUpload.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUpload' },
            id: { type: 'n' },
            uploadedBy: { type: 's' },
            uploadedByUserId: { type: 's' },
            uploadedOn: { type: 'd' },
            numOfEntries: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaBatchJobStatus, subType: 'KalturaBatchJobStatus' },
            logFileUrl: { type: 's' },
            csvFileUrl: { type: 's' },
            bulkFileUrl: { type: 's' },
            bulkUploadType: { type: 'es', subTypeConstructor: KalturaBulkUploadType, subType: 'KalturaBulkUploadType' },
            results: { type: 'a', subTypeConstructor: KalturaBulkUploadResult, subType: 'KalturaBulkUploadResult' },
            error: { type: 's' },
            errorType: { type: 'en', subTypeConstructor: KalturaBatchJobErrorTypes, subType: 'KalturaBatchJobErrorTypes' },
            errorNumber: { type: 'n' },
            fileName: { type: 's' },
            description: { type: 's' },
            numOfObjects: { type: 'n' },
            bulkUploadObjectType: { type: 'es', subTypeConstructor: KalturaBulkUploadObjectType, subType: 'KalturaBulkUploadObjectType' }
        });
        return result;
    };
    return KalturaBulkUpload;
}(KalturaObjectBase));
export { KalturaBulkUpload };
if (false) {
    /** @type {?} */
    KalturaBulkUpload.prototype.id;
    /** @type {?} */
    KalturaBulkUpload.prototype.uploadedBy;
    /** @type {?} */
    KalturaBulkUpload.prototype.uploadedByUserId;
    /** @type {?} */
    KalturaBulkUpload.prototype.uploadedOn;
    /** @type {?} */
    KalturaBulkUpload.prototype.numOfEntries;
    /** @type {?} */
    KalturaBulkUpload.prototype.status;
    /** @type {?} */
    KalturaBulkUpload.prototype.logFileUrl;
    /** @type {?} */
    KalturaBulkUpload.prototype.csvFileUrl;
    /** @type {?} */
    KalturaBulkUpload.prototype.bulkFileUrl;
    /** @type {?} */
    KalturaBulkUpload.prototype.bulkUploadType;
    /** @type {?} */
    KalturaBulkUpload.prototype.results;
    /** @type {?} */
    KalturaBulkUpload.prototype.error;
    /** @type {?} */
    KalturaBulkUpload.prototype.errorType;
    /** @type {?} */
    KalturaBulkUpload.prototype.errorNumber;
    /** @type {?} */
    KalturaBulkUpload.prototype.fileName;
    /** @type {?} */
    KalturaBulkUpload.prototype.description;
    /** @type {?} */
    KalturaBulkUpload.prototype.numOfObjects;
    /** @type {?} */
    KalturaBulkUpload.prototype.bulkUploadObjectType;
}
typesMappingStorage['KalturaBulkUpload'] = KalturaBulkUpload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdWxrVXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QmxGLElBQUE7SUFBdUMsNkNBQWlCO0lBcUJwRCwyQkFBWSxJQUE2QjtRQUF6QyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztLQUM5RDs7OztJQUVTLHdDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQy9HLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzNHLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDbEgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NEJBdEZMO0VBK0J1QyxpQkFBaUIsRUF3RHZELENBQUE7QUF4REQsNkJBd0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXRjaEpvYlN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUJhdGNoSm9iU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkVHlwZSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0IH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBpZD8gOiBudW1iZXI7XG5cdHVwbG9hZGVkQnk/IDogc3RyaW5nO1xuXHR1cGxvYWRlZEJ5VXNlcklkPyA6IHN0cmluZztcblx0dXBsb2FkZWRPbj8gOiBEYXRlO1xuXHRudW1PZkVudHJpZXM/IDogbnVtYmVyO1xuXHRzdGF0dXM/IDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzO1xuXHRsb2dGaWxlVXJsPyA6IHN0cmluZztcblx0Y3N2RmlsZVVybD8gOiBzdHJpbmc7XG5cdGJ1bGtGaWxlVXJsPyA6IHN0cmluZztcblx0YnVsa1VwbG9hZFR5cGU/IDogS2FsdHVyYUJ1bGtVcGxvYWRUeXBlO1xuXHRyZXN1bHRzPyA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0W107XG5cdGVycm9yPyA6IHN0cmluZztcblx0ZXJyb3JUeXBlPyA6IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXM7XG5cdGVycm9yTnVtYmVyPyA6IG51bWJlcjtcblx0ZmlsZU5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdG51bU9mT2JqZWN0cz8gOiBudW1iZXI7XG5cdGJ1bGtVcGxvYWRPYmplY3RUeXBlPyA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0dXBsb2FkZWRCeSA6IHN0cmluZztcblx0dXBsb2FkZWRCeVVzZXJJZCA6IHN0cmluZztcblx0dXBsb2FkZWRPbiA6IERhdGU7XG5cdG51bU9mRW50cmllcyA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzO1xuXHRsb2dGaWxlVXJsIDogc3RyaW5nO1xuXHRjc3ZGaWxlVXJsIDogc3RyaW5nO1xuXHRidWxrRmlsZVVybCA6IHN0cmluZztcblx0YnVsa1VwbG9hZFR5cGUgOiBLYWx0dXJhQnVsa1VwbG9hZFR5cGU7XG5cdHJlc3VsdHMgOiBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFtdO1xuXHRlcnJvciA6IHN0cmluZztcblx0ZXJyb3JUeXBlIDogS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcztcblx0ZXJyb3JOdW1iZXIgOiBudW1iZXI7XG5cdGZpbGVOYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0bnVtT2ZPYmplY3RzIDogbnVtYmVyO1xuXHRidWxrVXBsb2FkT2JqZWN0VHlwZSA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXN1bHRzID09PSAndW5kZWZpbmVkJykgdGhpcy5yZXN1bHRzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVwbG9hZGVkQnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBsb2FkZWRCeVVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cGxvYWRlZE9uIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdG51bU9mRW50cmllcyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hKb2JTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iU3RhdHVzJyB9LFxuXHRcdFx0XHRsb2dGaWxlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNzdkZpbGVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnVsa0ZpbGVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnVsa1VwbG9hZFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRUeXBlJyB9LFxuXHRcdFx0XHRyZXN1bHRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCcgfSxcblx0XHRcdFx0ZXJyb3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyb3JUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcywgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzJyB9LFxuXHRcdFx0XHRlcnJvck51bWJlciA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmaWxlTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRudW1PZk9iamVjdHMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YnVsa1VwbG9hZE9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZCddID0gS2FsdHVyYUJ1bGtVcGxvYWQ7Il19