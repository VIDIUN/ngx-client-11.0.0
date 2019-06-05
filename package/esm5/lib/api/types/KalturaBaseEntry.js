/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaBaseEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBaseEntry, _super);
    function KalturaBaseEntry(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.operationAttributes === 'undefined')
            _this.operationAttributes = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaBaseEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaBaseEntry;
}(KalturaObjectBase));
export { KalturaBaseEntry };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJhc2VFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDbEYsSUFBQTtJQUFzQyw0Q0FBaUI7SUFnRG5ELDBCQUFZLElBQTRCO1FBQXhDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDOztLQUN0Rjs7OztJQUVTLHVDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFB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aUIsRUE4R3RELENBQUE7QUE5R0QsNEJBOEdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeU1vZGVyYXRpb25TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeU1vZGVyYXRpb25TdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5VHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGljZW5zZVR5cGUgfSBmcm9tICcuL0thbHR1cmFMaWNlbnNlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlSZXBsYWNlbWVudFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMgfSBmcm9tICcuL0thbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3BsYXlJblNlYXJjaFR5cGUgfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3BsYXlJblNlYXJjaFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCYXNlRW50cnlBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0dXNlcklkPyA6IHN0cmluZztcblx0Y3JlYXRvcklkPyA6IHN0cmluZztcblx0dGFncz8gOiBzdHJpbmc7XG5cdGFkbWluVGFncz8gOiBzdHJpbmc7XG5cdGNhdGVnb3JpZXM/IDogc3RyaW5nO1xuXHRjYXRlZ29yaWVzSWRzPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhRW50cnlUeXBlO1xuXHRncm91cElkPyA6IG51bWJlcjtcblx0cGFydG5lckRhdGE/IDogc3RyaW5nO1xuXHRsaWNlbnNlVHlwZT8gOiBLYWx0dXJhTGljZW5zZVR5cGU7XG5cdGFjY2Vzc0NvbnRyb2xJZD8gOiBudW1iZXI7XG5cdHN0YXJ0RGF0ZT8gOiBEYXRlO1xuXHRlbmREYXRlPyA6IERhdGU7XG5cdHJlZmVyZW5jZUlkPyA6IHN0cmluZztcblx0cGFydG5lclNvcnRWYWx1ZT8gOiBudW1iZXI7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRyZWRpcmVjdEVudHJ5SWQ/IDogc3RyaW5nO1xuXHRwYXJlbnRFbnRyeUlkPyA6IHN0cmluZztcblx0b3BlcmF0aW9uQXR0cmlidXRlcz8gOiBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlc1tdO1xuXHRlbnRpdGxlZFVzZXJzRWRpdD8gOiBzdHJpbmc7XG5cdGVudGl0bGVkVXNlcnNQdWJsaXNoPyA6IHN0cmluZztcblx0ZW50aXRsZWRVc2Vyc1ZpZXc/IDogc3RyaW5nO1xuXHR0ZW1wbGF0ZUVudHJ5SWQ/IDogc3RyaW5nO1xuXHRkaXNwbGF5SW5TZWFyY2g/IDogS2FsdHVyYUVudHJ5RGlzcGxheUluU2VhcmNoVHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhc2VFbnRyeSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogc3RyaW5nO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdGNyZWF0b3JJZCA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0YWRtaW5UYWdzIDogc3RyaW5nO1xuXHRjYXRlZ29yaWVzIDogc3RyaW5nO1xuXHRjYXRlZ29yaWVzSWRzIDogc3RyaW5nO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhRW50cnlTdGF0dXM7XG5cdHJlYWRvbmx5IG1vZGVyYXRpb25TdGF0dXMgOiBLYWx0dXJhRW50cnlNb2RlcmF0aW9uU3RhdHVzO1xuXHRyZWFkb25seSBtb2RlcmF0aW9uQ291bnQgOiBudW1iZXI7XG5cdHR5cGUgOiBLYWx0dXJhRW50cnlUeXBlO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSByYW5rIDogbnVtYmVyO1xuXHRyZWFkb25seSB0b3RhbFJhbmsgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHZvdGVzIDogbnVtYmVyO1xuXHRncm91cElkIDogbnVtYmVyO1xuXHRwYXJ0bmVyRGF0YSA6IHN0cmluZztcblx0cmVhZG9ubHkgZG93bmxvYWRVcmwgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHNlYXJjaFRleHQgOiBzdHJpbmc7XG5cdGxpY2Vuc2VUeXBlIDogS2FsdHVyYUxpY2Vuc2VUeXBlO1xuXHRyZWFkb25seSB2ZXJzaW9uIDogbnVtYmVyO1xuXHRyZWFkb25seSB0aHVtYm5haWxVcmwgOiBzdHJpbmc7XG5cdGFjY2Vzc0NvbnRyb2xJZCA6IG51bWJlcjtcblx0c3RhcnREYXRlIDogRGF0ZTtcblx0ZW5kRGF0ZSA6IERhdGU7XG5cdHJlZmVyZW5jZUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSByZXBsYWNpbmdFbnRyeUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSByZXBsYWNlZEVudHJ5SWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHJlcGxhY2VtZW50U3RhdHVzIDogS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRTdGF0dXM7XG5cdHBhcnRuZXJTb3J0VmFsdWUgOiBudW1iZXI7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdHJlZGlyZWN0RW50cnlJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcm9vdEVudHJ5SWQgOiBzdHJpbmc7XG5cdHBhcmVudEVudHJ5SWQgOiBzdHJpbmc7XG5cdG9wZXJhdGlvbkF0dHJpYnV0ZXMgOiBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlc1tdO1xuXHRlbnRpdGxlZFVzZXJzRWRpdCA6IHN0cmluZztcblx0ZW50aXRsZWRVc2Vyc1B1Ymxpc2ggOiBzdHJpbmc7XG5cdGVudGl0bGVkVXNlcnNWaWV3IDogc3RyaW5nO1xuXHRyZWFkb25seSBjYXBhYmlsaXRpZXMgOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlJZCA6IHN0cmluZztcblx0ZGlzcGxheUluU2VhcmNoIDogS2FsdHVyYUVudHJ5RGlzcGxheUluU2VhcmNoVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJhc2VFbnRyeUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wZXJhdGlvbkF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9wZXJhdGlvbkF0dHJpYnV0ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmFzZUVudHJ5JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0b3JJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFkbWluVGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yaWVzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhdGVnb3JpZXNJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U3RhdHVzJyB9LFxuXHRcdFx0XHRtb2RlcmF0aW9uU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlNb2RlcmF0aW9uU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeU1vZGVyYXRpb25TdGF0dXMnIH0sXG5cdFx0XHRcdG1vZGVyYXRpb25Db3VudCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVR5cGUnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJhbmsgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0b3RhbFJhbmsgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR2b3RlcyA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGdyb3VwSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lckRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZG93bmxvYWRVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzZWFyY2hUZXh0IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bGljZW5zZVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGljZW5zZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUxpY2Vuc2VUeXBlJyB9LFxuXHRcdFx0XHR2ZXJzaW9uIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dGh1bWJuYWlsVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0YWNjZXNzQ29udHJvbElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXJ0RGF0ZSA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRlbmREYXRlIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlcGxhY2luZ0VudHJ5SWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRyZXBsYWNlZEVudHJ5SWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRyZXBsYWNlbWVudFN0YXR1cyA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRTdGF0dXMnIH0sXG5cdFx0XHRcdHBhcnRuZXJTb3J0VmFsdWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udmVyc2lvblByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWRpcmVjdEVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cm9vdEVudHJ5SWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJlbnRFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9wZXJhdGlvbkF0dHJpYnV0ZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzLCBzdWJUeXBlIDogJ0thbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzJyB9LFxuXHRcdFx0XHRlbnRpdGxlZFVzZXJzRWRpdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRpdGxlZFVzZXJzUHVibGlzaCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRpdGxlZFVzZXJzVmlldyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXBhYmlsaXRpZXMgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0ZW1wbGF0ZUVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGlzcGxheUluU2VhcmNoIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzcGxheUluU2VhcmNoVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXNwbGF5SW5TZWFyY2hUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQmFzZUVudHJ5J10gPSBLYWx0dXJhQmFzZUVudHJ5OyJdfQ==