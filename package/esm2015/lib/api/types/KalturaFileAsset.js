/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaFileAsset extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZpbGVBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLE1BQU0sdUJBQXdCLFNBQVEsaUJBQWlCOzs7O0lBY25ELFlBQVksSUFBNEI7UUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUM5SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDakgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZUFzc2V0T2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUZpbGVBc3NldE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVBc3NldFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUZpbGVBc3NldFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZpbGVBc3NldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBmaWxlQXNzZXRPYmplY3RUeXBlPyA6IEthbHR1cmFGaWxlQXNzZXRPYmplY3RUeXBlO1xuXHRvYmplY3RJZD8gOiBzdHJpbmc7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0ZmlsZUV4dD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGaWxlQXNzZXQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRmaWxlQXNzZXRPYmplY3RUeXBlIDogS2FsdHVyYUZpbGVBc3NldE9iamVjdFR5cGU7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRmaWxlRXh0IDogc3RyaW5nO1xuXHRyZWFkb25seSB2ZXJzaW9uIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IG51bWJlcjtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUZpbGVBc3NldFN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZpbGVBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmlsZUFzc2V0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGZpbGVBc3NldE9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZUFzc2V0T2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsZUFzc2V0T2JqZWN0VHlwZScgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVFeHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbGVBc3NldFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRmlsZUFzc2V0U3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmlsZUFzc2V0J10gPSBLYWx0dXJhRmlsZUFzc2V0OyJdfQ==