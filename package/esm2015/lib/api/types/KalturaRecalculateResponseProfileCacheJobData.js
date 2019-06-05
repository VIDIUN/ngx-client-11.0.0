/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaRecalculateCacheJobData } from './KalturaRecalculateCacheJobData';
/**
 * @record
 */
export function KalturaRecalculateResponseProfileCacheJobDataArgs() { }
/** @type {?|undefined} */
KalturaRecalculateResponseProfileCacheJobDataArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaRecalculateResponseProfileCacheJobDataArgs.prototype.ksType;
/** @type {?|undefined} */
KalturaRecalculateResponseProfileCacheJobDataArgs.prototype.userRoles;
/** @type {?|undefined} */
KalturaRecalculateResponseProfileCacheJobDataArgs.prototype.cachedObjectType;
/** @type {?|undefined} */
KalturaRecalculateResponseProfileCacheJobDataArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaRecalculateResponseProfileCacheJobDataArgs.prototype.startObjectKey;
/** @type {?|undefined} */
KalturaRecalculateResponseProfileCacheJobDataArgs.prototype.endObjectKey;
export class KalturaRecalculateResponseProfileCacheJobData extends KalturaRecalculateCacheJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.userRoles === 'undefined')
            this.userRoles = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRecalculateResponseProfileCacheJobData' },
            protocol: { type: 's' },
            ksType: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            userRoles: { type: 'a', subTypeConstructor: KalturaIntegerValue, subType: 'KalturaIntegerValue' },
            cachedObjectType: { type: 's' },
            objectId: { type: 's' },
            startObjectKey: { type: 's' },
            endObjectKey: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaRecalculateResponseProfileCacheJobData.prototype.protocol;
    /** @type {?} */
    KalturaRecalculateResponseProfileCacheJobData.prototype.ksType;
    /** @type {?} */
    KalturaRecalculateResponseProfileCacheJobData.prototype.userRoles;
    /** @type {?} */
    KalturaRecalculateResponseProfileCacheJobData.prototype.cachedObjectType;
    /** @type {?} */
    KalturaRecalculateResponseProfileCacheJobData.prototype.objectId;
    /** @type {?} */
    KalturaRecalculateResponseProfileCacheJobData.prototype.startObjectKey;
    /** @type {?} */
    KalturaRecalculateResponseProfileCacheJobData.prototype.endObjectKey;
}
typesMappingStorage['KalturaRecalculateResponseProfileCacheJobData'] = KalturaRecalculateResponseProfileCacheJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlY2FsY3VsYXRlUmVzcG9uc2VQcm9maWxlQ2FjaGVKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVjYWxjdWxhdGVSZXNwb25zZVByb2ZpbGVDYWNoZUpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsOEJBQThCLEVBQXNDLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdEgsTUFBTSxvREFBcUQsU0FBUSw4QkFBOEI7Ozs7SUFVN0YsWUFBWSxJQUF5RDtRQUVqRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDbEU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtDQUErQyxFQUFFO1lBQ2xHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDakcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDckcsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQ0FBK0MsQ0FBQyxHQUFHLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZXNzaW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNlc3Npb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFJbnRlZ2VyVmFsdWUgfSBmcm9tICcuL0thbHR1cmFJbnRlZ2VyVmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlY2FsY3VsYXRlQ2FjaGVKb2JEYXRhLCBLYWx0dXJhUmVjYWxjdWxhdGVDYWNoZUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVjYWxjdWxhdGVDYWNoZUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFSZWNhbGN1bGF0ZVJlc3BvbnNlUHJvZmlsZUNhY2hlSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlY2FsY3VsYXRlQ2FjaGVKb2JEYXRhQXJncyB7XG4gICAgcHJvdG9jb2w/IDogc3RyaW5nO1xuXHRrc1R5cGU/IDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHR1c2VyUm9sZXM/IDogS2FsdHVyYUludGVnZXJWYWx1ZVtdO1xuXHRjYWNoZWRPYmplY3RUeXBlPyA6IHN0cmluZztcblx0b2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRzdGFydE9iamVjdEtleT8gOiBzdHJpbmc7XG5cdGVuZE9iamVjdEtleT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSZWNhbGN1bGF0ZVJlc3BvbnNlUHJvZmlsZUNhY2hlSm9iRGF0YSBleHRlbmRzIEthbHR1cmFSZWNhbGN1bGF0ZUNhY2hlSm9iRGF0YSB7XG5cbiAgICBwcm90b2NvbCA6IHN0cmluZztcblx0a3NUeXBlIDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHR1c2VyUm9sZXMgOiBLYWx0dXJhSW50ZWdlclZhbHVlW107XG5cdGNhY2hlZE9iamVjdFR5cGUgOiBzdHJpbmc7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHRzdGFydE9iamVjdEtleSA6IHN0cmluZztcblx0ZW5kT2JqZWN0S2V5IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVjYWxjdWxhdGVSZXNwb25zZVByb2ZpbGVDYWNoZUpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy51c2VyUm9sZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnVzZXJSb2xlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZWNhbGN1bGF0ZVJlc3BvbnNlUHJvZmlsZUNhY2hlSm9iRGF0YScgfSxcblx0XHRcdFx0cHJvdG9jb2wgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0a3NUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlc3Npb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZXNzaW9uVHlwZScgfSxcblx0XHRcdFx0dXNlclJvbGVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdlclZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFJbnRlZ2VyVmFsdWUnIH0sXG5cdFx0XHRcdGNhY2hlZE9iamVjdFR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRPYmplY3RLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kT2JqZWN0S2V5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZWNhbGN1bGF0ZVJlc3BvbnNlUHJvZmlsZUNhY2hlSm9iRGF0YSddID0gS2FsdHVyYVJlY2FsY3VsYXRlUmVzcG9uc2VQcm9maWxlQ2FjaGVKb2JEYXRhOyJdfQ==