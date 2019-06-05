/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaSearchAuthData } from './KalturaSearchAuthData';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SearchExternalLoginActionArgs() { }
/** @type {?} */
SearchExternalLoginActionArgs.prototype.searchSource;
/** @type {?} */
SearchExternalLoginActionArgs.prototype.userName;
/** @type {?} */
SearchExternalLoginActionArgs.prototype.password;
/**
 * Build request payload for service 'search' action 'externalLogin'.
 *
 *
 *
 * Server response type:         KalturaSearchAuthData
 * Server failure response type: KalturaAPIException
 */
export class SearchExternalLoginAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaSearchAuthData', responseConstructor: KalturaSearchAuthData });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'search' },
            action: { type: 'c', default: 'externalLogin' },
            searchSource: { type: 'en', subTypeConstructor: KalturaSearchProviderType, subType: 'KalturaSearchProviderType' },
            userName: { type: 's' },
            password: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SearchExternalLoginAction.prototype.searchSource;
    /** @type {?} */
    SearchExternalLoginAction.prototype.userName;
    /** @type {?} */
    SearchExternalLoginAction.prototype.password;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXh0ZXJuYWxMb2dpbkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2VhcmNoRXh0ZXJuYWxMb2dpbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSxnQ0FBaUMsU0FBUSxjQUFxQzs7OztJQU1oRixZQUFZLElBQW9DO1FBRTVDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRyxxQkFBcUIsRUFBRyxDQUFDLENBQUM7S0FDL0g7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDbEQsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDckgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoQXV0aERhdGEgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hBdXRoRGF0YSc7XG5cbmltcG9ydCB7IEthbHR1cmFTZWFyY2hQcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hQcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoRXh0ZXJuYWxMb2dpbkFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZWFyY2hTb3VyY2UgOiBLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlO1xuXHR1c2VyTmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzZWFyY2gnIGFjdGlvbiAnZXh0ZXJuYWxMb2dpbicuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVNlYXJjaEF1dGhEYXRhXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hFeHRlcm5hbExvZ2luQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVNlYXJjaEF1dGhEYXRhPiB7XG5cbiAgICBzZWFyY2hTb3VyY2UgOiBLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlO1xuXHR1c2VyTmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2VhcmNoRXh0ZXJuYWxMb2dpbkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNlYXJjaEF1dGhEYXRhJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTZWFyY2hBdXRoRGF0YSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VhcmNoJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZXh0ZXJuYWxMb2dpbicgfSxcblx0XHRcdFx0c2VhcmNoU291cmNlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHR1c2VyTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=