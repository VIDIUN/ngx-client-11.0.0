/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAppearInListType } from './KalturaAppearInListType';
import { KalturaPrivacyType } from './KalturaPrivacyType';
import { KalturaInheritanceType } from './KalturaInheritanceType';
import { KalturaUserJoinPolicyType } from './KalturaUserJoinPolicyType';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaContributionPolicyType } from './KalturaContributionPolicyType';
import { KalturaCategoryStatus } from './KalturaCategoryStatus';
import { KalturaCategoryOrderBy } from './KalturaCategoryOrderBy';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaCategoryArgs() { }
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.parentId;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.name;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.description;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.tags;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.appearInList;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.privacy;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.inheritanceType;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.defaultPermissionLevel;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.owner;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.referenceId;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.contributionPolicy;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.privacyContext;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.partnerSortValue;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.partnerData;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.defaultOrderBy;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.moderation;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.isAggregationCategory;
/** @type {?|undefined} */
KalturaCategoryArgs.prototype.aggregationCategories;
var KalturaCategory = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategory, _super);
    function KalturaCategory(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategory.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategory' },
            id: { type: 'n', readOnly: true },
            parentId: { type: 'n' },
            depth: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            fullName: { type: 's', readOnly: true },
            fullIds: { type: 's', readOnly: true },
            entriesCount: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            description: { type: 's' },
            tags: { type: 's' },
            appearInList: { type: 'en', subTypeConstructor: KalturaAppearInListType, subType: 'KalturaAppearInListType' },
            privacy: { type: 'en', subTypeConstructor: KalturaPrivacyType, subType: 'KalturaPrivacyType' },
            inheritanceType: { type: 'en', subTypeConstructor: KalturaInheritanceType, subType: 'KalturaInheritanceType' },
            userJoinPolicy: { type: 'en', readOnly: true, subTypeConstructor: KalturaUserJoinPolicyType, subType: 'KalturaUserJoinPolicyType' },
            defaultPermissionLevel: { type: 'en', subTypeConstructor: KalturaCategoryUserPermissionLevel, subType: 'KalturaCategoryUserPermissionLevel' },
            owner: { type: 's' },
            directEntriesCount: { type: 'n', readOnly: true },
            referenceId: { type: 's' },
            contributionPolicy: { type: 'en', subTypeConstructor: KalturaContributionPolicyType, subType: 'KalturaContributionPolicyType' },
            membersCount: { type: 'n', readOnly: true },
            pendingMembersCount: { type: 'n', readOnly: true },
            privacyContext: { type: 's' },
            privacyContexts: { type: 's', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaCategoryStatus, subType: 'KalturaCategoryStatus' },
            inheritedParentId: { type: 'n', readOnly: true },
            partnerSortValue: { type: 'n' },
            partnerData: { type: 's' },
            defaultOrderBy: { type: 'es', subTypeConstructor: KalturaCategoryOrderBy, subType: 'KalturaCategoryOrderBy' },
            directSubCategoriesCount: { type: 'n', readOnly: true },
            moderation: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            pendingEntriesCount: { type: 'n', readOnly: true },
            isAggregationCategory: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            aggregationCategories: { type: 's' }
        });
        return result;
    };
    return KalturaCategory;
}(KalturaObjectBase));
export { KalturaCategory };
if (false) {
    /** @type {?} */
    KalturaCategory.prototype.id;
    /** @type {?} */
    KalturaCategory.prototype.parentId;
    /** @type {?} */
    KalturaCategory.prototype.depth;
    /** @type {?} */
    KalturaCategory.prototype.partnerId;
    /** @type {?} */
    KalturaCategory.prototype.name;
    /** @type {?} */
    KalturaCategory.prototype.fullName;
    /** @type {?} */
    KalturaCategory.prototype.fullIds;
    /** @type {?} */
    KalturaCategory.prototype.entriesCount;
    /** @type {?} */
    KalturaCategory.prototype.createdAt;
    /** @type {?} */
    KalturaCategory.prototype.updatedAt;
    /** @type {?} */
    KalturaCategory.prototype.description;
    /** @type {?} */
    KalturaCategory.prototype.tags;
    /** @type {?} */
    KalturaCategory.prototype.appearInList;
    /** @type {?} */
    KalturaCategory.prototype.privacy;
    /** @type {?} */
    KalturaCategory.prototype.inheritanceType;
    /** @type {?} */
    KalturaCategory.prototype.userJoinPolicy;
    /** @type {?} */
    KalturaCategory.prototype.defaultPermissionLevel;
    /** @type {?} */
    KalturaCategory.prototype.owner;
    /** @type {?} */
    KalturaCategory.prototype.directEntriesCount;
    /** @type {?} */
    KalturaCategory.prototype.referenceId;
    /** @type {?} */
    KalturaCategory.prototype.contributionPolicy;
    /** @type {?} */
    KalturaCategory.prototype.membersCount;
    /** @type {?} */
    KalturaCategory.prototype.pendingMembersCount;
    /** @type {?} */
    KalturaCategory.prototype.privacyContext;
    /** @type {?} */
    KalturaCategory.prototype.privacyContexts;
    /** @type {?} */
    KalturaCategory.prototype.status;
    /** @type {?} */
    KalturaCategory.prototype.inheritedParentId;
    /** @type {?} */
    KalturaCategory.prototype.partnerSortValue;
    /** @type {?} */
    KalturaCategory.prototype.partnerData;
    /** @type {?} */
    KalturaCategory.prototype.defaultOrderBy;
    /** @type {?} */
    KalturaCategory.prototype.directSubCategoriesCount;
    /** @type {?} */
    KalturaCategory.prototype.moderation;
    /** @type {?} */
    KalturaCategory.prototype.pendingEntriesCount;
    /** @type {?} */
    KalturaCategory.prototype.isAggregationCategory;
    /** @type {?} */
    KalturaCategory.prototype.aggregationCategories;
}
typesMappingStorage['KalturaCategory'] = KalturaCategory;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCbEYsSUFBQTtJQUFxQywyQ0FBaUI7SUFzQ2xELHlCQUFZLElBQTJCO2VBRW5DLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDcEUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3ZDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzlDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ2pILE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ2xHLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ2xILGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDeEksc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNqSixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BELFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNuSSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDOUMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDckQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDakQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN4SCxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNuRCxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNqSCx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxRCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM3RyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNyRCxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hILHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM3QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQTNITDtFQW1DcUMsaUJBQWlCLEVBeUZyRCxDQUFBO0FBekZELDJCQXlGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBcHBlYXJJbkxpc3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQXBwZWFySW5MaXN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUHJpdmFjeVR5cGUgfSBmcm9tICcuL0thbHR1cmFQcml2YWN5VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW5oZXJpdGFuY2VUeXBlIH0gZnJvbSAnLi9LYWx0dXJhSW5oZXJpdGFuY2VUeXBlJztcbmltcG9ydCB7IEthbHR1cmFVc2VySm9pblBvbGljeVR5cGUgfSBmcm9tICcuL0thbHR1cmFVc2VySm9pblBvbGljeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udHJpYnV0aW9uUG9saWN5VHlwZSB9IGZyb20gJy4vS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5T3JkZXJCeSB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5T3JkZXJCeSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2F0ZWdvcnlBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcGFyZW50SWQ/IDogbnVtYmVyO1xuXHRuYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0YXBwZWFySW5MaXN0PyA6IEthbHR1cmFBcHBlYXJJbkxpc3RUeXBlO1xuXHRwcml2YWN5PyA6IEthbHR1cmFQcml2YWN5VHlwZTtcblx0aW5oZXJpdGFuY2VUeXBlPyA6IEthbHR1cmFJbmhlcml0YW5jZVR5cGU7XG5cdGRlZmF1bHRQZXJtaXNzaW9uTGV2ZWw/IDogS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbDtcblx0b3duZXI/IDogc3RyaW5nO1xuXHRyZWZlcmVuY2VJZD8gOiBzdHJpbmc7XG5cdGNvbnRyaWJ1dGlvblBvbGljeT8gOiBLYWx0dXJhQ29udHJpYnV0aW9uUG9saWN5VHlwZTtcblx0cHJpdmFjeUNvbnRleHQ/IDogc3RyaW5nO1xuXHRwYXJ0bmVyU29ydFZhbHVlPyA6IG51bWJlcjtcblx0cGFydG5lckRhdGE/IDogc3RyaW5nO1xuXHRkZWZhdWx0T3JkZXJCeT8gOiBLYWx0dXJhQ2F0ZWdvcnlPcmRlckJ5O1xuXHRtb2RlcmF0aW9uPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGlzQWdncmVnYXRpb25DYXRlZ29yeT8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRhZ2dyZWdhdGlvbkNhdGVnb3JpZXM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2F0ZWdvcnkgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cGFyZW50SWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGRlcHRoIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGZ1bGxOYW1lIDogc3RyaW5nO1xuXHRyZWFkb25seSBmdWxsSWRzIDogc3RyaW5nO1xuXHRyZWFkb25seSBlbnRyaWVzQ291bnQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRhcHBlYXJJbkxpc3QgOiBLYWx0dXJhQXBwZWFySW5MaXN0VHlwZTtcblx0cHJpdmFjeSA6IEthbHR1cmFQcml2YWN5VHlwZTtcblx0aW5oZXJpdGFuY2VUeXBlIDogS2FsdHVyYUluaGVyaXRhbmNlVHlwZTtcblx0cmVhZG9ubHkgdXNlckpvaW5Qb2xpY3kgOiBLYWx0dXJhVXNlckpvaW5Qb2xpY3lUeXBlO1xuXHRkZWZhdWx0UGVybWlzc2lvbkxldmVsIDogS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbDtcblx0b3duZXIgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGRpcmVjdEVudHJpZXNDb3VudCA6IG51bWJlcjtcblx0cmVmZXJlbmNlSWQgOiBzdHJpbmc7XG5cdGNvbnRyaWJ1dGlvblBvbGljeSA6IEthbHR1cmFDb250cmlidXRpb25Qb2xpY3lUeXBlO1xuXHRyZWFkb25seSBtZW1iZXJzQ291bnQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBlbmRpbmdNZW1iZXJzQ291bnQgOiBudW1iZXI7XG5cdHByaXZhY3lDb250ZXh0IDogc3RyaW5nO1xuXHRyZWFkb25seSBwcml2YWN5Q29udGV4dHMgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFDYXRlZ29yeVN0YXR1cztcblx0cmVhZG9ubHkgaW5oZXJpdGVkUGFyZW50SWQgOiBudW1iZXI7XG5cdHBhcnRuZXJTb3J0VmFsdWUgOiBudW1iZXI7XG5cdHBhcnRuZXJEYXRhIDogc3RyaW5nO1xuXHRkZWZhdWx0T3JkZXJCeSA6IEthbHR1cmFDYXRlZ29yeU9yZGVyQnk7XG5cdHJlYWRvbmx5IGRpcmVjdFN1YkNhdGVnb3JpZXNDb3VudCA6IG51bWJlcjtcblx0bW9kZXJhdGlvbiA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHJlYWRvbmx5IHBlbmRpbmdFbnRyaWVzQ291bnQgOiBudW1iZXI7XG5cdGlzQWdncmVnYXRpb25DYXRlZ29yeSA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGFnZ3JlZ2F0aW9uQ2F0ZWdvcmllcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhdGVnb3J5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJlbnRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZXB0aCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnVsbE5hbWUgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmdWxsSWRzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZW50cmllc0NvdW50IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhcHBlYXJJbkxpc3QgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXBwZWFySW5MaXN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQXBwZWFySW5MaXN0VHlwZScgfSxcblx0XHRcdFx0cHJpdmFjeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQcml2YWN5VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUHJpdmFjeVR5cGUnIH0sXG5cdFx0XHRcdGluaGVyaXRhbmNlVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFJbmhlcml0YW5jZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUluaGVyaXRhbmNlVHlwZScgfSxcblx0XHRcdFx0dXNlckpvaW5Qb2xpY3kgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VySm9pblBvbGljeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJKb2luUG9saWN5VHlwZScgfSxcblx0XHRcdFx0ZGVmYXVsdFBlcm1pc3Npb25MZXZlbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWwsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCcgfSxcblx0XHRcdFx0b3duZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGlyZWN0RW50cmllc0NvdW50IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVmZXJlbmNlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udHJpYnV0aW9uUG9saWN5IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGUnIH0sXG5cdFx0XHRcdG1lbWJlcnNDb3VudCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBlbmRpbmdNZW1iZXJzQ291bnQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwcml2YWN5Q29udGV4dCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcml2YWN5Q29udGV4dHMgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlTdGF0dXMnIH0sXG5cdFx0XHRcdGluaGVyaXRlZFBhcmVudElkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lclNvcnRWYWx1ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVyRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWZhdWx0T3JkZXJCeSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeU9yZGVyQnksIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5T3JkZXJCeScgfSxcblx0XHRcdFx0ZGlyZWN0U3ViQ2F0ZWdvcmllc0NvdW50IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bW9kZXJhdGlvbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0cGVuZGluZ0VudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGlzQWdncmVnYXRpb25DYXRlZ29yeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0YWdncmVnYXRpb25DYXRlZ29yaWVzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeSddID0gS2FsdHVyYUNhdGVnb3J5OyJdfQ==