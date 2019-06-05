/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileAssetObjectType } from './KalturaFileAssetObjectType';
import { KalturaFileAssetStatus } from './KalturaFileAssetStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaFileAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.fileAssetObjectTypeEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.objectIdEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.objectIdIn;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.statusIn;
var KalturaFileAssetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFileAssetBaseFilter, _super);
    function KalturaFileAssetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFileAssetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFileAssetBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            fileAssetObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaFileAssetObjectType, subType: 'KalturaFileAssetObjectType' },
            objectIdEqual: { type: 's' },
            objectIdIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'n' },
            createdAtLessThanOrEqual: { type: 'n' },
            updatedAtGreaterThanOrEqual: { type: 'n' },
            updatedAtLessThanOrEqual: { type: 'n' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaFileAssetStatus, subType: 'KalturaFileAssetStatus' },
            statusIn: { type: 's' }
        });
        return result;
    };
    return KalturaFileAssetBaseFilter;
}(KalturaRelatedFilter));
export { KalturaFileAssetBaseFilter };
if (false) {
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.fileAssetObjectTypeEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.objectIdEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.objectIdIn;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaFileAssetBaseFilter'] = KalturaFileAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVBc3NldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGaWxlQXNzZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhGLElBQUE7SUFBZ0Qsc0RBQW9CO0lBZWhFLG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUNuSSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0FoRUw7RUFzQmdELG9CQUFvQixFQTJDbkUsQ0FBQTtBQTNDRCxzQ0EyQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVBc3NldE9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFGaWxlQXNzZXRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlQXNzZXRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFGaWxlQXNzZXRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGaWxlQXNzZXRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRmaWxlQXNzZXRPYmplY3RUeXBlRXF1YWw/IDogS2FsdHVyYUZpbGVBc3NldE9iamVjdFR5cGU7XG5cdG9iamVjdElkRXF1YWw/IDogc3RyaW5nO1xuXHRvYmplY3RJZEluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUZpbGVBc3NldFN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmlsZUFzc2V0QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRmaWxlQXNzZXRPYmplY3RUeXBlRXF1YWwgOiBLYWx0dXJhRmlsZUFzc2V0T2JqZWN0VHlwZTtcblx0b2JqZWN0SWRFcXVhbCA6IHN0cmluZztcblx0b2JqZWN0SWRJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFGaWxlQXNzZXRTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmlsZUFzc2V0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmlsZUFzc2V0QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbGVBc3NldE9iamVjdFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlQXNzZXRPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFGaWxlQXNzZXRPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRvYmplY3RJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9iamVjdElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbGVBc3NldFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRmlsZUFzc2V0U3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmlsZUFzc2V0QmFzZUZpbHRlciddID0gS2FsdHVyYUZpbGVBc3NldEJhc2VGaWx0ZXI7Il19