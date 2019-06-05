/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDataEntry } from './KalturaDataEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DataUpdateActionArgs() { }
/** @type {?} */
DataUpdateActionArgs.prototype.entryId;
/** @type {?} */
DataUpdateActionArgs.prototype.documentEntry;
/**
 * Build request payload for service 'data' action 'update'.
 *
 * Usage: Update data entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaDataEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'data' action 'update'.
 *
 * Usage: Update data entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaDataEntry
 * Server failure response type: KalturaAPIException
 */
DataUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(DataUpdateAction, _super);
    function DataUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDataEntry', responseConstructor: KalturaDataEntry }) || this;
    }
    /**
     * @return {?}
     */
    DataUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'data' },
            action: { type: 'c', default: 'update' },
            entryId: { type: 's' },
            documentEntry: { type: 'o', subTypeConstructor: KalturaDataEntry, subType: 'KalturaDataEntry' }
        });
        return result;
    };
    return DataUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'data' action 'update'.
 *
 * Usage: Update data entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaDataEntry
 * Server failure response type: KalturaAPIException
 */
export { DataUpdateAction };
if (false) {
    /** @type {?} */
    DataUpdateAction.prototype.entryId;
    /** @type {?} */
    DataUpdateAction.prototype.documentEntry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRGF0YVVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQXNDLDRDQUFnQztJQUtsRSwwQkFBWSxJQUEyQjtlQUVuQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDO0tBQ3BIOzs7O0lBRVMsdUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3RELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1NBQzFGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkJBMUNMO0VBbUJzQyxjQUFjLEVBd0JuRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsNEJBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEYXRhRW50cnkgfSBmcm9tICcuL0thbHR1cmFEYXRhRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGRvY3VtZW50RW50cnkgOiBLYWx0dXJhRGF0YUVudHJ5O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZGF0YScgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgZGF0YSBlbnRyeS4gT25seSB0aGUgcHJvcGVydGllcyB0aGF0IHdlcmUgc2V0IHdpbGwgYmUgdXBkYXRlZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEYXRhRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERhdGFVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRGF0YUVudHJ5PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRkb2N1bWVudEVudHJ5IDogS2FsdHVyYURhdGFFbnRyeTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEYXRhVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRGF0YUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFEYXRhRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RhdGEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZG9jdW1lbnRFbnRyeSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURhdGFFbnRyeSwgc3ViVHlwZSA6ICdLYWx0dXJhRGF0YUVudHJ5JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=