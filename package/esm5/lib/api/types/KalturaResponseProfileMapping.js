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
export function KalturaResponseProfileMappingArgs() { }
/** @type {?|undefined} */
KalturaResponseProfileMappingArgs.prototype.parentProperty;
/** @type {?|undefined} */
KalturaResponseProfileMappingArgs.prototype.filterProperty;
/** @type {?|undefined} */
KalturaResponseProfileMappingArgs.prototype.allowNull;
var KalturaResponseProfileMapping = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaResponseProfileMapping, _super);
    function KalturaResponseProfileMapping(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaResponseProfileMapping.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaResponseProfileMapping' },
            parentProperty: { type: 's' },
            filterProperty: { type: 's' },
            allowNull: { type: 'b' }
        });
        return result;
    };
    return KalturaResponseProfileMapping;
}(KalturaObjectBase));
export { KalturaResponseProfileMapping };
if (false) {
    /** @type {?} */
    KalturaResponseProfileMapping.prototype.parentProperty;
    /** @type {?} */
    KalturaResponseProfileMapping.prototype.filterProperty;
    /** @type {?} */
    KalturaResponseProfileMapping.prototype.allowNull;
}
typesMappingStorage['KalturaResponseProfileMapping'] = KalturaResponseProfileMapping;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSZXNwb25zZVByb2ZpbGVNYXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsSUFBQTtJQUFtRCx5REFBaUI7SUFNaEUsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQW5DTDtFQVdtRCxpQkFBaUIsRUF5Qm5FLENBQUE7QUF6QkQseUNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTWFwcGluZ0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwYXJlbnRQcm9wZXJ0eT8gOiBzdHJpbmc7XG5cdGZpbHRlclByb3BlcnR5PyA6IHN0cmluZztcblx0YWxsb3dOdWxsPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSZXNwb25zZVByb2ZpbGVNYXBwaW5nIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcGFyZW50UHJvcGVydHkgOiBzdHJpbmc7XG5cdGZpbHRlclByb3BlcnR5IDogc3RyaW5nO1xuXHRhbGxvd051bGwgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTWFwcGluZ0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlTWFwcGluZycgfSxcblx0XHRcdFx0cGFyZW50UHJvcGVydHkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsdGVyUHJvcGVydHkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dOdWxsIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZXNwb25zZVByb2ZpbGVNYXBwaW5nJ10gPSBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTWFwcGluZzsiXX0=