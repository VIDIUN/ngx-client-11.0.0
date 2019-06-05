/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbAssetStatus } from './KalturaThumbAssetStatus';
import { KalturaAssetFilter } from './KalturaAssetFilter';
/**
 * @record
 */
export function KalturaThumbAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.thumbParamsIdEqual;
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.thumbParamsIdIn;
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.statusNotIn;
var KalturaThumbAssetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaThumbAssetBaseFilter, _super);
    function KalturaThumbAssetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaThumbAssetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbAssetBaseFilter' },
            thumbParamsIdEqual: { type: 'n' },
            thumbParamsIdIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaThumbAssetStatus, subType: 'KalturaThumbAssetStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' }
        });
        return result;
    };
    return KalturaThumbAssetBaseFilter;
}(KalturaAssetFilter));
export { KalturaThumbAssetBaseFilter };
if (false) {
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.thumbParamsIdEqual;
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.thumbParamsIdIn;
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.statusNotIn;
}
typesMappingStorage['KalturaThumbAssetBaseFilter'] = KalturaThumbAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iQXNzZXRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJBc3NldEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsSUFBQTtJQUFpRCx1REFBa0I7SUFRL0QscUNBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUNoSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0ExQ0w7RUFjaUQsa0JBQWtCLEVBNkJsRSxDQUFBO0FBN0JELHVDQTZCQzs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1iQXNzZXRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFUaHVtYkFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBc3NldEZpbHRlciwgS2FsdHVyYUFzc2V0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGh1bWJBc3NldEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldEZpbHRlckFyZ3Mge1xuICAgIHRodW1iUGFyYW1zSWRFcXVhbD8gOiBudW1iZXI7XG5cdHRodW1iUGFyYW1zSWRJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFUaHVtYkFzc2V0U3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRodW1iQXNzZXRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUFzc2V0RmlsdGVyIHtcblxuICAgIHRodW1iUGFyYW1zSWRFcXVhbCA6IG51bWJlcjtcblx0dGh1bWJQYXJhbXNJZEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFUaHVtYkFzc2V0U3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0c3RhdHVzTm90SW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaHVtYkFzc2V0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVGh1bWJBc3NldEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdHRodW1iUGFyYW1zSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0aHVtYlBhcmFtc0lkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJBc3NldFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJBc3NldFN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzTm90SW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRodW1iQXNzZXRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhVGh1bWJBc3NldEJhc2VGaWx0ZXI7Il19