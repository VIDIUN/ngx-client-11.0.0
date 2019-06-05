/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFlavorAssetUrlOptionsArgs() { }
/** @type {?|undefined} */
KalturaFlavorAssetUrlOptionsArgs.prototype.fileName;
/** @type {?|undefined} */
KalturaFlavorAssetUrlOptionsArgs.prototype.referrer;
var KalturaFlavorAssetUrlOptions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorAssetUrlOptions, _super);
    function KalturaFlavorAssetUrlOptions(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorAssetUrlOptions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorAssetUrlOptions' },
            fileName: { type: 's' },
            referrer: { type: 's' }
        });
        return result;
    };
    return KalturaFlavorAssetUrlOptions;
}(KalturaObjectBase));
export { KalturaFlavorAssetUrlOptions };
if (false) {
    /** @type {?} */
    KalturaFlavorAssetUrlOptions.prototype.fileName;
    /** @type {?} */
    KalturaFlavorAssetUrlOptions.prototype.referrer;
}
typesMappingStorage['KalturaFlavorAssetUrlOptions'] = KalturaFlavorAssetUrlOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQVFsRixJQUFBO0lBQWtELHdEQUFpQjtJQUsvRCxzQ0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQWhDTDtFQVVrRCxpQkFBaUIsRUF1QmxFLENBQUE7QUF2QkQsd0NBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9uc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBmaWxlTmFtZT8gOiBzdHJpbmc7XG5cdHJlZmVycmVyPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9ucyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGZpbGVOYW1lIDogc3RyaW5nO1xuXHRyZWZlcnJlciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9uc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmxhdm9yQXNzZXRVcmxPcHRpb25zJyB9LFxuXHRcdFx0XHRmaWxlTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWZlcnJlciA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmxhdm9yQXNzZXRVcmxPcHRpb25zJ10gPSBLYWx0dXJhRmxhdm9yQXNzZXRVcmxPcHRpb25zOyJdfQ==