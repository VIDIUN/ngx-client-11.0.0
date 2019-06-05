/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResourceStatus } from './KalturaScheduleResourceStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaScheduleResourceBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.parentIdEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.parentIdIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
export class KalturaScheduleResourceBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaScheduleResourceBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            parentIdEqual: { type: 'n' },
            parentIdIn: { type: 's' },
            nameEqual: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaScheduleResourceStatus, subType: 'KalturaScheduleResourceStatus' },
            statusIn: { type: 's' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.parentIdEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.parentIdIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaScheduleResourceBaseFilter'] = KalturaScheduleResourceBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCeEYsTUFBTSx3Q0FBeUMsU0FBUSxvQkFBb0I7Ozs7SUFvQnZFLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUM1SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZVJlc291cmNlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRpZE5vdEluPyA6IHN0cmluZztcblx0cGFyZW50SWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcmVudElkSW4/IDogc3RyaW5nO1xuXHRuYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHR0YWdzTGlrZT8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0aWROb3RJbiA6IHN0cmluZztcblx0cGFyZW50SWRFcXVhbCA6IG51bWJlcjtcblx0cGFyZW50SWRJbiA6IHN0cmluZztcblx0bmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHRhZ3NMaWtlIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudElkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFyZW50SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZVJlc291cmNlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZVJlc291cmNlU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyJ10gPSBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXI7Il19