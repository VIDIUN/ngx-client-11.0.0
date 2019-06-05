/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSshImportJobData } from './KalturaSshImportJobData';
/**
 * @record
 */
export function KalturaDropFolderImportJobDataArgs() { }
/** @type {?|undefined} */
KalturaDropFolderImportJobDataArgs.prototype.dropFolderFileId;
var KalturaDropFolderImportJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolderImportJobData, _super);
    function KalturaDropFolderImportJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolderImportJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolderImportJobData' },
            dropFolderFileId: { type: 'n' }
        });
        return result;
    };
    return KalturaDropFolderImportJobData;
}(KalturaSshImportJobData));
export { KalturaDropFolderImportJobData };
if (false) {
    /** @type {?} */
    KalturaDropFolderImportJobData.prototype.dropFolderFileId;
}
typesMappingStorage['KalturaDropFolderImportJobData'] = KalturaDropFolderImportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJJbXBvcnRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlckltcG9ydEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0FBT2pHLElBQUE7SUFBb0QsMERBQXVCO0lBSXZFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBN0JMO0VBU29ELHVCQUF1QixFQXFCMUUsQ0FBQTtBQXJCRCwwQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YSwgS2FsdHVyYVNzaEltcG9ydEpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURyb3BGb2xkZXJJbXBvcnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YUFyZ3Mge1xuICAgIGRyb3BGb2xkZXJGaWxlSWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJvcEZvbGRlckltcG9ydEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YSB7XG5cbiAgICBkcm9wRm9sZGVyRmlsZUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJvcEZvbGRlckltcG9ydEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURyb3BGb2xkZXJJbXBvcnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRkcm9wRm9sZGVyRmlsZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm9wRm9sZGVySW1wb3J0Sm9iRGF0YSddID0gS2FsdHVyYURyb3BGb2xkZXJJbXBvcnRKb2JEYXRhOyJdfQ==