/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaEmailIngestionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailIngestionProfile, _super);
    function KalturaEmailIngestionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEmailIngestionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaEmailIngestionProfile;
}(KalturaObjectBase));
export { KalturaEmailIngestionProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JsRixJQUFBO0lBQWtELHdEQUFpQjtJQW1CL0Qsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0Msb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDL0gsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNsSixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0F4RUw7RUFzQmtELGlCQUFpQixFQW1EbEUsQ0FBQTtBQW5ERCx3Q0FtREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlNb2RlcmF0aW9uU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlNb2RlcmF0aW9uU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0ZW1haWxBZGRyZXNzPyA6IHN0cmluZztcblx0bWFpbGJveElkPyA6IHN0cmluZztcblx0Y29udmVyc2lvblByb2ZpbGUySWQ/IDogbnVtYmVyO1xuXHRtb2RlcmF0aW9uU3RhdHVzPyA6IEthbHR1cmFFbnRyeU1vZGVyYXRpb25TdGF0dXM7XG5cdGRlZmF1bHRDYXRlZ29yeT8gOiBzdHJpbmc7XG5cdGRlZmF1bHRVc2VySWQ/IDogc3RyaW5nO1xuXHRkZWZhdWx0VGFncz8gOiBzdHJpbmc7XG5cdGRlZmF1bHRBZG1pblRhZ3M/IDogc3RyaW5nO1xuXHRtYXhBdHRhY2htZW50U2l6ZUtieXRlcz8gOiBudW1iZXI7XG5cdG1heEF0dGFjaG1lbnRzUGVyTWFpbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGVtYWlsQWRkcmVzcyA6IHN0cmluZztcblx0bWFpbGJveElkIDogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGNvbnZlcnNpb25Qcm9maWxlMklkIDogbnVtYmVyO1xuXHRtb2RlcmF0aW9uU3RhdHVzIDogS2FsdHVyYUVudHJ5TW9kZXJhdGlvblN0YXR1cztcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZVN0YXR1cztcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogc3RyaW5nO1xuXHRkZWZhdWx0Q2F0ZWdvcnkgOiBzdHJpbmc7XG5cdGRlZmF1bHRVc2VySWQgOiBzdHJpbmc7XG5cdGRlZmF1bHRUYWdzIDogc3RyaW5nO1xuXHRkZWZhdWx0QWRtaW5UYWdzIDogc3RyaW5nO1xuXHRtYXhBdHRhY2htZW50U2l6ZUtieXRlcyA6IG51bWJlcjtcblx0bWF4QXR0YWNobWVudHNQZXJNYWlsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbWFpbEluZ2VzdGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWFpbGJveElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlMklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1vZGVyYXRpb25TdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlNb2RlcmF0aW9uU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeU1vZGVyYXRpb25TdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVtYWlsSW5nZXN0aW9uUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlU3RhdHVzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkZWZhdWx0Q2F0ZWdvcnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVmYXVsdFVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWZhdWx0VGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWZhdWx0QWRtaW5UYWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1heEF0dGFjaG1lbnRTaXplS2J5dGVzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1heEF0dGFjaG1lbnRzUGVyTWFpbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlJ10gPSBLYWx0dXJhRW1haWxJbmdlc3Rpb25Qcm9maWxlOyJdfQ==