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
export function KalturaBulkDownloadJobDataArgs() { }
/** @type {?|undefined} */
KalturaBulkDownloadJobDataArgs.prototype.entryIds;
/** @type {?|undefined} */
KalturaBulkDownloadJobDataArgs.prototype.flavorParamsId;
/** @type {?|undefined} */
KalturaBulkDownloadJobDataArgs.prototype.puserId;
var KalturaBulkDownloadJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkDownloadJobData, _super);
    function KalturaBulkDownloadJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkDownloadJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkDownloadJobData' },
            entryIds: { type: 's' },
            flavorParamsId: { type: 'n' },
            puserId: { type: 's' }
        });
        return result;
    };
    return KalturaBulkDownloadJobData;
}(KalturaJobData));
export { KalturaBulkDownloadJobData };
if (false) {
    /** @type {?} */
    KalturaBulkDownloadJobData.prototype.entryIds;
    /** @type {?} */
    KalturaBulkDownloadJobData.prototype.flavorParamsId;
    /** @type {?} */
    KalturaBulkDownloadJobData.prototype.puserId;
}
typesMappingStorage['KalturaBulkDownloadJobData'] = KalturaBulkDownloadJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtEb3dubG9hZEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdWxrRG93bmxvYWRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7O0FBU3RFLElBQUE7SUFBZ0Qsc0RBQWM7SUFNMUQsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBbkNMO0VBV2dELGNBQWMsRUF5QjdELENBQUE7QUF6QkQsc0NBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa0Rvd25sb2FkSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBlbnRyeUlkcz8gOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcblx0cHVzZXJJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrRG93bmxvYWRKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgZW50cnlJZHMgOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkIDogbnVtYmVyO1xuXHRwdXNlcklkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa0Rvd25sb2FkSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa0Rvd25sb2FkSm9iRGF0YScgfSxcblx0XHRcdFx0ZW50cnlJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa0Rvd25sb2FkSm9iRGF0YSddID0gS2FsdHVyYUJ1bGtEb3dubG9hZEpvYkRhdGE7Il19