/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirusScanProfileStatus } from './KalturaVirusScanProfileStatus';
import { KalturaVirusScanEngineType } from './KalturaVirusScanEngineType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaVirusScanProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.engineTypeEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.engineTypeIn;
export class KalturaVirusScanProfileBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaVirusScanProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            nameEqual: { type: 's' },
            nameLike: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaVirusScanProfileStatus, subType: 'KalturaVirusScanProfileStatus' },
            statusIn: { type: 's' },
            engineTypeEqual: { type: 'es', subTypeConstructor: KalturaVirusScanEngineType, subType: 'KalturaVirusScanEngineType' },
            engineTypeIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.engineTypeEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.engineTypeIn;
}
typesMappingStorage['KalturaVirusScanProfileBaseFilter'] = KalturaVirusScanProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVmlydXNTY2FuUHJvZmlsZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQm5FLE1BQU0sd0NBQXlDLFNBQVEsYUFBYTs7OztJQWlCaEUsWUFBWSxJQUE2QztRQUVyRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQzVILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDMUgsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhVmlydXNTY2FuRW5naW5lVHlwZSB9IGZyb20gJy4vS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRuYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRuYW1lTGlrZT8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGVuZ2luZVR5cGVFcXVhbD8gOiBLYWx0dXJhVmlydXNTY2FuRW5naW5lVHlwZTtcblx0ZW5naW5lVHlwZUluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdG5hbWVFcXVhbCA6IHN0cmluZztcblx0bmFtZUxpa2UgOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRlbmdpbmVUeXBlRXF1YWwgOiBLYWx0dXJhVmlydXNTY2FuRW5naW5lVHlwZTtcblx0ZW5naW5lVHlwZUluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmdpbmVUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVmlydXNTY2FuRW5naW5lVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVmlydXNTY2FuRW5naW5lVHlwZScgfSxcblx0XHRcdFx0ZW5naW5lVHlwZUluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlQmFzZUZpbHRlciddID0gS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVCYXNlRmlsdGVyOyJdfQ==