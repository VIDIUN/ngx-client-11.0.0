/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbParamsFilter } from './KalturaThumbParamsFilter';
/**
 * @record
 */
export function KalturaThumbParamsOutputBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaThumbParamsOutputBaseFilterArgs.prototype.thumbParamsIdEqual;
/** @type {?|undefined} */
KalturaThumbParamsOutputBaseFilterArgs.prototype.thumbParamsVersionEqual;
/** @type {?|undefined} */
KalturaThumbParamsOutputBaseFilterArgs.prototype.thumbAssetIdEqual;
/** @type {?|undefined} */
KalturaThumbParamsOutputBaseFilterArgs.prototype.thumbAssetVersionEqual;
export class KalturaThumbParamsOutputBaseFilter extends KalturaThumbParamsFilter {
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
            objectType: { type: 'c', default: 'KalturaThumbParamsOutputBaseFilter' },
            thumbParamsIdEqual: { type: 'n' },
            thumbParamsVersionEqual: { type: 's' },
            thumbAssetIdEqual: { type: 's' },
            thumbAssetVersionEqual: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaThumbParamsOutputBaseFilter.prototype.thumbParamsIdEqual;
    /** @type {?} */
    KalturaThumbParamsOutputBaseFilter.prototype.thumbParamsVersionEqual;
    /** @type {?} */
    KalturaThumbParamsOutputBaseFilter.prototype.thumbAssetIdEqual;
    /** @type {?} */
    KalturaThumbParamsOutputBaseFilter.prototype.thumbAssetVersionEqual;
}
typesMappingStorage['KalturaThumbParamsOutputBaseFilter'] = KalturaThumbParamsOutputBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVwRyxNQUFNLHlDQUEwQyxTQUFRLHdCQUF3Qjs7OztJQU81RSxZQUFZLElBQThDO1FBRXRELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1iUGFyYW1zRmlsdGVyLCBLYWx0dXJhVGh1bWJQYXJhbXNGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJQYXJhbXNGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFUaHVtYlBhcmFtc091dHB1dEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFUaHVtYlBhcmFtc0ZpbHRlckFyZ3Mge1xuICAgIHRodW1iUGFyYW1zSWRFcXVhbD8gOiBudW1iZXI7XG5cdHRodW1iUGFyYW1zVmVyc2lvbkVxdWFsPyA6IHN0cmluZztcblx0dGh1bWJBc3NldElkRXF1YWw/IDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0VmVyc2lvbkVxdWFsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFUaHVtYlBhcmFtc0ZpbHRlciB7XG5cbiAgICB0aHVtYlBhcmFtc0lkRXF1YWwgOiBudW1iZXI7XG5cdHRodW1iUGFyYW1zVmVyc2lvbkVxdWFsIDogc3RyaW5nO1xuXHR0aHVtYkFzc2V0SWRFcXVhbCA6IHN0cmluZztcblx0dGh1bWJBc3NldFZlcnNpb25FcXVhbCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHR0aHVtYlBhcmFtc0lkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGh1bWJQYXJhbXNWZXJzaW9uRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGh1bWJBc3NldElkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGh1bWJBc3NldFZlcnNpb25FcXVhbCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRCYXNlRmlsdGVyOyJdfQ==