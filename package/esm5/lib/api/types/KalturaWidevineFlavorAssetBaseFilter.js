/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAssetFilter } from './KalturaFlavorAssetFilter';
/**
 * @record
 */
export function KalturaWidevineFlavorAssetBaseFilterArgs() { }
var KalturaWidevineFlavorAssetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWidevineFlavorAssetBaseFilter, _super);
    function KalturaWidevineFlavorAssetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWidevineFlavorAssetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWidevineFlavorAssetBaseFilter' }
        });
        return result;
    };
    return KalturaWidevineFlavorAssetBaseFilter;
}(KalturaFlavorAssetFilter));
export { KalturaWidevineFlavorAssetBaseFilter };
typesMappingStorage['KalturaWidevineFlavorAssetBaseFilter'] = KalturaWidevineFlavorAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGV2aW5lRmxhdm9yQXNzZXRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFnQyxNQUFNLDRCQUE0QixDQUFDOzs7OztBQU9wRyxJQUFBO0lBQTBELGdFQUF3QjtJQUk5RSw4Q0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1NBQ2hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBNUJMO0VBUzBELHdCQUF3QixFQW9CakYsQ0FBQTtBQXBCRCxnREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldEZpbHRlciwgS2FsdHVyYUZsYXZvckFzc2V0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvckFzc2V0RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JBc3NldEZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yQXNzZXRGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFXaWRldmluZUZsYXZvckFzc2V0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldEJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXaWRldmluZUZsYXZvckFzc2V0QmFzZUZpbHRlciddID0gS2FsdHVyYVdpZGV2aW5lRmxhdm9yQXNzZXRCYXNlRmlsdGVyOyJdfQ==