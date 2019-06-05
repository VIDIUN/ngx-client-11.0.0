/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaResponseProfileListResponseArgs() { }
var KalturaResponseProfileListResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaResponseProfileListResponse, _super);
    function KalturaResponseProfileListResponse(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objects === 'undefined')
            _this.objects = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaResponseProfileListResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaResponseProfileListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaResponseProfile, subType: 'KalturaResponseProfile' }
        });
        return result;
    };
    return KalturaResponseProfileListResponse;
}(KalturaListResponse));
export { KalturaResponseProfileListResponse };
if (false) {
    /** @type {?} */
    KalturaResponseProfileListResponse.prototype.objects;
}
typesMappingStorage['KalturaResponseProfileListResponse'] = KalturaResponseProfileListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUxpc3RSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUxpc3RSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBT3JGLElBQUE7SUFBd0QsOERBQW1CO0lBSXZFLDRDQUFZLElBQThDO1FBQTFELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0tBQzlEOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUNqSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQS9CTDtFQVV3RCxtQkFBbUIsRUFzQjFFLENBQUE7QUF0QkQsOENBc0JDOzs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGlzdFJlc3BvbnNlLCBLYWx0dXJhTGlzdFJlc3BvbnNlQXJncyB9IGZyb20gJy4vS2FsdHVyYUxpc3RSZXNwb25zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUxpc3RSZXNwb25zZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZUFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTGlzdFJlc3BvbnNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub2JqZWN0cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGVMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVzcG9uc2VQcm9maWxlTGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTGlzdFJlc3BvbnNlOyJdfQ==