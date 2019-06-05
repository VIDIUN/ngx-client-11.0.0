/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultEntryArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.title;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.description;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.tags;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.url;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.contentType;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.accessControlProfileId;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.category;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.scheduleStartDate;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.scheduleEndDate;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.entryStatus;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.thumbnailUrl;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.thumbnailSaved;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.sshPrivateKey;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.sshPublicKey;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.sshKeyPassphrase;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.creatorId;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.entitledUsersEdit;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.entitledUsersPublish;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.ownerId;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.referenceId;
/** @type {?|undefined} */
KalturaBulkUploadResultEntryArgs.prototype.templateEntryId;
var KalturaBulkUploadResultEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadResultEntry, _super);
    function KalturaBulkUploadResultEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadResultEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadResultEntry' },
            entryId: { type: 's' },
            title: { type: 's' },
            description: { type: 's' },
            tags: { type: 's' },
            url: { type: 's' },
            contentType: { type: 's' },
            conversionProfileId: { type: 'n' },
            accessControlProfileId: { type: 'n' },
            category: { type: 's' },
            scheduleStartDate: { type: 'n' },
            scheduleEndDate: { type: 'n' },
            entryStatus: { type: 'n' },
            thumbnailUrl: { type: 's' },
            thumbnailSaved: { type: 'b' },
            sshPrivateKey: { type: 's' },
            sshPublicKey: { type: 's' },
            sshKeyPassphrase: { type: 's' },
            creatorId: { type: 's' },
            entitledUsersEdit: { type: 's' },
            entitledUsersPublish: { type: 's' },
            ownerId: { type: 's' },
            referenceId: { type: 's' },
            templateEntryId: { type: 's' }
        });
        return result;
    };
    return KalturaBulkUploadResultEntry;
}(KalturaBulkUploadResult));
export { KalturaBulkUploadResultEntry };
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.entryId;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.title;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.description;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.tags;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.url;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.contentType;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.conversionProfileId;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.accessControlProfileId;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.category;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.scheduleStartDate;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.scheduleEndDate;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.entryStatus;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.thumbnailUrl;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.thumbnailSaved;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.sshPrivateKey;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.sshPublicKey;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.sshKeyPassphrase;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.creatorId;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.entitledUsersEdit;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.entitledUsersPublish;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.ownerId;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.referenceId;
    /** @type {?} */
    KalturaBulkUploadResultEntry.prototype.templateEntryId;
}
typesMappingStorage['KalturaBulkUploadResultEntry'] = KalturaBulkUploadResultEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCakcsSUFBQTtJQUFrRCx3REFBdUI7SUEwQnJFLHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBL0ZMO0VBK0JrRCx1QkFBdUIsRUFpRXhFLENBQUE7QUFqRUQsd0NBaUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCwgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIHtcbiAgICBlbnRyeUlkPyA6IHN0cmluZztcblx0dGl0bGU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHR1cmw/IDogc3RyaW5nO1xuXHRjb250ZW50VHlwZT8gOiBzdHJpbmc7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRhY2Nlc3NDb250cm9sUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0Y2F0ZWdvcnk/IDogc3RyaW5nO1xuXHRzY2hlZHVsZVN0YXJ0RGF0ZT8gOiBudW1iZXI7XG5cdHNjaGVkdWxlRW5kRGF0ZT8gOiBudW1iZXI7XG5cdGVudHJ5U3RhdHVzPyA6IG51bWJlcjtcblx0dGh1bWJuYWlsVXJsPyA6IHN0cmluZztcblx0dGh1bWJuYWlsU2F2ZWQ/IDogYm9vbGVhbjtcblx0c3NoUHJpdmF0ZUtleT8gOiBzdHJpbmc7XG5cdHNzaFB1YmxpY0tleT8gOiBzdHJpbmc7XG5cdHNzaEtleVBhc3NwaHJhc2U/IDogc3RyaW5nO1xuXHRjcmVhdG9ySWQ/IDogc3RyaW5nO1xuXHRlbnRpdGxlZFVzZXJzRWRpdD8gOiBzdHJpbmc7XG5cdGVudGl0bGVkVXNlcnNQdWJsaXNoPyA6IHN0cmluZztcblx0b3duZXJJZD8gOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkPyA6IHN0cmluZztcblx0dGVtcGxhdGVFbnRyeUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRFbnRyeSBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHRpdGxlIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0dXJsIDogc3RyaW5nO1xuXHRjb250ZW50VHlwZSA6IHN0cmluZztcblx0Y29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0YWNjZXNzQ29udHJvbFByb2ZpbGVJZCA6IG51bWJlcjtcblx0Y2F0ZWdvcnkgOiBzdHJpbmc7XG5cdHNjaGVkdWxlU3RhcnREYXRlIDogbnVtYmVyO1xuXHRzY2hlZHVsZUVuZERhdGUgOiBudW1iZXI7XG5cdGVudHJ5U3RhdHVzIDogbnVtYmVyO1xuXHR0aHVtYm5haWxVcmwgOiBzdHJpbmc7XG5cdHRodW1ibmFpbFNhdmVkIDogYm9vbGVhbjtcblx0c3NoUHJpdmF0ZUtleSA6IHN0cmluZztcblx0c3NoUHVibGljS2V5IDogc3RyaW5nO1xuXHRzc2hLZXlQYXNzcGhyYXNlIDogc3RyaW5nO1xuXHRjcmVhdG9ySWQgOiBzdHJpbmc7XG5cdGVudGl0bGVkVXNlcnNFZGl0IDogc3RyaW5nO1xuXHRlbnRpdGxlZFVzZXJzUHVibGlzaCA6IHN0cmluZztcblx0b3duZXJJZCA6IHN0cmluZztcblx0cmVmZXJlbmNlSWQgOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRFbnRyeUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEVudHJ5JyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWNjZXNzQ29udHJvbFByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjYXRlZ29yeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY2hlZHVsZVN0YXJ0RGF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2hlZHVsZUVuZERhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cnlTdGF0dXMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGh1bWJuYWlsVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1ibmFpbFNhdmVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHNzaFByaXZhdGVLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3NoUHVibGljS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzaEtleVBhc3NwaHJhc2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRvcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudGl0bGVkVXNlcnNFZGl0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudGl0bGVkVXNlcnNQdWJsaXNoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG93bmVySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVmZXJlbmNlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGVtcGxhdGVFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0RW50cnknXSA9IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0RW50cnk7Il19