/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAppearInListType } from './KalturaAppearInListType';
import { KalturaPrivacyType } from './KalturaPrivacyType';
import { KalturaInheritanceType } from './KalturaInheritanceType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaContributionPolicyType } from './KalturaContributionPolicyType';
import { KalturaCategoryStatus } from './KalturaCategoryStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaCategoryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.parentIdEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.parentIdIn;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.depthEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.fullNameEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.fullNameStartsWith;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.fullNameIn;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.fullIdsEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.fullIdsStartsWith;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.fullIdsMatchOr;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.appearInListEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.privacyEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.privacyIn;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.inheritanceTypeEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.inheritanceTypeIn;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.referenceIdEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.referenceIdEmpty;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.contributionPolicyEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.membersCountGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.membersCountLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.pendingMembersCountGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.pendingMembersCountLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.privacyContextEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.inheritedParentIdEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.inheritedParentIdIn;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.partnerSortValueGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.partnerSortValueLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.aggregationCategoriesMultiLikeOr;
/** @type {?|undefined} */
KalturaCategoryBaseFilterArgs.prototype.aggregationCategoriesMultiLikeAnd;
var KalturaCategoryBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryBaseFilter, _super);
    function KalturaCategoryBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            parentIdEqual: { type: 'n' },
            parentIdIn: { type: 's' },
            depthEqual: { type: 'n' },
            fullNameEqual: { type: 's' },
            fullNameStartsWith: { type: 's' },
            fullNameIn: { type: 's' },
            fullIdsEqual: { type: 's' },
            fullIdsStartsWith: { type: 's' },
            fullIdsMatchOr: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            appearInListEqual: { type: 'en', subTypeConstructor: KalturaAppearInListType, subType: 'KalturaAppearInListType' },
            privacyEqual: { type: 'en', subTypeConstructor: KalturaPrivacyType, subType: 'KalturaPrivacyType' },
            privacyIn: { type: 's' },
            inheritanceTypeEqual: { type: 'en', subTypeConstructor: KalturaInheritanceType, subType: 'KalturaInheritanceType' },
            inheritanceTypeIn: { type: 's' },
            referenceIdEqual: { type: 's' },
            referenceIdEmpty: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            contributionPolicyEqual: { type: 'en', subTypeConstructor: KalturaContributionPolicyType, subType: 'KalturaContributionPolicyType' },
            membersCountGreaterThanOrEqual: { type: 'n' },
            membersCountLessThanOrEqual: { type: 'n' },
            pendingMembersCountGreaterThanOrEqual: { type: 'n' },
            pendingMembersCountLessThanOrEqual: { type: 'n' },
            privacyContextEqual: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCategoryStatus, subType: 'KalturaCategoryStatus' },
            statusIn: { type: 's' },
            inheritedParentIdEqual: { type: 'n' },
            inheritedParentIdIn: { type: 's' },
            partnerSortValueGreaterThanOrEqual: { type: 'n' },
            partnerSortValueLessThanOrEqual: { type: 'n' },
            aggregationCategoriesMultiLikeOr: { type: 's' },
            aggregationCategoriesMultiLikeAnd: { type: 's' }
        });
        return result;
    };
    return KalturaCategoryBaseFilter;
}(KalturaRelatedFilter));
export { KalturaCategoryBaseFilter };
if (false) {
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.parentIdEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.parentIdIn;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.depthEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.fullNameEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.fullNameStartsWith;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.fullNameIn;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.fullIdsEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.fullIdsStartsWith;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.fullIdsMatchOr;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.appearInListEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.privacyEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.privacyIn;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.inheritanceTypeEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.inheritanceTypeIn;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.referenceIdEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.referenceIdEmpty;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.contributionPolicyEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.membersCountGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.membersCountLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.pendingMembersCountGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.pendingMembersCountLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.privacyContextEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.inheritedParentIdEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.inheritedParentIdIn;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.partnerSortValueGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.partnerSortValueLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.aggregationCategoriesMultiLikeOr;
    /** @type {?} */
    KalturaCategoryBaseFilter.prototype.aggregationCategoriesMultiLikeAnd;
}
typesMappingStorage['KalturaCategoryBaseFilter'] = KalturaCategoryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q3hGLElBQUE7SUFBK0MscURBQW9CO0lBMkMvRCxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFH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WUFDbkQsK0JBQStCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hELGdDQUFnQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqRCxpQ0FBaUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0F4Skw7RUFzRCtDLG9CQUFvQixFQW1HbEUsQ0FBQTtBQW5HRCxxQ0FtR0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXBwZWFySW5MaXN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUFwcGVhckluTGlzdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVByaXZhY3lUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUHJpdmFjeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUluaGVyaXRhbmNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUluaGVyaXRhbmNlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFDb250cmlidXRpb25Qb2xpY3lUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29udHJpYnV0aW9uUG9saWN5VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhdGVnb3J5QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGlkTm90SW4/IDogc3RyaW5nO1xuXHRwYXJlbnRJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFyZW50SWRJbj8gOiBzdHJpbmc7XG5cdGRlcHRoRXF1YWw/IDogbnVtYmVyO1xuXHRmdWxsTmFtZUVxdWFsPyA6IHN0cmluZztcblx0ZnVsbE5hbWVTdGFydHNXaXRoPyA6IHN0cmluZztcblx0ZnVsbE5hbWVJbj8gOiBzdHJpbmc7XG5cdGZ1bGxJZHNFcXVhbD8gOiBzdHJpbmc7XG5cdGZ1bGxJZHNTdGFydHNXaXRoPyA6IHN0cmluZztcblx0ZnVsbElkc01hdGNoT3I/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dGFnc0xpa2U/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0YXBwZWFySW5MaXN0RXF1YWw/IDogS2FsdHVyYUFwcGVhckluTGlzdFR5cGU7XG5cdHByaXZhY3lFcXVhbD8gOiBLYWx0dXJhUHJpdmFjeVR5cGU7XG5cdHByaXZhY3lJbj8gOiBzdHJpbmc7XG5cdGluaGVyaXRhbmNlVHlwZUVxdWFsPyA6IEthbHR1cmFJbmhlcml0YW5jZVR5cGU7XG5cdGluaGVyaXRhbmNlVHlwZUluPyA6IHN0cmluZztcblx0cmVmZXJlbmNlSWRFcXVhbD8gOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkRW1wdHk/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0Y29udHJpYnV0aW9uUG9saWN5RXF1YWw/IDogS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGU7XG5cdG1lbWJlcnNDb3VudEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdG1lbWJlcnNDb3VudExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHBlbmRpbmdNZW1iZXJzQ291bnRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwZW5kaW5nTWVtYmVyc0NvdW50TGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cHJpdmFjeUNvbnRleHRFcXVhbD8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFDYXRlZ29yeVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRpbmhlcml0ZWRQYXJlbnRJZEVxdWFsPyA6IG51bWJlcjtcblx0aW5oZXJpdGVkUGFyZW50SWRJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJTb3J0VmFsdWVHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVyU29ydFZhbHVlTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0YWdncmVnYXRpb25DYXRlZ29yaWVzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRhZ2dyZWdhdGlvbkNhdGVnb3JpZXNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0aWROb3RJbiA6IHN0cmluZztcblx0cGFyZW50SWRFcXVhbCA6IG51bWJlcjtcblx0cGFyZW50SWRJbiA6IHN0cmluZztcblx0ZGVwdGhFcXVhbCA6IG51bWJlcjtcblx0ZnVsbE5hbWVFcXVhbCA6IHN0cmluZztcblx0ZnVsbE5hbWVTdGFydHNXaXRoIDogc3RyaW5nO1xuXHRmdWxsTmFtZUluIDogc3RyaW5nO1xuXHRmdWxsSWRzRXF1YWwgOiBzdHJpbmc7XG5cdGZ1bGxJZHNTdGFydHNXaXRoIDogc3RyaW5nO1xuXHRmdWxsSWRzTWF0Y2hPciA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dGFnc0xpa2UgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0YXBwZWFySW5MaXN0RXF1YWwgOiBLYWx0dXJhQXBwZWFySW5MaXN0VHlwZTtcblx0cHJpdmFjeUVxdWFsIDogS2FsdHVyYVByaXZhY3lUeXBlO1xuXHRwcml2YWN5SW4gOiBzdHJpbmc7XG5cdGluaGVyaXRhbmNlVHlwZUVxdWFsIDogS2FsdHVyYUluaGVyaXRhbmNlVHlwZTtcblx0aW5oZXJpdGFuY2VUeXBlSW4gOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkRXF1YWwgOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkRW1wdHkgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRjb250cmlidXRpb25Qb2xpY3lFcXVhbCA6IEthbHR1cmFDb250cmlidXRpb25Qb2xpY3lUeXBlO1xuXHRtZW1iZXJzQ291bnRHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdG1lbWJlcnNDb3VudExlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cGVuZGluZ01lbWJlcnNDb3VudEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cGVuZGluZ01lbWJlcnNDb3VudExlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cHJpdmFjeUNvbnRleHRFcXVhbCA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhQ2F0ZWdvcnlTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRpbmhlcml0ZWRQYXJlbnRJZEVxdWFsIDogbnVtYmVyO1xuXHRpbmhlcml0ZWRQYXJlbnRJZEluIDogc3RyaW5nO1xuXHRwYXJ0bmVyU29ydFZhbHVlR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVyU29ydFZhbHVlTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRhZ2dyZWdhdGlvbkNhdGVnb3JpZXNNdWx0aUxpa2VPciA6IHN0cmluZztcblx0YWdncmVnYXRpb25DYXRlZ29yaWVzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudElkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFyZW50SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXB0aEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZ1bGxOYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnVsbE5hbWVTdGFydHNXaXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ1bGxOYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnVsbElkc0VxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ1bGxJZHNTdGFydHNXaXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ1bGxJZHNNYXRjaE9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR0YWdzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhcHBlYXJJbkxpc3RFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBcHBlYXJJbkxpc3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBcHBlYXJJbkxpc3RUeXBlJyB9LFxuXHRcdFx0XHRwcml2YWN5RXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUHJpdmFjeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVByaXZhY3lUeXBlJyB9LFxuXHRcdFx0XHRwcml2YWN5SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aW5oZXJpdGFuY2VUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW5oZXJpdGFuY2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFJbmhlcml0YW5jZVR5cGUnIH0sXG5cdFx0XHRcdGluaGVyaXRhbmNlVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVmZXJlbmNlSWRFbXB0eSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0Y29udHJpYnV0aW9uUG9saWN5RXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udHJpYnV0aW9uUG9saWN5VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udHJpYnV0aW9uUG9saWN5VHlwZScgfSxcblx0XHRcdFx0bWVtYmVyc0NvdW50R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1lbWJlcnNDb3VudExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwZW5kaW5nTWVtYmVyc0NvdW50R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBlbmRpbmdNZW1iZXJzQ291bnRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpdmFjeUNvbnRleHRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGluaGVyaXRlZFBhcmVudElkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aW5oZXJpdGVkUGFyZW50SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyU29ydFZhbHVlR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJTb3J0VmFsdWVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWdncmVnYXRpb25DYXRlZ29yaWVzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWdncmVnYXRpb25DYXRlZ29yaWVzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeUJhc2VGaWx0ZXInXSA9IEthbHR1cmFDYXRlZ29yeUJhc2VGaWx0ZXI7Il19