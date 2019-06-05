/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaFlavorAssetUrlOptions extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaFlavorAssetUrlOptions' },
            fileName: { type: 's' },
            referrer: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFlavorAssetUrlOptions.prototype.fileName;
    /** @type {?} */
    KalturaFlavorAssetUrlOptions.prototype.referrer;
}
typesMappingStorage['KalturaFlavorAssetUrlOptions'] = KalturaFlavorAssetUrlOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7O0FBUWxGLE1BQU0sbUNBQW9DLFNBQVEsaUJBQWlCOzs7O0lBSy9ELFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmxhdm9yQXNzZXRVcmxPcHRpb25zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZpbGVOYW1lPyA6IHN0cmluZztcblx0cmVmZXJyZXI/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmxhdm9yQXNzZXRVcmxPcHRpb25zIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgZmlsZU5hbWUgOiBzdHJpbmc7XG5cdHJlZmVycmVyIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmxhdm9yQXNzZXRVcmxPcHRpb25zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGbGF2b3JBc3NldFVybE9wdGlvbnMnIH0sXG5cdFx0XHRcdGZpbGVOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlZmVycmVyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGbGF2b3JBc3NldFVybE9wdGlvbnMnXSA9IEthbHR1cmFGbGF2b3JBc3NldFVybE9wdGlvbnM7Il19