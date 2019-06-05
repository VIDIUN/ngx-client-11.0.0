/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultCategoryUserArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.categoryId;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.categoryReferenceId;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.userId;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.permissionLevel;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.updateMethod;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.requiredObjectStatus;
var KalturaBulkUploadResultCategoryUser = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadResultCategoryUser, _super);
    function KalturaBulkUploadResultCategoryUser(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadResultCategoryUser.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadResultCategoryUser' },
            categoryId: { type: 'n' },
            categoryReferenceId: { type: 's' },
            userId: { type: 's' },
            permissionLevel: { type: 'n' },
            updateMethod: { type: 'n' },
            requiredObjectStatus: { type: 'n' }
        });
        return result;
    };
    return KalturaBulkUploadResultCategoryUser;
}(KalturaBulkUploadResult));
export { KalturaBulkUploadResultCategoryUser };
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.categoryId;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.categoryReferenceId;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.userId;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.permissionLevel;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.updateMethod;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.requiredObjectStatus;
}
typesMappingStorage['KalturaBulkUploadResultCategoryUser'] = KalturaBulkUploadResultCategoryUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeVVzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZakcsSUFBQTtJQUF5RCwrREFBdUI7SUFTNUUsNkNBQVksSUFBK0M7ZUFFdkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4Q0E1Q0w7RUFjeUQsdUJBQXVCLEVBK0IvRSxDQUFBO0FBL0JELCtDQStCQzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCwgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeVVzZXJBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB7XG4gICAgY2F0ZWdvcnlJZD8gOiBudW1iZXI7XG5cdGNhdGVnb3J5UmVmZXJlbmNlSWQ/IDogc3RyaW5nO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTGV2ZWw/IDogbnVtYmVyO1xuXHR1cGRhdGVNZXRob2Q/IDogbnVtYmVyO1xuXHRyZXF1aXJlZE9iamVjdFN0YXR1cz8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlVc2VyIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQge1xuXG4gICAgY2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0Y2F0ZWdvcnlSZWZlcmVuY2VJZCA6IHN0cmluZztcblx0dXNlcklkIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTGV2ZWwgOiBudW1iZXI7XG5cdHVwZGF0ZU1ldGhvZCA6IG51bWJlcjtcblx0cmVxdWlyZWRPYmplY3RTdGF0dXMgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlVc2VyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlVc2VyJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNhdGVnb3J5UmVmZXJlbmNlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25MZXZlbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1cGRhdGVNZXRob2QgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVxdWlyZWRPYmplY3RTdGF0dXMgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeVVzZXInXSA9IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlVc2VyOyJdfQ==