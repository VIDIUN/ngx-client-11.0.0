/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaBulkUploadResultEntry extends KalturaBulkUploadResult {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJqRyxNQUFNLG1DQUFvQyxTQUFRLHVCQUF1Qjs7OztJQTBCckUsWUFBWSxJQUF3QztRQUVoRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQsIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0RW50cnlBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB7XG4gICAgZW50cnlJZD8gOiBzdHJpbmc7XG5cdHRpdGxlPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0dXJsPyA6IHN0cmluZztcblx0Y29udGVudFR5cGU/IDogc3RyaW5nO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0YWNjZXNzQ29udHJvbFByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdGNhdGVnb3J5PyA6IHN0cmluZztcblx0c2NoZWR1bGVTdGFydERhdGU/IDogbnVtYmVyO1xuXHRzY2hlZHVsZUVuZERhdGU/IDogbnVtYmVyO1xuXHRlbnRyeVN0YXR1cz8gOiBudW1iZXI7XG5cdHRodW1ibmFpbFVybD8gOiBzdHJpbmc7XG5cdHRodW1ibmFpbFNhdmVkPyA6IGJvb2xlYW47XG5cdHNzaFByaXZhdGVLZXk/IDogc3RyaW5nO1xuXHRzc2hQdWJsaWNLZXk/IDogc3RyaW5nO1xuXHRzc2hLZXlQYXNzcGhyYXNlPyA6IHN0cmluZztcblx0Y3JlYXRvcklkPyA6IHN0cmluZztcblx0ZW50aXRsZWRVc2Vyc0VkaXQ/IDogc3RyaW5nO1xuXHRlbnRpdGxlZFVzZXJzUHVibGlzaD8gOiBzdHJpbmc7XG5cdG93bmVySWQ/IDogc3RyaW5nO1xuXHRyZWZlcmVuY2VJZD8gOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0RW50cnkgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHR0aXRsZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdHVybCA6IHN0cmluZztcblx0Y29udGVudFR5cGUgOiBzdHJpbmc7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdGFjY2Vzc0NvbnRyb2xQcm9maWxlSWQgOiBudW1iZXI7XG5cdGNhdGVnb3J5IDogc3RyaW5nO1xuXHRzY2hlZHVsZVN0YXJ0RGF0ZSA6IG51bWJlcjtcblx0c2NoZWR1bGVFbmREYXRlIDogbnVtYmVyO1xuXHRlbnRyeVN0YXR1cyA6IG51bWJlcjtcblx0dGh1bWJuYWlsVXJsIDogc3RyaW5nO1xuXHR0aHVtYm5haWxTYXZlZCA6IGJvb2xlYW47XG5cdHNzaFByaXZhdGVLZXkgOiBzdHJpbmc7XG5cdHNzaFB1YmxpY0tleSA6IHN0cmluZztcblx0c3NoS2V5UGFzc3BocmFzZSA6IHN0cmluZztcblx0Y3JlYXRvcklkIDogc3RyaW5nO1xuXHRlbnRpdGxlZFVzZXJzRWRpdCA6IHN0cmluZztcblx0ZW50aXRsZWRVc2Vyc1B1Ymxpc2ggOiBzdHJpbmc7XG5cdG93bmVySWQgOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkIDogc3RyaW5nO1xuXHR0ZW1wbGF0ZUVudHJ5SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0RW50cnlBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRFbnRyeScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50VHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFjY2Vzc0NvbnRyb2xQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2F0ZWdvcnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2NoZWR1bGVTdGFydERhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NoZWR1bGVFbmREYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVudHJ5U3RhdHVzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRodW1ibmFpbFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYm5haWxTYXZlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzc2hQcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNzaFB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzc2hLZXlQYXNzcGhyYXNlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0b3JJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRpdGxlZFVzZXJzRWRpdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRpdGxlZFVzZXJzUHVibGlzaCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvd25lcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRlbXBsYXRlRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEVudHJ5J10gPSBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEVudHJ5OyJdfQ==