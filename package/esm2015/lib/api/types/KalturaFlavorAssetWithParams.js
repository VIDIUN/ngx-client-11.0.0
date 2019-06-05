/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaFlavorAssetWithParams extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaFlavorAssetWithParams' },
            flavorAsset: { type: 'o', subTypeConstructor: KalturaFlavorAsset, subType: 'KalturaFlavorAsset' },
            flavorParams: { type: 'o', subTypeConstructor: KalturaFlavorParams, subType: 'KalturaFlavorParams' },
            entryId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFlavorAssetWithParams.prototype.flavorAsset;
    /** @type {?} */
    KalturaFlavorAssetWithParams.prototype.flavorParams;
    /** @type {?} */
    KalturaFlavorAssetWithParams.prototype.entryId;
}
typesMappingStorage['KalturaFlavorAssetWithParams'] = KalturaFlavorAssetWithParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvckFzc2V0V2l0aFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvckFzc2V0V2l0aFBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTbEYsTUFBTSxtQ0FBb0MsU0FBUSxpQkFBaUI7Ozs7SUFNL0QsWUFBWSxJQUF3QztRQUVoRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDckcsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yQXNzZXQgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JBc3NldCc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmxhdm9yQXNzZXRXaXRoUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZsYXZvckFzc2V0PyA6IEthbHR1cmFGbGF2b3JBc3NldDtcblx0Zmxhdm9yUGFyYW1zPyA6IEthbHR1cmFGbGF2b3JQYXJhbXM7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmxhdm9yQXNzZXRXaXRoUGFyYW1zIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZmxhdm9yQXNzZXQgOiBLYWx0dXJhRmxhdm9yQXNzZXQ7XG5cdGZsYXZvclBhcmFtcyA6IEthbHR1cmFGbGF2b3JQYXJhbXM7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGbGF2b3JBc3NldFdpdGhQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZsYXZvckFzc2V0V2l0aFBhcmFtcycgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JBc3NldCwgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yQXNzZXQnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvclBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGbGF2b3JBc3NldFdpdGhQYXJhbXMnXSA9IEthbHR1cmFGbGF2b3JBc3NldFdpdGhQYXJhbXM7Il19