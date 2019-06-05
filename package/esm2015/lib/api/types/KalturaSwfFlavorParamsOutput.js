/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaSwfFlavorParamsOutput extends KalturaFlavorParamsOutput {
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
            objectType: { type: 'c', default: 'KalturaSwfFlavorParamsOutput' },
            flashVersion: { type: 'n' },
            poly2Bitmap: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSwfFlavorParamsOutput.prototype.flashVersion;
    /** @type {?} */
    KalturaSwfFlavorParamsOutput.prototype.poly2Bitmap;
}
typesMappingStorage['KalturaSwfFlavorParamsOutput'] = KalturaSwfFlavorParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN3ZkZsYXZvclBhcmFtc091dHB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN3ZkZsYXZvclBhcmFtc091dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7O0FBUXZHLE1BQU0sbUNBQW9DLFNBQVEseUJBQXlCOzs7O0lBS3ZFLFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQsIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3dmRmxhdm9yUGFyYW1zT3V0cHV0QXJncyAgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QXJncyB7XG4gICAgZmxhc2hWZXJzaW9uPyA6IG51bWJlcjtcblx0cG9seTJCaXRtYXA/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN3ZkZsYXZvclBhcmFtc091dHB1dCBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQge1xuXG4gICAgZmxhc2hWZXJzaW9uIDogbnVtYmVyO1xuXHRwb2x5MkJpdG1hcCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTd2ZGbGF2b3JQYXJhbXNPdXRwdXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVN3ZkZsYXZvclBhcmFtc091dHB1dCcgfSxcblx0XHRcdFx0Zmxhc2hWZXJzaW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBvbHkyQml0bWFwIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTd2ZGbGF2b3JQYXJhbXNPdXRwdXQnXSA9IEthbHR1cmFTd2ZGbGF2b3JQYXJhbXNPdXRwdXQ7Il19