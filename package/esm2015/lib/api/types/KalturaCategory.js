/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaCategory extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JsRixNQUFNLHNCQUF1QixTQUFRLGlCQUFpQjs7OztJQXNDbEQsWUFBWSxJQUEyQjtRQUVuQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFH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RUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNqSCx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxRCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM3RyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNyRCxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hILHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM3QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXBwZWFySW5MaXN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUFwcGVhckluTGlzdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVByaXZhY3lUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUHJpdmFjeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUluaGVyaXRhbmNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUluaGVyaXRhbmNlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckpvaW5Qb2xpY3lUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVXNlckpvaW5Qb2xpY3lUeXBlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWwnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGUgfSBmcm9tICcuL0thbHR1cmFDb250cmlidXRpb25Qb2xpY3lUeXBlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeU9yZGVyQnkgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeU9yZGVyQnknO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhdGVnb3J5QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBhcmVudElkPyA6IG51bWJlcjtcblx0bmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0dGFncz8gOiBzdHJpbmc7XG5cdGFwcGVhckluTGlzdD8gOiBLYWx0dXJhQXBwZWFySW5MaXN0VHlwZTtcblx0cHJpdmFjeT8gOiBLYWx0dXJhUHJpdmFjeVR5cGU7XG5cdGluaGVyaXRhbmNlVHlwZT8gOiBLYWx0dXJhSW5oZXJpdGFuY2VUeXBlO1xuXHRkZWZhdWx0UGVybWlzc2lvbkxldmVsPyA6IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWw7XG5cdG93bmVyPyA6IHN0cmluZztcblx0cmVmZXJlbmNlSWQ/IDogc3RyaW5nO1xuXHRjb250cmlidXRpb25Qb2xpY3k/IDogS2FsdHVyYUNvbnRyaWJ1dGlvblBvbGljeVR5cGU7XG5cdHByaXZhY3lDb250ZXh0PyA6IHN0cmluZztcblx0cGFydG5lclNvcnRWYWx1ZT8gOiBudW1iZXI7XG5cdHBhcnRuZXJEYXRhPyA6IHN0cmluZztcblx0ZGVmYXVsdE9yZGVyQnk/IDogS2FsdHVyYUNhdGVnb3J5T3JkZXJCeTtcblx0bW9kZXJhdGlvbj8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRpc0FnZ3JlZ2F0aW9uQ2F0ZWdvcnk/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0YWdncmVnYXRpb25DYXRlZ29yaWVzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHBhcmVudElkIDogbnVtYmVyO1xuXHRyZWFkb25seSBkZXB0aCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRyZWFkb25seSBmdWxsTmFtZSA6IHN0cmluZztcblx0cmVhZG9ubHkgZnVsbElkcyA6IHN0cmluZztcblx0cmVhZG9ubHkgZW50cmllc0NvdW50IDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0YXBwZWFySW5MaXN0IDogS2FsdHVyYUFwcGVhckluTGlzdFR5cGU7XG5cdHByaXZhY3kgOiBLYWx0dXJhUHJpdmFjeVR5cGU7XG5cdGluaGVyaXRhbmNlVHlwZSA6IEthbHR1cmFJbmhlcml0YW5jZVR5cGU7XG5cdHJlYWRvbmx5IHVzZXJKb2luUG9saWN5IDogS2FsdHVyYVVzZXJKb2luUG9saWN5VHlwZTtcblx0ZGVmYXVsdFBlcm1pc3Npb25MZXZlbCA6IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWw7XG5cdG93bmVyIDogc3RyaW5nO1xuXHRyZWFkb25seSBkaXJlY3RFbnRyaWVzQ291bnQgOiBudW1iZXI7XG5cdHJlZmVyZW5jZUlkIDogc3RyaW5nO1xuXHRjb250cmlidXRpb25Qb2xpY3kgOiBLYWx0dXJhQ29udHJpYnV0aW9uUG9saWN5VHlwZTtcblx0cmVhZG9ubHkgbWVtYmVyc0NvdW50IDogbnVtYmVyO1xuXHRyZWFkb25seSBwZW5kaW5nTWVtYmVyc0NvdW50IDogbnVtYmVyO1xuXHRwcml2YWN5Q29udGV4dCA6IHN0cmluZztcblx0cmVhZG9ubHkgcHJpdmFjeUNvbnRleHRzIDogc3RyaW5nO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhQ2F0ZWdvcnlTdGF0dXM7XG5cdHJlYWRvbmx5IGluaGVyaXRlZFBhcmVudElkIDogbnVtYmVyO1xuXHRwYXJ0bmVyU29ydFZhbHVlIDogbnVtYmVyO1xuXHRwYXJ0bmVyRGF0YSA6IHN0cmluZztcblx0ZGVmYXVsdE9yZGVyQnkgOiBLYWx0dXJhQ2F0ZWdvcnlPcmRlckJ5O1xuXHRyZWFkb25seSBkaXJlY3RTdWJDYXRlZ29yaWVzQ291bnQgOiBudW1iZXI7XG5cdG1vZGVyYXRpb24gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRyZWFkb25seSBwZW5kaW5nRW50cmllc0NvdW50IDogbnVtYmVyO1xuXHRpc0FnZ3JlZ2F0aW9uQ2F0ZWdvcnkgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRhZ2dyZWdhdGlvbkNhdGVnb3JpZXMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2F0ZWdvcnknIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFyZW50SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVwdGggOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ1bGxOYW1lIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZnVsbElkcyA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGVudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXBwZWFySW5MaXN0IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFwcGVhckluTGlzdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUFwcGVhckluTGlzdFR5cGUnIH0sXG5cdFx0XHRcdHByaXZhY3kgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUHJpdmFjeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVByaXZhY3lUeXBlJyB9LFxuXHRcdFx0XHRpbmhlcml0YW5jZVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW5oZXJpdGFuY2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFJbmhlcml0YW5jZVR5cGUnIH0sXG5cdFx0XHRcdHVzZXJKb2luUG9saWN5IDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlckpvaW5Qb2xpY3lUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VySm9pblBvbGljeVR5cGUnIH0sXG5cdFx0XHRcdGRlZmF1bHRQZXJtaXNzaW9uTGV2ZWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsLCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWwnIH0sXG5cdFx0XHRcdG93bmVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRpcmVjdEVudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRyaWJ1dGlvblBvbGljeSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250cmlidXRpb25Qb2xpY3lUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDb250cmlidXRpb25Qb2xpY3lUeXBlJyB9LFxuXHRcdFx0XHRtZW1iZXJzQ291bnQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwZW5kaW5nTWVtYmVyc0NvdW50IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cHJpdmFjeUNvbnRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpdmFjeUNvbnRleHRzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5U3RhdHVzJyB9LFxuXHRcdFx0XHRpbmhlcml0ZWRQYXJlbnRJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJTb3J0VmFsdWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lckRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVmYXVsdE9yZGVyQnkgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlPcmRlckJ5LCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeU9yZGVyQnknIH0sXG5cdFx0XHRcdGRpcmVjdFN1YkNhdGVnb3JpZXNDb3VudCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG1vZGVyYXRpb24gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHBlbmRpbmdFbnRyaWVzQ291bnQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpc0FnZ3JlZ2F0aW9uQ2F0ZWdvcnkgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGFnZ3JlZ2F0aW9uQ2F0ZWdvcmllcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnknXSA9IEthbHR1cmFDYXRlZ29yeTsiXX0=