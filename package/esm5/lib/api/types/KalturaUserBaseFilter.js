/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserType } from './KalturaUserType';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaUserBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.screenNameLike;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.screenNameStartsWith;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.emailLike;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.emailStartsWith;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.firstNameStartsWith;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.lastNameStartsWith;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.isAdminEqual;
var KalturaUserBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserBaseFilter, _super);
    function KalturaUserBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserBaseFilter' },
            partnerIdEqual: { type: 'n' },
            typeEqual: { type: 'en', subTypeConstructor: KalturaUserType, subType: 'KalturaUserType' },
            typeIn: { type: 's' },
            screenNameLike: { type: 's' },
            screenNameStartsWith: { type: 's' },
            emailLike: { type: 's' },
            emailStartsWith: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaUserStatus, subType: 'KalturaUserStatus' },
            statusIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            firstNameStartsWith: { type: 's' },
            lastNameStartsWith: { type: 's' },
            isAdminEqual: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaUserBaseFilter;
}(KalturaRelatedFilter));
export { KalturaUserBaseFilter };
if (false) {
    /** @type {?} */
    KalturaUserBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.screenNameLike;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.screenNameStartsWith;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.emailLike;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.emailStartsWith;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.firstNameStartsWith;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.lastNameStartsWith;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.isAdminEqual;
}
typesMappingStorage['KalturaUserBaseFilter'] = KalturaUserBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXNlckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCeEYsSUFBQTtJQUEyQyxpREFBb0I7SUFtQjNELCtCQUFZLElBQWlDO2VBRXpDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDOUYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDcEcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDdEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0E3RUw7RUEyQjJDLG9CQUFvQixFQW1EOUQsQ0FBQTtBQW5ERCxpQ0FtREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlclR5cGUgfSBmcm9tICcuL0thbHR1cmFVc2VyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVVzZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVzZXJCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0dHlwZUVxdWFsPyA6IEthbHR1cmFVc2VyVHlwZTtcblx0dHlwZUluPyA6IHN0cmluZztcblx0c2NyZWVuTmFtZUxpa2U/IDogc3RyaW5nO1xuXHRzY3JlZW5OYW1lU3RhcnRzV2l0aD8gOiBzdHJpbmc7XG5cdGVtYWlsTGlrZT8gOiBzdHJpbmc7XG5cdGVtYWlsU3RhcnRzV2l0aD8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhVXNlclN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdGZpcnN0TmFtZVN0YXJ0c1dpdGg/IDogc3RyaW5nO1xuXHRsYXN0TmFtZVN0YXJ0c1dpdGg/IDogc3RyaW5nO1xuXHRpc0FkbWluRXF1YWw/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVzZXJCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgcGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHR5cGVFcXVhbCA6IEthbHR1cmFVc2VyVHlwZTtcblx0dHlwZUluIDogc3RyaW5nO1xuXHRzY3JlZW5OYW1lTGlrZSA6IHN0cmluZztcblx0c2NyZWVuTmFtZVN0YXJ0c1dpdGggOiBzdHJpbmc7XG5cdGVtYWlsTGlrZSA6IHN0cmluZztcblx0ZW1haWxTdGFydHNXaXRoIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYVVzZXJTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRmaXJzdE5hbWVTdGFydHNXaXRoIDogc3RyaW5nO1xuXHRsYXN0TmFtZVN0YXJ0c1dpdGggOiBzdHJpbmc7XG5cdGlzQWRtaW5FcXVhbCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVc2VyQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXNlckJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVXNlclR5cGUnIH0sXG5cdFx0XHRcdHR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY3JlZW5OYW1lTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY3JlZW5OYW1lU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbWFpbExpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW1haWxTdGFydHNXaXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Zmlyc3ROYW1lU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsYXN0TmFtZVN0YXJ0c1dpdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNBZG1pbkVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXNlckJhc2VGaWx0ZXInXSA9IEthbHR1cmFVc2VyQmFzZUZpbHRlcjsiXX0=