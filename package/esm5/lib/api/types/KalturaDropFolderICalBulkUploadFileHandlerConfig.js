/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaDropFolderFileHandlerConfig } from './KalturaDropFolderFileHandlerConfig';
/**
 * @record
 */
export function KalturaDropFolderICalBulkUploadFileHandlerConfigArgs() { }
/** @type {?|undefined} */
KalturaDropFolderICalBulkUploadFileHandlerConfigArgs.prototype.eventsType;
var KalturaDropFolderICalBulkUploadFileHandlerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolderICalBulkUploadFileHandlerConfig, _super);
    function KalturaDropFolderICalBulkUploadFileHandlerConfig(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolderICalBulkUploadFileHandlerConfig.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolderICalBulkUploadFileHandlerConfig' },
            eventsType: { type: 'en', subTypeConstructor: KalturaScheduleEventType, subType: 'KalturaScheduleEventType' }
        });
        return result;
    };
    return KalturaDropFolderICalBulkUploadFileHandlerConfig;
}(KalturaDropFolderFileHandlerConfig));
export { KalturaDropFolderICalBulkUploadFileHandlerConfig };
if (false) {
    /** @type {?} */
    KalturaDropFolderICalBulkUploadFileHandlerConfig.prototype.eventsType;
}
typesMappingStorage['KalturaDropFolderICalBulkUploadFileHandlerConfig'] = KalturaDropFolderICalBulkUploadFileHandlerConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJJQ2FsQnVsa1VwbG9hZEZpbGVIYW5kbGVyQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlcklDYWxCdWxrVXBsb2FkRmlsZUhhbmRsZXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtDQUFrQyxFQUEwQyxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7O0FBT2xJLElBQUE7SUFBc0UsNEVBQWtDO0lBSXBHLDBEQUFZLElBQTREO2VBRXBFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsdUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0RBQWtELEVBQUU7WUFDckcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7U0FDeEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyREE5Qkw7RUFVc0Usa0NBQWtDLEVBcUJ2RyxDQUFBO0FBckJELDREQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrREFBa0QsQ0FBQyxHQUFHLGdEQUFnRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWcsIEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWdBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJvcEZvbGRlcklDYWxCdWxrVXBsb2FkRmlsZUhhbmRsZXJDb25maWdBcmdzICBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWdBcmdzIHtcbiAgICBldmVudHNUeXBlPyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50VHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURyb3BGb2xkZXJJQ2FsQnVsa1VwbG9hZEZpbGVIYW5kbGVyQ29uZmlnIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZyB7XG5cbiAgICBldmVudHNUeXBlIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJvcEZvbGRlcklDYWxCdWxrVXBsb2FkRmlsZUhhbmRsZXJDb25maWdBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURyb3BGb2xkZXJJQ2FsQnVsa1VwbG9hZEZpbGVIYW5kbGVyQ29uZmlnJyB9LFxuXHRcdFx0XHRldmVudHNUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50VHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURyb3BGb2xkZXJJQ2FsQnVsa1VwbG9hZEZpbGVIYW5kbGVyQ29uZmlnJ10gPSBLYWx0dXJhRHJvcEZvbGRlcklDYWxCdWxrVXBsb2FkRmlsZUhhbmRsZXJDb25maWc7Il19