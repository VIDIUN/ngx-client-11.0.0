/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileAssetObjectType } from './KalturaFileAssetObjectType';
import { KalturaFileAssetStatus } from './KalturaFileAssetStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFileAssetArgs() { }
/** @type {?|undefined} */
KalturaFileAssetArgs.prototype.fileAssetObjectType;
/** @type {?|undefined} */
KalturaFileAssetArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaFileAssetArgs.prototype.name;
/** @type {?|undefined} */
KalturaFileAssetArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaFileAssetArgs.prototype.fileExt;
var KalturaFileAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFileAsset, _super);
    function KalturaFileAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFileAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFileAsset' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            fileAssetObjectType: { type: 'es', subTypeConstructor: KalturaFileAssetObjectType, subType: 'KalturaFileAssetObjectType' },
            objectId: { type: 's' },
            name: { type: 's' },
            systemName: { type: 's' },
            fileExt: { type: 's' },
            version: { type: 'n', readOnly: true },
            createdAt: { type: 'n', readOnly: true },
            updatedAt: { type: 'n', readOnly: true },
            status: { type: 'es', readOnly: true, subTypeConstructor: KalturaFileAssetStatus, subType: 'KalturaFileAssetStatus' }
        });
        return result;
    };
    return KalturaFileAsset;
}(KalturaObjectBase));
export { KalturaFileAsset };
if (false) {
    /** @type {?} */
    KalturaFileAsset.prototype.id;
    /** @type {?} */
    KalturaFileAsset.prototype.partnerId;
    /** @type {?} */
    KalturaFileAsset.prototype.fileAssetObjectType;
    /** @type {?} */
    KalturaFileAsset.prototype.objectId;
    /** @type {?} */
    KalturaFileAsset.prototype.name;
    /** @type {?} */
    KalturaFileAsset.prototype.systemName;
    /** @type {?} */
    KalturaFileAsset.prototype.fileExt;
    /** @type {?} */
    KalturaFileAsset.prototype.version;
    /** @type {?} */
    KalturaFileAsset.prototype.createdAt;
    /** @type {?} */
    KalturaFileAsset.prototype.updatedAt;
    /** @type {?} */
    KalturaFileAsset.prototype.status;
}
typesMappingStorage['KalturaFileAsset'] = KalturaFileAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZpbGVBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixJQUFBO0lBQXNDLDRDQUFpQjtJQWNuRCwwQkFBWSxJQUE0QjtlQUVwQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUM5SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDakgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQkF2REw7RUFlc0MsaUJBQWlCLEVBeUN0RCxDQUFBO0FBekNELDRCQXlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVBc3NldE9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFGaWxlQXNzZXRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlQXNzZXRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFGaWxlQXNzZXRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGaWxlQXNzZXRBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZmlsZUFzc2V0T2JqZWN0VHlwZT8gOiBLYWx0dXJhRmlsZUFzc2V0T2JqZWN0VHlwZTtcblx0b2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRuYW1lPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGZpbGVFeHQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmlsZUFzc2V0IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZmlsZUFzc2V0T2JqZWN0VHlwZSA6IEthbHR1cmFGaWxlQXNzZXRPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0bmFtZSA6IHN0cmluZztcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0ZmlsZUV4dCA6IHN0cmluZztcblx0cmVhZG9ubHkgdmVyc2lvbiA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogbnVtYmVyO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFGaWxlQXNzZXRTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGaWxlQXNzZXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZpbGVBc3NldCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmaWxlQXNzZXRPYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbGVBc3NldE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVBc3NldE9iamVjdFR5cGUnIH0sXG5cdFx0XHRcdG9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlRXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlQXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVBc3NldFN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZpbGVBc3NldCddID0gS2FsdHVyYUZpbGVBc3NldDsiXX0=