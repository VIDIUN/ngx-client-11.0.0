/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
/**
 * @record
 */
export function KalturaLiveAssetArgs() { }
/** @type {?|undefined} */
KalturaLiveAssetArgs.prototype.multicastIP;
/** @type {?|undefined} */
KalturaLiveAssetArgs.prototype.multicastPort;
export class KalturaLiveAsset extends KalturaFlavorAsset {
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
            objectType: { type: 'c', default: 'KalturaLiveAsset' },
            multicastIP: { type: 's' },
            multicastPort: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveAsset.prototype.multicastIP;
    /** @type {?} */
    KalturaLiveAsset.prototype.multicastPort;
}
typesMappingStorage['KalturaLiveAsset'] = KalturaLiveAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7O0FBUWxGLE1BQU0sdUJBQXdCLFNBQVEsa0JBQWtCOzs7O0lBS3BELFlBQVksSUFBNEI7UUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldCwgS2FsdHVyYUZsYXZvckFzc2V0QXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvckFzc2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZUFzc2V0QXJncyAgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yQXNzZXRBcmdzIHtcbiAgICBtdWx0aWNhc3RJUD8gOiBzdHJpbmc7XG5cdG11bHRpY2FzdFBvcnQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZUFzc2V0IGV4dGVuZHMgS2FsdHVyYUZsYXZvckFzc2V0IHtcblxuICAgIG11bHRpY2FzdElQIDogc3RyaW5nO1xuXHRtdWx0aWNhc3RQb3J0IDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUFzc2V0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlQXNzZXQnIH0sXG5cdFx0XHRcdG11bHRpY2FzdElQIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG11bHRpY2FzdFBvcnQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVBc3NldCddID0gS2FsdHVyYUxpdmVBc3NldDsiXX0=