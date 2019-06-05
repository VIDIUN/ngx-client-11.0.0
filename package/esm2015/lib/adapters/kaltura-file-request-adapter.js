/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { of as observableOf } from 'rxjs';
import { buildUrl, createEndpoint, prepareParameters } from './utils';
export class KalturaFileRequestAdapter {
    /**
     * @param {?} request
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    transmit(request, clientOptions, defaultRequestOptions) {
        /** @type {?} */
        const parameters = prepareParameters(request, clientOptions, defaultRequestOptions);
        /** @type {?} */
        const endpointUrl = createEndpoint(request, clientOptions, parameters['service'], parameters['action']);
        delete parameters['service'];
        delete parameters['action'];
        return observableOf({ url: buildUrl(endpointUrl, parameters) });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1maWxlLXJlcXVlc3QtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hZGFwdGVycy9rYWx0dXJhLWZpbGUtcmVxdWVzdC1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUd0RCxPQUFPLEVBQUUsUUFBUSxFQUFtQixjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFJdkYsTUFBTTs7Ozs7OztJQUVLLFFBQVEsQ0FBQyxPQUEyQixFQUFFLGFBQW1DLEVBQUUscUJBQTRDOztRQUMxSCxNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7O1FBQ3BGLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RyxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QixNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUMsQ0FBQyxDQUFDOztDQUVyRSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QgfSBmcm9tICcuLi9hcGkva2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3RPcHRpb25zLCBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzIH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtcmVxdWVzdC1vcHRpb25zJztcbmltcG9ydCB7IGJ1aWxkVXJsLCBjcmVhdGVDbGllbnRUYWcsIGNyZWF0ZUVuZHBvaW50LCBwcmVwYXJlUGFyYW1ldGVycyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgS2FsdHVyYUNsaWVudE9wdGlvbnMgfSBmcm9tICcuLi9rYWx0dXJhLWNsaWVudC1vcHRpb25zJztcblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZpbGVSZXF1ZXN0QWRhcHRlciB7XG5cbiAgICBwdWJsaWMgdHJhbnNtaXQocmVxdWVzdDogS2FsdHVyYUZpbGVSZXF1ZXN0LCBjbGllbnRPcHRpb25zOiBLYWx0dXJhQ2xpZW50T3B0aW9ucywgZGVmYXVsdFJlcXVlc3RPcHRpb25zOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPHsgdXJsOiBzdHJpbmcgfT4ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gcHJlcGFyZVBhcmFtZXRlcnMocmVxdWVzdCwgY2xpZW50T3B0aW9ucywgZGVmYXVsdFJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBjcmVhdGVFbmRwb2ludChyZXF1ZXN0LCBjbGllbnRPcHRpb25zLCBwYXJhbWV0ZXJzWydzZXJ2aWNlJ10sIHBhcmFtZXRlcnNbJ2FjdGlvbiddKTtcbiAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNbJ3NlcnZpY2UnXTtcbiAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNbJ2FjdGlvbiddO1xuXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2Yoe3VybDogYnVpbGRVcmwoZW5kcG9pbnRVcmwsIHBhcmFtZXRlcnMpfSk7XG4gICAgfVxufVxuIl19