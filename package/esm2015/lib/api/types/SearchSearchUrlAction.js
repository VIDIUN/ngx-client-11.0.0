/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SearchSearchUrlActionArgs() { }
/** @type {?} */
SearchSearchUrlActionArgs.prototype.mediaType;
/** @type {?} */
SearchSearchUrlActionArgs.prototype.url;
/**
 * Build request payload for service 'search' action 'searchUrl'.
 *
 * Usage: Search for media given a specific URL
 * Kaltura supports a searchURL action on some of the media providers.
 * This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *
 * Server response type:         KalturaSearchResult
 * Server failure response type: KalturaAPIException
 */
export class SearchSearchUrlAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaSearchResult', responseConstructor: KalturaSearchResult });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'search' },
            action: { type: 'c', default: 'searchUrl' },
            mediaType: { type: 'en', subTypeConstructor: KalturaMediaType, subType: 'KalturaMediaType' },
            url: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SearchSearchUrlAction.prototype.mediaType;
    /** @type {?} */
    SearchSearchUrlAction.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoU2VhcmNoVXJsQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZWFyY2hTZWFyY2hVcmxBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFLE1BQU0sNEJBQTZCLFNBQVEsY0FBbUM7Ozs7SUFLMUUsWUFBWSxJQUFnQztRQUV4QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUcsbUJBQW1CLEVBQUcsQ0FBQyxDQUFDO0tBQzNIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzlDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ2hHLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaFJlc3VsdCB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaFJlc3VsdCc7XG5cbmltcG9ydCB7IEthbHR1cmFNZWRpYVR5cGUgfSBmcm9tICcuL0thbHR1cmFNZWRpYVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoU2VhcmNoVXJsQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIG1lZGlhVHlwZSA6IEthbHR1cmFNZWRpYVR5cGU7XG5cdHVybCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NlYXJjaCcgYWN0aW9uICdzZWFyY2hVcmwnLlxuICpcbiAqIFVzYWdlOiBTZWFyY2ggZm9yIG1lZGlhIGdpdmVuIGEgc3BlY2lmaWMgVVJMXG4gKiBLYWx0dXJhIHN1cHBvcnRzIGEgc2VhcmNoVVJMIGFjdGlvbiBvbiBzb21lIG9mIHRoZSBtZWRpYSBwcm92aWRlcnMuXG4gKiBUaGlzIGFjdGlvbiB3aWxsIHJldHVybiBhIEthbHR1cmFTZWFyY2hSZXN1bHQgb2JqZWN0IGJhc2VkIG9uIGEgZ2l2ZW4gVVJMIChhc3N1bWluZyB0aGUgbWVkaWEgcHJvdmlkZXIgaXMgc3VwcG9ydGVkKVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTZWFyY2hSZXN1bHRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNlYXJjaFNlYXJjaFVybEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTZWFyY2hSZXN1bHQ+IHtcblxuICAgIG1lZGlhVHlwZSA6IEthbHR1cmFNZWRpYVR5cGU7XG5cdHVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTZWFyY2hTZWFyY2hVcmxBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hSZXN1bHQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlYXJjaFJlc3VsdCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VhcmNoJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VhcmNoVXJsJyB9LFxuXHRcdFx0XHRtZWRpYVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYVR5cGUnIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=