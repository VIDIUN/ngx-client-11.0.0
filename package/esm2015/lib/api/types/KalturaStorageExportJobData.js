/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageJobData } from './KalturaStorageJobData';
/**
 * @record
 */
export function KalturaStorageExportJobDataArgs() { }
/** @type {?|undefined} */
KalturaStorageExportJobDataArgs.prototype.force;
/** @type {?|undefined} */
KalturaStorageExportJobDataArgs.prototype.createLink;
export class KalturaStorageExportJobData extends KalturaStorageJobData {
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
            objectType: { type: 'c', default: 'KalturaStorageExportJobData' },
            force: { type: 'b' },
            createLink: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaStorageExportJobData.prototype.force;
    /** @type {?} */
    KalturaStorageExportJobData.prototype.createLink;
}
typesMappingStorage['KalturaStorageExportJobData'] = KalturaStorageExportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RvcmFnZUV4cG9ydEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQVEzRixNQUFNLGtDQUFtQyxTQUFRLHFCQUFxQjs7OztJQUtsRSxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZUpvYkRhdGEsIEthbHR1cmFTdG9yYWdlSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3RvcmFnZUpvYkRhdGFBcmdzIHtcbiAgICBmb3JjZT8gOiBib29sZWFuO1xuXHRjcmVhdGVMaW5rPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFTdG9yYWdlSm9iRGF0YSB7XG5cbiAgICBmb3JjZSA6IGJvb2xlYW47XG5cdGNyZWF0ZUxpbmsgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3RvcmFnZUV4cG9ydEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRmb3JjZSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRjcmVhdGVMaW5rIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTdG9yYWdlRXhwb3J0Sm9iRGF0YSddID0gS2FsdHVyYVN0b3JhZ2VFeHBvcnRKb2JEYXRhOyJdfQ==