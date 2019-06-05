/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAttachmentServeOptions } from './KalturaAttachmentServeOptions';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function AttachmentAssetServeActionArgs() { }
/** @type {?} */
AttachmentAssetServeActionArgs.prototype.attachmentAssetId;
/** @type {?|undefined} */
AttachmentAssetServeActionArgs.prototype.serveOptions;
/**
 * Build request payload for service 'attachmentAsset' action 'serve'.
 *
 * Usage: Serves attachment by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'attachmentAsset' action 'serve'.
 *
 * Usage: Serves attachment by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
AttachmentAssetServeAction = /** @class */ (function (_super) {
    tslib_1.__extends(AttachmentAssetServeAction, _super);
    function AttachmentAssetServeAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    AttachmentAssetServeAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'attachment_attachmentasset' },
            action: { type: 'c', default: 'serve' },
            attachmentAssetId: { type: 's' },
            serveOptions: { type: 'o', subTypeConstructor: KalturaAttachmentServeOptions, subType: 'KalturaAttachmentServeOptions' }
        });
        return result;
    };
    return AttachmentAssetServeAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'attachmentAsset' action 'serve'.
 *
 * Usage: Serves attachment by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { AttachmentAssetServeAction };
if (false) {
    /** @type {?} */
    AttachmentAssetServeAction.prototype.attachmentAssetId;
    /** @type {?} */
    AttachmentAssetServeAction.prototype.serveOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0YWNobWVudEFzc2V0U2VydmVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0F0dGFjaG1lbnRBc3NldFNlcnZlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVyRjs7Ozs7Ozs7QUFBQTtJQUFnRCxzREFBa0I7SUFLOUQsb0NBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUM1RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1NBQ25ILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBM0NMO0VBb0JnRCxrQkFBa0IsRUF3QmpFLENBQUE7Ozs7Ozs7OztBQXhCRCxzQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFBdHRhY2htZW50U2VydmVPcHRpb25zIH0gZnJvbSAnLi9LYWx0dXJhQXR0YWNobWVudFNlcnZlT3B0aW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0YWNobWVudEFzc2V0U2VydmVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3Mge1xuICAgIGF0dGFjaG1lbnRBc3NldElkIDogc3RyaW5nO1xuXHRzZXJ2ZU9wdGlvbnM/IDogS2FsdHVyYUF0dGFjaG1lbnRTZXJ2ZU9wdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdhdHRhY2htZW50QXNzZXQnIGFjdGlvbiAnc2VydmUnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgYXR0YWNobWVudCBieSBpdHMgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRBc3NldFNlcnZlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIGF0dGFjaG1lbnRBc3NldElkIDogc3RyaW5nO1xuXHRzZXJ2ZU9wdGlvbnMgOiBLYWx0dXJhQXR0YWNobWVudFNlcnZlT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBBdHRhY2htZW50QXNzZXRTZXJ2ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhdHRhY2htZW50X2F0dGFjaG1lbnRhc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlJyB9LFxuXHRcdFx0XHRhdHRhY2htZW50QXNzZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZU9wdGlvbnMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdHRhY2htZW50U2VydmVPcHRpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFBdHRhY2htZW50U2VydmVPcHRpb25zJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=