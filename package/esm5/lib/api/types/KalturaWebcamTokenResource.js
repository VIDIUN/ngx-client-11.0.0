/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
/**
 * @record
 */
export function KalturaWebcamTokenResourceArgs() { }
/** @type {?|undefined} */
KalturaWebcamTokenResourceArgs.prototype.token;
var KalturaWebcamTokenResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWebcamTokenResource, _super);
    function KalturaWebcamTokenResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWebcamTokenResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWebcamTokenResource' },
            token: { type: 's' }
        });
        return result;
    };
    return KalturaWebcamTokenResource;
}(KalturaDataCenterContentResource));
export { KalturaWebcamTokenResource };
if (false) {
    /** @type {?} */
    KalturaWebcamTokenResource.prototype.token;
}
typesMappingStorage['KalturaWebcamTokenResource'] = KalturaWebcamTokenResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmNhbVRva2VuUmVzb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXZWJjYW1Ub2tlblJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBd0MsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7OztBQU81SCxJQUFBO0lBQWdELHNEQUFnQztJQUk1RSxvQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQTdCTDtFQVNnRCxnQ0FBZ0MsRUFxQi9FLENBQUE7QUFyQkQsc0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UsIEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlQXJncyB9IGZyb20gJy4vS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFXZWJjYW1Ub2tlblJlc291cmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZUFyZ3Mge1xuICAgIHRva2VuPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVdlYmNhbVRva2VuUmVzb3VyY2UgZXh0ZW5kcyBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSB7XG5cbiAgICB0b2tlbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdlYmNhbVRva2VuUmVzb3VyY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdlYmNhbVRva2VuUmVzb3VyY2UnIH0sXG5cdFx0XHRcdHRva2VuIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXZWJjYW1Ub2tlblJlc291cmNlJ10gPSBLYWx0dXJhV2ViY2FtVG9rZW5SZXNvdXJjZTsiXX0=