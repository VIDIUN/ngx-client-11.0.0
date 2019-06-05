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
var KalturaMoveCategoryEntriesJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMoveCategoryEntriesJobData, _super);
    function KalturaMoveCategoryEntriesJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMoveCategoryEntriesJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaMoveCategoryEntriesJobData;
}(KalturaJobData));
export { KalturaMoveCategoryEntriesJobData };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1vdmVDYXRlZ29yeUVudHJpZXNKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTW92ZUNhdGVnb3J5RW50cmllc0pvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF0RSxJQUFBO0lBQXVELDZEQUFjO0lBVWpFLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsK0JBQStCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hELGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDM0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0EvQ0w7RUFldUQsY0FBYyxFQWlDcEUsQ0FBQTtBQWpDRCw2Q0FpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1vdmVDYXRlZ29yeUVudHJpZXNKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIHNyY0NhdGVnb3J5SWQ/IDogbnVtYmVyO1xuXHRkZXN0Q2F0ZWdvcnlJZD8gOiBudW1iZXI7XG5cdGxhc3RNb3ZlZENhdGVnb3J5SWQ/IDogbnVtYmVyO1xuXHRsYXN0TW92ZWRDYXRlZ29yeVBhZ2VJbmRleD8gOiBudW1iZXI7XG5cdGxhc3RNb3ZlZENhdGVnb3J5RW50cnlQYWdlSW5kZXg/IDogbnVtYmVyO1xuXHRtb3ZlRnJvbUNoaWxkcmVuPyA6IGJvb2xlYW47XG5cdGRlc3RDYXRlZ29yeUZ1bGxJZHM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTW92ZUNhdGVnb3J5RW50cmllc0pvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBzcmNDYXRlZ29yeUlkIDogbnVtYmVyO1xuXHRkZXN0Q2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0bGFzdE1vdmVkQ2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0bGFzdE1vdmVkQ2F0ZWdvcnlQYWdlSW5kZXggOiBudW1iZXI7XG5cdGxhc3RNb3ZlZENhdGVnb3J5RW50cnlQYWdlSW5kZXggOiBudW1iZXI7XG5cdG1vdmVGcm9tQ2hpbGRyZW4gOiBib29sZWFuO1xuXHRkZXN0Q2F0ZWdvcnlGdWxsSWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTW92ZUNhdGVnb3J5RW50cmllc0pvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1vdmVDYXRlZ29yeUVudHJpZXNKb2JEYXRhJyB9LFxuXHRcdFx0XHRzcmNDYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlc3RDYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhc3RNb3ZlZENhdGVnb3J5SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdE1vdmVkQ2F0ZWdvcnlQYWdlSW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdE1vdmVkQ2F0ZWdvcnlFbnRyeVBhZ2VJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtb3ZlRnJvbUNoaWxkcmVuIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRlc3RDYXRlZ29yeUZ1bGxJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1vdmVDYXRlZ29yeUVudHJpZXNKb2JEYXRhJ10gPSBLYWx0dXJhTW92ZUNhdGVnb3J5RW50cmllc0pvYkRhdGE7Il19