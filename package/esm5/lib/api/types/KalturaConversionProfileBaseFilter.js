/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConversionProfileStatus } from './KalturaConversionProfileStatus';
import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaConversionProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.defaultEntryIdEqual;
/** @type {?|undefined} */
KalturaConversionProfileBaseFilterArgs.prototype.defaultEntryIdIn;
var KalturaConversionProfileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConversionProfileBaseFilter, _super);
    function KalturaConversionProfileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConversionProfileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConversionProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaConversionProfileStatus, subType: 'KalturaConversionProfileStatus' },
            statusIn: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaConversionProfileType, subType: 'KalturaConversionProfileType' },
            typeIn: { type: 's' },
            nameEqual: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            defaultEntryIdEqual: { type: 's' },
            defaultEntryIdIn: { type: 's' }
        });
        return result;
    };
    return KalturaConversionProfileBaseFilter;
}(KalturaRelatedFilter));
export { KalturaConversionProfileBaseFilter };
if (false) {
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.defaultEntryIdEqual;
    /** @type {?} */
    KalturaConversionProfileBaseFilter.prototype.defaultEntryIdIn;
}
typesMappingStorage['KalturaConversionProfileBaseFilter'] = KalturaConversionProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnhGLElBQUE7SUFBd0QsOERBQW9CO0lBZ0J4RSw0Q0FBWSxJQUE4QztlQUV0RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3ZGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUM5SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3hILE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQW5FTDtFQXVCd0Qsb0JBQW9CLEVBNkMzRSxDQUFBO0FBN0NELDhDQTZDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGUgfSBmcm9tICcuL0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0dHlwZUVxdWFsPyA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGU7XG5cdHR5cGVJbj8gOiBzdHJpbmc7XG5cdG5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRkZWZhdWx0RW50cnlJZEVxdWFsPyA6IHN0cmluZztcblx0ZGVmYXVsdEVudHJ5SWRJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHR5cGVFcXVhbCA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGU7XG5cdHR5cGVJbiA6IHN0cmluZztcblx0bmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbiA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRkZWZhdWx0RW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHRkZWZhdWx0RW50cnlJZEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlVHlwZScgfSxcblx0XHRcdFx0dHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlZmF1bHRFbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVmYXVsdEVudHJ5SWRJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVCYXNlRmlsdGVyOyJdfQ==