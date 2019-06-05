/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDryRunFileType } from './KalturaDryRunFileType';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaScheduledTaskJobDataArgs() { }
/** @type {?|undefined} */
KalturaScheduledTaskJobDataArgs.prototype.maxResults;
/** @type {?|undefined} */
KalturaScheduledTaskJobDataArgs.prototype.totalCount;
/** @type {?|undefined} */
KalturaScheduledTaskJobDataArgs.prototype.fileFormat;
/** @type {?|undefined} */
KalturaScheduledTaskJobDataArgs.prototype.resultsFilePath;
/** @type {?|undefined} */
KalturaScheduledTaskJobDataArgs.prototype.referenceTime;
var KalturaScheduledTaskJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduledTaskJobData, _super);
    function KalturaScheduledTaskJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduledTaskJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduledTaskJobData' },
            maxResults: { type: 'n' },
            totalCount: { type: 'n' },
            fileFormat: { type: 'en', subTypeConstructor: KalturaDryRunFileType, subType: 'KalturaDryRunFileType' },
            resultsFilePath: { type: 's' },
            referenceTime: { type: 'd' }
        });
        return result;
    };
    return KalturaScheduledTaskJobData;
}(KalturaJobData));
export { KalturaScheduledTaskJobData };
if (false) {
    /** @type {?} */
    KalturaScheduledTaskJobData.prototype.maxResults;
    /** @type {?} */
    KalturaScheduledTaskJobData.prototype.totalCount;
    /** @type {?} */
    KalturaScheduledTaskJobData.prototype.fileFormat;
    /** @type {?} */
    KalturaScheduledTaskJobData.prototype.resultsFilePath;
    /** @type {?} */
    KalturaScheduledTaskJobData.prototype.referenceTime;
}
typesMappingStorage['KalturaScheduledTaskJobData'] = KalturaScheduledTaskJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlZFRhc2tKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVkVGFza0pvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV3RFLElBQUE7SUFBaUQsdURBQWM7SUFRM0QscUNBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDM0csZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBMUNMO0VBY2lELGNBQWMsRUE2QjlELENBQUE7QUE3QkQsdUNBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJ5UnVuRmlsZVR5cGUgfSBmcm9tICcuL0thbHR1cmFEcnlSdW5GaWxlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlZFRhc2tKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIG1heFJlc3VsdHM/IDogbnVtYmVyO1xuXHR0b3RhbENvdW50PyA6IG51bWJlcjtcblx0ZmlsZUZvcm1hdD8gOiBLYWx0dXJhRHJ5UnVuRmlsZVR5cGU7XG5cdHJlc3VsdHNGaWxlUGF0aD8gOiBzdHJpbmc7XG5cdHJlZmVyZW5jZVRpbWU/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlZFRhc2tKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgbWF4UmVzdWx0cyA6IG51bWJlcjtcblx0dG90YWxDb3VudCA6IG51bWJlcjtcblx0ZmlsZUZvcm1hdCA6IEthbHR1cmFEcnlSdW5GaWxlVHlwZTtcblx0cmVzdWx0c0ZpbGVQYXRoIDogc3RyaW5nO1xuXHRyZWZlcmVuY2VUaW1lIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlZFRhc2tKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZWRUYXNrSm9iRGF0YScgfSxcblx0XHRcdFx0bWF4UmVzdWx0cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0b3RhbENvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbGVGb3JtYXQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJ5UnVuRmlsZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyeVJ1bkZpbGVUeXBlJyB9LFxuXHRcdFx0XHRyZXN1bHRzRmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVmZXJlbmNlVGltZSA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVkVGFza0pvYkRhdGEnXSA9IEthbHR1cmFTY2hlZHVsZWRUYXNrSm9iRGF0YTsiXX0=