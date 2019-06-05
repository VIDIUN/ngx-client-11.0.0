/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaMoveCategoryEntriesJobDataArgs() { }
/** @type {?|undefined} */
KalturaMoveCategoryEntriesJobDataArgs.prototype.srcCategoryId;
/** @type {?|undefined} */
KalturaMoveCategoryEntriesJobDataArgs.prototype.destCategoryId;
/** @type {?|undefined} */
KalturaMoveCategoryEntriesJobDataArgs.prototype.lastMovedCategoryId;
/** @type {?|undefined} */
KalturaMoveCategoryEntriesJobDataArgs.prototype.lastMovedCategoryPageIndex;
/** @type {?|undefined} */
KalturaMoveCategoryEntriesJobDataArgs.prototype.lastMovedCategoryEntryPageIndex;
/** @type {?|undefined} */
KalturaMoveCategoryEntriesJobDataArgs.prototype.moveFromChildren;
/** @type {?|undefined} */
KalturaMoveCategoryEntriesJobDataArgs.prototype.destCategoryFullIds;
export class KalturaMoveCategoryEntriesJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaMoveCategoryEntriesJobData' },
            srcCategoryId: { type: 'n' },
            destCategoryId: { type: 'n' },
            lastMovedCategoryId: { type: 'n' },
            lastMovedCategoryPageIndex: { type: 'n' },
            lastMovedCategoryEntryPageIndex: { type: 'n' },
            moveFromChildren: { type: 'b' },
            destCategoryFullIds: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMoveCategoryEntriesJobData.prototype.srcCategoryId;
    /** @type {?} */
    KalturaMoveCategoryEntriesJobData.prototype.destCategoryId;
    /** @type {?} */
    KalturaMoveCategoryEntriesJobData.prototype.lastMovedCategoryId;
    /** @type {?} */
    KalturaMoveCategoryEntriesJobData.prototype.lastMovedCategoryPageIndex;
    /** @type {?} */
    KalturaMoveCategoryEntriesJobData.prototype.lastMovedCategoryEntryPageIndex;
    /** @type {?} */
    KalturaMoveCategoryEntriesJobData.prototype.moveFromChildren;
    /** @type {?} */
    KalturaMoveCategoryEntriesJobData.prototype.destCategoryFullIds;
}
typesMappingStorage['KalturaMoveCategoryEntriesJobData'] = KalturaMoveCategoryEntriesJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1vdmVDYXRlZ29yeUVudHJpZXNKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTW92ZUNhdGVnb3J5RW50cmllc0pvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXRFLE1BQU0sd0NBQXlDLFNBQVEsY0FBYzs7OztJQVVqRSxZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQywrQkFBK0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEQsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMzQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1vdmVDYXRlZ29yeUVudHJpZXNKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIHNyY0NhdGVnb3J5SWQ/IDogbnVtYmVyO1xuXHRkZXN0Q2F0ZWdvcnlJZD8gOiBudW1iZXI7XG5cdGxhc3RNb3ZlZENhdGVnb3J5SWQ/IDogbnVtYmVyO1xuXHRsYXN0TW92ZWRDYXRlZ29yeVBhZ2VJbmRleD8gOiBudW1iZXI7XG5cdGxhc3RNb3ZlZENhdGVnb3J5RW50cnlQYWdlSW5kZXg/IDogbnVtYmVyO1xuXHRtb3ZlRnJvbUNoaWxkcmVuPyA6IGJvb2xlYW47XG5cdGRlc3RDYXRlZ29yeUZ1bGxJZHM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTW92ZUNhdGVnb3J5RW50cmllc0pvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBzcmNDYXRlZ29yeUlkIDogbnVtYmVyO1xuXHRkZXN0Q2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0bGFzdE1vdmVkQ2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0bGFzdE1vdmVkQ2F0ZWdvcnlQYWdlSW5kZXggOiBudW1iZXI7XG5cdGxhc3RNb3ZlZENhdGVnb3J5RW50cnlQYWdlSW5kZXggOiBudW1iZXI7XG5cdG1vdmVGcm9tQ2hpbGRyZW4gOiBib29sZWFuO1xuXHRkZXN0Q2F0ZWdvcnlGdWxsSWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTW92ZUNhdGVnb3J5RW50cmllc0pvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1vdmVDYXRlZ29yeUVudHJpZXNKb2JEYXRhJyB9LFxuXHRcdFx0XHRzcmNDYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlc3RDYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhc3RNb3ZlZENhdGVnb3J5SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdE1vdmVkQ2F0ZWdvcnlQYWdlSW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdE1vdmVkQ2F0ZWdvcnlFbnRyeVBhZ2VJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtb3ZlRnJvbUNoaWxkcmVuIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRlc3RDYXRlZ29yeUZ1bGxJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1vdmVDYXRlZ29yeUVudHJpZXNKb2JEYXRhJ10gPSBLYWx0dXJhTW92ZUNhdGVnb3J5RW50cmllc0pvYkRhdGE7Il19