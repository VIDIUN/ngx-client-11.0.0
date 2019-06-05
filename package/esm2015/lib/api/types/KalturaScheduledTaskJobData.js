/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaScheduledTaskJobData extends KalturaJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduledTaskJobData' },
            maxResults: { type: 'n' },
            totalCount: { type: 'n' },
            fileFormat: { type: 'en', subTypeConstructor: KalturaDryRunFileType, subType: 'KalturaDryRunFileType' },
            resultsFilePath: { type: 's' },
            referenceTime: { type: 'd' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlZFRhc2tKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVkVGFza0pvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXdEUsTUFBTSxrQ0FBbUMsU0FBUSxjQUFjOzs7O0lBUTNELFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMzRyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJ5UnVuRmlsZVR5cGUgfSBmcm9tICcuL0thbHR1cmFEcnlSdW5GaWxlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlZFRhc2tKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIG1heFJlc3VsdHM/IDogbnVtYmVyO1xuXHR0b3RhbENvdW50PyA6IG51bWJlcjtcblx0ZmlsZUZvcm1hdD8gOiBLYWx0dXJhRHJ5UnVuRmlsZVR5cGU7XG5cdHJlc3VsdHNGaWxlUGF0aD8gOiBzdHJpbmc7XG5cdHJlZmVyZW5jZVRpbWU/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlZFRhc2tKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgbWF4UmVzdWx0cyA6IG51bWJlcjtcblx0dG90YWxDb3VudCA6IG51bWJlcjtcblx0ZmlsZUZvcm1hdCA6IEthbHR1cmFEcnlSdW5GaWxlVHlwZTtcblx0cmVzdWx0c0ZpbGVQYXRoIDogc3RyaW5nO1xuXHRyZWZlcmVuY2VUaW1lIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlZFRhc2tKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZWRUYXNrSm9iRGF0YScgfSxcblx0XHRcdFx0bWF4UmVzdWx0cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0b3RhbENvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbGVGb3JtYXQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJ5UnVuRmlsZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyeVJ1bkZpbGVUeXBlJyB9LFxuXHRcdFx0XHRyZXN1bHRzRmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVmZXJlbmNlVGltZSA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVkVGFza0pvYkRhdGEnXSA9IEthbHR1cmFTY2hlZHVsZWRUYXNrSm9iRGF0YTsiXX0=