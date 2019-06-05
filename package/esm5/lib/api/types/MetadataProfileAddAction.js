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
export function MetadataProfileAddActionArgs() { }
/** @type {?} */
MetadataProfileAddActionArgs.prototype.metadataProfile;
/** @type {?} */
MetadataProfileAddActionArgs.prototype.xsdData;
/** @type {?|undefined} */
MetadataProfileAddActionArgs.prototype.viewsData;
/**
 * Build request payload for service 'metadataProfile' action 'add'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadataProfile' action 'add'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
MetadataProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataProfileAddAction, _super);
    function MetadataProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadataProfile', responseConstructor: KalturaMetadataProfile }) || this;
    }
    /**
     * @return {?}
     */
    MetadataProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'add' },
            metadataProfile: { type: 'o', subTypeConstructor: KalturaMetadataProfile, subType: 'KalturaMetadataProfile' },
            xsdData: { type: 's' },
            viewsData: { type: 's' }
        });
        return result;
    };
    return MetadataProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'metadataProfile' action 'add'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export { MetadataProfileAddAction };
if (false) {
    /** @type {?} */
    MetadataProfileAddAction.prototype.metadataProfile;
    /** @type {?} */
    MetadataProfileAddAction.prototype.xsdData;
    /** @type {?} */
    MetadataProfileAddAction.prototype.viewsData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZXRhZGF0YVByb2ZpbGVBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBc0M7SUFNaEYsa0NBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzFFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNqSCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttQ0E3Q0w7RUFvQjhDLGNBQWMsRUEwQjNELENBQUE7Ozs7Ozs7OztBQTFCRCxvQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhUHJvZmlsZUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBtZXRhZGF0YVByb2ZpbGUgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlO1xuXHR4c2REYXRhIDogc3RyaW5nO1xuXHR2aWV3c0RhdGE/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGFQcm9maWxlJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFsbG93cyB5b3UgdG8gYWRkIGEgbWV0YWRhdGEgcHJvZmlsZSBvYmplY3QgYW5kIG1ldGFkYXRhIHByb2ZpbGUgY29udGVudCBhc3NvY2lhdGVkIHdpdGggS2FsdHVyYSBvYmplY3QgdHlwZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZXRhZGF0YVByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFkYXRhUHJvZmlsZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFNZXRhZGF0YVByb2ZpbGU+IHtcblxuICAgIG1ldGFkYXRhUHJvZmlsZSA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGU7XG5cdHhzZERhdGEgOiBzdHJpbmc7XG5cdHZpZXdzRGF0YSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZXRhZGF0YVByb2ZpbGVBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWV0YWRhdGFfbWV0YWRhdGFwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZScgfSxcblx0XHRcdFx0eHNkRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2aWV3c0RhdGEgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19