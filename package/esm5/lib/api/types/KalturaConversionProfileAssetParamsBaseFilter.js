/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaConversionProfileAssetParamsBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.conversionProfileIdEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.conversionProfileIdIn;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.assetParamsIdEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.assetParamsIdIn;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.readyBehaviorEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.readyBehaviorIn;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.originEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.originIn;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsBaseFilterArgs.prototype.systemNameIn;
var KalturaConversionProfileAssetParamsBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConversionProfileAssetParamsBaseFilter, _super);
    function KalturaConversionProfileAssetParamsBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConversionProfileAssetParamsBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConversionProfileAssetParamsBaseFilter' },
            conversionProfileIdEqual: { type: 'n' },
            conversionProfileIdIn: { type: 's' },
            assetParamsIdEqual: { type: 'n' },
            assetParamsIdIn: { type: 's' },
            readyBehaviorEqual: { type: 'en', subTypeConstructor: KalturaFlavorReadyBehaviorType, subType: 'KalturaFlavorReadyBehaviorType' },
            readyBehaviorIn: { type: 's' },
            originEqual: { type: 'en', subTypeConstructor: KalturaAssetParamsOrigin, subType: 'KalturaAssetParamsOrigin' },
            originIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' }
        });
        return result;
    };
    return KalturaConversionProfileAssetParamsBaseFilter;
}(KalturaRelatedFilter));
export { KalturaConversionProfileAssetParamsBaseFilter };
if (false) {
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.conversionProfileIdEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.conversionProfileIdIn;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.assetParamsIdEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.assetParamsIdIn;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.readyBehaviorEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.readyBehaviorIn;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.originEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.originIn;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaConversionProfileAssetParamsBaseFilter.prototype.systemNameIn;
}
typesMappingStorage['KalturaConversionProfileAssetParamsBaseFilter'] = KalturaConversionProfileAssetParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0Jhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RixJQUFBO0lBQW1FLHlFQUFvQjtJQWFuRix1REFBWSxJQUF5RDtlQUVqRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9FQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtDQUErQyxFQUFFO1lBQ2xHLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNySSxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ2xILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0RBMURMO0VBb0JtRSxvQkFBb0IsRUF1Q3RGLENBQUE7QUF2Q0QseURBdUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtDQUErQyxDQUFDLEdBQUcsNkNBQTZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUmVhZHlCZWhhdmlvclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW4nO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBjb252ZXJzaW9uUHJvZmlsZUlkRXF1YWw/IDogbnVtYmVyO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkSW4/IDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkRXF1YWw/IDogbnVtYmVyO1xuXHRhc3NldFBhcmFtc0lkSW4/IDogc3RyaW5nO1xuXHRyZWFkeUJlaGF2aW9yRXF1YWw/IDogS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlO1xuXHRyZWFkeUJlaGF2aW9ySW4/IDogc3RyaW5nO1xuXHRvcmlnaW5FcXVhbD8gOiBLYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW47XG5cdG9yaWdpbkluPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgY29udmVyc2lvblByb2ZpbGVJZEVxdWFsIDogbnVtYmVyO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkSW4gOiBzdHJpbmc7XG5cdGFzc2V0UGFyYW1zSWRFcXVhbCA6IG51bWJlcjtcblx0YXNzZXRQYXJhbXNJZEluIDogc3RyaW5nO1xuXHRyZWFkeUJlaGF2aW9yRXF1YWwgOiBLYWx0dXJhRmxhdm9yUmVhZHlCZWhhdmlvclR5cGU7XG5cdHJlYWR5QmVoYXZpb3JJbiA6IHN0cmluZztcblx0b3JpZ2luRXF1YWwgOiBLYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW47XG5cdG9yaWdpbkluIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Y29udmVyc2lvblByb2ZpbGVJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlYWR5QmVoYXZpb3JFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JSZWFkeUJlaGF2aW9yVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yUmVhZHlCZWhhdmlvclR5cGUnIH0sXG5cdFx0XHRcdHJlYWR5QmVoYXZpb3JJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvcmlnaW5FcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBc3NldFBhcmFtc09yaWdpbiwgc3ViVHlwZSA6ICdLYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW4nIH0sXG5cdFx0XHRcdG9yaWdpbkluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0Jhc2VGaWx0ZXI7Il19