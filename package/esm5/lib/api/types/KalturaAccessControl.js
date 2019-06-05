/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaAccessControlArgs() { }
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.name;
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.description;
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaAccessControlArgs.prototype.restrictions;
var KalturaAccessControl = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControl, _super);
    function KalturaAccessControl(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.restrictions === 'undefined')
            _this.restrictions = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControl.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControl' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            description: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            isDefault: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            restrictions: { type: 'a', subTypeConstructor: KalturaBaseRestriction, subType: 'KalturaBaseRestriction' },
            containsUnsuportedRestrictions: { type: 'b', readOnly: true }
        });
        return result;
    };
    return KalturaAccessControl;
}(KalturaObjectBase));
export { KalturaAccessControl };
if (false) {
    /** @type {?} */
    KalturaAccessControl.prototype.id;
    /** @type {?} */
    KalturaAccessControl.prototype.partnerId;
    /** @type {?} */
    KalturaAccessControl.prototype.name;
    /** @type {?} */
    KalturaAccessControl.prototype.systemName;
    /** @type {?} */
    KalturaAccessControl.prototype.description;
    /** @type {?} */
    KalturaAccessControl.prototype.createdAt;
    /** @type {?} */
    KalturaAccessControl.prototype.isDefault;
    /** @type {?} */
    KalturaAccessControl.prototype.restrictions;
    /** @type {?} */
    KalturaAccessControl.prototype.containsUnsuportedRestrictions;
}
typesMappingStorage['KalturaAccessControl'] = KalturaAccessControl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBY2Nlc3NDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLElBQUE7SUFBMEMsZ0RBQWlCO0lBWXZELDhCQUFZLElBQWdDO1FBQTVDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7O0tBQ3hFOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDNUcsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDOUcsOEJBQThCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDdkQsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkFwREw7RUFlMEMsaUJBQWlCLEVBc0MxRCxDQUFBO0FBdENELGdDQXNDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzdHJpY3Rpb24gfSBmcm9tICcuL0thbHR1cmFCYXNlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBY2Nlc3NDb250cm9sQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRpc0RlZmF1bHQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVzdHJpY3Rpb25zPyA6IEthbHR1cmFCYXNlUmVzdHJpY3Rpb25bXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFjY2Vzc0NvbnRyb2wgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0aXNEZWZhdWx0IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVzdHJpY3Rpb25zIDogS2FsdHVyYUJhc2VSZXN0cmljdGlvbltdO1xuXHRyZWFkb25seSBjb250YWluc1Vuc3Vwb3J0ZWRSZXN0cmljdGlvbnMgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc3RyaWN0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucmVzdHJpY3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2wnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGlzRGVmYXVsdCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0cmVzdHJpY3Rpb25zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVJlc3RyaWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlUmVzdHJpY3Rpb24nIH0sXG5cdFx0XHRcdGNvbnRhaW5zVW5zdXBvcnRlZFJlc3RyaWN0aW9ucyA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sJ10gPSBLYWx0dXJhQWNjZXNzQ29udHJvbDsiXX0=