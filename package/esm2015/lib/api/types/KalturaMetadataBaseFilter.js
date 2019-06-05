/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataStatus } from './KalturaMetadataStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaMetadataBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.metadataProfileIdEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.metadataProfileIdIn;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.metadataProfileVersionEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.metadataProfileVersionGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.metadataProfileVersionLessThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.metadataObjectTypeEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.objectIdEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.objectIdIn;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.versionEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.versionGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.versionLessThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaMetadataBaseFilterArgs.prototype.statusIn;
export class KalturaMetadataBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaMetadataBaseFilter' },
            partnerIdEqual: { type: 'n' },
            metadataProfileIdEqual: { type: 'n' },
            metadataProfileIdIn: { type: 's' },
            metadataProfileVersionEqual: { type: 'n' },
            metadataProfileVersionGreaterThanOrEqual: { type: 'n' },
            metadataProfileVersionLessThanOrEqual: { type: 'n' },
            metadataObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            objectIdEqual: { type: 's' },
            objectIdIn: { type: 's' },
            versionEqual: { type: 'n' },
            versionGreaterThanOrEqual: { type: 'n' },
            versionLessThanOrEqual: { type: 'n' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaMetadataStatus, subType: 'KalturaMetadataStatus' },
            statusIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.metadataProfileIdEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.metadataProfileIdIn;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.metadataProfileVersionEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.metadataProfileVersionGreaterThanOrEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.metadataProfileVersionLessThanOrEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.metadataObjectTypeEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.objectIdEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.objectIdIn;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.versionEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.versionGreaterThanOrEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.versionLessThanOrEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaMetadataBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaMetadataBaseFilter'] = KalturaMetadataBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QnhGLE1BQU0sZ0NBQWlDLFNBQVEsb0JBQW9COzs7O0lBcUIvRCxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdDQUF3QyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6RCxxQ0FBcUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEQsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNoSSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM1RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWV0YWRhdGFCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0bWV0YWRhdGFQcm9maWxlSWRFcXVhbD8gOiBudW1iZXI7XG5cdG1ldGFkYXRhUHJvZmlsZUlkSW4/IDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uRXF1YWw/IDogbnVtYmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0bWV0YWRhdGFQcm9maWxlVmVyc2lvbkxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdG1ldGFkYXRhT2JqZWN0VHlwZUVxdWFsPyA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdG9iamVjdElkRXF1YWw/IDogc3RyaW5nO1xuXHRvYmplY3RJZEluPyA6IHN0cmluZztcblx0dmVyc2lvbkVxdWFsPyA6IG51bWJlcjtcblx0dmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHZlcnNpb25MZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYU1ldGFkYXRhU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRhZGF0YUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0bWV0YWRhdGFQcm9maWxlSWRFcXVhbCA6IG51bWJlcjtcblx0bWV0YWRhdGFQcm9maWxlSWRJbiA6IHN0cmluZztcblx0bWV0YWRhdGFQcm9maWxlVmVyc2lvbkVxdWFsIDogbnVtYmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRtZXRhZGF0YU9iamVjdFR5cGVFcXVhbCA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdG9iamVjdElkRXF1YWwgOiBzdHJpbmc7XG5cdG9iamVjdElkSW4gOiBzdHJpbmc7XG5cdHZlcnNpb25FcXVhbCA6IG51bWJlcjtcblx0dmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0dmVyc2lvbkxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhTWV0YWRhdGFTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWV0YWRhdGFCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZXRhZGF0YUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlVmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhT2JqZWN0VHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRvYmplY3RJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbkVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZlcnNpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmVyc2lvbkxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWV0YWRhdGFCYXNlRmlsdGVyJ10gPSBLYWx0dXJhTWV0YWRhdGFCYXNlRmlsdGVyOyJdfQ==