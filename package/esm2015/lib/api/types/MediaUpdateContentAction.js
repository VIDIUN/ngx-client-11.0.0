/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaEntryReplacementOptions } from './KalturaEntryReplacementOptions';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaUpdateContentActionArgs() { }
/** @type {?} */
MediaUpdateContentActionArgs.prototype.entryId;
/** @type {?} */
MediaUpdateContentActionArgs.prototype.resource;
/** @type {?|undefined} */
MediaUpdateContentActionArgs.prototype.conversionProfileId;
/** @type {?|undefined} */
MediaUpdateContentActionArgs.prototype.advancedOptions;
/**
 * Build request payload for service 'media' action 'updateContent'.
 *
 * Usage: Replace content associated with the media entry
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export class MediaUpdateContentAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'updateContent' },
            entryId: { type: 's' },
            resource: { type: 'o', subTypeConstructor: KalturaResource, subType: 'KalturaResource' },
            conversionProfileId: { type: 'n' },
            advancedOptions: { type: 'o', subTypeConstructor: KalturaEntryReplacementOptions, subType: 'KalturaEntryReplacementOptions' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MediaUpdateContentAction.prototype.entryId;
    /** @type {?} */
    MediaUpdateContentAction.prototype.resource;
    /** @type {?} */
    MediaUpdateContentAction.prototype.conversionProfileId;
    /** @type {?} */
    MediaUpdateContentAction.prototype.advancedOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFVcGRhdGVDb250ZW50QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYVVwZGF0ZUNvbnRlbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFLE1BQU0sK0JBQWdDLFNBQVEsY0FBaUM7Ozs7SUFPM0UsWUFBWSxJQUFtQztRQUUzQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQyxDQUFDO0tBQ3ZIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDdkQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ2xELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQzVGLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUN4SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnkgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhUmVzb3VyY2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFVcGRhdGVDb250ZW50QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHJlc291cmNlIDogS2FsdHVyYVJlc291cmNlO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0YWR2YW5jZWRPcHRpb25zPyA6IEthbHR1cmFFbnRyeVJlcGxhY2VtZW50T3B0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21lZGlhJyBhY3Rpb24gJ3VwZGF0ZUNvbnRlbnQnLlxuICpcbiAqIFVzYWdlOiBSZXBsYWNlIGNvbnRlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSBtZWRpYSBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZWRpYUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWRpYVVwZGF0ZUNvbnRlbnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWVkaWFFbnRyeT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cmVzb3VyY2UgOiBLYWx0dXJhUmVzb3VyY2U7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdGFkdmFuY2VkT3B0aW9ucyA6IEthbHR1cmFFbnRyeVJlcGxhY2VtZW50T3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZWRpYVVwZGF0ZUNvbnRlbnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZWRpYScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZUNvbnRlbnQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXNvdXJjZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVzb3VyY2UnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWR2YW5jZWRPcHRpb25zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=