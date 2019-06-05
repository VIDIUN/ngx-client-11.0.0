/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaResponseProfileCacheRecalculateOptions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaResponseProfileCacheRecalculateOptions, _super);
    function KalturaResponseProfileCacheRecalculateOptions(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaResponseProfileCacheRecalculateOptions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaResponseProfileCacheRecalculateOptions;
}(KalturaObjectBase));
export { KalturaResponseProfileCacheRecalculateOptions };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZU9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWxGLElBQUE7SUFBbUUseUVBQWlCO0lBVWhGLHVEQUFZLElBQXlEO2VBRWpFLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0RBL0NMO0VBZW1FLGlCQUFpQixFQWlDbkYsQ0FBQTtBQWpDRCx5REFpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0NBQStDLENBQUMsR0FBRyw2Q0FBNkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGxpbWl0PyA6IG51bWJlcjtcblx0Y2FjaGVkT2JqZWN0VHlwZT8gOiBzdHJpbmc7XG5cdG9iamVjdElkPyA6IHN0cmluZztcblx0c3RhcnRPYmplY3RLZXk/IDogc3RyaW5nO1xuXHRlbmRPYmplY3RLZXk/IDogc3RyaW5nO1xuXHRqb2JDcmVhdGVkQXQ/IDogRGF0ZTtcblx0aXNGaXJzdExvb3A/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgbGltaXQgOiBudW1iZXI7XG5cdGNhY2hlZE9iamVjdFR5cGUgOiBzdHJpbmc7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHRzdGFydE9iamVjdEtleSA6IHN0cmluZztcblx0ZW5kT2JqZWN0S2V5IDogc3RyaW5nO1xuXHRqb2JDcmVhdGVkQXQgOiBEYXRlO1xuXHRpc0ZpcnN0TG9vcCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlT3B0aW9uc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZU9wdGlvbnMnIH0sXG5cdFx0XHRcdGxpbWl0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNhY2hlZE9iamVjdFR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRPYmplY3RLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kT2JqZWN0S2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGpvYkNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRpc0ZpcnN0TG9vcCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZU9wdGlvbnMnXSA9IEthbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlT3B0aW9uczsiXX0=