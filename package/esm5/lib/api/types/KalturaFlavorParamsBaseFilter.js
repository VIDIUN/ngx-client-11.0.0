/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParamsFilter } from './KalturaAssetParamsFilter';
/**
 * @record
 */
export function KalturaFlavorParamsBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaFlavorParamsBaseFilterArgs.prototype.formatEqual;
var KalturaFlavorParamsBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorParamsBaseFilter, _super);
    function KalturaFlavorParamsBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorParamsBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorParamsBaseFilter' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaContainerFormat, subType: 'KalturaContainerFormat' }
        });
        return result;
    };
    return KalturaFlavorParamsBaseFilter;
}(KalturaAssetParamsFilter));
export { KalturaFlavorParamsBaseFilter };
if (false) {
    /** @type {?} */
    KalturaFlavorParamsBaseFilter.prototype.formatEqual;
}
typesMappingStorage['KalturaFlavorParamsBaseFilter'] = KalturaFlavorParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtc0Jhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGbGF2b3JQYXJhbXNCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQU9wRyxJQUFBO0lBQW1ELHlEQUF3QjtJQUl2RSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ3JHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBOUJMO0VBVW1ELHdCQUF3QixFQXFCMUUsQ0FBQTtBQXJCRCx5Q0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGFpbmVyRm9ybWF0IH0gZnJvbSAnLi9LYWx0dXJhQ29udGFpbmVyRm9ybWF0JztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlciwgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmxhdm9yUGFyYW1zQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyQXJncyB7XG4gICAgZm9ybWF0RXF1YWw/IDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdDtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZsYXZvclBhcmFtc0Jhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXIge1xuXG4gICAgZm9ybWF0RXF1YWwgOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmxhdm9yUGFyYW1zQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Zm9ybWF0RXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0LCBzdWJUeXBlIDogJ0thbHR1cmFDb250YWluZXJGb3JtYXQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGbGF2b3JQYXJhbXNCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRmxhdm9yUGFyYW1zQmFzZUZpbHRlcjsiXX0=