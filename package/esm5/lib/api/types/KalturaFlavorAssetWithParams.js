/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFlavorAssetWithParamsArgs() { }
/** @type {?|undefined} */
KalturaFlavorAssetWithParamsArgs.prototype.flavorAsset;
/** @type {?|undefined} */
KalturaFlavorAssetWithParamsArgs.prototype.flavorParams;
/** @type {?|undefined} */
KalturaFlavorAssetWithParamsArgs.prototype.entryId;
var KalturaFlavorAssetWithParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorAssetWithParams, _super);
    function KalturaFlavorAssetWithParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorAssetWithParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorAssetWithParams' },
            flavorAsset: { type: 'o', subTypeConstructor: KalturaFlavorAsset, subType: 'KalturaFlavorAsset' },
            flavorParams: { type: 'o', subTypeConstructor: KalturaFlavorParams, subType: 'KalturaFlavorParams' },
            entryId: { type: 's' }
        });
        return result;
    };
    return KalturaFlavorAssetWithParams;
}(KalturaObjectBase));
export { KalturaFlavorAssetWithParams };
if (false) {
    /** @type {?} */
    KalturaFlavorAssetWithParams.prototype.flavorAsset;
    /** @type {?} */
    KalturaFlavorAssetWithParams.prototype.flavorParams;
    /** @type {?} */
    KalturaFlavorAssetWithParams.prototype.entryId;
}
typesMappingStorage['KalturaFlavorAssetWithParams'] = KalturaFlavorAssetWithParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvckFzc2V0V2l0aFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvckFzc2V0V2l0aFBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLElBQUE7SUFBa0Qsd0RBQWlCO0lBTS9ELHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDckcsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBckNMO0VBYWtELGlCQUFpQixFQXlCbEUsQ0FBQTtBQXpCRCx3Q0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvckFzc2V0IH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yQXNzZXQnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtcyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZsYXZvckFzc2V0V2l0aFBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBmbGF2b3JBc3NldD8gOiBLYWx0dXJhRmxhdm9yQXNzZXQ7XG5cdGZsYXZvclBhcmFtcz8gOiBLYWx0dXJhRmxhdm9yUGFyYW1zO1xuXHRlbnRyeUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZsYXZvckFzc2V0V2l0aFBhcmFtcyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGZsYXZvckFzc2V0IDogS2FsdHVyYUZsYXZvckFzc2V0O1xuXHRmbGF2b3JQYXJhbXMgOiBLYWx0dXJhRmxhdm9yUGFyYW1zO1xuXHRlbnRyeUlkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmxhdm9yQXNzZXRXaXRoUGFyYW1zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGbGF2b3JBc3NldFdpdGhQYXJhbXMnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yQXNzZXQsIHN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvckFzc2V0JyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JQYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvclBhcmFtcycgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmxhdm9yQXNzZXRXaXRoUGFyYW1zJ10gPSBLYWx0dXJhRmxhdm9yQXNzZXRXaXRoUGFyYW1zOyJdfQ==