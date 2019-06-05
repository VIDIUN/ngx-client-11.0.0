/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaAssetParamsFilter } from './KalturaAssetParamsFilter';
/**
 * @record
 */
export function KalturaCaptionParamsBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCaptionParamsBaseFilterArgs.prototype.formatEqual;
/** @type {?|undefined} */
KalturaCaptionParamsBaseFilterArgs.prototype.formatIn;
export class KalturaCaptionParamsBaseFilter extends KalturaAssetParamsFilter {
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
            objectType: { type: 'c', default: 'KalturaCaptionParamsBaseFilter' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaCaptionType, subType: 'KalturaCaptionType' },
            formatIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCaptionParamsBaseFilter.prototype.formatEqual;
    /** @type {?} */
    KalturaCaptionParamsBaseFilter.prototype.formatIn;
}
typesMappingStorage['KalturaCaptionParamsBaseFilter'] = KalturaCaptionParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25QYXJhbXNCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2FwdGlvblBhcmFtc0Jhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQWdDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7OztBQVFwRyxNQUFNLHFDQUFzQyxTQUFRLHdCQUF3Qjs7OztJQUt4RSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN0RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyLCBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXB0aW9uUGFyYW1zQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyQXJncyB7XG4gICAgZm9ybWF0RXF1YWw/IDogS2FsdHVyYUNhcHRpb25UeXBlO1xuXHRmb3JtYXRJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXB0aW9uUGFyYW1zQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlciB7XG5cbiAgICBmb3JtYXRFcXVhbCA6IEthbHR1cmFDYXB0aW9uVHlwZTtcblx0Zm9ybWF0SW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXB0aW9uUGFyYW1zQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2FwdGlvblBhcmFtc0Jhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGZvcm1hdEVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhcHRpb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uVHlwZScgfSxcblx0XHRcdFx0Zm9ybWF0SW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNhcHRpb25QYXJhbXNCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQ2FwdGlvblBhcmFtc0Jhc2VGaWx0ZXI7Il19