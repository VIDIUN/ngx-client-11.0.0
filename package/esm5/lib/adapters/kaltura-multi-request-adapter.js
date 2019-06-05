/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { map, catchError } from 'rxjs/operators';
import { createEndpoint, getHeaders, prepareParameters } from './utils';
import { KalturaAPIException } from '../api/kaltura-api-exception';
import { KalturaClientException } from '../api/kaltura-client-exception';
var KalturaMultiRequestAdapter = /** @class */ (function () {
    function KalturaMultiRequestAdapter(_http) {
        this._http = _http;
    }
    /**
     * @param {?} request
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    KalturaMultiRequestAdapter.prototype.transmit = /**
     * @param {?} request
     * @param {?} clientOptions
     * @param {?} defaultRequestOptions
     * @return {?}
     */
    function (request, clientOptions, defaultRequestOptions) {
        /** @type {?} */
        var parameters = prepareParameters(request, clientOptions, defaultRequestOptions);
        /** @type {?} */
        var endpointUrl = createEndpoint(request, clientOptions, parameters['service'], parameters['action']);
        delete parameters['service'];
        delete parameters['action'];
        return this._http.request('post', endpointUrl, {
            body: parameters,
            headers: getHeaders()
        }).pipe(catchError(function (error) {
            /** @type {?} */
            var errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : null;
            throw new KalturaClientException("client::multi-request-network-error", errorMessage || 'Error connecting to server');
        }), map(function (result) {
            try {
                return request.handleResponse(result);
            }
            catch (error) {
                if (error instanceof KalturaClientException || error instanceof KalturaAPIException) {
                    throw error;
                }
                else {
                    /** @type {?} */
                    var errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : null;
                    throw new KalturaClientException('client::multi-response-unknown-error', errorMessage || 'Failed to parse response');
                }
            }
        }));
    };
    return KalturaMultiRequestAdapter;
}());
export { KalturaMultiRequestAdapter };
if (false) {
    /** @type {?} */
    KalturaMultiRequestAdapter.prototype._http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1tdWx0aS1yZXF1ZXN0LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYWRhcHRlcnMva2FsdHVyYS1tdWx0aS1yZXF1ZXN0LWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFPL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJekUsSUFBQTtJQUNJLG9DQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0tBQ3BDOzs7Ozs7O0lBRUQsNkNBQVE7Ozs7OztJQUFSLFVBQVMsT0FBNEIsRUFBRyxhQUFtQyxFQUFFLHFCQUE0Qzs7UUFFckgsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztRQUVwRixJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEcsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFJNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQ3pDO1lBQ0ksSUFBSSxFQUFFLFVBQVU7WUFDaEIsT0FBTyxFQUFFLFVBQVUsRUFBRTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUNQLFVBQVUsQ0FDTixVQUFBLEtBQUs7O1lBQ0QsSUFBTSxZQUFZLEdBQUcsS0FBSyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2RyxNQUFNLElBQUksc0JBQXNCLENBQUMscUNBQXFDLEVBQUUsWUFBWSxJQUFJLDRCQUE0QixDQUFDLENBQUM7U0FDekgsQ0FDSixFQUNELEdBQUcsQ0FDQyxVQUFBLE1BQU07WUFDRixJQUFJLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekM7WUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksc0JBQXNCLElBQUksS0FBSyxZQUFZLG1CQUFtQixDQUFDLENBQUMsQ0FBQztvQkFDbEYsTUFBTSxLQUFLLENBQUM7aUJBQ2Y7Z0JBQUMsSUFBSSxDQUFDLENBQUM7O29CQUNKLElBQU0sWUFBWSxHQUFHLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZHLE1BQU0sSUFBSSxzQkFBc0IsQ0FBQyxzQ0FBc0MsRUFBRSxZQUFZLElBQUksMEJBQTBCLENBQUMsQ0FBQztpQkFDeEg7YUFDSjtTQUNKLENBQUMsQ0FBQyxDQUFDO0tBQ2Y7cUNBcERMO0lBcURDLENBQUE7QUF2Q0Qsc0NBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge21hcCwgY2F0Y2hFcnJvcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBLYWx0dXJhTXVsdGlSZXF1ZXN0IH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtbXVsdGktcmVxdWVzdCc7XG5pbXBvcnQgeyBLYWx0dXJhTXVsdGlSZXNwb25zZSB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLW11bHRpLXJlc3BvbnNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNyZWF0ZUVuZHBvaW50LCBnZXRIZWFkZXJzLCBwcmVwYXJlUGFyYW1ldGVycyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgS2FsdHVyYUFQSUV4Y2VwdGlvbiB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLWFwaS1leGNlcHRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbiB9IGZyb20gJy4uL2FwaS9rYWx0dXJhLWNsaWVudC1leGNlcHRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3RPcHRpb25zIH0gZnJvbSAnLi4vYXBpL2thbHR1cmEtcmVxdWVzdC1vcHRpb25zJztcbmltcG9ydCB7IEthbHR1cmFDbGllbnRPcHRpb25zIH0gZnJvbSAnLi4va2FsdHVyYS1jbGllbnQtb3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTXVsdGlSZXF1ZXN0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xuICAgIH1cblxuICAgIHRyYW5zbWl0KHJlcXVlc3Q6IEthbHR1cmFNdWx0aVJlcXVlc3QsICBjbGllbnRPcHRpb25zOiBLYWx0dXJhQ2xpZW50T3B0aW9ucywgZGVmYXVsdFJlcXVlc3RPcHRpb25zOiBLYWx0dXJhUmVxdWVzdE9wdGlvbnMpOiBPYnNlcnZhYmxlPEthbHR1cmFNdWx0aVJlc3BvbnNlPiB7XG5cbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHByZXBhcmVQYXJhbWV0ZXJzKHJlcXVlc3QsIGNsaWVudE9wdGlvbnMsIGRlZmF1bHRSZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBjcmVhdGVFbmRwb2ludChyZXF1ZXN0LCBjbGllbnRPcHRpb25zLCBwYXJhbWV0ZXJzWydzZXJ2aWNlJ10sIHBhcmFtZXRlcnNbJ2FjdGlvbiddKTtcbiAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNbJ3NlcnZpY2UnXTtcbiAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNbJ2FjdGlvbiddO1xuXG5cblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5yZXF1ZXN0KCdwb3N0JywgZW5kcG9pbnRVcmwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1ldGVycyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXJzKClcbiAgICAgICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbihcImNsaWVudDo6bXVsdGktcmVxdWVzdC1uZXR3b3JrLWVycm9yXCIsIGVycm9yTWVzc2FnZSB8fCAnRXJyb3IgY29ubmVjdGluZyB0byBzZXJ2ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdC5oYW5kbGVSZXNwb25zZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgS2FsdHVyYUNsaWVudEV4Y2VwdGlvbiB8fCBlcnJvciBpbnN0YW5jZW9mIEthbHR1cmFBUElFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uKCdjbGllbnQ6Om11bHRpLXJlc3BvbnNlLXVua25vd24tZXJyb3InLCBlcnJvck1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBwYXJzZSByZXNwb25zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgIH1cbn1cbiJdfQ==