/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserAgentRestrictionType } from './KalturaUserAgentRestrictionType';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
/**
 * @record
 */
export function KalturaUserAgentRestrictionArgs() { }
/** @type {?|undefined} */
KalturaUserAgentRestrictionArgs.prototype.userAgentRestrictionType;
/** @type {?|undefined} */
KalturaUserAgentRestrictionArgs.prototype.userAgentRegexList;
var KalturaUserAgentRestriction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserAgentRestriction, _super);
    function KalturaUserAgentRestriction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserAgentRestriction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserAgentRestriction' },
            userAgentRestrictionType: { type: 'en', subTypeConstructor: KalturaUserAgentRestrictionType, subType: 'KalturaUserAgentRestrictionType' },
            userAgentRegexList: { type: 's' }
        });
        return result;
    };
    return KalturaUserAgentRestriction;
}(KalturaBaseRestriction));
export { KalturaUserAgentRestriction };
if (false) {
    /** @type {?} */
    KalturaUserAgentRestriction.prototype.userAgentRestrictionType;
    /** @type {?} */
    KalturaUserAgentRestriction.prototype.userAgentRegexList;
}
typesMappingStorage['KalturaUserAgentRestriction'] = KalturaUserAgentRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7QUFROUYsSUFBQTtJQUFpRCx1REFBc0I7SUFLbkUscUNBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRix3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQzdJLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQWpDTDtFQVdpRCxzQkFBc0IsRUF1QnRFLENBQUE7QUF2QkQsdUNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzdHJpY3Rpb24sIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZVJlc3RyaWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFCYXNlUmVzdHJpY3Rpb25BcmdzIHtcbiAgICB1c2VyQWdlbnRSZXN0cmljdGlvblR5cGU/IDogS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uVHlwZTtcblx0dXNlckFnZW50UmVnZXhMaXN0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uIGV4dGVuZHMgS2FsdHVyYUJhc2VSZXN0cmljdGlvbiB7XG5cbiAgICB1c2VyQWdlbnRSZXN0cmljdGlvblR5cGUgOiBLYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb25UeXBlO1xuXHR1c2VyQWdlbnRSZWdleExpc3QgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVc2VyQWdlbnRSZXN0cmljdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXNlckFnZW50UmVzdHJpY3Rpb24nIH0sXG5cdFx0XHRcdHVzZXJBZ2VudFJlc3RyaWN0aW9uVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyQWdlbnRSZXN0cmljdGlvblR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uVHlwZScgfSxcblx0XHRcdFx0dXNlckFnZW50UmVnZXhMaXN0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVc2VyQWdlbnRSZXN0cmljdGlvbiddID0gS2FsdHVyYVVzZXJBZ2VudFJlc3RyaWN0aW9uOyJdfQ==