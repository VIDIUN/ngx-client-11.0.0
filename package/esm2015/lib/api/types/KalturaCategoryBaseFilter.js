/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaCategoryBaseFilter extends KalturaRelatedFilter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDeEYsTUFBTSxnQ0FBaUMsU0FBUSxvQkFBb0I7Ozs7SUEyQy9ELFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ3RILFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN2SCxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDbkgsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUN4SSw4QkFBOEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0MsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHFDQUFxQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0RCxrQ0FBa0MsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkQsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzVHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxrQ0FBa0MsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkQsK0JBQStCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hELGdDQUFnQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqRCxpQ0FBaUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFwcGVhckluTGlzdFR5cGUgfSBmcm9tICcuL0thbHR1cmFBcHBlYXJJbkxpc3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFQcml2YWN5VHlwZSB9IGZyb20gJy4vS2FsdHVyYVByaXZhY3lUeXBlJztcbmltcG9ydCB7IEthbHR1cmFJbmhlcml0YW5jZVR5cGUgfSBmcm9tICcuL0thbHR1cmFJbmhlcml0YW5jZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhQ29udHJpYnV0aW9uUG9saWN5VHlwZSB9IGZyb20gJy4vS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXRlZ29yeUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRpZE5vdEluPyA6IHN0cmluZztcblx0cGFyZW50SWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcmVudElkSW4/IDogc3RyaW5nO1xuXHRkZXB0aEVxdWFsPyA6IG51bWJlcjtcblx0ZnVsbE5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdGZ1bGxOYW1lU3RhcnRzV2l0aD8gOiBzdHJpbmc7XG5cdGZ1bGxOYW1lSW4/IDogc3RyaW5nO1xuXHRmdWxsSWRzRXF1YWw/IDogc3RyaW5nO1xuXHRmdWxsSWRzU3RhcnRzV2l0aD8gOiBzdHJpbmc7XG5cdGZ1bGxJZHNNYXRjaE9yPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHRhZ3NMaWtlPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGFwcGVhckluTGlzdEVxdWFsPyA6IEthbHR1cmFBcHBlYXJJbkxpc3RUeXBlO1xuXHRwcml2YWN5RXF1YWw/IDogS2FsdHVyYVByaXZhY3lUeXBlO1xuXHRwcml2YWN5SW4/IDogc3RyaW5nO1xuXHRpbmhlcml0YW5jZVR5cGVFcXVhbD8gOiBLYWx0dXJhSW5oZXJpdGFuY2VUeXBlO1xuXHRpbmhlcml0YW5jZVR5cGVJbj8gOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkRXF1YWw/IDogc3RyaW5nO1xuXHRyZWZlcmVuY2VJZEVtcHR5PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGNvbnRyaWJ1dGlvblBvbGljeUVxdWFsPyA6IEthbHR1cmFDb250cmlidXRpb25Qb2xpY3lUeXBlO1xuXHRtZW1iZXJzQ291bnRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRtZW1iZXJzQ291bnRMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwZW5kaW5nTWVtYmVyc0NvdW50R3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cGVuZGluZ01lbWJlcnNDb3VudExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHByaXZhY3lDb250ZXh0RXF1YWw/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQ2F0ZWdvcnlTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0aW5oZXJpdGVkUGFyZW50SWRFcXVhbD8gOiBudW1iZXI7XG5cdGluaGVyaXRlZFBhcmVudElkSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVyU29ydFZhbHVlR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lclNvcnRWYWx1ZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGFnZ3JlZ2F0aW9uQ2F0ZWdvcmllc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0YWdncmVnYXRpb25DYXRlZ29yaWVzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdGlkTm90SW4gOiBzdHJpbmc7XG5cdHBhcmVudElkRXF1YWwgOiBudW1iZXI7XG5cdHBhcmVudElkSW4gOiBzdHJpbmc7XG5cdGRlcHRoRXF1YWwgOiBudW1iZXI7XG5cdGZ1bGxOYW1lRXF1YWwgOiBzdHJpbmc7XG5cdGZ1bGxOYW1lU3RhcnRzV2l0aCA6IHN0cmluZztcblx0ZnVsbE5hbWVJbiA6IHN0cmluZztcblx0ZnVsbElkc0VxdWFsIDogc3RyaW5nO1xuXHRmdWxsSWRzU3RhcnRzV2l0aCA6IHN0cmluZztcblx0ZnVsbElkc01hdGNoT3IgOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHRhZ3NMaWtlIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGFwcGVhckluTGlzdEVxdWFsIDogS2FsdHVyYUFwcGVhckluTGlzdFR5cGU7XG5cdHByaXZhY3lFcXVhbCA6IEthbHR1cmFQcml2YWN5VHlwZTtcblx0cHJpdmFjeUluIDogc3RyaW5nO1xuXHRpbmhlcml0YW5jZVR5cGVFcXVhbCA6IEthbHR1cmFJbmhlcml0YW5jZVR5cGU7XG5cdGluaGVyaXRhbmNlVHlwZUluIDogc3RyaW5nO1xuXHRyZWZlcmVuY2VJZEVxdWFsIDogc3RyaW5nO1xuXHRyZWZlcmVuY2VJZEVtcHR5IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0Y29udHJpYnV0aW9uUG9saWN5RXF1YWwgOiBLYWx0dXJhQ29udHJpYnV0aW9uUG9saWN5VHlwZTtcblx0bWVtYmVyc0NvdW50R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRtZW1iZXJzQ291bnRMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHBlbmRpbmdNZW1iZXJzQ291bnRHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHBlbmRpbmdNZW1iZXJzQ291bnRMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHByaXZhY3lDb250ZXh0RXF1YWwgOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUNhdGVnb3J5U3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0aW5oZXJpdGVkUGFyZW50SWRFcXVhbCA6IG51bWJlcjtcblx0aW5oZXJpdGVkUGFyZW50SWRJbiA6IHN0cmluZztcblx0cGFydG5lclNvcnRWYWx1ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lclNvcnRWYWx1ZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0YWdncmVnYXRpb25DYXRlZ29yaWVzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGFnZ3JlZ2F0aW9uQ2F0ZWdvcmllc011bHRpTGlrZUFuZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhdGVnb3J5QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWROb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcmVudElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVwdGhFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmdWxsTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ1bGxOYW1lU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdWxsTmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ1bGxJZHNFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdWxsSWRzU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdWxsSWRzTWF0Y2hPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dGFnc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXBwZWFySW5MaXN0RXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXBwZWFySW5MaXN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXBwZWFySW5MaXN0VHlwZScgfSxcblx0XHRcdFx0cHJpdmFjeUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVByaXZhY3lUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFQcml2YWN5VHlwZScgfSxcblx0XHRcdFx0cHJpdmFjeUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGluaGVyaXRhbmNlVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUluaGVyaXRhbmNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhSW5oZXJpdGFuY2VUeXBlJyB9LFxuXHRcdFx0XHRpbmhlcml0YW5jZVR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWZlcmVuY2VJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkRW1wdHkgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGNvbnRyaWJ1dGlvblBvbGljeUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGUnIH0sXG5cdFx0XHRcdG1lbWJlcnNDb3VudEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZW1iZXJzQ291bnRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGVuZGluZ01lbWJlcnNDb3VudEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwZW5kaW5nTWVtYmVyc0NvdW50TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaXZhY3lDb250ZXh0RXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5U3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbmhlcml0ZWRQYXJlbnRJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGluaGVyaXRlZFBhcmVudElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lclNvcnRWYWx1ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVyU29ydFZhbHVlTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ2F0ZWdvcmllc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ2F0ZWdvcmllc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQ2F0ZWdvcnlCYXNlRmlsdGVyOyJdfQ==