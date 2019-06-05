/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MetadataProfileRevertActionArgs() { }
/** @type {?} */
MetadataProfileRevertActionArgs.prototype.id;
/** @type {?} */
MetadataProfileRevertActionArgs.prototype.toVersion;
/**
 * Build request payload for service 'metadataProfile' action 'revert'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadataProfile' action 'revert'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
MetadataProfileRevertAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataProfileRevertAction, _super);
    function MetadataProfileRevertAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadataProfile', responseConstructor: KalturaMetadataProfile }) || this;
    }
    /**
     * @return {?}
     */
    MetadataProfileRevertAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'revert' },
            id: { type: 'n' },
            toVersion: { type: 'n' }
        });
        return result;
    };
    return MetadataProfileRevertAction;
}(KalturaRequest));
/**
 * Build request payload for service 'metadataProfile' action 'revert'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export { MetadataProfileRevertAction };
if (false) {
    /** @type {?} */
    MetadataProfileRevertAction.prototype.id;
    /** @type {?} */
    MetadataProfileRevertAction.prototype.toVersion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlUmV2ZXJ0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZXRhZGF0YVByb2ZpbGVSZXZlcnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBc0M7SUFLbkYscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzFFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0ExQ0w7RUFtQmlELGNBQWMsRUF3QjlELENBQUE7Ozs7Ozs7OztBQXhCRCx1Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhUHJvZmlsZVJldmVydEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0dG9WZXJzaW9uIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGFQcm9maWxlJyBhY3Rpb24gJ3JldmVydCcuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBhbiBleGlzdGluZyBtZXRhZGF0YSBvYmplY3QgZGVmaW5pdGlvbiBmaWxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFQcm9maWxlUmV2ZXJ0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYU1ldGFkYXRhUHJvZmlsZT4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdHRvVmVyc2lvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZXRhZGF0YVByb2ZpbGVSZXZlcnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWV0YWRhdGFfbWV0YWRhdGFwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmV2ZXJ0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0b1ZlcnNpb24gOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19