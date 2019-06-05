/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaStorageExportObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaStorageExportObjectTaskArgs.prototype.storageId;
var KalturaStorageExportObjectTask = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStorageExportObjectTask, _super);
    function KalturaStorageExportObjectTask(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaStorageExportObjectTask.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaStorageExportObjectTask' },
            storageId: { type: 's' }
        });
        return result;
    };
    return KalturaStorageExportObjectTask;
}(KalturaObjectTask));
export { KalturaStorageExportObjectTask };
if (false) {
    /** @type {?} */
    KalturaStorageExportObjectTask.prototype.storageId;
}
typesMappingStorage['KalturaStorageExportObjectTask'] = KalturaStorageExportObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0b3JhZ2VFeHBvcnRPYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RvcmFnZUV4cG9ydE9iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBTy9FLElBQUE7SUFBb0QsMERBQWlCO0lBSWpFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQTdCTDtFQVNvRCxpQkFBaUIsRUFxQnBFLENBQUE7QUFyQkQsMENBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdFRhc2ssIEthbHR1cmFPYmplY3RUYXNrQXJncyB9IGZyb20gJy4vS2FsdHVyYU9iamVjdFRhc2snO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTdG9yYWdlRXhwb3J0T2JqZWN0VGFza0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2tBcmdzIHtcbiAgICBzdG9yYWdlSWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3RvcmFnZUV4cG9ydE9iamVjdFRhc2sgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFzayB7XG5cbiAgICBzdG9yYWdlSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTdG9yYWdlRXhwb3J0T2JqZWN0VGFza0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3RvcmFnZUV4cG9ydE9iamVjdFRhc2snIH0sXG5cdFx0XHRcdHN0b3JhZ2VJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3RvcmFnZUV4cG9ydE9iamVjdFRhc2snXSA9IEthbHR1cmFTdG9yYWdlRXhwb3J0T2JqZWN0VGFzazsiXX0=