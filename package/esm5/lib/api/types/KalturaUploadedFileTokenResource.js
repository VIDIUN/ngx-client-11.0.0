/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDataCenterContentResource } from './KalturaGenericDataCenterContentResource';
/**
 * @record
 */
export function KalturaUploadedFileTokenResourceArgs() { }
/** @type {?|undefined} */
KalturaUploadedFileTokenResourceArgs.prototype.token;
var KalturaUploadedFileTokenResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUploadedFileTokenResource, _super);
    function KalturaUploadedFileTokenResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUploadedFileTokenResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUploadedFileTokenResource' },
            token: { type: 's' }
        });
        return result;
    };
    return KalturaUploadedFileTokenResource;
}(KalturaGenericDataCenterContentResource));
export { KalturaUploadedFileTokenResource };
if (false) {
    /** @type {?} */
    KalturaUploadedFileTokenResource.prototype.token;
}
typesMappingStorage['KalturaUploadedFileTokenResource'] = KalturaUploadedFileTokenResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVwbG9hZGVkRmlsZVRva2VuUmVzb3VyY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcGxvYWRlZEZpbGVUb2tlblJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1Q0FBdUMsRUFBK0MsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7OztBQU9qSixJQUFBO0lBQXNELDREQUF1QztJQUl6RiwwQ0FBWSxJQUE0QztlQUVwRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTdCTDtFQVNzRCx1Q0FBdUMsRUFxQjVGLENBQUE7QUFyQkQsNENBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlLCBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVcGxvYWRlZEZpbGVUb2tlblJlc291cmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2VBcmdzIHtcbiAgICB0b2tlbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVcGxvYWRlZEZpbGVUb2tlblJlc291cmNlIGV4dGVuZHMgS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlIHtcblxuICAgIHRva2VuIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXBsb2FkZWRGaWxlVG9rZW5SZXNvdXJjZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXBsb2FkZWRGaWxlVG9rZW5SZXNvdXJjZScgfSxcblx0XHRcdFx0dG9rZW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVwbG9hZGVkRmlsZVRva2VuUmVzb3VyY2UnXSA9IEthbHR1cmFVcGxvYWRlZEZpbGVUb2tlblJlc291cmNlOyJdfQ==