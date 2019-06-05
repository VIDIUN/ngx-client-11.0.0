/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaFileSyncBaseFilter extends KalturaFilter {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVTeW5jQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZpbGVTeW5jQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DbkUsTUFBTSxnQ0FBaUMsU0FBUSxhQUFhOzs7O0lBZ0N4RCxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDNUgsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM1RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQzFHLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVN5bmNPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRmlsZVN5bmNPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlU3luY1N0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUZpbGVTeW5jU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFGaWxlU3luY1R5cGUgfSBmcm9tICcuL0thbHR1cmFGaWxlU3luY1R5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGaWxlU3luY0Jhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdGZpbGVPYmplY3RUeXBlRXF1YWw/IDogS2FsdHVyYUZpbGVTeW5jT2JqZWN0VHlwZTtcblx0ZmlsZU9iamVjdFR5cGVJbj8gOiBzdHJpbmc7XG5cdG9iamVjdElkRXF1YWw/IDogc3RyaW5nO1xuXHRvYmplY3RJZEluPyA6IHN0cmluZztcblx0dmVyc2lvbkVxdWFsPyA6IHN0cmluZztcblx0dmVyc2lvbkluPyA6IHN0cmluZztcblx0b2JqZWN0U3ViVHlwZUVxdWFsPyA6IG51bWJlcjtcblx0b2JqZWN0U3ViVHlwZUluPyA6IHN0cmluZztcblx0ZGNFcXVhbD8gOiBzdHJpbmc7XG5cdGRjSW4/IDogc3RyaW5nO1xuXHRvcmlnaW5hbEVxdWFsPyA6IG51bWJlcjtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHJlYWR5QXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRyZWFkeUF0TGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0c3luY1RpbWVHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRzeW5jVGltZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFGaWxlU3luY1N0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRmaWxlVHlwZUVxdWFsPyA6IEthbHR1cmFGaWxlU3luY1R5cGU7XG5cdGZpbGVUeXBlSW4/IDogc3RyaW5nO1xuXHRsaW5rZWRJZEVxdWFsPyA6IG51bWJlcjtcblx0bGlua0NvdW50R3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0bGlua0NvdW50TGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZmlsZVNpemVHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRmaWxlU2l6ZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGaWxlU3luY0Jhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRmaWxlT2JqZWN0VHlwZUVxdWFsIDogS2FsdHVyYUZpbGVTeW5jT2JqZWN0VHlwZTtcblx0ZmlsZU9iamVjdFR5cGVJbiA6IHN0cmluZztcblx0b2JqZWN0SWRFcXVhbCA6IHN0cmluZztcblx0b2JqZWN0SWRJbiA6IHN0cmluZztcblx0dmVyc2lvbkVxdWFsIDogc3RyaW5nO1xuXHR2ZXJzaW9uSW4gOiBzdHJpbmc7XG5cdG9iamVjdFN1YlR5cGVFcXVhbCA6IG51bWJlcjtcblx0b2JqZWN0U3ViVHlwZUluIDogc3RyaW5nO1xuXHRkY0VxdWFsIDogc3RyaW5nO1xuXHRkY0luIDogc3RyaW5nO1xuXHRvcmlnaW5hbEVxdWFsIDogbnVtYmVyO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRyZWFkeUF0R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRyZWFkeUF0TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRzeW5jVGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0c3luY1RpbWVMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUZpbGVTeW5jU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0ZmlsZVR5cGVFcXVhbCA6IEthbHR1cmFGaWxlU3luY1R5cGU7XG5cdGZpbGVUeXBlSW4gOiBzdHJpbmc7XG5cdGxpbmtlZElkRXF1YWwgOiBudW1iZXI7XG5cdGxpbmtDb3VudEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0bGlua0NvdW50TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRmaWxlU2l6ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZmlsZVNpemVMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGaWxlU3luY0Jhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZpbGVTeW5jQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmlsZU9iamVjdFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlU3luY09iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVTeW5jT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0ZmlsZU9iamVjdFR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbkVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZlcnNpb25JbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RTdWJUeXBlRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0b2JqZWN0U3ViVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRjRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvcmlnaW5hbEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRyZWFkeUF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlYWR5QXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3luY1RpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3luY1RpbWVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZVN5bmNTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVTeW5jU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbGVTeW5jVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsZVN5bmNUeXBlJyB9LFxuXHRcdFx0XHRmaWxlVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxpbmtlZElkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGlua0NvdW50R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxpbmtDb3VudExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmaWxlU2l6ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmaWxlU2l6ZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmlsZVN5bmNCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRmlsZVN5bmNCYXNlRmlsdGVyOyJdfQ==