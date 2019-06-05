/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaCategoryUserArgs() { }
/** @type {?|undefined} */
KalturaCategoryUserArgs.prototype.categoryId;
/** @type {?|undefined} */
KalturaCategoryUserArgs.prototype.userId;
/** @type {?|undefined} */
KalturaCategoryUserArgs.prototype.permissionLevel;
/** @type {?|undefined} */
KalturaCategoryUserArgs.prototype.updateMethod;
/** @type {?|undefined} */
KalturaCategoryUserArgs.prototype.permissionNames;
var KalturaCategoryUser = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryUser, _super);
    function KalturaCategoryUser(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryUser.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryUser' },
            categoryId: { type: 'n' },
            userId: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            permissionLevel: { type: 'en', subTypeConstructor: KalturaCategoryUserPermissionLevel, subType: 'KalturaCategoryUserPermissionLevel' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaCategoryUserStatus, subType: 'KalturaCategoryUserStatus' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            updateMethod: { type: 'en', subTypeConstructor: KalturaUpdateMethodType, subType: 'KalturaUpdateMethodType' },
            categoryFullIds: { type: 's', readOnly: true },
            permissionNames: { type: 's' }
        });
        return result;
    };
    return KalturaCategoryUser;
}(KalturaObjectBase));
export { KalturaCategoryUser };
if (false) {
    /** @type {?} */
    KalturaCategoryUser.prototype.categoryId;
    /** @type {?} */
    KalturaCategoryUser.prototype.userId;
    /** @type {?} */
    KalturaCategoryUser.prototype.partnerId;
    /** @type {?} */
    KalturaCategoryUser.prototype.permissionLevel;
    /** @type {?} */
    KalturaCategoryUser.prototype.status;
    /** @type {?} */
    KalturaCategoryUser.prototype.createdAt;
    /** @type {?} */
    KalturaCategoryUser.prototype.updatedAt;
    /** @type {?} */
    KalturaCategoryUser.prototype.updateMethod;
    /** @type {?} */
    KalturaCategoryUser.prototype.categoryFullIds;
    /** @type {?} */
    KalturaCategoryUser.prototype.permissionNames;
}
typesMappingStorage['KalturaCategoryUser'] = KalturaCategoryUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5VXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixJQUFBO0lBQXlDLCtDQUFpQjtJQWF0RCw2QkFBWSxJQUErQjtlQUV2QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hFLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDMUksTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNoSSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ2pILGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNqRCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBdERMO0VBZ0J5QyxpQkFBaUIsRUF1Q3pELENBQUE7QUF2Q0QsK0JBdUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFVcGRhdGVNZXRob2RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVXBkYXRlTWV0aG9kVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhdGVnb3J5VXNlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBjYXRlZ29yeUlkPyA6IG51bWJlcjtcblx0dXNlcklkPyA6IHN0cmluZztcblx0cGVybWlzc2lvbkxldmVsPyA6IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWw7XG5cdHVwZGF0ZU1ldGhvZD8gOiBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZTtcblx0cGVybWlzc2lvbk5hbWVzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5VXNlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGNhdGVnb3J5SWQgOiBudW1iZXI7XG5cdHVzZXJJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRwZXJtaXNzaW9uTGV2ZWwgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHR1cGRhdGVNZXRob2QgOiBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZTtcblx0cmVhZG9ubHkgY2F0ZWdvcnlGdWxsSWRzIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeVVzZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhdGVnb3J5VXNlcicgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGVybWlzc2lvbkxldmVsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCwgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlTWV0aG9kIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGUnIH0sXG5cdFx0XHRcdGNhdGVnb3J5RnVsbElkcyA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25OYW1lcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlVc2VyJ10gPSBLYWx0dXJhQ2F0ZWdvcnlVc2VyOyJdfQ==