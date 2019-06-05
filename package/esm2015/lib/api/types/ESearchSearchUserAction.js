/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaESearchResponse } from './KalturaESearchResponse';
import { KalturaESearchUserParams } from './KalturaESearchUserParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ESearchSearchUserActionArgs() { }
/** @type {?} */
ESearchSearchUserActionArgs.prototype.searchParams;
/** @type {?|undefined} */
ESearchSearchUserActionArgs.prototype.pager;
/**
 * Build request payload for service 'eSearch' action 'searchUser'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
export class ESearchSearchUserAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaESearchResponse', responseConstructor: KalturaESearchResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'elasticsearch_esearch' },
            action: { type: 'c', default: 'searchUser' },
            searchParams: { type: 'o', subTypeConstructor: KalturaESearchUserParams, subType: 'KalturaESearchUserParams' },
            pager: { type: 'o', subTypeConstructor: KalturaPager, subType: 'KalturaPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ESearchSearchUserAction.prototype.searchParams;
    /** @type {?} */
    ESearchSearchUserAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRVNlYXJjaFNlYXJjaFVzZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0VTZWFyY2hTZWFyY2hVc2VyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSw4QkFBK0IsU0FBUSxjQUFzQzs7OztJQUsvRSxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRyxzQkFBc0IsRUFBRyxDQUFDLENBQUM7S0FDakk7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUMvQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUNsSCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLFlBQVksRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1NBQzFFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXMnO1xuaW1wb3J0IHsgS2FsdHVyYVBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRVNlYXJjaFNlYXJjaFVzZXJBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2VhcmNoUGFyYW1zIDogS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zO1xuXHRwYWdlcj8gOiBLYWx0dXJhUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdlU2VhcmNoJyBhY3Rpb24gJ3NlYXJjaFVzZXInLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFU2VhcmNoUmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEVTZWFyY2hTZWFyY2hVc2VyQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUVTZWFyY2hSZXNwb25zZT4ge1xuXG4gICAgc2VhcmNoUGFyYW1zIDogS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zO1xuXHRwYWdlciA6IEthbHR1cmFQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBFU2VhcmNoU2VhcmNoVXNlckFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdlbGFzdGljc2VhcmNoX2VzZWFyY2gnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZWFyY2hVc2VyJyB9LFxuXHRcdFx0XHRzZWFyY2hQYXJhbXMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoVXNlclBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXMnIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=