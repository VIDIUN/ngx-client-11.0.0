/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MetadataAddFromUrlActionArgs() { }
/** @type {?} */
MetadataAddFromUrlActionArgs.prototype.metadataProfileId;
/** @type {?} */
MetadataAddFromUrlActionArgs.prototype.objectType;
/** @type {?} */
MetadataAddFromUrlActionArgs.prototype.objectId;
/** @type {?} */
MetadataAddFromUrlActionArgs.prototype.url;
/**
 * Build request payload for service 'metadata' action 'addFromUrl'.
 *
 * Usage: Allows you to add a metadata xml data from remote URL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadata' action 'addFromUrl'.
 *
 * Usage: Allows you to add a metadata xml data from remote URL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
MetadataAddFromUrlAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataAddFromUrlAction, _super);
    function MetadataAddFromUrlAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadata', responseConstructor: KalturaMetadata }) || this;
    }
    /**
     * @return {?}
     */
    MetadataAddFromUrlAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadata' },
            action: { type: 'c', default: 'addFromUrl' },
            metadataProfileId: { type: 'n' },
            objectType: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            objectId: { type: 's' },
            url: { type: 's' }
        });
        return result;
    };
    return MetadataAddFromUrlAction;
}(KalturaRequest));
/**
 * Build request payload for service 'metadata' action 'addFromUrl'.
 *
 * Usage: Allows you to add a metadata xml data from remote URL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export { MetadataAddFromUrlAction };
if (false) {
    /** @type {?} */
    MetadataAddFromUrlAction.prototype.metadataProfileId;
    /** @type {?} */
    MetadataAddFromUrlAction.prototype.objectType;
    /** @type {?} */
    MetadataAddFromUrlAction.prototype.objectId;
    /** @type {?} */
    MetadataAddFromUrlAction.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFBZGRGcm9tVXJsQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZXRhZGF0YUFkZEZyb21VcmxBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBK0I7SUFPekUsa0NBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDL0MsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ25ILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNYLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBakRMO0VBc0I4QyxjQUFjLEVBNEIzRCxDQUFBOzs7Ozs7Ozs7QUE1QkQsb0NBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhJztcblxuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUFkZEZyb21VcmxBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdG9iamVjdFR5cGUgOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0dXJsIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGEnIGFjdGlvbiAnYWRkRnJvbVVybCcuXG4gKlxuICogVXNhZ2U6IEFsbG93cyB5b3UgdG8gYWRkIGEgbWV0YWRhdGEgeG1sIGRhdGEgZnJvbSByZW1vdGUgVVJMXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1ldGFkYXRhXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YUFkZEZyb21VcmxBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWV0YWRhdGE+IHtcblxuICAgIG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRvYmplY3RUeXBlIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZTtcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdHVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZXRhZGF0YUFkZEZyb21VcmxBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGEgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21ldGFkYXRhX21ldGFkYXRhJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbVVybCcgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0b2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXJsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==