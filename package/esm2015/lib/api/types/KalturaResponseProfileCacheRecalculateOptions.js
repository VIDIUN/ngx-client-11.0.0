/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaResponseProfileCacheRecalculateOptionsArgs() { }
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateOptionsArgs.prototype.limit;
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateOptionsArgs.prototype.cachedObjectType;
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateOptionsArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateOptionsArgs.prototype.startObjectKey;
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateOptionsArgs.prototype.endObjectKey;
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateOptionsArgs.prototype.jobCreatedAt;
/** @type {?|undefined} */
KalturaResponseProfileCacheRecalculateOptionsArgs.prototype.isFirstLoop;
export class KalturaResponseProfileCacheRecalculateOptions extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaResponseProfileCacheRecalculateOptions' },
            limit: { type: 'n' },
            cachedObjectType: { type: 's' },
            objectId: { type: 's' },
            startObjectKey: { type: 's' },
            endObjectKey: { type: 's' },
            jobCreatedAt: { type: 'd' },
            isFirstLoop: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateOptions.prototype.limit;
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateOptions.prototype.cachedObjectType;
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateOptions.prototype.objectId;
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateOptions.prototype.startObjectKey;
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateOptions.prototype.endObjectKey;
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateOptions.prototype.jobCreatedAt;
    /** @type {?} */
    KalturaResponseProfileCacheRecalculateOptions.prototype.isFirstLoop;
}
typesMappingStorage['KalturaResponseProfileCacheRecalculateOptions'] = KalturaResponseProfileCacheRecalculateOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZU9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEYsTUFBTSxvREFBcUQsU0FBUSxpQkFBaUI7Ozs7SUFVaEYsWUFBWSxJQUF5RDtRQUVqRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQ0FBK0MsQ0FBQyxHQUFHLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZU9wdGlvbnNBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbGltaXQ/IDogbnVtYmVyO1xuXHRjYWNoZWRPYmplY3RUeXBlPyA6IHN0cmluZztcblx0b2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRzdGFydE9iamVjdEtleT8gOiBzdHJpbmc7XG5cdGVuZE9iamVjdEtleT8gOiBzdHJpbmc7XG5cdGpvYkNyZWF0ZWRBdD8gOiBEYXRlO1xuXHRpc0ZpcnN0TG9vcD8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZU9wdGlvbnMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBsaW1pdCA6IG51bWJlcjtcblx0Y2FjaGVkT2JqZWN0VHlwZSA6IHN0cmluZztcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdHN0YXJ0T2JqZWN0S2V5IDogc3RyaW5nO1xuXHRlbmRPYmplY3RLZXkgOiBzdHJpbmc7XG5cdGpvYkNyZWF0ZWRBdCA6IERhdGU7XG5cdGlzRmlyc3RMb29wIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlT3B0aW9ucycgfSxcblx0XHRcdFx0bGltaXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2FjaGVkT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGFydE9iamVjdEtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmRPYmplY3RLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0am9iQ3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGlzRmlyc3RMb29wIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlT3B0aW9ucyddID0gS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zOyJdfQ==