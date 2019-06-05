/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderFileUpdateStatusActionArgs() { }
/** @type {?} */
DropFolderFileUpdateStatusActionArgs.prototype.dropFolderFileId;
/** @type {?} */
DropFolderFileUpdateStatusActionArgs.prototype.status;
/**
 * Build request payload for service 'dropFolderFile' action 'updateStatus'.
 *
 * Usage: Update status of KalturaDropFolderFile
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'dropFolderFile' action 'updateStatus'.
 *
 * Usage: Update status of KalturaDropFolderFile
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
DropFolderFileUpdateStatusAction = /** @class */ (function (_super) {
    tslib_1.__extends(DropFolderFileUpdateStatusAction, _super);
    function DropFolderFileUpdateStatusAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDropFolderFile', responseConstructor: KalturaDropFolderFile }) || this;
    }
    /**
     * @return {?}
     */
    DropFolderFileUpdateStatusAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'dropfolder_dropfolderfile' },
            action: { type: 'c', default: 'updateStatus' },
            dropFolderFileId: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaDropFolderFileStatus, subType: 'KalturaDropFolderFileStatus' }
        });
        return result;
    };
    return DropFolderFileUpdateStatusAction;
}(KalturaRequest));
/**
 * Build request payload for service 'dropFolderFile' action 'updateStatus'.
 *
 * Usage: Update status of KalturaDropFolderFile
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export { DropFolderFileUpdateStatusAction };
if (false) {
    /** @type {?} */
    DropFolderFileUpdateStatusAction.prototype.dropFolderFileId;
    /** @type {?} */
    DropFolderFileUpdateStatusAction.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlckZpbGVVcGRhdGVTdGF0dXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Ryb3BGb2xkZXJGaWxlVXBkYXRlU3RhdHVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBc0QsNERBQXFDO0lBS3ZGLDBDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHVCQUF1QixFQUFFLG1CQUFtQixFQUFHLHFCQUFxQixFQUFHLENBQUM7S0FDOUg7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMzRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQzFHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBM0NMO0VBb0JzRCxjQUFjLEVBd0JuRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsNENBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcEZvbGRlckZpbGVVcGRhdGVTdGF0dXNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZHJvcEZvbGRlckZpbGVJZCA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZHJvcEZvbGRlckZpbGUnIGFjdGlvbiAndXBkYXRlU3RhdHVzJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIHN0YXR1cyBvZiBLYWx0dXJhRHJvcEZvbGRlckZpbGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRHJvcEZvbGRlckZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERyb3BGb2xkZXJGaWxlVXBkYXRlU3RhdHVzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURyb3BGb2xkZXJGaWxlPiB7XG5cbiAgICBkcm9wRm9sZGVyRmlsZUlkIDogbnVtYmVyO1xuXHRzdGF0dXMgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRHJvcEZvbGRlckZpbGVVcGRhdGVTdGF0dXNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Ryb3Bmb2xkZXJfZHJvcGZvbGRlcmZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVTdGF0dXMnIH0sXG5cdFx0XHRcdGRyb3BGb2xkZXJGaWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19