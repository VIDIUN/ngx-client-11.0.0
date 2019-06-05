/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryBaseFilter } from './KalturaCategoryBaseFilter';
/**
 * @record
 */
export function KalturaCategoryFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.freeText;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.membersIn;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.nameOrReferenceIdStartsWith;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.managerEqual;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.memberEqual;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.fullNameStartsWithIn;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.ancestorIdIn;
/** @type {?|undefined} */
KalturaCategoryFilterArgs.prototype.idOrInheritedParentIdIn;
var KalturaCategoryFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryFilter, _super);
    function KalturaCategoryFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryFilter' },
            freeText: { type: 's' },
            membersIn: { type: 's' },
            nameOrReferenceIdStartsWith: { type: 's' },
            managerEqual: { type: 's' },
            memberEqual: { type: 's' },
            fullNameStartsWithIn: { type: 's' },
            ancestorIdIn: { type: 's' },
            idOrInheritedParentIdIn: { type: 's' }
        });
        return result;
    };
    return KalturaCategoryFilter;
}(KalturaCategoryBaseFilter));
export { KalturaCategoryFilter };
if (false) {
    /** @type {?} */
    KalturaCategoryFilter.prototype.freeText;
    /** @type {?} */
    KalturaCategoryFilter.prototype.membersIn;
    /** @type {?} */
    KalturaCategoryFilter.prototype.nameOrReferenceIdStartsWith;
    /** @type {?} */
    KalturaCategoryFilter.prototype.managerEqual;
    /** @type {?} */
    KalturaCategoryFilter.prototype.memberEqual;
    /** @type {?} */
    KalturaCategoryFilter.prototype.fullNameStartsWithIn;
    /** @type {?} */
    KalturaCategoryFilter.prototype.ancestorIdIn;
    /** @type {?} */
    KalturaCategoryFilter.prototype.idOrInheritedParentIdIn;
}
typesMappingStorage['KalturaCategoryFilter'] = KalturaCategoryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnlGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjdkcsSUFBQTtJQUEyQyxpREFBeUI7SUFXaEUsK0JBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qix1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0FsREw7RUFnQjJDLHlCQUF5QixFQW1DbkUsQ0FBQTtBQW5DRCxpQ0FtQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeUJhc2VGaWx0ZXIsIEthbHR1cmFDYXRlZ29yeUJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2F0ZWdvcnlGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDYXRlZ29yeUJhc2VGaWx0ZXJBcmdzIHtcbiAgICBmcmVlVGV4dD8gOiBzdHJpbmc7XG5cdG1lbWJlcnNJbj8gOiBzdHJpbmc7XG5cdG5hbWVPclJlZmVyZW5jZUlkU3RhcnRzV2l0aD8gOiBzdHJpbmc7XG5cdG1hbmFnZXJFcXVhbD8gOiBzdHJpbmc7XG5cdG1lbWJlckVxdWFsPyA6IHN0cmluZztcblx0ZnVsbE5hbWVTdGFydHNXaXRoSW4/IDogc3RyaW5nO1xuXHRhbmNlc3RvcklkSW4/IDogc3RyaW5nO1xuXHRpZE9ySW5oZXJpdGVkUGFyZW50SWRJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXRlZ29yeUZpbHRlciBleHRlbmRzIEthbHR1cmFDYXRlZ29yeUJhc2VGaWx0ZXIge1xuXG4gICAgZnJlZVRleHQgOiBzdHJpbmc7XG5cdG1lbWJlcnNJbiA6IHN0cmluZztcblx0bmFtZU9yUmVmZXJlbmNlSWRTdGFydHNXaXRoIDogc3RyaW5nO1xuXHRtYW5hZ2VyRXF1YWwgOiBzdHJpbmc7XG5cdG1lbWJlckVxdWFsIDogc3RyaW5nO1xuXHRmdWxsTmFtZVN0YXJ0c1dpdGhJbiA6IHN0cmluZztcblx0YW5jZXN0b3JJZEluIDogc3RyaW5nO1xuXHRpZE9ySW5oZXJpdGVkUGFyZW50SWRJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhdGVnb3J5RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeUZpbHRlcicgfSxcblx0XHRcdFx0ZnJlZVRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVtYmVyc0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVPclJlZmVyZW5jZUlkU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYW5hZ2VyRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVtYmVyRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnVsbE5hbWVTdGFydHNXaXRoSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YW5jZXN0b3JJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkT3JJbmhlcml0ZWRQYXJlbnRJZEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeUZpbHRlciddID0gS2FsdHVyYUNhdGVnb3J5RmlsdGVyOyJdfQ==