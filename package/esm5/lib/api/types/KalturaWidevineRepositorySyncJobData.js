/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaWidevineRepositorySyncMode } from './KalturaWidevineRepositorySyncMode';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaWidevineRepositorySyncJobDataArgs() { }
/** @type {?|undefined} */
KalturaWidevineRepositorySyncJobDataArgs.prototype.syncMode;
/** @type {?|undefined} */
KalturaWidevineRepositorySyncJobDataArgs.prototype.wvAssetIds;
/** @type {?|undefined} */
KalturaWidevineRepositorySyncJobDataArgs.prototype.modifiedAttributes;
/** @type {?|undefined} */
KalturaWidevineRepositorySyncJobDataArgs.prototype.monitorSyncCompletion;
var KalturaWidevineRepositorySyncJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWidevineRepositorySyncJobData, _super);
    function KalturaWidevineRepositorySyncJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWidevineRepositorySyncJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWidevineRepositorySyncJobData' },
            syncMode: { type: 'en', subTypeConstructor: KalturaWidevineRepositorySyncMode, subType: 'KalturaWidevineRepositorySyncMode' },
            wvAssetIds: { type: 's' },
            modifiedAttributes: { type: 's' },
            monitorSyncCompletion: { type: 'n' }
        });
        return result;
    };
    return KalturaWidevineRepositorySyncJobData;
}(KalturaJobData));
export { KalturaWidevineRepositorySyncJobData };
if (false) {
    /** @type {?} */
    KalturaWidevineRepositorySyncJobData.prototype.syncMode;
    /** @type {?} */
    KalturaWidevineRepositorySyncJobData.prototype.wvAssetIds;
    /** @type {?} */
    KalturaWidevineRepositorySyncJobData.prototype.modifiedAttributes;
    /** @type {?} */
    KalturaWidevineRepositorySyncJobData.prototype.monitorSyncCompletion;
}
typesMappingStorage['KalturaWidevineRepositorySyncJobData'] = KalturaWidevineRepositorySyncJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGV2aW5lUmVwb3NpdG9yeVN5bmNKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhV2lkZXZpbmVSZXBvc2l0b3J5U3luY0pvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVV0RSxJQUFBO0lBQTBELGdFQUFjO0lBT3BFLDhDQUFZLElBQWdEO2VBRXhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDakksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzdCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBdkNMO0VBYTBELGNBQWMsRUEyQnZFLENBQUE7QUEzQkQsZ0RBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVdpZGV2aW5lUmVwb3NpdG9yeVN5bmNNb2RlIH0gZnJvbSAnLi9LYWx0dXJhV2lkZXZpbmVSZXBvc2l0b3J5U3luY01vZGUnO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXaWRldmluZVJlcG9zaXRvcnlTeW5jSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBzeW5jTW9kZT8gOiBLYWx0dXJhV2lkZXZpbmVSZXBvc2l0b3J5U3luY01vZGU7XG5cdHd2QXNzZXRJZHM/IDogc3RyaW5nO1xuXHRtb2RpZmllZEF0dHJpYnV0ZXM/IDogc3RyaW5nO1xuXHRtb25pdG9yU3luY0NvbXBsZXRpb24/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhV2lkZXZpbmVSZXBvc2l0b3J5U3luY0pvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBzeW5jTW9kZSA6IEthbHR1cmFXaWRldmluZVJlcG9zaXRvcnlTeW5jTW9kZTtcblx0d3ZBc3NldElkcyA6IHN0cmluZztcblx0bW9kaWZpZWRBdHRyaWJ1dGVzIDogc3RyaW5nO1xuXHRtb25pdG9yU3luY0NvbXBsZXRpb24gOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFXaWRldmluZVJlcG9zaXRvcnlTeW5jSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV2lkZXZpbmVSZXBvc2l0b3J5U3luY0pvYkRhdGEnIH0sXG5cdFx0XHRcdHN5bmNNb2RlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVdpZGV2aW5lUmVwb3NpdG9yeVN5bmNNb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFXaWRldmluZVJlcG9zaXRvcnlTeW5jTW9kZScgfSxcblx0XHRcdFx0d3ZBc3NldElkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtb2RpZmllZEF0dHJpYnV0ZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bW9uaXRvclN5bmNDb21wbGV0aW9uIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXaWRldmluZVJlcG9zaXRvcnlTeW5jSm9iRGF0YSddID0gS2FsdHVyYVdpZGV2aW5lUmVwb3NpdG9yeVN5bmNKb2JEYXRhOyJdfQ==