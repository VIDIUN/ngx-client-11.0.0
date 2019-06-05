/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
/**
 * @record
 */
export function KalturaSwfFlavorParamsOutputArgs() { }
/** @type {?|undefined} */
KalturaSwfFlavorParamsOutputArgs.prototype.flashVersion;
/** @type {?|undefined} */
KalturaSwfFlavorParamsOutputArgs.prototype.poly2Bitmap;
var KalturaSwfFlavorParamsOutput = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSwfFlavorParamsOutput, _super);
    function KalturaSwfFlavorParamsOutput(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSwfFlavorParamsOutput.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSwfFlavorParamsOutput' },
            flashVersion: { type: 'n' },
            poly2Bitmap: { type: 'b' }
        });
        return result;
    };
    return KalturaSwfFlavorParamsOutput;
}(KalturaFlavorParamsOutput));
export { KalturaSwfFlavorParamsOutput };
if (false) {
    /** @type {?} */
    KalturaSwfFlavorParamsOutput.prototype.flashVersion;
    /** @type {?} */
    KalturaSwfFlavorParamsOutput.prototype.poly2Bitmap;
}
typesMappingStorage['KalturaSwfFlavorParamsOutput'] = KalturaSwfFlavorParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN3ZkZsYXZvclBhcmFtc091dHB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN3ZkZsYXZvclBhcmFtc091dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7OztBQVF2RyxJQUFBO0lBQWtELHdEQUF5QjtJQUt2RSxzQ0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQWhDTDtFQVVrRCx5QkFBeUIsRUF1QjFFLENBQUE7QUF2QkQsd0NBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0LCBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVN3ZkZsYXZvclBhcmFtc091dHB1dEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEFyZ3Mge1xuICAgIGZsYXNoVmVyc2lvbj8gOiBudW1iZXI7XG5cdHBvbHkyQml0bWFwPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTd2ZGbGF2b3JQYXJhbXNPdXRwdXQgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0IHtcblxuICAgIGZsYXNoVmVyc2lvbiA6IG51bWJlcjtcblx0cG9seTJCaXRtYXAgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3dmRmxhdm9yUGFyYW1zT3V0cHV0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTd2ZGbGF2b3JQYXJhbXNPdXRwdXQnIH0sXG5cdFx0XHRcdGZsYXNoVmVyc2lvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwb2x5MkJpdG1hcCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3dmRmxhdm9yUGFyYW1zT3V0cHV0J10gPSBLYWx0dXJhU3dmRmxhdm9yUGFyYW1zT3V0cHV0OyJdfQ==