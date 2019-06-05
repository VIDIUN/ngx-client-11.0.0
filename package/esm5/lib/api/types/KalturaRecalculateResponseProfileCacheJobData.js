/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaRecalculateResponseProfileCacheJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRecalculateResponseProfileCacheJobData, _super);
    function KalturaRecalculateResponseProfileCacheJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.userRoles === 'undefined')
            _this.userRoles = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaRecalculateResponseProfileCacheJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaRecalculateResponseProfileCacheJobData;
}(KalturaRecalculateCacheJobData));
export { KalturaRecalculateResponseProfileCacheJobData };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlY2FsY3VsYXRlUmVzcG9uc2VQcm9maWxlQ2FjaGVKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVjYWxjdWxhdGVSZXNwb25zZVByb2ZpbGVDYWNoZUpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDhCQUE4QixFQUFzQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXRILElBQUE7SUFBbUUseUVBQThCO0lBVTdGLHVEQUFZLElBQXlEO1FBQXJFLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7O0tBQ2xFOzs7O0lBRVMsb0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0NBQStDLEVBQUU7WUFDbEcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUNqRyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUNyRyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3REFsREw7RUFpQm1FLDhCQUE4QixFQWtDaEcsQ0FBQTtBQWxDRCx5REFrQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0NBQStDLENBQUMsR0FBRyw2Q0FBNkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2Vzc2lvblR5cGUgfSBmcm9tICcuL0thbHR1cmFTZXNzaW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdlclZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdlclZhbHVlJztcbmltcG9ydCB7IEthbHR1cmFSZWNhbGN1bGF0ZUNhY2hlSm9iRGF0YSwgS2FsdHVyYVJlY2FsY3VsYXRlQ2FjaGVKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlY2FsY3VsYXRlQ2FjaGVKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVjYWxjdWxhdGVSZXNwb25zZVByb2ZpbGVDYWNoZUpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFSZWNhbGN1bGF0ZUNhY2hlSm9iRGF0YUFyZ3Mge1xuICAgIHByb3RvY29sPyA6IHN0cmluZztcblx0a3NUeXBlPyA6IEthbHR1cmFTZXNzaW9uVHlwZTtcblx0dXNlclJvbGVzPyA6IEthbHR1cmFJbnRlZ2VyVmFsdWVbXTtcblx0Y2FjaGVkT2JqZWN0VHlwZT8gOiBzdHJpbmc7XG5cdG9iamVjdElkPyA6IHN0cmluZztcblx0c3RhcnRPYmplY3RLZXk/IDogc3RyaW5nO1xuXHRlbmRPYmplY3RLZXk/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVjYWxjdWxhdGVSZXNwb25zZVByb2ZpbGVDYWNoZUpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhUmVjYWxjdWxhdGVDYWNoZUpvYkRhdGEge1xuXG4gICAgcHJvdG9jb2wgOiBzdHJpbmc7XG5cdGtzVHlwZSA6IEthbHR1cmFTZXNzaW9uVHlwZTtcblx0dXNlclJvbGVzIDogS2FsdHVyYUludGVnZXJWYWx1ZVtdO1xuXHRjYWNoZWRPYmplY3RUeXBlIDogc3RyaW5nO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0c3RhcnRPYmplY3RLZXkgOiBzdHJpbmc7XG5cdGVuZE9iamVjdEtleSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVJlY2FsY3VsYXRlUmVzcG9uc2VQcm9maWxlQ2FjaGVKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXNlclJvbGVzID09PSAndW5kZWZpbmVkJykgdGhpcy51c2VyUm9sZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVjYWxjdWxhdGVSZXNwb25zZVByb2ZpbGVDYWNoZUpvYkRhdGEnIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGtzVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXNzaW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2Vzc2lvblR5cGUnIH0sXG5cdFx0XHRcdHVzZXJSb2xlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUludGVnZXJWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhSW50ZWdlclZhbHVlJyB9LFxuXHRcdFx0XHRjYWNoZWRPYmplY3RUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXJ0T2JqZWN0S2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZE9iamVjdEtleSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVjYWxjdWxhdGVSZXNwb25zZVByb2ZpbGVDYWNoZUpvYkRhdGEnXSA9IEthbHR1cmFSZWNhbGN1bGF0ZVJlc3BvbnNlUHJvZmlsZUNhY2hlSm9iRGF0YTsiXX0=