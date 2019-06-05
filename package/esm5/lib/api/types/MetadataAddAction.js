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
export function MetadataAddActionArgs() { }
/** @type {?} */
MetadataAddActionArgs.prototype.metadataProfileId;
/** @type {?} */
MetadataAddActionArgs.prototype.objectType;
/** @type {?} */
MetadataAddActionArgs.prototype.objectId;
/** @type {?} */
MetadataAddActionArgs.prototype.xmlData;
/**
 * Build request payload for service 'metadata' action 'add'.
 *
 * Usage: Allows you to add a metadata object and metadata content associated with Kaltura object
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadata' action 'add'.
 *
 * Usage: Allows you to add a metadata object and metadata content associated with Kaltura object
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
MetadataAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataAddAction, _super);
    function MetadataAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadata', responseConstructor: KalturaMetadata }) || this;
    }
    /**
     * @return {?}
     */
    MetadataAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadata' },
            action: { type: 'c', default: 'add' },
            metadataProfileId: { type: 'n' },
            objectType: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            objectId: { type: 's' },
            xmlData: { type: 's' }
        });
        return result;
    };
    return MetadataAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'metadata' action 'add'.
 *
 * Usage: Allows you to add a metadata object and metadata content associated with Kaltura object
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export { MetadataAddAction };
if (false) {
    /** @type {?} */
    MetadataAddAction.prototype.metadataProfileId;
    /** @type {?} */
    MetadataAddAction.prototype.objectType;
    /** @type {?} */
    MetadataAddAction.prototype.objectId;
    /** @type {?} */
    MetadataAddAction.prototype.xmlData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL01ldGFkYXRhQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEU7Ozs7Ozs7O0FBQUE7SUFBdUMsNkNBQStCO0lBT2xFLDJCQUFZLElBQTRCO2VBRXBDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlCQUFpQixFQUFFLG1CQUFtQixFQUFHLGVBQWUsRUFBRyxDQUFDO0tBQ2xIOzs7O0lBRVMsd0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNuSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRCQWpETDtFQXNCdUMsY0FBYyxFQTRCcEQsQ0FBQTs7Ozs7Ozs7O0FBNUJELDZCQTRCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGEgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YSc7XG5cbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdG9iamVjdFR5cGUgOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcblx0eG1sRGF0YSA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21ldGFkYXRhJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFsbG93cyB5b3UgdG8gYWRkIGEgbWV0YWRhdGEgb2JqZWN0IGFuZCBtZXRhZGF0YSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCBLYWx0dXJhIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZXRhZGF0YVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWV0YWRhdGE+IHtcblxuICAgIG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRvYmplY3RUeXBlIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZTtcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cdHhtbERhdGEgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWV0YWRhdGFBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGEgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21ldGFkYXRhX21ldGFkYXRhJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR4bWxEYXRhIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==