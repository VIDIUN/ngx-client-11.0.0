/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
/**
 * @record
 */
export function KalturaSwfFlavorParamsArgs() { }
/** @type {?|undefined} */
KalturaSwfFlavorParamsArgs.prototype.flashVersion;
/** @type {?|undefined} */
KalturaSwfFlavorParamsArgs.prototype.poly2Bitmap;
var KalturaSwfFlavorParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSwfFlavorParams, _super);
    function KalturaSwfFlavorParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSwfFlavorParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSwfFlavorParams' },
            flashVersion: { type: 'n' },
            poly2Bitmap: { type: 'b' }
        });
        return result;
    };
    return KalturaSwfFlavorParams;
}(KalturaFlavorParams));
export { KalturaSwfFlavorParams };
if (false) {
    /** @type {?} */
    KalturaSwfFlavorParams.prototype.flashVersion;
    /** @type {?} */
    KalturaSwfFlavorParams.prototype.poly2Bitmap;
}
typesMappingStorage['KalturaSwfFlavorParams'] = KalturaSwfFlavorParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN3ZkZsYXZvclBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN3ZkZsYXZvclBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7OztBQVFyRixJQUFBO0lBQTRDLGtEQUFtQjtJQUszRCxnQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQWhDTDtFQVU0QyxtQkFBbUIsRUF1QjlELENBQUE7QUF2QkQsa0NBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zLCBLYWx0dXJhRmxhdm9yUGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVN3ZkZsYXZvclBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUZsYXZvclBhcmFtc0FyZ3Mge1xuICAgIGZsYXNoVmVyc2lvbj8gOiBudW1iZXI7XG5cdHBvbHkyQml0bWFwPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTd2ZGbGF2b3JQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zIHtcblxuICAgIGZsYXNoVmVyc2lvbiA6IG51bWJlcjtcblx0cG9seTJCaXRtYXAgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3dmRmxhdm9yUGFyYW1zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTd2ZGbGF2b3JQYXJhbXMnIH0sXG5cdFx0XHRcdGZsYXNoVmVyc2lvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwb2x5MkJpdG1hcCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3dmRmxhdm9yUGFyYW1zJ10gPSBLYWx0dXJhU3dmRmxhdm9yUGFyYW1zOyJdfQ==