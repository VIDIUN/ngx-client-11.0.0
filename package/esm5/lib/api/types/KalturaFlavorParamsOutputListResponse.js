/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaFlavorParamsOutputListResponseArgs() { }
var KalturaFlavorParamsOutputListResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorParamsOutputListResponse, _super);
    function KalturaFlavorParamsOutputListResponse(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objects === 'undefined')
            _this.objects = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorParamsOutputListResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorParamsOutputListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaFlavorParamsOutput, subType: 'KalturaFlavorParamsOutput' }
        });
        return result;
    };
    return KalturaFlavorParamsOutputListResponse;
}(KalturaListResponse));
export { KalturaFlavorParamsOutputListResponse };
if (false) {
    /** @type {?} */
    KalturaFlavorParamsOutputListResponse.prototype.objects;
}
typesMappingStorage['KalturaFlavorParamsOutputListResponse'] = KalturaFlavorParamsOutputListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dExpc3RSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dExpc3RSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBT3JGLElBQUE7SUFBMkQsaUVBQW1CO0lBSTFFLCtDQUFZLElBQWlEO1FBQTdELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0tBQzlEOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtTQUN2SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dEQS9CTDtFQVUyRCxtQkFBbUIsRUFzQjdFLENBQUE7QUF0QkQsaURBc0JDOzs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCc7XG5pbXBvcnQgeyBLYWx0dXJhTGlzdFJlc3BvbnNlLCBLYWx0dXJhTGlzdFJlc3BvbnNlQXJncyB9IGZyb20gJy4vS2FsdHVyYUxpc3RSZXNwb25zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dExpc3RSZXNwb25zZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZUFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dFtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub2JqZWN0cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCwgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlOyJdfQ==