/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadataProfileFieldListResponse } from './KalturaMetadataProfileFieldListResponse';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MetadataProfileListFieldsActionArgs() { }
/** @type {?} */
MetadataProfileListFieldsActionArgs.prototype.metadataProfileId;
/**
 * Build request payload for service 'metadataProfile' action 'listFields'.
 *
 * Usage: List metadata profile fields by metadata profile id
 *
 * Server response type:         KalturaMetadataProfileFieldListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadataProfile' action 'listFields'.
 *
 * Usage: List metadata profile fields by metadata profile id
 *
 * Server response type:         KalturaMetadataProfileFieldListResponse
 * Server failure response type: KalturaAPIException
 */
MetadataProfileListFieldsAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataProfileListFieldsAction, _super);
    function MetadataProfileListFieldsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadataProfileFieldListResponse', responseConstructor: KalturaMetadataProfileFieldListResponse }) || this;
    }
    /**
     * @return {?}
     */
    MetadataProfileListFieldsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'listFields' },
            metadataProfileId: { type: 'n' }
        });
        return result;
    };
    return MetadataProfileListFieldsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'metadataProfile' action 'listFields'.
 *
 * Usage: List metadata profile fields by metadata profile id
 *
 * Server response type:         KalturaMetadataProfileFieldListResponse
 * Server failure response type: KalturaAPIException
 */
export { MetadataProfileListFieldsAction };
if (false) {
    /** @type {?} */
    MetadataProfileListFieldsAction.prototype.metadataProfileId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlTGlzdEZpZWxkc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWV0YWRhdGFQcm9maWxlTGlzdEZpZWxkc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXBHLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUFxRCwyREFBdUQ7SUFJeEcseUNBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcseUNBQXlDLEVBQUUsbUJBQW1CLEVBQUcsdUNBQXVDLEVBQUcsQ0FBQztLQUNsSzs7OztJQUVTLHNEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzFFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUMvQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0F2Q0w7RUFrQnFELGNBQWMsRUFzQmxFLENBQUE7Ozs7Ozs7OztBQXRCRCwyQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUZpZWxkTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFQcm9maWxlRmllbGRMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVByb2ZpbGVMaXN0RmllbGRzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGFQcm9maWxlJyBhY3Rpb24gJ2xpc3RGaWVsZHMnLlxuICpcbiAqIFVzYWdlOiBMaXN0IG1ldGFkYXRhIHByb2ZpbGUgZmllbGRzIGJ5IG1ldGFkYXRhIHByb2ZpbGUgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWV0YWRhdGFQcm9maWxlRmllbGRMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFkYXRhUHJvZmlsZUxpc3RGaWVsZHNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWV0YWRhdGFQcm9maWxlRmllbGRMaXN0UmVzcG9uc2U+IHtcblxuICAgIG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1ldGFkYXRhUHJvZmlsZUxpc3RGaWVsZHNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGVGaWVsZExpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlRmllbGRMaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21ldGFkYXRhX21ldGFkYXRhcHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3RGaWVsZHMnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==