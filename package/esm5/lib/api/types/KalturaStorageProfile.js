/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaStorageProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStorageProfile, _super);
    function KalturaStorageProfile(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.pathManagerParams === 'undefined')
            _this.pathManagerParams = [];
        if (typeof _this.rules === 'undefined')
            _this.rules = [];
        if (typeof _this.deliveryProfileIds === 'undefined')
            _this.deliveryProfileIds = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaStorageProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaStorageProfile;
}(KalturaObjectBase));
export { KalturaStorageProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0b3JhZ2VQcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RvcmFnZVByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NsRixJQUFBO0lBQTJDLGlEQUFpQjtJQW1DeEQsK0JBQVksSUFBaUM7UUFBN0MsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtRQUhHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDckYsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGtCQUFrQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7O0tBQzlFOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ25ILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ3pILFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDckcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxtQ0FBbUMsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDM0ksYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDeEksZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsV0FBVyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDakYsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDdEcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzFCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBL0hMO0VBMEMyQyxpQkFBaUIsRUFzRjNELENBQUE7QUF0RkQsaUNBc0ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZVByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZVByb2ZpbGVQcm90b2NvbCB9IGZyb20gJy4vS2FsdHVyYVN0b3JhZ2VQcm9maWxlUHJvdG9jb2wnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYVN0b3JhZ2VQcm9maWxlRGVsaXZlcnlTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlUHJvZmlsZURlbGl2ZXJ5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFTdG9yYWdlUHJvZmlsZVJlYWR5QmVoYXZpb3IgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlUHJvZmlsZVJlYWR5QmVoYXZpb3InO1xuaW1wb3J0IHsgS2FsdHVyYVJ1bGUgfSBmcm9tICcuL0thbHR1cmFSdWxlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3RvcmFnZVByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHRkZXNjaXB0aW9uPyA6IHN0cmluZztcblx0c3RhdHVzPyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cztcblx0cHJvdG9jb2w/IDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlUHJvdG9jb2w7XG5cdHN0b3JhZ2VVcmw/IDogc3RyaW5nO1xuXHRzdG9yYWdlQmFzZURpcj8gOiBzdHJpbmc7XG5cdHN0b3JhZ2VVc2VybmFtZT8gOiBzdHJpbmc7XG5cdHN0b3JhZ2VQYXNzd29yZD8gOiBzdHJpbmc7XG5cdHN0b3JhZ2VGdHBQYXNzaXZlTW9kZT8gOiBib29sZWFuO1xuXHRtaW5GaWxlU2l6ZT8gOiBudW1iZXI7XG5cdG1heEZpbGVTaXplPyA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1zSWRzPyA6IHN0cmluZztcblx0bWF4Q29uY3VycmVudENvbm5lY3Rpb25zPyA6IG51bWJlcjtcblx0cGF0aE1hbmFnZXJDbGFzcz8gOiBzdHJpbmc7XG5cdHBhdGhNYW5hZ2VyUGFyYW1zPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHR0cmlnZ2VyPyA6IG51bWJlcjtcblx0ZGVsaXZlcnlQcmlvcml0eT8gOiBudW1iZXI7XG5cdGRlbGl2ZXJ5U3RhdHVzPyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZURlbGl2ZXJ5U3RhdHVzO1xuXHRyZWFkeUJlaGF2aW9yPyA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVJlYWR5QmVoYXZpb3I7XG5cdGFsbG93QXV0b0RlbGV0ZT8gOiBudW1iZXI7XG5cdGNyZWF0ZUZpbGVMaW5rPyA6IGJvb2xlYW47XG5cdHJ1bGVzPyA6IEthbHR1cmFSdWxlW107XG5cdGRlbGl2ZXJ5UHJvZmlsZUlkcz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0cHJpdmF0ZUtleT8gOiBzdHJpbmc7XG5cdHB1YmxpY0tleT8gOiBzdHJpbmc7XG5cdHBhc3NQaHJhc2U/IDogc3RyaW5nO1xuXHRzaG91bGRFeHBvcnRUaHVtYnM/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN0b3JhZ2VQcm9maWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0bmFtZSA6IHN0cmluZztcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0ZGVzY2lwdGlvbiA6IHN0cmluZztcblx0c3RhdHVzIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlU3RhdHVzO1xuXHRwcm90b2NvbCA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVByb3RvY29sO1xuXHRzdG9yYWdlVXJsIDogc3RyaW5nO1xuXHRzdG9yYWdlQmFzZURpciA6IHN0cmluZztcblx0c3RvcmFnZVVzZXJuYW1lIDogc3RyaW5nO1xuXHRzdG9yYWdlUGFzc3dvcmQgOiBzdHJpbmc7XG5cdHN0b3JhZ2VGdHBQYXNzaXZlTW9kZSA6IGJvb2xlYW47XG5cdG1pbkZpbGVTaXplIDogbnVtYmVyO1xuXHRtYXhGaWxlU2l6ZSA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1zSWRzIDogc3RyaW5nO1xuXHRtYXhDb25jdXJyZW50Q29ubmVjdGlvbnMgOiBudW1iZXI7XG5cdHBhdGhNYW5hZ2VyQ2xhc3MgOiBzdHJpbmc7XG5cdHBhdGhNYW5hZ2VyUGFyYW1zIDogS2FsdHVyYUtleVZhbHVlW107XG5cdHRyaWdnZXIgOiBudW1iZXI7XG5cdGRlbGl2ZXJ5UHJpb3JpdHkgOiBudW1iZXI7XG5cdGRlbGl2ZXJ5U3RhdHVzIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlRGVsaXZlcnlTdGF0dXM7XG5cdHJlYWR5QmVoYXZpb3IgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVSZWFkeUJlaGF2aW9yO1xuXHRhbGxvd0F1dG9EZWxldGUgOiBudW1iZXI7XG5cdGNyZWF0ZUZpbGVMaW5rIDogYm9vbGVhbjtcblx0cnVsZXMgOiBLYWx0dXJhUnVsZVtdO1xuXHRkZWxpdmVyeVByb2ZpbGVJZHMgOiBLYWx0dXJhS2V5VmFsdWVbXTtcblx0cHJpdmF0ZUtleSA6IHN0cmluZztcblx0cHVibGljS2V5IDogc3RyaW5nO1xuXHRwYXNzUGhyYXNlIDogc3RyaW5nO1xuXHRzaG91bGRFeHBvcnRUaHVtYnMgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXRoTWFuYWdlclBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucGF0aE1hbmFnZXJQYXJhbXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMucnVsZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJ1bGVzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRlbGl2ZXJ5UHJvZmlsZUlkcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZGVsaXZlcnlQcm9maWxlSWRzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVN0b3JhZ2VQcm9maWxlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhU3RvcmFnZVByb2ZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0b3JhZ2VQcm9maWxlUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYVN0b3JhZ2VQcm9maWxlUHJvdG9jb2wnIH0sXG5cdFx0XHRcdHN0b3JhZ2VVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RvcmFnZUJhc2VEaXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RvcmFnZVVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0b3JhZ2VQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdG9yYWdlRnRwUGFzc2l2ZU1vZGUgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0bWluRmlsZVNpemUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWF4RmlsZVNpemUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1heENvbmN1cnJlbnRDb25uZWN0aW9ucyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXRoTWFuYWdlckNsYXNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhdGhNYW5hZ2VyUGFyYW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHR0cmlnZ2VyIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlbGl2ZXJ5UHJpb3JpdHkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVsaXZlcnlTdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RvcmFnZVByb2ZpbGVEZWxpdmVyeVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhU3RvcmFnZVByb2ZpbGVEZWxpdmVyeVN0YXR1cycgfSxcblx0XHRcdFx0cmVhZHlCZWhhdmlvciA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdG9yYWdlUHJvZmlsZVJlYWR5QmVoYXZpb3IsIHN1YlR5cGUgOiAnS2FsdHVyYVN0b3JhZ2VQcm9maWxlUmVhZHlCZWhhdmlvcicgfSxcblx0XHRcdFx0YWxsb3dBdXRvRGVsZXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZUZpbGVMaW5rIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHJ1bGVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUnVsZSwgc3ViVHlwZSA6ICdLYWx0dXJhUnVsZScgfSxcblx0XHRcdFx0ZGVsaXZlcnlQcm9maWxlSWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhS2V5VmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUtleVZhbHVlJyB9LFxuXHRcdFx0XHRwcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzUGhyYXNlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNob3VsZEV4cG9ydFRodW1icyA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3RvcmFnZVByb2ZpbGUnXSA9IEthbHR1cmFTdG9yYWdlUHJvZmlsZTsiXX0=