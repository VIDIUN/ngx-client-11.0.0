/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaConversionAttribute } from './KalturaConversionAttribute';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaConvertActionArgs() { }
/** @type {?} */
MediaConvertActionArgs.prototype.entryId;
/** @type {?|undefined} */
MediaConvertActionArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
MediaConvertActionArgs.prototype.dynamicConversionAttributes;
/**
 * Build request payload for service 'media' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export class MediaConvertAction extends KalturaRequest {
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
            service: { type: 'c', default: 'media' },
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
    MediaConvertAction.prototype.entryId;
    /** @type {?} */
    MediaConvertAction.prototype.conversionProfileId;
    /** @type {?} */
    MediaConvertAction.prototype.dynamicConversionAttributes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFDb252ZXJ0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUNvbnZlcnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFLE1BQU0seUJBQTBCLFNBQVEsY0FBc0I7Ozs7SUFNMUQsWUFBWSxJQUE2QjtRQUVyQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEVBQUUsQ0FBQztLQUN0Rzs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3ZELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUM1QyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1NBQzVILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUgfSBmcm9tICcuL0thbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhQ29udmVydEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0ZHluYW1pY0NvbnZlcnNpb25BdHRyaWJ1dGVzPyA6IEthbHR1cmFDb252ZXJzaW9uQXR0cmlidXRlW107XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZWRpYScgYWN0aW9uICdjb252ZXJ0Jy5cbiAqXG4gKiBVc2FnZTogQ29udmVydCBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIG51bWJlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFDb252ZXJ0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8bnVtYmVyPiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRkeW5hbWljQ29udmVyc2lvbkF0dHJpYnV0ZXMgOiBLYWx0dXJhQ29udmVyc2lvbkF0dHJpYnV0ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1lZGlhQ29udmVydEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ24nLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5keW5hbWljQ29udmVyc2lvbkF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmR5bmFtaWNDb252ZXJzaW9uQXR0cmlidXRlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21lZGlhJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udmVydCcgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR5bmFtaWNDb252ZXJzaW9uQXR0cmlidXRlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25BdHRyaWJ1dGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==