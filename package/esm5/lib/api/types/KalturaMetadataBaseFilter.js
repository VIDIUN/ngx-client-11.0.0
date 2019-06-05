/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaMetadataBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetadataBaseFilter, _super);
    function KalturaMetadataBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetadataBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaMetadataBaseFilter;
}(KalturaRelatedFilter));
export { KalturaMetadataBaseFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0J4RixJQUFBO0lBQStDLHFEQUFvQjtJQXFCL0QsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdDQUF3QyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6RCxxQ0FBcUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEQsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNoSSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM1RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBbEZMO0VBNEIrQyxvQkFBb0IsRUF1RGxFLENBQUE7QUF2REQscUNBdURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZXRhZGF0YUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgcGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVJZEVxdWFsPyA6IG51bWJlcjtcblx0bWV0YWRhdGFQcm9maWxlSWRJbj8gOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZVZlcnNpb25FcXVhbD8gOiBudW1iZXI7XG5cdG1ldGFkYXRhUHJvZmlsZVZlcnNpb25HcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0bWV0YWRhdGFPYmplY3RUeXBlRXF1YWw/IDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZTtcblx0b2JqZWN0SWRFcXVhbD8gOiBzdHJpbmc7XG5cdG9iamVjdElkSW4/IDogc3RyaW5nO1xuXHR2ZXJzaW9uRXF1YWw/IDogbnVtYmVyO1xuXHR2ZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0dmVyc2lvbkxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhTWV0YWRhdGFTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1ldGFkYXRhQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVJZEVxdWFsIDogbnVtYmVyO1xuXHRtZXRhZGF0YVByb2ZpbGVJZEluIDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uRXF1YWwgOiBudW1iZXI7XG5cdG1ldGFkYXRhUHJvZmlsZVZlcnNpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdG1ldGFkYXRhUHJvZmlsZVZlcnNpb25MZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdG1ldGFkYXRhT2JqZWN0VHlwZUVxdWFsIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZTtcblx0b2JqZWN0SWRFcXVhbCA6IHN0cmluZztcblx0b2JqZWN0SWRJbiA6IHN0cmluZztcblx0dmVyc2lvbkVxdWFsIDogbnVtYmVyO1xuXHR2ZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHR2ZXJzaW9uTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFNZXRhZGF0YVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZXRhZGF0YUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1ldGFkYXRhQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZVZlcnNpb25FcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVWZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZVZlcnNpb25MZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFPYmplY3RUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdG9iamVjdElkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2ZXJzaW9uTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZXRhZGF0YUJhc2VGaWx0ZXInXSA9IEthbHR1cmFNZXRhZGF0YUJhc2VGaWx0ZXI7Il19