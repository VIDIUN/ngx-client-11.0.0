/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaAssetFilter } from './KalturaAssetFilter';
/**
 * @record
 */
export function KalturaCaptionAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.captionParamsIdEqual;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.captionParamsIdIn;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.formatEqual;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.formatIn;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCaptionAssetBaseFilterArgs.prototype.statusNotIn;
export class KalturaCaptionAssetBaseFilter extends KalturaAssetFilter {
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
            objectType: { type: 'c', default: 'KalturaCaptionAssetBaseFilter' },
            captionParamsIdEqual: { type: 'n' },
            captionParamsIdIn: { type: 's' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaCaptionType, subType: 'KalturaCaptionType' },
            formatIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCaptionAssetStatus, subType: 'KalturaCaptionAssetStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.captionParamsIdEqual;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.captionParamsIdIn;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.formatEqual;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.formatIn;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCaptionAssetBaseFilter.prototype.statusNotIn;
}
typesMappingStorage['KalturaCaptionAssetBaseFilter'] = KalturaCaptionAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25Bc3NldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uQXNzZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWxGLE1BQU0sb0NBQXFDLFNBQVEsa0JBQWtCOzs7O0lBVWpFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdEcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNwSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25Bc3NldFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25Bc3NldFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRGaWx0ZXIsIEthbHR1cmFBc3NldEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFBc3NldEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhcHRpb25Bc3NldEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldEZpbHRlckFyZ3Mge1xuICAgIGNhcHRpb25QYXJhbXNJZEVxdWFsPyA6IG51bWJlcjtcblx0Y2FwdGlvblBhcmFtc0lkSW4/IDogc3RyaW5nO1xuXHRmb3JtYXRFcXVhbD8gOiBLYWx0dXJhQ2FwdGlvblR5cGU7XG5cdGZvcm1hdEluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUNhcHRpb25Bc3NldFN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNOb3RJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXB0aW9uQXNzZXRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUFzc2V0RmlsdGVyIHtcblxuICAgIGNhcHRpb25QYXJhbXNJZEVxdWFsIDogbnVtYmVyO1xuXHRjYXB0aW9uUGFyYW1zSWRJbiA6IHN0cmluZztcblx0Zm9ybWF0RXF1YWwgOiBLYWx0dXJhQ2FwdGlvblR5cGU7XG5cdGZvcm1hdEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFDYXB0aW9uQXNzZXRTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRzdGF0dXNOb3RJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhcHRpb25Bc3NldEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhcHRpb25Bc3NldEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGNhcHRpb25QYXJhbXNJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNhcHRpb25QYXJhbXNJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZvcm1hdEVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uVHlwZScgfSxcblx0XHRcdFx0Zm9ybWF0SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvbkFzc2V0U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uQXNzZXRTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c05vdEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXB0aW9uQXNzZXRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQ2FwdGlvbkFzc2V0QmFzZUZpbHRlcjsiXX0=