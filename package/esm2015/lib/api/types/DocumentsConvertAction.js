/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaConversionAttribute } from './KalturaConversionAttribute';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DocumentsConvertActionArgs() { }
/** @type {?} */
DocumentsConvertActionArgs.prototype.entryId;
/** @type {?|undefined} */
DocumentsConvertActionArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
DocumentsConvertActionArgs.prototype.dynamicConversionAttributes;
/**
 * Build request payload for service 'documents' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export class DocumentsConvertAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'n', responseSubType: '', responseConstructor: null });
        if (typeof this.dynamicConversionAttributes === 'undefined')
            this.dynamicConversionAttributes = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'convert' },
            entryId: { type: 's' },
            conversionProfileId: { type: 'n' },
            dynamicConversionAttributes: { type: 'a', subTypeConstructor: KalturaConversionAttribute, subType: 'KalturaConversionAttribute' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DocumentsConvertAction.prototype.entryId;
    /** @type {?} */
    DocumentsConvertAction.prototype.conversionProfileId;
    /** @type {?} */
    DocumentsConvertAction.prototype.dynamicConversionAttributes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzQ29udmVydEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRG9jdW1lbnRzQ29udmVydEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSw2QkFBOEIsU0FBUSxjQUFzQjs7OztJQU05RCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyRixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsRUFBRSxDQUFDO0tBQ3RHOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUNwRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDNUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUM1SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVyc2lvbkF0dHJpYnV0ZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudHNDb252ZXJ0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRkeW5hbWljQ29udmVyc2lvbkF0dHJpYnV0ZXM/IDogS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGVbXTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RvY3VtZW50cycgYWN0aW9uICdjb252ZXJ0Jy5cbiAqXG4gKiBVc2FnZTogQ29udmVydCBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIG51bWJlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRzQ29udmVydEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PG51bWJlcj4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0ZHluYW1pY0NvbnZlcnNpb25BdHRyaWJ1dGVzIDogS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEb2N1bWVudHNDb252ZXJ0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmR5bmFtaWNDb252ZXJzaW9uQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZHluYW1pY0NvbnZlcnNpb25BdHRyaWJ1dGVzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZG9jdW1lbnRfZG9jdW1lbnRzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udmVydCcgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR5bmFtaWNDb252ZXJzaW9uQXR0cmlidXRlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==