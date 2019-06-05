/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataProfileStatus } from './KalturaMetadataProfileStatus';
import { KalturaMetadataProfileCreateMode } from './KalturaMetadataProfileCreateMode';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaMetadataProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.metadataObjectTypeEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.metadataObjectTypeIn;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.versionEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createModeEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createModeNotEqual;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createModeIn;
/** @type {?|undefined} */
KalturaMetadataProfileBaseFilterArgs.prototype.createModeNotIn;
export class KalturaMetadataProfileBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaMetadataProfileBaseFilter' },
            idEqual: { type: 'n' },
            partnerIdEqual: { type: 'n' },
            metadataObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            metadataObjectTypeIn: { type: 's' },
            versionEqual: { type: 'n' },
            nameEqual: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaMetadataProfileStatus, subType: 'KalturaMetadataProfileStatus' },
            statusIn: { type: 's' },
            createModeEqual: { type: 'en', subTypeConstructor: KalturaMetadataProfileCreateMode, subType: 'KalturaMetadataProfileCreateMode' },
            createModeNotEqual: { type: 'en', subTypeConstructor: KalturaMetadataProfileCreateMode, subType: 'KalturaMetadataProfileCreateMode' },
            createModeIn: { type: 's' },
            createModeNotIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.metadataObjectTypeEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.metadataObjectTypeIn;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.versionEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createModeEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createModeNotEqual;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createModeIn;
    /** @type {?} */
    KalturaMetadataProfileBaseFilter.prototype.createModeNotIn;
}
typesMappingStorage['KalturaMetadataProfileBaseFilter'] = KalturaMetadataProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNZXRhZGF0YVByb2ZpbGVCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Qm5FLE1BQU0sdUNBQXdDLFNBQVEsYUFBYTs7OztJQXFCL0QsWUFBWSxJQUE0QztRQUVwRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDckYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDaEksb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQzFILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDdEksa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUN6SSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZXRhZGF0YVByb2ZpbGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0bWV0YWRhdGFPYmplY3RUeXBlRXF1YWw/IDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZTtcblx0bWV0YWRhdGFPYmplY3RUeXBlSW4/IDogc3RyaW5nO1xuXHR2ZXJzaW9uRXF1YWw/IDogbnVtYmVyO1xuXHRuYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVNb2RlRXF1YWw/IDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGU7XG5cdGNyZWF0ZU1vZGVOb3RFcXVhbD8gOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZTtcblx0Y3JlYXRlTW9kZUluPyA6IHN0cmluZztcblx0Y3JlYXRlTW9kZU5vdEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRtZXRhZGF0YU9iamVjdFR5cGVFcXVhbCA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdG1ldGFkYXRhT2JqZWN0VHlwZUluIDogc3RyaW5nO1xuXHR2ZXJzaW9uRXF1YWwgOiBudW1iZXI7XG5cdG5hbWVFcXVhbCA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZU1vZGVFcXVhbCA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVDcmVhdGVNb2RlO1xuXHRjcmVhdGVNb2RlTm90RXF1YWwgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZTtcblx0Y3JlYXRlTW9kZUluIDogc3RyaW5nO1xuXHRjcmVhdGVNb2RlTm90SW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhT2JqZWN0VHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRtZXRhZGF0YU9iamVjdFR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2ZXJzaW9uRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFQcm9maWxlU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVNb2RlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFQcm9maWxlQ3JlYXRlTW9kZScgfSxcblx0XHRcdFx0Y3JlYXRlTW9kZU5vdEVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUNyZWF0ZU1vZGUnIH0sXG5cdFx0XHRcdGNyZWF0ZU1vZGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVNb2RlTm90SW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVCYXNlRmlsdGVyOyJdfQ==