/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryStatus } from './KalturaEntryStatus';
import { KalturaEntryModerationStatus } from './KalturaEntryModerationStatus';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaLicenseType } from './KalturaLicenseType';
import { KalturaEntryReplacementStatus } from './KalturaEntryReplacementStatus';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
import { KalturaEntryDisplayInSearchType } from './KalturaEntryDisplayInSearchType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBaseEntryArgs() { }
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.name;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.description;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.userId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.creatorId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.tags;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.adminTags;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.categories;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.categoriesIds;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.type;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.groupId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.partnerData;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.licenseType;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.accessControlId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.startDate;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.endDate;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.referenceId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.partnerSortValue;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.redirectEntryId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.parentEntryId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.operationAttributes;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.entitledUsersEdit;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.entitledUsersPublish;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.entitledUsersView;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.templateEntryId;
/** @type {?|undefined} */
KalturaBaseEntryArgs.prototype.displayInSearch;
export class KalturaBaseEntry extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.operationAttributes === 'undefined')
            this.operationAttributes = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseEntry' },
            id: { type: 's', readOnly: true },
            name: { type: 's' },
            description: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            userId: { type: 's' },
            creatorId: { type: 's' },
            tags: { type: 's' },
            adminTags: { type: 's' },
            categories: { type: 's' },
            categoriesIds: { type: 's' },
            status: { type: 'es', readOnly: true, subTypeConstructor: KalturaEntryStatus, subType: 'KalturaEntryStatus' },
            moderationStatus: { type: 'en', readOnly: true, subTypeConstructor: KalturaEntryModerationStatus, subType: 'KalturaEntryModerationStatus' },
            moderationCount: { type: 'n', readOnly: true },
            type: { type: 'es', subTypeConstructor: KalturaEntryType, subType: 'KalturaEntryType' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            rank: { type: 'n', readOnly: true },
            totalRank: { type: 'n', readOnly: true },
            votes: { type: 'n', readOnly: true },
            groupId: { type: 'n' },
            partnerData: { type: 's' },
            downloadUrl: { type: 's', readOnly: true },
            searchText: { type: 's', readOnly: true },
            licenseType: { type: 'en', subTypeConstructor: KalturaLicenseType, subType: 'KalturaLicenseType' },
            version: { type: 'n', readOnly: true },
            thumbnailUrl: { type: 's', readOnly: true },
            accessControlId: { type: 'n' },
            startDate: { type: 'd' },
            endDate: { type: 'd' },
            referenceId: { type: 's' },
            replacingEntryId: { type: 's', readOnly: true },
            replacedEntryId: { type: 's', readOnly: true },
            replacementStatus: { type: 'es', readOnly: true, subTypeConstructor: KalturaEntryReplacementStatus, subType: 'KalturaEntryReplacementStatus' },
            partnerSortValue: { type: 'n' },
            conversionProfileId: { type: 'n' },
            redirectEntryId: { type: 's' },
            rootEntryId: { type: 's', readOnly: true },
            parentEntryId: { type: 's' },
            operationAttributes: { type: 'a', subTypeConstructor: KalturaOperationAttributes, subType: 'KalturaOperationAttributes' },
            entitledUsersEdit: { type: 's' },
            entitledUsersPublish: { type: 's' },
            entitledUsersView: { type: 's' },
            capabilities: { type: 's', readOnly: true },
            templateEntryId: { type: 's' },
            displayInSearch: { type: 'en', subTypeConstructor: KalturaEntryDisplayInSearchType, subType: 'KalturaEntryDisplayInSearchType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBaseEntry.prototype.id;
    /** @type {?} */
    KalturaBaseEntry.prototype.name;
    /** @type {?} */
    KalturaBaseEntry.prototype.description;
    /** @type {?} */
    KalturaBaseEntry.prototype.partnerId;
    /** @type {?} */
    KalturaBaseEntry.prototype.userId;
    /** @type {?} */
    KalturaBaseEntry.prototype.creatorId;
    /** @type {?} */
    KalturaBaseEntry.prototype.tags;
    /** @type {?} */
    KalturaBaseEntry.prototype.adminTags;
    /** @type {?} */
    KalturaBaseEntry.prototype.categories;
    /** @type {?} */
    KalturaBaseEntry.prototype.categoriesIds;
    /** @type {?} */
    KalturaBaseEntry.prototype.status;
    /** @type {?} */
    KalturaBaseEntry.prototype.moderationStatus;
    /** @type {?} */
    KalturaBaseEntry.prototype.moderationCount;
    /** @type {?} */
    KalturaBaseEntry.prototype.type;
    /** @type {?} */
    KalturaBaseEntry.prototype.createdAt;
    /** @type {?} */
    KalturaBaseEntry.prototype.updatedAt;
    /** @type {?} */
    KalturaBaseEntry.prototype.rank;
    /** @type {?} */
    KalturaBaseEntry.prototype.totalRank;
    /** @type {?} */
    KalturaBaseEntry.prototype.votes;
    /** @type {?} */
    KalturaBaseEntry.prototype.groupId;
    /** @type {?} */
    KalturaBaseEntry.prototype.partnerData;
    /** @type {?} */
    KalturaBaseEntry.prototype.downloadUrl;
    /** @type {?} */
    KalturaBaseEntry.prototype.searchText;
    /** @type {?} */
    KalturaBaseEntry.prototype.licenseType;
    /** @type {?} */
    KalturaBaseEntry.prototype.version;
    /** @type {?} */
    KalturaBaseEntry.prototype.thumbnailUrl;
    /** @type {?} */
    KalturaBaseEntry.prototype.accessControlId;
    /** @type {?} */
    KalturaBaseEntry.prototype.startDate;
    /** @type {?} */
    KalturaBaseEntry.prototype.endDate;
    /** @type {?} */
    KalturaBaseEntry.prototype.referenceId;
    /** @type {?} */
    KalturaBaseEntry.prototype.replacingEntryId;
    /** @type {?} */
    KalturaBaseEntry.prototype.replacedEntryId;
    /** @type {?} */
    KalturaBaseEntry.prototype.replacementStatus;
    /** @type {?} */
    KalturaBaseEntry.prototype.partnerSortValue;
    /** @type {?} */
    KalturaBaseEntry.prototype.conversionProfileId;
    /** @type {?} */
    KalturaBaseEntry.prototype.redirectEntryId;
    /** @type {?} */
    KalturaBaseEntry.prototype.rootEntryId;
    /** @type {?} */
    KalturaBaseEntry.prototype.parentEntryId;
    /** @type {?} */
    KalturaBaseEntry.prototype.operationAttributes;
    /** @type {?} */
    KalturaBaseEntry.prototype.entitledUsersEdit;
    /** @type {?} */
    KalturaBaseEntry.prototype.entitledUsersPublish;
    /** @type {?} */
    KalturaBaseEntry.prototype.entitledUsersView;
    /** @type {?} */
    KalturaBaseEntry.prototype.capabilities;
    /** @type {?} */
    KalturaBaseEntry.prototype.templateEntryId;
    /** @type {?} */
    KalturaBaseEntry.prototype.displayInSearch;
}
typesMappingStorage['KalturaBaseEntry'] = KalturaBaseEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJhc2VFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NsRixNQUFNLHVCQUF3QixTQUFRLGlCQUFpQjs7OztJQWdEbkQsWUFBWSxJQUE0QjtRQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0tBQ3RGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5TW9kZXJhdGlvblN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5TW9kZXJhdGlvblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlUeXBlJztcbmltcG9ydCB7IEthbHR1cmFMaWNlbnNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUxpY2Vuc2VUeXBlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVJlcGxhY2VtZW50U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlSZXBsYWNlbWVudFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlcyB9IGZyb20gJy4vS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5RGlzcGxheUluU2VhcmNoVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzcGxheUluU2VhcmNoVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJhc2VFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xuXHRjcmVhdG9ySWQ/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0YWRtaW5UYWdzPyA6IHN0cmluZztcblx0Y2F0ZWdvcmllcz8gOiBzdHJpbmc7XG5cdGNhdGVnb3JpZXNJZHM/IDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFFbnRyeVR5cGU7XG5cdGdyb3VwSWQ/IDogbnVtYmVyO1xuXHRwYXJ0bmVyRGF0YT8gOiBzdHJpbmc7XG5cdGxpY2Vuc2VUeXBlPyA6IEthbHR1cmFMaWNlbnNlVHlwZTtcblx0YWNjZXNzQ29udHJvbElkPyA6IG51bWJlcjtcblx0c3RhcnREYXRlPyA6IERhdGU7XG5cdGVuZERhdGU/IDogRGF0ZTtcblx0cmVmZXJlbmNlSWQ/IDogc3RyaW5nO1xuXHRwYXJ0bmVyU29ydFZhbHVlPyA6IG51bWJlcjtcblx0Y29udmVyc2lvblByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdHJlZGlyZWN0RW50cnlJZD8gOiBzdHJpbmc7XG5cdHBhcmVudEVudHJ5SWQ/IDogc3RyaW5nO1xuXHRvcGVyYXRpb25BdHRyaWJ1dGVzPyA6IEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzW107XG5cdGVudGl0bGVkVXNlcnNFZGl0PyA6IHN0cmluZztcblx0ZW50aXRsZWRVc2Vyc1B1Ymxpc2g/IDogc3RyaW5nO1xuXHRlbnRpdGxlZFVzZXJzVmlldz8gOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlJZD8gOiBzdHJpbmc7XG5cdGRpc3BsYXlJblNlYXJjaD8gOiBLYWx0dXJhRW50cnlEaXNwbGF5SW5TZWFyY2hUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQmFzZUVudHJ5IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBzdHJpbmc7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHVzZXJJZCA6IHN0cmluZztcblx0Y3JlYXRvcklkIDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRhZG1pblRhZ3MgOiBzdHJpbmc7XG5cdGNhdGVnb3JpZXMgOiBzdHJpbmc7XG5cdGNhdGVnb3JpZXNJZHMgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFFbnRyeVN0YXR1cztcblx0cmVhZG9ubHkgbW9kZXJhdGlvblN0YXR1cyA6IEthbHR1cmFFbnRyeU1vZGVyYXRpb25TdGF0dXM7XG5cdHJlYWRvbmx5IG1vZGVyYXRpb25Db3VudCA6IG51bWJlcjtcblx0dHlwZSA6IEthbHR1cmFFbnRyeVR5cGU7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHJhbmsgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHRvdGFsUmFuayA6IG51bWJlcjtcblx0cmVhZG9ubHkgdm90ZXMgOiBudW1iZXI7XG5cdGdyb3VwSWQgOiBudW1iZXI7XG5cdHBhcnRuZXJEYXRhIDogc3RyaW5nO1xuXHRyZWFkb25seSBkb3dubG9hZFVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgc2VhcmNoVGV4dCA6IHN0cmluZztcblx0bGljZW5zZVR5cGUgOiBLYWx0dXJhTGljZW5zZVR5cGU7XG5cdHJlYWRvbmx5IHZlcnNpb24gOiBudW1iZXI7XG5cdHJlYWRvbmx5IHRodW1ibmFpbFVybCA6IHN0cmluZztcblx0YWNjZXNzQ29udHJvbElkIDogbnVtYmVyO1xuXHRzdGFydERhdGUgOiBEYXRlO1xuXHRlbmREYXRlIDogRGF0ZTtcblx0cmVmZXJlbmNlSWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHJlcGxhY2luZ0VudHJ5SWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHJlcGxhY2VkRW50cnlJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcmVwbGFjZW1lbnRTdGF0dXMgOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudFN0YXR1cztcblx0cGFydG5lclNvcnRWYWx1ZSA6IG51bWJlcjtcblx0Y29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0cmVkaXJlY3RFbnRyeUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSByb290RW50cnlJZCA6IHN0cmluZztcblx0cGFyZW50RW50cnlJZCA6IHN0cmluZztcblx0b3BlcmF0aW9uQXR0cmlidXRlcyA6IEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzW107XG5cdGVudGl0bGVkVXNlcnNFZGl0IDogc3RyaW5nO1xuXHRlbnRpdGxlZFVzZXJzUHVibGlzaCA6IHN0cmluZztcblx0ZW50aXRsZWRVc2Vyc1ZpZXcgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNhcGFiaWxpdGllcyA6IHN0cmluZztcblx0dGVtcGxhdGVFbnRyeUlkIDogc3RyaW5nO1xuXHRkaXNwbGF5SW5TZWFyY2ggOiBLYWx0dXJhRW50cnlEaXNwbGF5SW5TZWFyY2hUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQmFzZUVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3BlcmF0aW9uQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub3BlcmF0aW9uQXR0cmlidXRlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCYXNlRW50cnknIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRvcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWRtaW5UYWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhdGVnb3JpZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcmllc0lkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlTdGF0dXMnIH0sXG5cdFx0XHRcdG1vZGVyYXRpb25TdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeU1vZGVyYXRpb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5TW9kZXJhdGlvblN0YXR1cycgfSxcblx0XHRcdFx0bW9kZXJhdGlvbkNvdW50IDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5VHlwZScgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmFuayA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHRvdGFsUmFuayA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHZvdGVzIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Z3JvdXBJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVyRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkb3dubG9hZFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHNlYXJjaFRleHQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRsaWNlbnNlVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaWNlbnNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGljZW5zZVR5cGUnIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0aHVtYm5haWxVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRhY2Nlc3NDb250cm9sSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhcnREYXRlIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGVuZERhdGUgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0cmVmZXJlbmNlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVwbGFjaW5nRW50cnlJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlcGxhY2VkRW50cnlJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlcGxhY2VtZW50U3RhdHVzIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlSZXBsYWNlbWVudFN0YXR1cycgfSxcblx0XHRcdFx0cGFydG5lclNvcnRWYWx1ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlZGlyZWN0RW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyb290RW50cnlJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcmVudEVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3BlcmF0aW9uQXR0cmlidXRlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMsIHN1YlR5cGUgOiAnS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMnIH0sXG5cdFx0XHRcdGVudGl0bGVkVXNlcnNFZGl0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudGl0bGVkVXNlcnNQdWJsaXNoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudGl0bGVkVXNlcnNWaWV3IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcGFiaWxpdGllcyA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHRlbXBsYXRlRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXNwbGF5SW5TZWFyY2ggOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlEaXNwbGF5SW5TZWFyY2hUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeURpc3BsYXlJblNlYXJjaFR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCYXNlRW50cnknXSA9IEthbHR1cmFCYXNlRW50cnk7Il19