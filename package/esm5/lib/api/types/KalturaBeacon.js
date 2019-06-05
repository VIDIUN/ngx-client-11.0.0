/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaBeacon = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBeacon, _super);
    function KalturaBeacon(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBeacon.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaBeacon;
}(KalturaObjectBase));
export { KalturaBeacon };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJlYWNvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJlYWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixJQUFBO0lBQW1DLHlDQUFpQjtJQVdoRCx1QkFBWSxJQUF5QjtlQUVqQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9DQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ3hILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dCQWhETDtFQWNtQyxpQkFBaUIsRUFtQ25ELENBQUE7QUFuQ0QseUJBbUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZUFBZSxDQUFDLEdBQUcsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCZWFjb25PYmplY3RUeXBlcyB9IGZyb20gJy4vS2FsdHVyYUJlYWNvbk9iamVjdFR5cGVzJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQmVhY29uQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHJlbGF0ZWRPYmplY3RUeXBlPyA6IEthbHR1cmFCZWFjb25PYmplY3RUeXBlcztcblx0ZXZlbnRUeXBlPyA6IHN0cmluZztcblx0b2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRwcml2YXRlRGF0YT8gOiBzdHJpbmc7XG5cdHJhd0RhdGE/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQmVhY29uIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGluZGV4VHlwZSA6IHN0cmluZztcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVsYXRlZE9iamVjdFR5cGUgOiBLYWx0dXJhQmVhY29uT2JqZWN0VHlwZXM7XG5cdGV2ZW50VHlwZSA6IHN0cmluZztcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdHByaXZhdGVEYXRhIDogc3RyaW5nO1xuXHRyYXdEYXRhIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQmVhY29uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCZWFjb24nIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aW5kZXhUeXBlIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cmVsYXRlZE9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmVhY29uT2JqZWN0VHlwZXMsIHN1YlR5cGUgOiAnS2FsdHVyYUJlYWNvbk9iamVjdFR5cGVzJyB9LFxuXHRcdFx0XHRldmVudFR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpdmF0ZURhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmF3RGF0YSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQmVhY29uJ10gPSBLYWx0dXJhQmVhY29uOyJdfQ==