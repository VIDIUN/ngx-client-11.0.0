/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaSwfFlavorParams extends KalturaFlavorParams {
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
            objectType: { type: 'c', default: 'KalturaSwfFlavorParams' },
            flashVersion: { type: 'n' },
            poly2Bitmap: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSwfFlavorParams.prototype.flashVersion;
    /** @type {?} */
    KalturaSwfFlavorParams.prototype.poly2Bitmap;
}
typesMappingStorage['KalturaSwfFlavorParams'] = KalturaSwfFlavorParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN3ZkZsYXZvclBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN3ZkZsYXZvclBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FBUXJGLE1BQU0sNkJBQThCLFNBQVEsbUJBQW1COzs7O0lBSzNELFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXMsIEthbHR1cmFGbGF2b3JQYXJhbXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUGFyYW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3dmRmxhdm9yUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zQXJncyB7XG4gICAgZmxhc2hWZXJzaW9uPyA6IG51bWJlcjtcblx0cG9seTJCaXRtYXA/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN3ZkZsYXZvclBhcmFtcyBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXMge1xuXG4gICAgZmxhc2hWZXJzaW9uIDogbnVtYmVyO1xuXHRwb2x5MkJpdG1hcCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTd2ZGbGF2b3JQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVN3ZkZsYXZvclBhcmFtcycgfSxcblx0XHRcdFx0Zmxhc2hWZXJzaW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBvbHkyQml0bWFwIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTd2ZGbGF2b3JQYXJhbXMnXSA9IEthbHR1cmFTd2ZGbGF2b3JQYXJhbXM7Il19