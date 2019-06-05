/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaVarPartnerUsageItem } from './KalturaVarPartnerUsageItem';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaPartnerUsageListResponseArgs() { }
/** @type {?|undefined} */
KalturaPartnerUsageListResponseArgs.prototype.total;
/** @type {?|undefined} */
KalturaPartnerUsageListResponseArgs.prototype.objects;
var KalturaPartnerUsageListResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPartnerUsageListResponse, _super);
    function KalturaPartnerUsageListResponse(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objects === 'undefined')
            _this.objects = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaPartnerUsageListResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPartnerUsageListResponse' },
            total: { type: 'o', subTypeConstructor: KalturaVarPartnerUsageItem, subType: 'KalturaVarPartnerUsageItem' },
            objects: { type: 'a', subTypeConstructor: KalturaVarPartnerUsageItem, subType: 'KalturaVarPartnerUsageItem' }
        });
        return result;
    };
    return KalturaPartnerUsageListResponse;
}(KalturaListResponse));
export { KalturaPartnerUsageListResponse };
if (false) {
    /** @type {?} */
    KalturaPartnerUsageListResponse.prototype.total;
    /** @type {?} */
    KalturaPartnerUsageListResponse.prototype.objects;
}
typesMappingStorage['KalturaPartnerUsageListResponse'] = KalturaPartnerUsageListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBhcnRuZXJVc2FnZUxpc3RSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBhcnRuZXJVc2FnZUxpc3RSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7OztBQVFyRixJQUFBO0lBQXFELDJEQUFtQjtJQUtwRSx5Q0FBWSxJQUEyQztRQUF2RCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztLQUM5RDs7OztJQUVTLHNEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9HLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1NBQ3hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBbENMO0VBV3FELG1CQUFtQixFQXdCdkUsQ0FBQTtBQXhCRCwyQ0F3QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtIH0gZnJvbSAnLi9LYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbSc7XG5pbXBvcnQgeyBLYWx0dXJhTGlzdFJlc3BvbnNlLCBLYWx0dXJhTGlzdFJlc3BvbnNlQXJncyB9IGZyb20gJy4vS2FsdHVyYUxpc3RSZXNwb25zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBhcnRuZXJVc2FnZUxpc3RSZXNwb25zZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZUFyZ3Mge1xuICAgIHRvdGFsPyA6IEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtO1xuXHRvYmplY3RzPyA6IEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQYXJ0bmVyVXNhZ2VMaXN0UmVzcG9uc2UgZXh0ZW5kcyBLYWx0dXJhTGlzdFJlc3BvbnNlIHtcblxuICAgIHRvdGFsIDogS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW07XG5cdG9iamVjdHMgOiBLYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGFydG5lclVzYWdlTGlzdFJlc3BvbnNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub2JqZWN0cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQYXJ0bmVyVXNhZ2VMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdHRvdGFsIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbScgfSxcblx0XHRcdFx0b2JqZWN0cyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0sIHN1YlR5cGUgOiAnS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQYXJ0bmVyVXNhZ2VMaXN0UmVzcG9uc2UnXSA9IEthbHR1cmFQYXJ0bmVyVXNhZ2VMaXN0UmVzcG9uc2U7Il19