/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBeaconObjectTypes } from './KalturaBeaconObjectTypes';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBeaconArgs() { }
/** @type {?|undefined} */
KalturaBeaconArgs.prototype.relatedObjectType;
/** @type {?|undefined} */
KalturaBeaconArgs.prototype.eventType;
/** @type {?|undefined} */
KalturaBeaconArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaBeaconArgs.prototype.privateData;
/** @type {?|undefined} */
KalturaBeaconArgs.prototype.rawData;
export class KalturaBeacon extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaBeacon' },
            id: { type: 's', readOnly: true },
            indexType: { type: 's', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            relatedObjectType: { type: 'es', subTypeConstructor: KalturaBeaconObjectTypes, subType: 'KalturaBeaconObjectTypes' },
            eventType: { type: 's' },
            objectId: { type: 's' },
            privateData: { type: 's' },
            rawData: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBeacon.prototype.id;
    /** @type {?} */
    KalturaBeacon.prototype.indexType;
    /** @type {?} */
    KalturaBeacon.prototype.updatedAt;
    /** @type {?} */
    KalturaBeacon.prototype.relatedObjectType;
    /** @type {?} */
    KalturaBeacon.prototype.eventType;
    /** @type {?} */
    KalturaBeacon.prototype.objectId;
    /** @type {?} */
    KalturaBeacon.prototype.privateData;
    /** @type {?} */
    KalturaBeacon.prototype.rawData;
}
typesMappingStorage['KalturaBeacon'] = KalturaBeacon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJlYWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJlYWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLE1BQU0sb0JBQXFCLFNBQVEsaUJBQWlCOzs7O0lBV2hELFlBQVksSUFBeUI7UUFFakMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ3hILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJlYWNvbk9iamVjdFR5cGVzIH0gZnJvbSAnLi9LYWx0dXJhQmVhY29uT2JqZWN0VHlwZXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCZWFjb25BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcmVsYXRlZE9iamVjdFR5cGU/IDogS2FsdHVyYUJlYWNvbk9iamVjdFR5cGVzO1xuXHRldmVudFR5cGU/IDogc3RyaW5nO1xuXHRvYmplY3RJZD8gOiBzdHJpbmc7XG5cdHByaXZhdGVEYXRhPyA6IHN0cmluZztcblx0cmF3RGF0YT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCZWFjb24gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IHN0cmluZztcblx0cmVhZG9ubHkgaW5kZXhUeXBlIDogc3RyaW5nO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWxhdGVkT2JqZWN0VHlwZSA6IEthbHR1cmFCZWFjb25PYmplY3RUeXBlcztcblx0ZXZlbnRUeXBlIDogc3RyaW5nO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0cHJpdmF0ZURhdGEgOiBzdHJpbmc7XG5cdHJhd0RhdGEgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCZWFjb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJlYWNvbicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRpbmRleFR5cGUgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRyZWxhdGVkT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCZWFjb25PYmplY3RUeXBlcywgc3ViVHlwZSA6ICdLYWx0dXJhQmVhY29uT2JqZWN0VHlwZXMnIH0sXG5cdFx0XHRcdGV2ZW50VHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcml2YXRlRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyYXdEYXRhIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCZWFjb24nXSA9IEthbHR1cmFCZWFjb247Il19