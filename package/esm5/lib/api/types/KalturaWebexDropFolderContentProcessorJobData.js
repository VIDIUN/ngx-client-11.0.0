/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderContentProcessorJobData } from './KalturaDropFolderContentProcessorJobData';
/**
 * @record
 */
export function KalturaWebexDropFolderContentProcessorJobDataArgs() { }
/** @type {?|undefined} */
KalturaWebexDropFolderContentProcessorJobDataArgs.prototype.description;
/** @type {?|undefined} */
KalturaWebexDropFolderContentProcessorJobDataArgs.prototype.webexHostId;
var KalturaWebexDropFolderContentProcessorJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWebexDropFolderContentProcessorJobData, _super);
    function KalturaWebexDropFolderContentProcessorJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWebexDropFolderContentProcessorJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWebexDropFolderContentProcessorJobData' },
            description: { type: 's' },
            webexHostId: { type: 's' }
        });
        return result;
    };
    return KalturaWebexDropFolderContentProcessorJobData;
}(KalturaDropFolderContentProcessorJobData));
export { KalturaWebexDropFolderContentProcessorJobData };
if (false) {
    /** @type {?} */
    KalturaWebexDropFolderContentProcessorJobData.prototype.description;
    /** @type {?} */
    KalturaWebexDropFolderContentProcessorJobData.prototype.webexHostId;
}
typesMappingStorage['KalturaWebexDropFolderContentProcessorJobData'] = KalturaWebexDropFolderContentProcessorJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmV4RHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhV2ViZXhEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdDQUF3QyxFQUFnRCxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7Ozs7QUFRcEosSUFBQTtJQUFtRSx5RUFBd0M7SUFLdkcsdURBQVksSUFBeUQ7ZUFFakUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQ0FBK0MsRUFBRTtZQUNsRyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3REFoQ0w7RUFVbUUsd0NBQXdDLEVBdUIxRyxDQUFBO0FBdkJELHlEQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtDQUErQyxDQUFDLEdBQUcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YSwgS2FsdHVyYURyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXZWJleERyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YUFyZ3Mge1xuICAgIGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0d2ViZXhIb3N0SWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhIHtcblxuICAgIGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHR3ZWJleEhvc3RJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdlYmV4RHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFXZWJleERyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YScgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0d2ViZXhIb3N0SWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVdlYmV4RHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhJ10gPSBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGE7Il19