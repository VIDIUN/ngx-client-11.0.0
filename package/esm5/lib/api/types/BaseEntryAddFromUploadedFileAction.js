/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryAddFromUploadedFileActionArgs() { }
/** @type {?} */
BaseEntryAddFromUploadedFileActionArgs.prototype.entry;
/** @type {?} */
BaseEntryAddFromUploadedFileActionArgs.prototype.uploadTokenId;
/** @type {?|undefined} */
BaseEntryAddFromUploadedFileActionArgs.prototype.type;
/**
 * Build request payload for service 'baseEntry' action 'addFromUploadedFile'.
 *
 * Usage: Generic add entry using an uploaded file, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'addFromUploadedFile'.
 *
 * Usage: Generic add entry using an uploaded file, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
BaseEntryAddFromUploadedFileAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryAddFromUploadedFileAction, _super);
    function BaseEntryAddFromUploadedFileAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
    }
    /**
     * @return {?}
     */
    BaseEntryAddFromUploadedFileAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'addFromUploadedFile' },
            entry: { type: 'o', subTypeConstructor: KalturaBaseEntry, subType: 'KalturaBaseEntry' },
            uploadTokenId: { type: 's' },
            type: { type: 'es', subTypeConstructor: KalturaEntryType, subType: 'KalturaEntryType' }
        });
        return result;
    };
    return BaseEntryAddFromUploadedFileAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'addFromUploadedFile'.
 *
 * Usage: Generic add entry using an uploaded file, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryAddFromUploadedFileAction };
if (false) {
    /** @type {?} */
    BaseEntryAddFromUploadedFileAction.prototype.entry;
    /** @type {?} */
    BaseEntryAddFromUploadedFileAction.prototype.uploadTokenId;
    /** @type {?} */
    BaseEntryAddFromUploadedFileAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5QWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQmFzZUVudHJ5QWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQXdELDhEQUFnQztJQU1wRiw0Q0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDO0tBQ3BIOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzNELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hELEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQzNGLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7U0FDbEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0E5Q0w7RUFxQndELGNBQWMsRUEwQnJFLENBQUE7Ozs7Ozs7OztBQTFCRCw4Q0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFFbnRyeVR5cGUgfSBmcm9tICcuL0thbHR1cmFFbnRyeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUVudHJ5QWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeSA6IEthbHR1cmFCYXNlRW50cnk7XG5cdHVwbG9hZFRva2VuSWQgOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYUVudHJ5VHlwZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Jhc2VFbnRyeScgYWN0aW9uICdhZGRGcm9tVXBsb2FkZWRGaWxlJy5cbiAqXG4gKiBVc2FnZTogR2VuZXJpYyBhZGQgZW50cnkgdXNpbmcgYW4gdXBsb2FkZWQgZmlsZSwgc2hvdWxkIGJlIHVzZWQgd2hlbiB0aGUgdXBsb2FkZWQgZW50cnkgdHlwZSBpcyBub3Qga25vd25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQmFzZUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlRW50cnlBZGRGcm9tVXBsb2FkZWRGaWxlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUJhc2VFbnRyeT4ge1xuXG4gICAgZW50cnkgOiBLYWx0dXJhQmFzZUVudHJ5O1xuXHR1cGxvYWRUb2tlbklkIDogc3RyaW5nO1xuXHR0eXBlIDogS2FsdHVyYUVudHJ5VHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBCYXNlRW50cnlBZGRGcm9tVXBsb2FkZWRGaWxlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Jhc2VlbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21VcGxvYWRlZEZpbGUnIH0sXG5cdFx0XHRcdGVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnknIH0sXG5cdFx0XHRcdHVwbG9hZFRva2VuSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5VHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19