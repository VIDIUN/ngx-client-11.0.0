/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaWebexDropFolderContentProcessorJobData extends KalturaDropFolderContentProcessorJobData {
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
            objectType: { type: 'c', default: 'KalturaWebexDropFolderContentProcessorJobData' },
            description: { type: 's' },
            webexHostId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWebexDropFolderContentProcessorJobData.prototype.description;
    /** @type {?} */
    KalturaWebexDropFolderContentProcessorJobData.prototype.webexHostId;
}
typesMappingStorage['KalturaWebexDropFolderContentProcessorJobData'] = KalturaWebexDropFolderContentProcessorJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmV4RHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhV2ViZXhEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0NBQXdDLEVBQWdELE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7OztBQVFwSixNQUFNLG9EQUFxRCxTQUFRLHdDQUF3Qzs7OztJQUt2RyxZQUFZLElBQXlEO1FBRWpFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQ0FBK0MsRUFBRTtZQUNsRyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0NBQStDLENBQUMsR0FBRyw2Q0FBNkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhLCBLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVdlYmV4RHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhQXJncyB7XG4gICAgZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR3ZWJleEhvc3RJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFXZWJleERyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YSBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGEge1xuXG4gICAgZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHdlYmV4SG9zdElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdlYmV4RHJvcEZvbGRlckNvbnRlbnRQcm9jZXNzb3JKb2JEYXRhJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3ZWJleEhvc3RJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhV2ViZXhEcm9wRm9sZGVyQ29udGVudFByb2Nlc3NvckpvYkRhdGEnXSA9IEthbHR1cmFXZWJleERyb3BGb2xkZXJDb250ZW50UHJvY2Vzc29ySm9iRGF0YTsiXX0=