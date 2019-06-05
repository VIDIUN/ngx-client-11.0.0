/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaEntryContextDataResult } from './KalturaEntryContextDataResult';
import { KalturaEntryContextDataParams } from './KalturaEntryContextDataParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryGetContextDataActionArgs() { }
/** @type {?} */
BaseEntryGetContextDataActionArgs.prototype.entryId;
/** @type {?} */
BaseEntryGetContextDataActionArgs.prototype.contextDataParams;
/**
 * Build request payload for service 'baseEntry' action 'getContextData'.
 *
 * Usage: This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information
 *
 * Server response type:         KalturaEntryContextDataResult
 * Server failure response type: KalturaAPIException
 */
export class BaseEntryGetContextDataAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaEntryContextDataResult', responseConstructor: KalturaEntryContextDataResult });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'getContextData' },
            entryId: { type: 's' },
            contextDataParams: { type: 'o', subTypeConstructor: KalturaEntryContextDataParams, subType: 'KalturaEntryContextDataParams' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    BaseEntryGetContextDataAction.prototype.entryId;
    /** @type {?} */
    BaseEntryGetContextDataAction.prototype.contextDataParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5R2V0Q29udGV4dERhdGFBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Jhc2VFbnRyeUdldENvbnRleHREYXRhQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVoRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLG9DQUFxQyxTQUFRLGNBQTZDOzs7O0lBSzVGLFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLCtCQUErQixFQUFFLG1CQUFtQixFQUFHLDZCQUE2QixFQUFHLENBQUMsQ0FBQztLQUMvSTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzNELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdCQUFnQixFQUFFO1lBQ25ELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN4SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQgfSBmcm9tICcuL0thbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0JztcblxuaW1wb3J0IHsgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VFbnRyeUdldENvbnRleHREYXRhQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGNvbnRleHREYXRhUGFyYW1zIDogS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdiYXNlRW50cnknIGFjdGlvbiAnZ2V0Q29udGV4dERhdGEnLlxuICpcbiAqIFVzYWdlOiBUaGlzIGFjdGlvbiBkZWxpdmVycyBlbnRyeS1yZWxhdGVkIGRhdGEsIGJhc2VkIG9uIHRoZSB1c2VyJ3MgY29udGV4dDogYWNjZXNzIGNvbnRyb2wsIHJlc3RyaWN0aW9uLCBwbGF5YmFjayBmb3JtYXQgYW5kIHN0b3JhZ2UgaW5mb3JtYXRpb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVJlc3VsdFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQmFzZUVudHJ5R2V0Q29udGV4dERhdGFBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW50cnlDb250ZXh0RGF0YVJlc3VsdD4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y29udGV4dERhdGFQYXJhbXMgOiBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtcztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBCYXNlRW50cnlHZXRDb250ZXh0RGF0YUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Jhc2VlbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldENvbnRleHREYXRhJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRleHREYXRhUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19