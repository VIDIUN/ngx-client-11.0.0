/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaExternalMediaSourceType } from './KalturaExternalMediaSourceType';
import { KalturaMediaEntry } from './KalturaMediaEntry';
/**
 * @record
 */
export function KalturaExternalMediaEntryArgs() { }
/** @type {?|undefined} */
KalturaExternalMediaEntryArgs.prototype.externalSourceType;
export class KalturaExternalMediaEntry extends KalturaMediaEntry {
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
            objectType: { type: 'c', default: 'KalturaExternalMediaEntry' },
            externalSourceType: { type: 'es', subTypeConstructor: KalturaExternalMediaSourceType, subType: 'KalturaExternalMediaSourceType' },
            assetParamsIds: { type: 's', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaExternalMediaEntry.prototype.externalSourceType;
    /** @type {?} */
    KalturaExternalMediaEntry.prototype.assetParamsIds;
}
typesMappingStorage['KalturaExternalMediaEntry'] = KalturaExternalMediaEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU8vRSxNQUFNLGdDQUFpQyxTQUFRLGlCQUFpQjs7OztJQUs1RCxZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ3JJLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUN2QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFeHRlcm5hbE1lZGlhU291cmNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUV4dGVybmFsTWVkaWFTb3VyY2VUeXBlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5LCBLYWx0dXJhTWVkaWFFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5QXJncyAgZXh0ZW5kcyBLYWx0dXJhTWVkaWFFbnRyeUFyZ3Mge1xuICAgIGV4dGVybmFsU291cmNlVHlwZT8gOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnkgZXh0ZW5kcyBLYWx0dXJhTWVkaWFFbnRyeSB7XG5cbiAgICBleHRlcm5hbFNvdXJjZVR5cGUgOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGU7XG5cdHJlYWRvbmx5IGFzc2V0UGFyYW1zSWRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnknIH0sXG5cdFx0XHRcdGV4dGVybmFsU291cmNlVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFeHRlcm5hbE1lZGlhU291cmNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGUnIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeSddID0gS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeTsiXX0=