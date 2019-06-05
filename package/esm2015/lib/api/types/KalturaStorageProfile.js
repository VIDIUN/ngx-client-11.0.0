/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageProfileStatus } from './KalturaStorageProfileStatus';
import { KalturaStorageProfileProtocol } from './KalturaStorageProfileProtocol';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaStorageProfileDeliveryStatus } from './KalturaStorageProfileDeliveryStatus';
import { KalturaStorageProfileReadyBehavior } from './KalturaStorageProfileReadyBehavior';
import { KalturaRule } from './KalturaRule';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaStorageProfileArgs() { }
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.desciption;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.status;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.storageUrl;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.storageBaseDir;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.storageUsername;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.storagePassword;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.storageFtpPassiveMode;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.minFileSize;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.maxFileSize;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.flavorParamsIds;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.maxConcurrentConnections;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.pathManagerClass;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.pathManagerParams;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.trigger;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.deliveryPriority;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.deliveryStatus;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.readyBehavior;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.allowAutoDelete;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.createFileLink;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.rules;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.deliveryProfileIds;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.privateKey;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.publicKey;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.passPhrase;
/** @type {?|undefined} */
KalturaStorageProfileArgs.prototype.shouldExportThumbs;
export class KalturaStorageProfile extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.pathManagerParams === 'undefined')
            this.pathManagerParams = [];
        if (typeof this.rules === 'undefined')
            this.rules = [];
        if (typeof this.deliveryProfileIds === 'undefined')
            this.deliveryProfileIds = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaStorageProfile' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            name: { type: 's' },
            systemName: { type: 's' },
            desciption: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaStorageProfileStatus, subType: 'KalturaStorageProfileStatus' },
            protocol: { type: 'es', subTypeConstructor: KalturaStorageProfileProtocol, subType: 'KalturaStorageProfileProtocol' },
            storageUrl: { type: 's' },
            storageBaseDir: { type: 's' },
            storageUsername: { type: 's' },
            storagePassword: { type: 's' },
            storageFtpPassiveMode: { type: 'b' },
            minFileSize: { type: 'n' },
            maxFileSize: { type: 'n' },
            flavorParamsIds: { type: 's' },
            maxConcurrentConnections: { type: 'n' },
            pathManagerClass: { type: 's' },
            pathManagerParams: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            trigger: { type: 'n' },
            deliveryPriority: { type: 'n' },
            deliveryStatus: { type: 'en', subTypeConstructor: KalturaStorageProfileDeliveryStatus, subType: 'KalturaStorageProfileDeliveryStatus' },
            readyBehavior: { type: 'en', subTypeConstructor: KalturaStorageProfileReadyBehavior, subType: 'KalturaStorageProfileReadyBehavior' },
            allowAutoDelete: { type: 'n' },
            createFileLink: { type: 'b' },
            rules: { type: 'a', subTypeConstructor: KalturaRule, subType: 'KalturaRule' },
            deliveryProfileIds: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            privateKey: { type: 's' },
            publicKey: { type: 's' },
            passPhrase: { type: 's' },
            shouldExportThumbs: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaStorageProfile.prototype.id;
    /** @type {?} */
    KalturaStorageProfile.prototype.createdAt;
    /** @type {?} */
    KalturaStorageProfile.prototype.updatedAt;
    /** @type {?} */
    KalturaStorageProfile.prototype.partnerId;
    /** @type {?} */
    KalturaStorageProfile.prototype.name;
    /** @type {?} */
    KalturaStorageProfile.prototype.systemName;
    /** @type {?} */
    KalturaStorageProfile.prototype.desciption;
    /** @type {?} */
    KalturaStorageProfile.prototype.status;
    /** @type {?} */
    KalturaStorageProfile.prototype.protocol;
    /** @type {?} */
    KalturaStorageProfile.prototype.storageUrl;
    /** @type {?} */
    KalturaStorageProfile.prototype.storageBaseDir;
    /** @type {?} */
    KalturaStorageProfile.prototype.storageUsername;
    /** @type {?} */
    KalturaStorageProfile.prototype.storagePassword;
    /** @type {?} */
    KalturaStorageProfile.prototype.storageFtpPassiveMode;
    /** @type {?} */
    KalturaStorageProfile.prototype.minFileSize;
    /** @type {?} */
    KalturaStorageProfile.prototype.maxFileSize;
    /** @type {?} */
    KalturaStorageProfile.prototype.flavorParamsIds;
    /** @type {?} */
    KalturaStorageProfile.prototype.maxConcurrentConnections;
    /** @type {?} */
    KalturaStorageProfile.prototype.pathManagerClass;
    /** @type {?} */
    KalturaStorageProfile.prototype.pathManagerParams;
    /** @type {?} */
    KalturaStorageProfile.prototype.trigger;
    /** @type {?} */
    KalturaStorageProfile.prototype.deliveryPriority;
    /** @type {?} */
    KalturaStorageProfile.prototype.deliveryStatus;
    /** @type {?} */
    KalturaStorageProfile.prototype.readyBehavior;
    /** @type {?} */
    KalturaStorageProfile.prototype.allowAutoDelete;
    /** @type {?} */
    KalturaStorageProfile.prototype.createFileLink;
    /** @type {?} */
    KalturaStorageProfile.prototype.rules;
    /** @type {?} */
    KalturaStorageProfile.prototype.deliveryProfileIds;
    /** @type {?} */
    KalturaStorageProfile.prototype.privateKey;
    /** @type {?} */
    KalturaStorageProfile.prototype.publicKey;
    /** @type {?} */
    KalturaStorageProfile.prototype.passPhrase;
    /** @type {?} */
    KalturaStorageProfile.prototype.shouldExportThumbs;
}
typesMappingStorage['KalturaStorageProfile'] = KalturaStorageProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0b3JhZ2VQcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RvcmFnZVByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ2xGLE1BQU0sNEJBQTZCLFNBQVEsaUJBQWlCOzs7O0lBbUN4RCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDckYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7S0FDOUU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNuSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUN6SCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3JHLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUNBQW1DLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQzNJLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3hJLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLFdBQVcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2pGLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3RHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VQcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlUHJvZmlsZVByb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhU3RvcmFnZVByb2ZpbGVQcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZVByb2ZpbGVEZWxpdmVyeVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VQcm9maWxlRGVsaXZlcnlTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVN0b3JhZ2VQcm9maWxlUmVhZHlCZWhhdmlvciB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VQcm9maWxlUmVhZHlCZWhhdmlvcic7XG5pbXBvcnQgeyBLYWx0dXJhUnVsZSB9IGZyb20gJy4vS2FsdHVyYVJ1bGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTdG9yYWdlUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NpcHRpb24/IDogc3RyaW5nO1xuXHRzdGF0dXM/IDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlU3RhdHVzO1xuXHRwcm90b2NvbD8gOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVQcm90b2NvbDtcblx0c3RvcmFnZVVybD8gOiBzdHJpbmc7XG5cdHN0b3JhZ2VCYXNlRGlyPyA6IHN0cmluZztcblx0c3RvcmFnZVVzZXJuYW1lPyA6IHN0cmluZztcblx0c3RvcmFnZVBhc3N3b3JkPyA6IHN0cmluZztcblx0c3RvcmFnZUZ0cFBhc3NpdmVNb2RlPyA6IGJvb2xlYW47XG5cdG1pbkZpbGVTaXplPyA6IG51bWJlcjtcblx0bWF4RmlsZVNpemU/IDogbnVtYmVyO1xuXHRmbGF2b3JQYXJhbXNJZHM/IDogc3RyaW5nO1xuXHRtYXhDb25jdXJyZW50Q29ubmVjdGlvbnM/IDogbnVtYmVyO1xuXHRwYXRoTWFuYWdlckNsYXNzPyA6IHN0cmluZztcblx0cGF0aE1hbmFnZXJQYXJhbXM/IDogS2FsdHVyYUtleVZhbHVlW107XG5cdHRyaWdnZXI/IDogbnVtYmVyO1xuXHRkZWxpdmVyeVByaW9yaXR5PyA6IG51bWJlcjtcblx0ZGVsaXZlcnlTdGF0dXM/IDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlRGVsaXZlcnlTdGF0dXM7XG5cdHJlYWR5QmVoYXZpb3I/IDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlUmVhZHlCZWhhdmlvcjtcblx0YWxsb3dBdXRvRGVsZXRlPyA6IG51bWJlcjtcblx0Y3JlYXRlRmlsZUxpbms/IDogYm9vbGVhbjtcblx0cnVsZXM/IDogS2FsdHVyYVJ1bGVbXTtcblx0ZGVsaXZlcnlQcm9maWxlSWRzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRwcml2YXRlS2V5PyA6IHN0cmluZztcblx0cHVibGljS2V5PyA6IHN0cmluZztcblx0cGFzc1BocmFzZT8gOiBzdHJpbmc7XG5cdHNob3VsZEV4cG9ydFRodW1icz8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3RvcmFnZVByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRkZXNjaXB0aW9uIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVTdGF0dXM7XG5cdHByb3RvY29sIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlUHJvdG9jb2w7XG5cdHN0b3JhZ2VVcmwgOiBzdHJpbmc7XG5cdHN0b3JhZ2VCYXNlRGlyIDogc3RyaW5nO1xuXHRzdG9yYWdlVXNlcm5hbWUgOiBzdHJpbmc7XG5cdHN0b3JhZ2VQYXNzd29yZCA6IHN0cmluZztcblx0c3RvcmFnZUZ0cFBhc3NpdmVNb2RlIDogYm9vbGVhbjtcblx0bWluRmlsZVNpemUgOiBudW1iZXI7XG5cdG1heEZpbGVTaXplIDogbnVtYmVyO1xuXHRmbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cdG1heENvbmN1cnJlbnRDb25uZWN0aW9ucyA6IG51bWJlcjtcblx0cGF0aE1hbmFnZXJDbGFzcyA6IHN0cmluZztcblx0cGF0aE1hbmFnZXJQYXJhbXMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0dHJpZ2dlciA6IG51bWJlcjtcblx0ZGVsaXZlcnlQcmlvcml0eSA6IG51bWJlcjtcblx0ZGVsaXZlcnlTdGF0dXMgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVEZWxpdmVyeVN0YXR1cztcblx0cmVhZHlCZWhhdmlvciA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVJlYWR5QmVoYXZpb3I7XG5cdGFsbG93QXV0b0RlbGV0ZSA6IG51bWJlcjtcblx0Y3JlYXRlRmlsZUxpbmsgOiBib29sZWFuO1xuXHRydWxlcyA6IEthbHR1cmFSdWxlW107XG5cdGRlbGl2ZXJ5UHJvZmlsZUlkcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRwcml2YXRlS2V5IDogc3RyaW5nO1xuXHRwdWJsaWNLZXkgOiBzdHJpbmc7XG5cdHBhc3NQaHJhc2UgOiBzdHJpbmc7XG5cdHNob3VsZEV4cG9ydFRodW1icyA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBhdGhNYW5hZ2VyUGFyYW1zID09PSAndW5kZWZpbmVkJykgdGhpcy5wYXRoTWFuYWdlclBhcmFtcyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5ydWxlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucnVsZXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuZGVsaXZlcnlQcm9maWxlSWRzID09PSAndW5kZWZpbmVkJykgdGhpcy5kZWxpdmVyeVByb2ZpbGVJZHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3RvcmFnZVByb2ZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0cHJvdG9jb2wgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVQcm90b2NvbCwgc3ViVHlwZSA6ICdLYWx0dXJhU3RvcmFnZVByb2ZpbGVQcm90b2NvbCcgfSxcblx0XHRcdFx0c3RvcmFnZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdG9yYWdlQmFzZURpciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdG9yYWdlVXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RvcmFnZVBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0b3JhZ2VGdHBQYXNzaXZlTW9kZSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRtaW5GaWxlU2l6ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtYXhGaWxlU2l6ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWF4Q29uY3VycmVudENvbm5lY3Rpb25zIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhdGhNYW5hZ2VyQ2xhc3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGF0aE1hbmFnZXJQYXJhbXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdHRyaWdnZXIgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVsaXZlcnlQcmlvcml0eSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZWxpdmVyeVN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZURlbGl2ZXJ5U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTdG9yYWdlUHJvZmlsZURlbGl2ZXJ5U3RhdHVzJyB9LFxuXHRcdFx0XHRyZWFkeUJlaGF2aW9yIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlUmVhZHlCZWhhdmlvciwgc3ViVHlwZSA6ICdLYWx0dXJhU3RvcmFnZVByb2ZpbGVSZWFkeUJlaGF2aW9yJyB9LFxuXHRcdFx0XHRhbGxvd0F1dG9EZWxldGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y3JlYXRlRmlsZUxpbmsgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cnVsZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSdWxlLCBzdWJUeXBlIDogJ0thbHR1cmFSdWxlJyB9LFxuXHRcdFx0XHRkZWxpdmVyeVByb2ZpbGVJZHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdHByaXZhdGVLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHVibGljS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3NQaHJhc2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2hvdWxkRXhwb3J0VGh1bWJzIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTdG9yYWdlUHJvZmlsZSddID0gS2FsdHVyYVN0b3JhZ2VQcm9maWxlOyJdfQ==