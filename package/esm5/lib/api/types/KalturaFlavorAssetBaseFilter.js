/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAssetStatus } from './KalturaFlavorAssetStatus';
import { KalturaAssetFilter } from './KalturaAssetFilter';
/**
 * @record
 */
export function KalturaFlavorAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.flavorParamsIdEqual;
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.flavorParamsIdIn;
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaFlavorAssetBaseFilterArgs.prototype.statusNotIn;
var KalturaFlavorAssetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorAssetBaseFilter, _super);
    function KalturaFlavorAssetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorAssetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorAssetBaseFilter' },
            flavorParamsIdEqual: { type: 'n' },
            flavorParamsIdIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaFlavorAssetStatus, subType: 'KalturaFlavorAssetStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' }
        });
        return result;
    };
    return KalturaFlavorAssetBaseFilter;
}(KalturaAssetFilter));
export { KalturaFlavorAssetBaseFilter };
if (false) {
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.flavorParamsIdEqual;
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.flavorParamsIdIn;
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaFlavorAssetBaseFilter.prototype.statusNotIn;
}
typesMappingStorage['KalturaFlavorAssetBaseFilter'] = KalturaFlavorAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvckFzc2V0QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvckFzc2V0QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixJQUFBO0lBQWtELHdEQUFrQjtJQVFoRSxzQ0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDbEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBMUNMO0VBY2tELGtCQUFrQixFQTZCbkUsQ0FBQTtBQTdCRCx3Q0E2QkM7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvckFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBc3NldEZpbHRlciwgS2FsdHVyYUFzc2V0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmxhdm9yQXNzZXRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRGaWx0ZXJBcmdzIHtcbiAgICBmbGF2b3JQYXJhbXNJZEVxdWFsPyA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1zSWRJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFGbGF2b3JBc3NldFN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNOb3RJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGbGF2b3JBc3NldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXNzZXRGaWx0ZXIge1xuXG4gICAgZmxhdm9yUGFyYW1zSWRFcXVhbCA6IG51bWJlcjtcblx0Zmxhdm9yUGFyYW1zSWRJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhRmxhdm9yQXNzZXRTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRzdGF0dXNOb3RJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZsYXZvckFzc2V0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmxhdm9yQXNzZXRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yQXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvckFzc2V0U3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNOb3RJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmxhdm9yQXNzZXRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRmxhdm9yQXNzZXRCYXNlRmlsdGVyOyJdfQ==