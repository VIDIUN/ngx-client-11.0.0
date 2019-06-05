/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAccessControlScope } from './KalturaAccessControlScope';
/**
 * @record
 */
export function KalturaEntryContextDataParamsArgs() { }
/** @type {?|undefined} */
KalturaEntryContextDataParamsArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaEntryContextDataParamsArgs.prototype.flavorTags;
/** @type {?|undefined} */
KalturaEntryContextDataParamsArgs.prototype.streamerType;
/** @type {?|undefined} */
KalturaEntryContextDataParamsArgs.prototype.mediaProtocol;
var KalturaEntryContextDataParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryContextDataParams, _super);
    function KalturaEntryContextDataParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryContextDataParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryContextDataParams' },
            flavorAssetId: { type: 's' },
            flavorTags: { type: 's' },
            streamerType: { type: 's' },
            mediaProtocol: { type: 's' }
        });
        return result;
    };
    return KalturaEntryContextDataParams;
}(KalturaAccessControlScope));
export { KalturaEntryContextDataParams };
if (false) {
    /** @type {?} */
    KalturaEntryContextDataParams.prototype.flavorAssetId;
    /** @type {?} */
    KalturaEntryContextDataParams.prototype.flavorTags;
    /** @type {?} */
    KalturaEntryContextDataParams.prototype.streamerType;
    /** @type {?} */
    KalturaEntryContextDataParams.prototype.mediaProtocol;
}
typesMappingStorage['KalturaEntryContextDataParams'] = KalturaEntryContextDataParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVV2RyxJQUFBO0lBQW1ELHlEQUF5QjtJQU94RSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0F0Q0w7RUFZbUQseUJBQXlCLEVBMkIzRSxDQUFBO0FBM0JELHlDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBY2Nlc3NDb250cm9sU2NvcGUsIEthbHR1cmFBY2Nlc3NDb250cm9sU2NvcGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZUFyZ3Mge1xuICAgIGZsYXZvckFzc2V0SWQ/IDogc3RyaW5nO1xuXHRmbGF2b3JUYWdzPyA6IHN0cmluZztcblx0c3RyZWFtZXJUeXBlPyA6IHN0cmluZztcblx0bWVkaWFQcm90b2NvbD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zIGV4dGVuZHMgS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZSB7XG5cbiAgICBmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRmbGF2b3JUYWdzIDogc3RyaW5nO1xuXHRzdHJlYW1lclR5cGUgOiBzdHJpbmc7XG5cdG1lZGlhUHJvdG9jb2wgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvclRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RyZWFtZXJUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhUHJvdG9jb2wgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMnXSA9IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zOyJdfQ==