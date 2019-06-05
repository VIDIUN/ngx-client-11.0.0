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
export function KalturaAssetArgs() { }
/** @type {?|undefined} */
KalturaAssetArgs.prototype.tags;
/** @type {?|undefined} */
KalturaAssetArgs.prototype.fileExt;
/** @type {?|undefined} */
KalturaAssetArgs.prototype.partnerData;
/** @type {?|undefined} */
KalturaAssetArgs.prototype.partnerDescription;
/** @type {?|undefined} */
KalturaAssetArgs.prototype.actualSourceAssetParamsIds;
var KalturaAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAsset, _super);
    function KalturaAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAsset' },
            id: { type: 's', readOnly: true },
            entryId: { type: 's', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            version: { type: 'n', readOnly: true },
            size: { type: 'n', readOnly: true },
            tags: { type: 's' },
            fileExt: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            deletedAt: { type: 'd', readOnly: true },
            description: { type: 's', readOnly: true },
            partnerData: { type: 's' },
            partnerDescription: { type: 's' },
            actualSourceAssetParamsIds: { type: 's' }
        });
        return result;
    };
    return KalturaAsset;
}(KalturaObjectBase));
export { KalturaAsset };
if (false) {
    /** @type {?} */
    KalturaAsset.prototype.id;
    /** @type {?} */
    KalturaAsset.prototype.entryId;
    /** @type {?} */
    KalturaAsset.prototype.partnerId;
    /** @type {?} */
    KalturaAsset.prototype.version;
    /** @type {?} */
    KalturaAsset.prototype.size;
    /** @type {?} */
    KalturaAsset.prototype.tags;
    /** @type {?} */
    KalturaAsset.prototype.fileExt;
    /** @type {?} */
    KalturaAsset.prototype.createdAt;
    /** @type {?} */
    KalturaAsset.prototype.updatedAt;
    /** @type {?} */
    KalturaAsset.prototype.deletedAt;
    /** @type {?} */
    KalturaAsset.prototype.description;
    /** @type {?} */
    KalturaAsset.prototype.partnerData;
    /** @type {?} */
    KalturaAsset.prototype.partnerDescription;
    /** @type {?} */
    KalturaAsset.prototype.actualSourceAssetParamsIds;
}
typesMappingStorage['KalturaAsset'] = KalturaAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsSUFBQTtJQUFrQyx3Q0FBaUI7SUFpQi9DLHNCQUFZLElBQXdCO2VBRWhDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQ2pFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM3QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1QkEzREw7RUFha0MsaUJBQWlCLEVBK0NsRCxDQUFBO0FBL0NELHdCQStDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxHQUFHLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFzc2V0QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHRhZ3M/IDogc3RyaW5nO1xuXHRmaWxlRXh0PyA6IHN0cmluZztcblx0cGFydG5lckRhdGE/IDogc3RyaW5nO1xuXHRwYXJ0bmVyRGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRhY3R1YWxTb3VyY2VBc3NldFBhcmFtc0lkcz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBc3NldCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogc3RyaW5nO1xuXHRyZWFkb25seSBlbnRyeUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHZlcnNpb24gOiBudW1iZXI7XG5cdHJlYWRvbmx5IHNpemUgOiBudW1iZXI7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdGZpbGVFeHQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IGRlbGV0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRwYXJ0bmVyRGF0YSA6IHN0cmluZztcblx0cGFydG5lckRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRhY3R1YWxTb3VyY2VBc3NldFBhcmFtc0lkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFzc2V0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBc3NldCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHNpemUgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVFeHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVsZXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVyRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWN0dWFsU291cmNlQXNzZXRQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFzc2V0J10gPSBLYWx0dXJhQXNzZXQ7Il19