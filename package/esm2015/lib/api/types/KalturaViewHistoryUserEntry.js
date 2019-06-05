/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';
/**
 * @record
 */
export function KalturaViewHistoryUserEntryArgs() { }
/** @type {?|undefined} */
KalturaViewHistoryUserEntryArgs.prototype.playbackContext;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryArgs.prototype.lastTimeReached;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryArgs.prototype.lastUpdateTime;
export class KalturaViewHistoryUserEntry extends KalturaUserEntry {
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
            objectType: { type: 'c', default: 'KalturaViewHistoryUserEntry' },
            playbackContext: { type: 's' },
            lastTimeReached: { type: 'n' },
            lastUpdateTime: { type: 'd' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaViewHistoryUserEntry.prototype.playbackContext;
    /** @type {?} */
    KalturaViewHistoryUserEntry.prototype.lastTimeReached;
    /** @type {?} */
    KalturaViewHistoryUserEntry.prototype.lastUpdateTime;
}
typesMappingStorage['KalturaViewHistoryUserEntry'] = KalturaViewHistoryUserEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVmlld0hpc3RvcnlVc2VyRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7O0FBUzVFLE1BQU0sa0NBQW1DLFNBQVEsZ0JBQWdCOzs7O0lBTTdELFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3RCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckVudHJ5LCBLYWx0dXJhVXNlckVudHJ5QXJncyB9IGZyb20gJy4vS2FsdHVyYVVzZXJFbnRyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhVXNlckVudHJ5QXJncyB7XG4gICAgcGxheWJhY2tDb250ZXh0PyA6IHN0cmluZztcblx0bGFzdFRpbWVSZWFjaGVkPyA6IG51bWJlcjtcblx0bGFzdFVwZGF0ZVRpbWU/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5IGV4dGVuZHMgS2FsdHVyYVVzZXJFbnRyeSB7XG5cbiAgICBwbGF5YmFja0NvbnRleHQgOiBzdHJpbmc7XG5cdGxhc3RUaW1lUmVhY2hlZCA6IG51bWJlcjtcblx0bGFzdFVwZGF0ZVRpbWUgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVmlld0hpc3RvcnlVc2VyRW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5JyB9LFxuXHRcdFx0XHRwbGF5YmFja0NvbnRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGFzdFRpbWVSZWFjaGVkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhc3RVcGRhdGVUaW1lIDogeyB0eXBlIDogJ2QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeSddID0gS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5OyJdfQ==