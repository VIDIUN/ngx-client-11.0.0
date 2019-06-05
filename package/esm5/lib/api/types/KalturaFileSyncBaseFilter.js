/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileSyncObjectType } from './KalturaFileSyncObjectType';
import { KalturaFileSyncStatus } from './KalturaFileSyncStatus';
import { KalturaFileSyncType } from './KalturaFileSyncType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaFileSyncBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.fileObjectTypeEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.fileObjectTypeIn;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.objectIdEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.objectIdIn;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.versionEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.versionIn;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.objectSubTypeEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.objectSubTypeIn;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.dcEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.dcIn;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.originalEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.readyAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.readyAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.syncTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.syncTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.fileTypeEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.fileTypeIn;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.linkedIdEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.linkCountGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.linkCountLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.fileSizeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileSyncBaseFilterArgs.prototype.fileSizeLessThanOrEqual;
var KalturaFileSyncBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFileSyncBaseFilter, _super);
    function KalturaFileSyncBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFileSyncBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFileSyncBaseFilter' },
            partnerIdEqual: { type: 'n' },
            fileObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaFileSyncObjectType, subType: 'KalturaFileSyncObjectType' },
            fileObjectTypeIn: { type: 's' },
            objectIdEqual: { type: 's' },
            objectIdIn: { type: 's' },
            versionEqual: { type: 's' },
            versionIn: { type: 's' },
            objectSubTypeEqual: { type: 'n' },
            objectSubTypeIn: { type: 's' },
            dcEqual: { type: 's' },
            dcIn: { type: 's' },
            originalEqual: { type: 'n' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            readyAtGreaterThanOrEqual: { type: 'n' },
            readyAtLessThanOrEqual: { type: 'n' },
            syncTimeGreaterThanOrEqual: { type: 'n' },
            syncTimeLessThanOrEqual: { type: 'n' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaFileSyncStatus, subType: 'KalturaFileSyncStatus' },
            statusIn: { type: 's' },
            fileTypeEqual: { type: 'en', subTypeConstructor: KalturaFileSyncType, subType: 'KalturaFileSyncType' },
            fileTypeIn: { type: 's' },
            linkedIdEqual: { type: 'n' },
            linkCountGreaterThanOrEqual: { type: 'n' },
            linkCountLessThanOrEqual: { type: 'n' },
            fileSizeGreaterThanOrEqual: { type: 'n' },
            fileSizeLessThanOrEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaFileSyncBaseFilter;
}(KalturaFilter));
export { KalturaFileSyncBaseFilter };
if (false) {
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.fileObjectTypeEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.fileObjectTypeIn;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.objectIdEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.objectIdIn;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.versionEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.versionIn;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.objectSubTypeEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.objectSubTypeIn;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.dcEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.dcIn;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.originalEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.readyAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.readyAtLessThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.syncTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.syncTimeLessThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.fileTypeEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.fileTypeIn;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.linkedIdEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.linkCountGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.linkCountLessThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.fileSizeGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileSyncBaseFilter.prototype.fileSizeLessThanOrEqual;
}
typesMappingStorage['KalturaFileSyncBaseFilter'] = KalturaFileSyncBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVTeW5jQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZpbGVTeW5jQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ25FLElBQUE7SUFBK0MscURBQWE7SUFnQ3hELG1DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzVILGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDNUcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUMxRyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBcEhMO0VBd0MrQyxhQUFhLEVBNkUzRCxDQUFBO0FBN0VELHFDQTZFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVTeW5jT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUZpbGVTeW5jT2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVN5bmNTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFGaWxlU3luY1N0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVN5bmNUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRmlsZVN5bmNUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmlsZVN5bmNCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgcGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRmaWxlT2JqZWN0VHlwZUVxdWFsPyA6IEthbHR1cmFGaWxlU3luY09iamVjdFR5cGU7XG5cdGZpbGVPYmplY3RUeXBlSW4/IDogc3RyaW5nO1xuXHRvYmplY3RJZEVxdWFsPyA6IHN0cmluZztcblx0b2JqZWN0SWRJbj8gOiBzdHJpbmc7XG5cdHZlcnNpb25FcXVhbD8gOiBzdHJpbmc7XG5cdHZlcnNpb25Jbj8gOiBzdHJpbmc7XG5cdG9iamVjdFN1YlR5cGVFcXVhbD8gOiBudW1iZXI7XG5cdG9iamVjdFN1YlR5cGVJbj8gOiBzdHJpbmc7XG5cdGRjRXF1YWw/IDogc3RyaW5nO1xuXHRkY0luPyA6IHN0cmluZztcblx0b3JpZ2luYWxFcXVhbD8gOiBudW1iZXI7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRyZWFkeUF0R3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cmVhZHlBdExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHN5bmNUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0c3luY1RpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhRmlsZVN5bmNTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0ZmlsZVR5cGVFcXVhbD8gOiBLYWx0dXJhRmlsZVN5bmNUeXBlO1xuXHRmaWxlVHlwZUluPyA6IHN0cmluZztcblx0bGlua2VkSWRFcXVhbD8gOiBudW1iZXI7XG5cdGxpbmtDb3VudEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGxpbmtDb3VudExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGZpbGVTaXplR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZmlsZVNpemVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmlsZVN5bmNCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0ZmlsZU9iamVjdFR5cGVFcXVhbCA6IEthbHR1cmFGaWxlU3luY09iamVjdFR5cGU7XG5cdGZpbGVPYmplY3RUeXBlSW4gOiBzdHJpbmc7XG5cdG9iamVjdElkRXF1YWwgOiBzdHJpbmc7XG5cdG9iamVjdElkSW4gOiBzdHJpbmc7XG5cdHZlcnNpb25FcXVhbCA6IHN0cmluZztcblx0dmVyc2lvbkluIDogc3RyaW5nO1xuXHRvYmplY3RTdWJUeXBlRXF1YWwgOiBudW1iZXI7XG5cdG9iamVjdFN1YlR5cGVJbiA6IHN0cmluZztcblx0ZGNFcXVhbCA6IHN0cmluZztcblx0ZGNJbiA6IHN0cmluZztcblx0b3JpZ2luYWxFcXVhbCA6IG51bWJlcjtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0cmVhZHlBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cmVhZHlBdExlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0c3luY1RpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHN5bmNUaW1lTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFGaWxlU3luY1N0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdGZpbGVUeXBlRXF1YWwgOiBLYWx0dXJhRmlsZVN5bmNUeXBlO1xuXHRmaWxlVHlwZUluIDogc3RyaW5nO1xuXHRsaW5rZWRJZEVxdWFsIDogbnVtYmVyO1xuXHRsaW5rQ291bnRHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGxpbmtDb3VudExlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZmlsZVNpemVHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGZpbGVTaXplTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmlsZVN5bmNCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGaWxlU3luY0Jhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbGVPYmplY3RUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZVN5bmNPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFGaWxlU3luY09iamVjdFR5cGUnIH0sXG5cdFx0XHRcdGZpbGVPYmplY3RUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZlcnNpb25FcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0U3ViVHlwZUVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG9iamVjdFN1YlR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkY0VxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRjSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3JpZ2luYWxFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0cmVhZHlBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWFkeUF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN5bmNUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN5bmNUaW1lTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbGVTeW5jU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFGaWxlU3luY1N0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZVR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlU3luY1R5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVTeW5jVHlwZScgfSxcblx0XHRcdFx0ZmlsZVR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsaW5rZWRJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxpbmtDb3VudEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsaW5rQ291bnRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmlsZVNpemVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmlsZVNpemVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZpbGVTeW5jQmFzZUZpbHRlciddID0gS2FsdHVyYUZpbGVTeW5jQmFzZUZpbHRlcjsiXX0=