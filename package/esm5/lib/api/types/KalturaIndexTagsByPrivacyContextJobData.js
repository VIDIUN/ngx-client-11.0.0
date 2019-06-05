/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaIndexTagsByPrivacyContextJobDataArgs() { }
/** @type {?|undefined} */
KalturaIndexTagsByPrivacyContextJobDataArgs.prototype.changedCategoryId;
/** @type {?|undefined} */
KalturaIndexTagsByPrivacyContextJobDataArgs.prototype.deletedPrivacyContexts;
/** @type {?|undefined} */
KalturaIndexTagsByPrivacyContextJobDataArgs.prototype.addedPrivacyContexts;
var KalturaIndexTagsByPrivacyContextJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIndexTagsByPrivacyContextJobData, _super);
    function KalturaIndexTagsByPrivacyContextJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIndexTagsByPrivacyContextJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIndexTagsByPrivacyContextJobData' },
            changedCategoryId: { type: 'n' },
            deletedPrivacyContexts: { type: 's' },
            addedPrivacyContexts: { type: 's' }
        });
        return result;
    };
    return KalturaIndexTagsByPrivacyContextJobData;
}(KalturaJobData));
export { KalturaIndexTagsByPrivacyContextJobData };
if (false) {
    /** @type {?} */
    KalturaIndexTagsByPrivacyContextJobData.prototype.changedCategoryId;
    /** @type {?} */
    KalturaIndexTagsByPrivacyContextJobData.prototype.deletedPrivacyContexts;
    /** @type {?} */
    KalturaIndexTagsByPrivacyContextJobData.prototype.addedPrivacyContexts;
}
typesMappingStorage['KalturaIndexTagsByPrivacyContextJobData'] = KalturaIndexTagsByPrivacyContextJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUluZGV4VGFnc0J5UHJpdmFjeUNvbnRleHRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSW5kZXhUYWdzQnlQcml2YWN5Q29udGV4dEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTdEUsSUFBQTtJQUE2RCxtRUFBYztJQU12RSxpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzVGLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzVCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBbkNMO0VBVzZELGNBQWMsRUF5QjFFLENBQUE7QUF6QkQsbURBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSW5kZXhUYWdzQnlQcml2YWN5Q29udGV4dEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgY2hhbmdlZENhdGVnb3J5SWQ/IDogbnVtYmVyO1xuXHRkZWxldGVkUHJpdmFjeUNvbnRleHRzPyA6IHN0cmluZztcblx0YWRkZWRQcml2YWN5Q29udGV4dHM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSW5kZXhUYWdzQnlQcml2YWN5Q29udGV4dEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBjaGFuZ2VkQ2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0ZGVsZXRlZFByaXZhY3lDb250ZXh0cyA6IHN0cmluZztcblx0YWRkZWRQcml2YWN5Q29udGV4dHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFJbmRleFRhZ3NCeVByaXZhY3lDb250ZXh0Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSW5kZXhUYWdzQnlQcml2YWN5Q29udGV4dEpvYkRhdGEnIH0sXG5cdFx0XHRcdGNoYW5nZWRDYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlbGV0ZWRQcml2YWN5Q29udGV4dHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWRkZWRQcml2YWN5Q29udGV4dHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUluZGV4VGFnc0J5UHJpdmFjeUNvbnRleHRKb2JEYXRhJ10gPSBLYWx0dXJhSW5kZXhUYWdzQnlQcml2YWN5Q29udGV4dEpvYkRhdGE7Il19