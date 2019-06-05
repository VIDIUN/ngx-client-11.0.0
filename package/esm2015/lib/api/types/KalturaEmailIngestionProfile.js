/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryModerationStatus } from './KalturaEntryModerationStatus';
import { KalturaEmailIngestionProfileStatus } from './KalturaEmailIngestionProfileStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaEmailIngestionProfileArgs() { }
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.description;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.emailAddress;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.mailboxId;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.conversionProfile2Id;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.moderationStatus;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.defaultCategory;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.defaultUserId;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.defaultTags;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.defaultAdminTags;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.maxAttachmentSizeKbytes;
/** @type {?|undefined} */
KalturaEmailIngestionProfileArgs.prototype.maxAttachmentsPerMail;
export class KalturaEmailIngestionProfile extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaEmailIngestionProfile' },
            id: { type: 'n', readOnly: true },
            name: { type: 's' },
            description: { type: 's' },
            emailAddress: { type: 's' },
            mailboxId: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            conversionProfile2Id: { type: 'n' },
            moderationStatus: { type: 'en', subTypeConstructor: KalturaEntryModerationStatus, subType: 'KalturaEntryModerationStatus' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaEmailIngestionProfileStatus, subType: 'KalturaEmailIngestionProfileStatus' },
            createdAt: { type: 's', readOnly: true },
            defaultCategory: { type: 's' },
            defaultUserId: { type: 's' },
            defaultTags: { type: 's' },
            defaultAdminTags: { type: 's' },
            maxAttachmentSizeKbytes: { type: 'n' },
            maxAttachmentsPerMail: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.id;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.name;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.description;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.emailAddress;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.mailboxId;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.partnerId;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.conversionProfile2Id;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.moderationStatus;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.status;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.createdAt;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.defaultCategory;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.defaultUserId;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.defaultTags;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.defaultAdminTags;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.maxAttachmentSizeKbytes;
    /** @type {?} */
    KalturaEmailIngestionProfile.prototype.maxAttachmentsPerMail;
}
typesMappingStorage['KalturaEmailIngestionProfile'] = KalturaEmailIngestionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmxGLE1BQU0sbUNBQW9DLFNBQVEsaUJBQWlCOzs7O0lBbUIvRCxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0Msb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDL0gsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNsSixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5TW9kZXJhdGlvblN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5TW9kZXJhdGlvblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIG5hbWU/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGVtYWlsQWRkcmVzcz8gOiBzdHJpbmc7XG5cdG1haWxib3hJZD8gOiBzdHJpbmc7XG5cdGNvbnZlcnNpb25Qcm9maWxlMklkPyA6IG51bWJlcjtcblx0bW9kZXJhdGlvblN0YXR1cz8gOiBLYWx0dXJhRW50cnlNb2RlcmF0aW9uU3RhdHVzO1xuXHRkZWZhdWx0Q2F0ZWdvcnk/IDogc3RyaW5nO1xuXHRkZWZhdWx0VXNlcklkPyA6IHN0cmluZztcblx0ZGVmYXVsdFRhZ3M/IDogc3RyaW5nO1xuXHRkZWZhdWx0QWRtaW5UYWdzPyA6IHN0cmluZztcblx0bWF4QXR0YWNobWVudFNpemVLYnl0ZXM/IDogbnVtYmVyO1xuXHRtYXhBdHRhY2htZW50c1Blck1haWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRlbWFpbEFkZHJlc3MgOiBzdHJpbmc7XG5cdG1haWxib3hJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRjb252ZXJzaW9uUHJvZmlsZTJJZCA6IG51bWJlcjtcblx0bW9kZXJhdGlvblN0YXR1cyA6IEthbHR1cmFFbnRyeU1vZGVyYXRpb25TdGF0dXM7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGVTdGF0dXM7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IHN0cmluZztcblx0ZGVmYXVsdENhdGVnb3J5IDogc3RyaW5nO1xuXHRkZWZhdWx0VXNlcklkIDogc3RyaW5nO1xuXHRkZWZhdWx0VGFncyA6IHN0cmluZztcblx0ZGVmYXVsdEFkbWluVGFncyA6IHN0cmluZztcblx0bWF4QXR0YWNobWVudFNpemVLYnl0ZXMgOiBudW1iZXI7XG5cdG1heEF0dGFjaG1lbnRzUGVyTWFpbCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW1haWxBZGRyZXNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1haWxib3hJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZTJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtb2RlcmF0aW9uU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5TW9kZXJhdGlvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlNb2RlcmF0aW9uU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVmYXVsdENhdGVnb3J5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlZmF1bHRVc2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVmYXVsdFRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVmYXVsdEFkbWluVGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYXhBdHRhY2htZW50U2l6ZUtieXRlcyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtYXhBdHRhY2htZW50c1Blck1haWwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZSddID0gS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZTsiXX0=