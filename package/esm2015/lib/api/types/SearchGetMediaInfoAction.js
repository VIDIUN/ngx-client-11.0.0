/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SearchGetMediaInfoActionArgs() { }
/** @type {?} */
SearchGetMediaInfoActionArgs.prototype.searchResult;
/**
 * Build request payload for service 'search' action 'getMediaInfo'.
 *
 * Usage: Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields
 *
 * Server response type:         KalturaSearchResult
 * Server failure response type: KalturaAPIException
 */
export class SearchGetMediaInfoAction extends KalturaRequest {
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
            action: { type: 'c', default: 'getMediaInfo' },
            searchResult: { type: 'o', subTypeConstructor: KalturaSearchResult, subType: 'KalturaSearchResult' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SearchGetMediaInfoAction.prototype.searchResult;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoR2V0TWVkaWFJbmZvQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZWFyY2hHZXRNZWRpYUluZm9BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSwrQkFBZ0MsU0FBUSxjQUFtQzs7OztJQUk3RSxZQUFZLElBQW1DO1FBRTNDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRyxtQkFBbUIsRUFBRyxDQUFDLENBQUM7S0FDM0g7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDL0YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hSZXN1bHQgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hSZXN1bHQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hHZXRNZWRpYUluZm9BY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2VhcmNoUmVzdWx0IDogS2FsdHVyYVNlYXJjaFJlc3VsdDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NlYXJjaCcgYWN0aW9uICdnZXRNZWRpYUluZm8nLlxuICpcbiAqIFVzYWdlOiBSZXRyaWV2ZSBleHRyYSBpbmZvcm1hdGlvbiBhYm91dCBtZWRpYSBmb3VuZCBpbiBzZWFyY2ggYWN0aW9uXG4gKiBTb21lIHByb3ZpZGVycyByZXR1cm4gb25seSBwYXJ0IG9mIHRoZSBmaWVsZHMgbmVlZGVkIHRvIGNyZWF0ZSBlbnRyeSBmcm9tLCB1c2UgdGhpcyBhY3Rpb24gdG8gZ2V0IHRoZSByZXN0IG9mIHRoZSBmaWVsZHNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2VhcmNoUmVzdWx0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hHZXRNZWRpYUluZm9BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2VhcmNoUmVzdWx0PiB7XG5cbiAgICBzZWFyY2hSZXN1bHQgOiBLYWx0dXJhU2VhcmNoUmVzdWx0O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNlYXJjaEdldE1lZGlhSW5mb0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNlYXJjaFJlc3VsdCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoUmVzdWx0ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZWFyY2gnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRNZWRpYUluZm8nIH0sXG5cdFx0XHRcdHNlYXJjaFJlc3VsdCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlYXJjaFJlc3VsdCwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoUmVzdWx0JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=