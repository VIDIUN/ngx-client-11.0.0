/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UploadTokenDeleteActionArgs() { }
/** @type {?} */
UploadTokenDeleteActionArgs.prototype.uploadTokenId;
/**
 * Build request payload for service 'uploadToken' action 'delete'.
 *
 * Usage: Deletes the upload token by upload token id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export class UploadTokenDeleteAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'v', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uploadtoken' },
            action: { type: 'c', default: 'delete' },
            uploadTokenId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    UploadTokenDeleteAction.prototype.uploadTokenId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkVG9rZW5EZWxldGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VwbG9hZFRva2VuRGVsZXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEUsTUFBTSw4QkFBK0IsU0FBUSxjQUFvQjs7OztJQUk3RCxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkVG9rZW5EZWxldGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgdXBsb2FkVG9rZW5JZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VwbG9hZFRva2VuJyBhY3Rpb24gJ2RlbGV0ZScuXG4gKlxuICogVXNhZ2U6IERlbGV0ZXMgdGhlIHVwbG9hZCB0b2tlbiBieSB1cGxvYWQgdG9rZW4gaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB2b2lkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVcGxvYWRUb2tlbkRlbGV0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHZvaWQ+IHtcblxuICAgIHVwbG9hZFRva2VuSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVXBsb2FkVG9rZW5EZWxldGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICd2JywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwbG9hZHRva2VuJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZGVsZXRlJyB9LFxuXHRcdFx0XHR1cGxvYWRUb2tlbklkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==