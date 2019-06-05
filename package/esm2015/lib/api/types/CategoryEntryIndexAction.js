/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CategoryEntryIndexActionArgs() { }
/** @type {?} */
CategoryEntryIndexActionArgs.prototype.entryId;
/** @type {?} */
CategoryEntryIndexActionArgs.prototype.categoryId;
/** @type {?|undefined} */
CategoryEntryIndexActionArgs.prototype.shouldUpdate;
/**
 * Build request payload for service 'categoryEntry' action 'index'.
 *
 * Usage: Index CategoryEntry by Id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export class CategoryEntryIndexAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'n', responseSubType: '', responseConstructor: null });
        if (typeof this.shouldUpdate === 'undefined')
            this.shouldUpdate = true;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryentry' },
            action: { type: 'c', default: 'index' },
            entryId: { type: 's' },
            categoryId: { type: 'n' },
            shouldUpdate: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    CategoryEntryIndexAction.prototype.entryId;
    /** @type {?} */
    CategoryEntryIndexAction.prototype.categoryId;
    /** @type {?} */
    CategoryEntryIndexAction.prototype.shouldUpdate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlFbnRyeUluZGV4QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXRlZ29yeUVudHJ5SW5kZXhBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFLE1BQU0sK0JBQWdDLFNBQVEsY0FBc0I7Ozs7SUFNaEUsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0tBQzFFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDL0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQzFDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlFbnRyeUluZGV4QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWQgOiBudW1iZXI7XG5cdHNob3VsZFVwZGF0ZT8gOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2F0ZWdvcnlFbnRyeScgYWN0aW9uICdpbmRleCcuXG4gKlxuICogVXNhZ2U6IEluZGV4IENhdGVnb3J5RW50cnkgYnkgSWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBudW1iZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhdGVnb3J5RW50cnlJbmRleEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PG51bWJlcj4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0c2hvdWxkVXBkYXRlIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDYXRlZ29yeUVudHJ5SW5kZXhBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICduJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2hvdWxkVXBkYXRlID09PSAndW5kZWZpbmVkJykgdGhpcy5zaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhdGVnb3J5ZW50cnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdpbmRleCcgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNob3VsZFVwZGF0ZSA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=