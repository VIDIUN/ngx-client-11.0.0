/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function MetadataProfileAddFromFileActionArgs() { }
/** @type {?} */
MetadataProfileAddFromFileActionArgs.prototype.metadataProfile;
/** @type {?} */
MetadataProfileAddFromFileActionArgs.prototype.xsdFile;
/** @type {?|undefined} */
MetadataProfileAddFromFileActionArgs.prototype.viewsFile;
/**
 * Build request payload for service 'metadataProfile' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadataProfile' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
MetadataProfileAddFromFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataProfileAddFromFileAction, _super);
    function MetadataProfileAddFromFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadataProfile', responseConstructor: KalturaMetadataProfile }) || this;
    }
    /**
     * @return {?}
     */
    MetadataProfileAddFromFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'addFromFile' },
            metadataProfile: { type: 'o', subTypeConstructor: KalturaMetadataProfile, subType: 'KalturaMetadataProfile' },
            xsdFile: { type: 'f' },
            viewsFile: { type: 'f' }
        });
        return result;
    };
    return MetadataProfileAddFromFileAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'metadataProfile' action 'addFromFile'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export { MetadataProfileAddFromFileAction };
if (false) {
    /** @type {?} */
    MetadataProfileAddFromFileAction.prototype.metadataProfile;
    /** @type {?} */
    MetadataProfileAddFromFileAction.prototype.xsdFile;
    /** @type {?} */
    MetadataProfileAddFromFileAction.prototype.viewsFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlQWRkRnJvbUZpbGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL01ldGFkYXRhUHJvZmlsZUFkZEZyb21GaWxlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IzRjs7Ozs7Ozs7QUFBQTtJQUFzRCw0REFBNEM7SUFNOUYsMENBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzFFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUNoRCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNqSCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0E3Q0w7RUFvQnNELG9CQUFvQixFQTBCekUsQ0FBQTs7Ozs7Ozs7O0FBMUJELDRDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFQcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFQcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVVwbG9hZFJlcXVlc3QsIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtdXBsb2FkLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhUHJvZmlsZUFkZEZyb21GaWxlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3Mge1xuICAgIG1ldGFkYXRhUHJvZmlsZSA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGU7XG5cdHhzZEZpbGUgOiBGaWxlO1xuXHR2aWV3c0ZpbGU/IDogRmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21ldGFkYXRhUHJvZmlsZScgYWN0aW9uICdhZGRGcm9tRmlsZScuXG4gKlxuICogVXNhZ2U6IEFsbG93cyB5b3UgdG8gYWRkIGEgbWV0YWRhdGEgcHJvZmlsZSBvYmplY3QgYW5kIG1ldGFkYXRhIHByb2ZpbGUgZmlsZSBhc3NvY2lhdGVkIHdpdGggS2FsdHVyYSBvYmplY3QgdHlwZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZXRhZGF0YVByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFkYXRhUHJvZmlsZUFkZEZyb21GaWxlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYU1ldGFkYXRhUHJvZmlsZT4ge1xuXG4gICAgbWV0YWRhdGFQcm9maWxlIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZTtcblx0eHNkRmlsZSA6IEZpbGU7XG5cdHZpZXdzRmlsZSA6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWV0YWRhdGFQcm9maWxlQWRkRnJvbUZpbGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZXRhZGF0YVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWV0YWRhdGFfbWV0YWRhdGFwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbUZpbGUnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFQcm9maWxlJyB9LFxuXHRcdFx0XHR4c2RGaWxlIDogeyB0eXBlIDogJ2YnIH0sXG5cdFx0XHRcdHZpZXdzRmlsZSA6IHsgdHlwZSA6ICdmJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=